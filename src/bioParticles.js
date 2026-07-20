import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import gsap from 'gsap';

// Custom Fisheye + Chromatic Aberration Shader
const LensDistortionShader = {
  uniforms: {
    "tDiffuse": { value: null },
    "distortion": { value: 0.15 }, 
    "rgbShift": { value: 0.015 } 
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float distortion;
    uniform float rgbShift;
    varying vec2 vUv;

    void main() {
      vec2 p = vUv;
      // Coordinates from -1 to 1
      vec2 c = p * 2.0 - 1.0;
      float d = dot(c, c);
      vec2 uvDistorted = p + c * (d * distortion);
      
      // Calculate rgb shift based on distance from center
      vec2 offset = c * d * rgbShift;
      
      vec4 cr = texture2D(tDiffuse, clamp(uvDistorted + offset, 0.0, 1.0));
      vec4 cga = texture2D(tDiffuse, clamp(uvDistorted, 0.0, 1.0));
      vec4 cb = texture2D(tDiffuse, clamp(uvDistorted - offset, 0.0, 1.0));
      
      // vignette
      float dist = distance(vUv, vec2(0.5));
      float vignette = smoothstep(0.8, 0.2, dist);

      gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a) * vignette;
    }
  `
};

let scene, camera, renderer, composer;
let particlesGroup;
let isRunning = false;
let isInitialized = false;
let animationFrameId;
let scrollTarget = 0;
let currentScroll = 0;

const WORDS = [
  'BRANDING', 'WEB DESIGN', 'MOTION', '3D', 
  'CREATIVE DIRECTION', 'STRATEGY', 'EXPERIENCES', 
  'IDENTITY', 'PEDRO SELESTRIM'
];

function createTextTexture(text) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const fontSize = 48;
  ctx.font = `600 ${fontSize}px 'CooperLtBT', serif`;
  
  // Measure text
  const textWidth = ctx.measureText(text).width;
  canvas.width = textWidth + 20;
  canvas.height = fontSize + 20;
  
  // Need to set font again after resize
  ctx.font = `600 ${fontSize}px 'CooperLtBT', serif`;
  ctx.fillStyle = '#888888';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Text glow/shadow
  ctx.shadowColor = 'rgba(248, 242, 235, 0.2)';
  ctx.shadowBlur = 10;
  
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

export function initBioParticles() {
  if (isInitialized) return;
  const canvas = document.getElementById('bio-fold-canvas');
  if (!canvas) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color('#0d0d0d');
  // Fog for depth fading
  scene.fog = new THREE.FogExp2('#0d0d0d', 0.002);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 400;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Postprocessing
  composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const fisheyePass = new ShaderPass(LensDistortionShader);
  composer.addPass(fisheyePass);

  // Particles Group
  particlesGroup = new THREE.Group();
  scene.add(particlesGroup);

  // Create text textures cache
  const textures = WORDS.map(word => createTextTexture(word));

  const particleCount = 120;
  for (let i = 0; i < particleCount; i++) {
    const randomTexture = textures[Math.floor(Math.random() * textures.length)];
    const material = new THREE.SpriteMaterial({ 
      map: randomTexture, 
      transparent: true,
      opacity: Math.random() * 0.5 + 0.1,
      blending: THREE.AdditiveBlending
    });
    
    const sprite = new THREE.Sprite(material);
    
    // Random spherical distribution
    const radius = 150 + Math.random() * 500;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    sprite.position.x = radius * Math.sin(phi) * Math.cos(theta);
    sprite.position.y = radius * Math.sin(phi) * Math.sin(theta);
    sprite.position.z = radius * Math.cos(phi);
    
    // Scale varies by depth visually, but let's give random base scales
    const baseScale = Math.random() * 1.5 + 0.5;
    const aspect = randomTexture.image.width / randomTexture.image.height;
    sprite.scale.set(10 * aspect * baseScale, 10 * baseScale, 1);
    
    // Save initial position for floating animation
    sprite.userData = {
      baseY: sprite.position.y,
      speed: Math.random() * 0.01 + 0.005,
      offset: Math.random() * Math.PI * 2
    };

    particlesGroup.add(sprite);
  }

  // Scroll Interaction on the whole bio fold overlay
  const overlay = document.getElementById('bio-fold-overlay');
  
  const handleScroll = (e) => {
    if (!isRunning) return;
    
    // For mouse wheel
    if (e.deltaY !== undefined) {
      scrollTarget += e.deltaY * 0.0015;
    }
  };
  
  let touchStartY = 0;
  const handleTouchStart = (e) => {
    if (!isRunning) return;
    touchStartY = e.touches[0].clientY;
  };
  
  const handleTouchMove = (e) => {
    if (!isRunning) return;
    const touchY = e.touches[0].clientY;
    const deltaY = touchStartY - touchY;
    scrollTarget += deltaY * 0.005;
    touchStartY = touchY;
  };

  overlay.addEventListener('wheel', handleScroll, { passive: true });
  overlay.addEventListener('touchstart', handleTouchStart, { passive: true });
  overlay.addEventListener('touchmove', handleTouchMove, { passive: true });

  window.addEventListener('resize', onWindowResize);
  isInitialized = true;
}

function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}

export function startBioParticles() {
  if (!isInitialized) initBioParticles();
  if (isRunning) return;
  isRunning = true;
  
  // Initial animation
  gsap.fromTo(particlesGroup.scale, 
    { x: 0.1, y: 0.1, z: 0.1 }, 
    { x: 1, y: 1, z: 1, duration: 2.5, ease: "power3.out" }
  );
  
  scrollTarget = 0;
  currentScroll = 0;
  particlesGroup.rotation.y = 0;
  particlesGroup.rotation.x = 0;

  render();
}

export function stopBioParticles() {
  isRunning = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
}

function render() {
  if (!isRunning) return;
  animationFrameId = requestAnimationFrame(render);

  // Smooth scroll interpolation
  currentScroll += (scrollTarget - currentScroll) * 0.05;
  
  // Rotate atmosphere
  particlesGroup.rotation.y = currentScroll;
  particlesGroup.rotation.x = currentScroll * 0.3; // subtle x rotation too
  
  // Floating animation for individual particles
  const time = Date.now() * 0.001;
  particlesGroup.children.forEach(sprite => {
    sprite.position.y = sprite.userData.baseY + Math.sin(time * sprite.userData.speed * 100 + sprite.userData.offset) * 10;
  });

  // Auto slow rotation even without scroll
  particlesGroup.rotation.y += 0.0005;
  particlesGroup.rotation.x += 0.0002;

  // Render with postprocessing
  composer.render();
}
