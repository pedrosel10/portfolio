import * as THREE from 'three';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createScreens, screensGroup, toggleFold, updateScreens, panelsDataObj, frontTextMeshes } from './screens.js';
import { galleryScene, galleryCamera } from './gallery3d.js';
import { createFloor } from './floor.js';
import { initScroll } from './scroll.js';
import { initMouse } from './mouse.js';
import GUI from 'lil-gui';
import { config } from './config.js';
import gsap from 'gsap';

window.activeScene = 'main';

// --- Scene Setup ---
const appContainer = document.getElementById('app');

const scene = new THREE.Scene();
// --- Camera & Fog Setup ---
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);

export const cameraSettings = { baseZ: 6.1 };
const fogSettings = { baseNear: 8.9, baseFar: 17.4 };

// Background is transparent to show the HTML text behind it
// Fog can help fade the reflection
scene.fog = new THREE.Fog('#ffffff', fogSettings.baseNear, fogSettings.baseFar);
const fogColorObj = { color: '#ffffff' };

let reflector = null; // Declare here to avoid Temporal Dead Zone (TDZ)

function updateCameraZ() {
  const aspect = window.innerWidth / window.innerHeight;
  let targetZ = cameraSettings.baseZ;
  
  if (aspect < 1.0) {
    // Mobile/Portrait: move camera back to fit width + 20% extra margin
    targetZ = (cameraSettings.baseZ / aspect) * 1.2;
    if (reflector && reflector.material.uniforms.fadeStrength) {
      reflector.material.uniforms.fadeStrength.value = 0.5;
    }
  } else {
    // Landscape
    if (reflector && reflector.material.uniforms.fadeStrength) {
      reflector.material.uniforms.fadeStrength.value = 0.05;
    }
  }
  
  const zDiff = targetZ - cameraSettings.baseZ;
  camera.position.z = targetZ;
  
  // Prevent fog from swallowing the scene by pushing it back by the same amount
  if (scene.fog) {
    scene.fog.near = fogSettings.baseNear + zDiff;
    scene.fog.far = fogSettings.baseFar + zDiff;
  }
}
updateCameraZ(); // Initial call
scene.add(camera);

// --- Renderer Setup ---
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // optimize pixel ratio
renderer.toneMapping = THREE.NoToneMapping;
scene.environmentIntensity = 1.2; // Aumentado para dar mais brilho ao HDRI sem acinzentar o chão
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.domElement.style.touchAction = 'none'; // Prevent browser scroll when dragging canvas
// Use a clean clear color with alpha=0. 
// We use 0x000000 to prevent WebGL premultiplied alpha from washing out the CSS background text
renderer.setClearColor(0x000000, 0); 
appContainer.appendChild(renderer.domElement);

// --- Gallery Postprocessing (Fisheye + Chromatic Aberration) ---
const galleryComposer = new EffectComposer(renderer);
const galleryRenderPass = new RenderPass(galleryScene, galleryCamera);
galleryComposer.addPass(galleryRenderPass);

const LensDistortionShader = {
  uniforms: {
    "tDiffuse": { value: null },
    "distortion": { value: 0.15 }, // Fisheye strength
    "rgbShift": { value: 0.01 } // Chromatic aberration strength
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
      vec2 p = vUv - 0.5;
      float r2 = p.x * p.x + p.y * p.y;
      
      // Pre-scale p para que a distorção não ultrapasse as bordas da textura
      // O raio ao quadrado máximo é 0.5 (nos cantos). 
      float maxF = 1.0 + 0.5 * distortion;
      p = p / maxF;
      
      float f = 1.0 + r2 * distortion;
      vec2 uv = p * f + 0.5;
      
      vec2 rUv = p * (f + rgbShift * r2) + 0.5;
      vec2 bUv = p * (f - rgbShift * r2) + 0.5;
      
      float r = texture2D(tDiffuse, rUv).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, bUv).b;
      
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `
};

const lensPass = new ShaderPass(LensDistortionShader);
galleryComposer.addPass(lensPass);

const outputPass = new OutputPass();
galleryComposer.addPass(outputPass);

let hdriEnvMap = null;
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

new EXRLoader().load('./142_hdrmaps_com_free_1K.exr', (texture) => {
  hdriEnvMap = pmremGenerator.fromEquirectangular(texture).texture;
  if (actions.useHDRI) {
    scene.environment = hdriEnvMap;
  }
  texture.dispose();
});

// --- Lighting ---
// Ambient light
const ambientColorObj = { color: 0xffffff };
const ambientLight = new THREE.AmbientLight(ambientColorObj.color, 10.8); // Intensidade definida no JSON
scene.add(ambientLight);

// Directional light for subtle shadows and highlights
const directionalColorObj = { color: 0xffffff };
const directionalLight = new THREE.DirectionalLight(directionalColorObj.color, 0); // Intensidade 0 conforme JSON fornecido
directionalLight.position.set(7.3, 1.2, 4.6);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 512;
directionalLight.shadow.mapSize.height = 512;
scene.add(directionalLight);

// --- Objects ---

// Screens (Carousel)
createScreens(scene);

// Reflective Floor
reflector = createFloor(scene);
const floorColorObj = { color: 0xffffff };
updateCameraZ(); // Update dynamic uniforms (e.g. fadeStrength) on load

// --- Interactions ---
initScroll();
initMouse(scene, camera, screensGroup);

document.getElementById('toggle-fold').addEventListener('click', () => {
  toggleFold();
});

// --- GUI Setup ---
const gui = new GUI({ title: 'Configurações do Ambiente' });

const actions = {
  useHDRI: true,
  copySettings: () => {
    const settings = {
      config: config, // Includes theme, physics, animation speeds
      camera: { z: camera.position.z },
      ambient: { color: ambientColorObj.color, intensity: ambientLight.intensity },
      directional: { 
        color: directionalColorObj.color, 
        intensity: directionalLight.intensity, 
        x: directionalLight.position.x, 
        y: directionalLight.position.y, 
        z: directionalLight.position.z 
      },
      fog: { color: fogColorObj.color, near: scene.fog.near, far: scene.fog.far },
      floor: { color: floorColorObj.color }
    };
    
    // Converte de numero (ex: 16777215) para hex color string (ex: #ffffff) pra facilitar leitura
    const toHex = (num) => {
      if (typeof num === 'string') return num;
      return '#' + num.toString(16).padStart(6, '0');
    };
    
    settings.ambient.color = toHex(settings.ambient.color);
    settings.directional.color = toHex(settings.directional.color);
    settings.fog.color = toHex(settings.fog.color);
    settings.floor.color = toHex(settings.floor.color);

    const jsonStr = JSON.stringify(settings, null, 2);
    navigator.clipboard.writeText(jsonStr)
      .then(() => alert("Configurações copiadas!\nAgora é só colar no chat."))
      .catch(err => alert("Erro ao copiar. Olhe o console."));
  }
};

gui.add(actions, 'copySettings').name('💾 Copiar Configurações');

// Theme settings
const themeFolder = gui.addFolder('Cores do Site');
themeFolder.addColor(config, 'bgColor').name('Fundo do Site').onChange(c => document.body.style.backgroundColor = c);
themeFolder.addColor(config, 'textColor').name('Cor do Texto').onChange(c => {
  document.body.style.color = c;
  update3DText();
});

// Animation & Scroll settings
const animFolder = gui.addFolder('Animação e Scroll');
animFolder.add(config, 'foldDuration', 0.5, 5.0, 0.1).name('Vel. de Abertura');
animFolder.add(config, 'scrollSensitivity', 0.001, 0.01, 0.001).name('Vel. Scroll Cilindro');
animFolder.add(config, 'flatScrollSensitivity', 0.001, 0.03, 0.001).name('Vel. Scroll Panorama');

// Background Text settings (3D Text via ShaderMaterial with Ripple Effect)
let textMesh, textCanvas, textCtx, textTexture;

const textUniforms = {
  tDiffuse: { value: null },
  uOpacity: { value: config.bgTextOpacity },
  uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  uMouseVelocity: { value: new THREE.Vector2(0, 0) },
  uHover: { value: 0 },
  uTime: { value: 0 },
  uWaveStrength: { value: config.textWaveStrength },
  uWaveRadius: { value: config.textWaveRadius },
  uVelocitySmudge: { value: config.textVelocitySmudge },
  uAspect: { value: 1.0 }
};

const textVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const textFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float uOpacity;
  uniform vec2 uMouse;
  uniform vec2 uMouseVelocity;
  uniform float uHover;
  uniform float uTime;
  uniform float uWaveStrength;
  uniform float uWaveRadius;
  uniform float uVelocitySmudge;
  uniform float uAspect;
  
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    
    // Correct UV for aspect ratio so the distortion is perfectly circular
    vec2 aspectUv = uv;
    aspectUv.x *= uAspect;
    vec2 aspectMouse = uMouse;
    aspectMouse.x *= uAspect;
    
    float dist = distance(aspectUv, aspectMouse);
    float falloff = smoothstep(uWaveRadius, 0.0, dist);
    
    vec2 dir = normalize(uv - uMouse);
    
    // Add velocity-based smudging/distortion
    uv -= uMouseVelocity * falloff * uVelocitySmudge * uHover;
    
    // Keep a subtle ripple (lower frequency)
    float wave = sin(dist * 20.0 - uTime * 5.0) * uWaveStrength;
    uv += dir * wave * falloff * uHover;
    
    vec4 texColor = texture2D(tDiffuse, uv);
    gl_FragColor = vec4(texColor.rgb, texColor.a * uOpacity);
  }
`;

const update3DText = () => {
  if (!textCanvas) {
    textCanvas = document.createElement('canvas');
    textCtx = textCanvas.getContext('2d');
    textTexture = new THREE.CanvasTexture(textCanvas);
    textTexture.minFilter = THREE.LinearFilter;
    textTexture.magFilter = THREE.LinearFilter;
    textUniforms.tDiffuse.value = textTexture;
    
    const geo = new THREE.PlaneGeometry(1, 1);
    const mat = new THREE.ShaderMaterial({
      uniforms: textUniforms,
      vertexShader: textVertexShader,
      fragmentShader: textFragmentShader,
      transparent: true,
      depthWrite: false
    });
    textMesh = new THREE.Mesh(geo, mat);
    scene.add(textMesh);
  }

  const fontSize = 300; // High res for crispness
  textCtx.font = `900 ${fontSize}px 'Playfair Display', serif`;
  // letterSpacing needs canvas API support (modern browsers)
  textCtx.letterSpacing = `${config.bgTextSpacing}em`;
  
  const metrics = textCtx.measureText(config.bgTextContent);
  const textWidth = metrics.width || 100;
  const textHeight = fontSize * 1.5; 
  
  textCanvas.width = textWidth;
  textCanvas.height = textHeight;
  
  textCtx.font = `900 ${fontSize}px 'Playfair Display', serif`;
  textCtx.letterSpacing = `${config.bgTextSpacing}em`;
  textCtx.fillStyle = config.textColor;
  textCtx.textAlign = 'center';
  textCtx.textBaseline = 'middle';
  
  textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
  textCtx.fillText(config.bgTextContent, textCanvas.width / 2, textCanvas.height / 2);
  
  textTexture.needsUpdate = true;
  
  const aspect = textCanvas.width / textCanvas.height;
  const screenAspect = window.innerWidth / window.innerHeight;
  
  let physicalWidth = config.bgTextSize; 
  if (screenAspect < 1.0) {
    // Shrink text proportionally on mobile to prevent clipping due to perspective depth difference
    physicalWidth = config.bgTextSize * screenAspect;
  }
  
  textMesh.scale.set(physicalWidth, physicalWidth / aspect, 1);
  
  textUniforms.uAspect.value = aspect;
  textUniforms.uOpacity.value = config.bgTextOpacity;
  
  // Mapping % to 3D space coordinates
  textMesh.position.x = (config.bgTextX - 50) * 0.5; 
  textMesh.position.y = -(config.bgTextY - 50) * 0.2; 
  textMesh.position.z = config.bgTextZ;
};

// Initialize the text immediately
// Wait slightly for fonts to load, or just render once and re-render later if needed
document.fonts.ready.then(() => update3DText());
update3DText();

const textFolder = gui.addFolder('Estilização do Texto (Fundo 3D)');
textFolder.add(config, 'bgTextContent').name('Texto').onChange(update3DText);
textFolder.add(config, 'bgTextSize', 5, 50, 0.1).name('Tamanho').onChange(update3DText);
textFolder.add(config, 'bgTextOpacity', 0, 1, 0.01).name('Opacidade').onChange(update3DText);
textFolder.add(config, 'bgTextSpacing', -0.1, 0.5, 0.01).name('Espaçamento (em)').onChange(update3DText);
textFolder.add(config, 'bgTextX', 0, 100, 1).name('Posição X (%)').onChange(update3DText);
textFolder.add(config, 'bgTextY', 0, 100, 1).name('Posição Y (%)').onChange(update3DText);
textFolder.add(config, 'bgTextZ', -30, 10, 0.1).name('Profundidade (Z)').onChange(update3DText);
textFolder.add(config, 'textWaveRadius', 0, 1, 0.01).name('Raio da Onda').onChange(v => textUniforms.uWaveRadius.value = v);
textFolder.add(config, 'textWaveStrength', 0, 0.05, 0.001).name('Força da Onda').onChange(v => textUniforms.uWaveStrength.value = v);
textFolder.add(config, 'textVelocitySmudge', 0, 10, 0.1).name('Arrasto do Mouse').onChange(v => textUniforms.uVelocitySmudge.value = v);
textFolder.add(config, 'textMouseLerp', 0.01, 1.0, 0.01).name('Velocidade do Rastro');

// Face Materials settings
const applyMaterialParams = () => {
  panelsDataObj.forEach((p, i) => {
    const mat = p.mesh.material;
    if (i === 0) mat.color.set(config.faceColor1);
    if (i === 1) mat.color.set(config.faceColor2);
    if (i === 2) mat.color.set(config.faceColor3);
    mat.transmission = config.transmission;
    mat.opacity = config.opacity;
    mat.metalness = config.metalness;
    mat.roughness = config.roughness;
    mat.ior = config.ior;
    mat.thickness = config.thickness;
  });
};

const facesFolder = gui.addFolder('Visual das Telas de Vidro');
facesFolder.addColor(config, 'faceColor1').name('Cor Tela 1').onChange(applyMaterialParams);
facesFolder.addColor(config, 'faceColor2').name('Cor Tela 2').onChange(applyMaterialParams);
facesFolder.addColor(config, 'faceColor3').name('Cor Tela 3').onChange(applyMaterialParams);
facesFolder.add(config, 'transmission', 0, 1, 0.01).name('Transmissão (Vidro)').onChange(applyMaterialParams);
facesFolder.add(config, 'opacity', 0, 1, 0.01).name('Opacidade Geral').onChange(applyMaterialParams);
facesFolder.add(config, 'metalness', 0, 1, 0.01).name('Metalizado').onChange(applyMaterialParams);
facesFolder.add(config, 'roughness', 0, 1, 0.01).name('Rugosidade (Fosco)').onChange(applyMaterialParams);
facesFolder.add(config, 'ior', 1, 3, 0.01).name('Índice de Refração').onChange(applyMaterialParams);
facesFolder.add(config, 'thickness', 0, 2, 0.01).name('Espessura').onChange(applyMaterialParams);

// Front 3D Text settings
const applyFrontTextParams = () => {
  frontTextMeshes.forEach(mesh => {
    mesh.material.color.set(config.frontTextColor);
    mesh.material.emissive.set(config.frontTextEmissive);
    mesh.material.emissiveIntensity = config.frontTextEmissiveIntensity;
    mesh.material.transmission = config.frontTextTransmission;
    mesh.material.opacity = config.frontTextOpacity;
    mesh.material.metalness = config.frontTextMetalness;
    mesh.material.roughness = config.frontTextRoughness;
    mesh.material.ior = config.frontTextIor;
    mesh.material.thickness = config.frontTextThickness;
  });
};

const applyFrontTextScale = () => {
  frontTextMeshes.forEach(mesh => {
    mesh.scale.set(config.frontTextScaleX, config.frontTextScaleY, config.frontTextScaleZ);
  });
};

const frontTextFolder = gui.addFolder('Visual do Texto 3D (Telas)');
frontTextFolder.add(config, 'frontTextScaleX', 0.1, 3, 0.01).name('Largura').onChange(applyFrontTextScale);
frontTextFolder.add(config, 'frontTextScaleY', 0.1, 3, 0.01).name('Altura').onChange(applyFrontTextScale);
frontTextFolder.add(config, 'frontTextScaleZ', 0.1, 3, 0.01).name('Profundidade').onChange(applyFrontTextScale);
frontTextFolder.addColor(config, 'frontTextColor').name('Cor').onChange(applyFrontTextParams);
frontTextFolder.addColor(config, 'frontTextEmissive').name('Luz Própria (Emissive)').onChange(applyFrontTextParams);
frontTextFolder.add(config, 'frontTextEmissiveIntensity', 0, 2, 0.01).name('Intensidade da Luz').onChange(applyFrontTextParams);
frontTextFolder.add(config, 'frontTextTransmission', 0, 1, 0.01).name('Transmissão (Vidro)').onChange(applyFrontTextParams);
frontTextFolder.add(config, 'frontTextOpacity', 0, 1, 0.01).name('Opacidade').onChange(applyFrontTextParams);
frontTextFolder.add(config, 'frontTextMetalness', 0, 1, 0.01).name('Metalizado').onChange(applyFrontTextParams);
frontTextFolder.add(config, 'frontTextRoughness', 0, 1, 0.01).name('Rugosidade (Fosco)').onChange(applyFrontTextParams);
frontTextFolder.add(config, 'frontTextIor', 1, 3, 0.01).name('Índice de Refração').onChange(applyFrontTextParams);
frontTextFolder.add(config, 'frontTextThickness', 0, 2, 0.01).name('Espessura').onChange(applyFrontTextParams);

// Shatter Physics settings
const shatterFolder = gui.addFolder('Física do Vidro');
shatterFolder.add(config, 'shatterPieces', 10, 500, 10).name('Qtd. de Cacos');
shatterFolder.add(config, 'shatterForce', 0.1, 10.0, 0.1).name('Força da Explosão');
shatterFolder.add(config, 'shatterGravity', 0.0, 10.0, 0.1).name('Força da Gravidade');
shatterFolder.add(config, 'shatterDuration', 0.1, 5.0, 0.1).name('Duração da Queda');

// Camera settings
const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(cameraSettings, 'baseZ', 2, 20, 0.1).name('Zoom (Z)').onChange(updateCameraZ);

// Lighting settings
const lightFolder = gui.addFolder('Luzes');
lightFolder.add(scene, 'environmentIntensity', 0, 5, 0.1).name('Brilho do HDRI');
lightFolder.add(actions, 'useHDRI').name('Ativar HDRI (Reflexos)').onChange((val) => {
  scene.environment = val ? hdriEnvMap : null;
});
lightFolder.addColor(ambientColorObj, 'color').name('Cor Ambiente').onChange(c => ambientLight.color.setHex(c));
lightFolder.add(ambientLight, 'intensity', 0, 20, 0.1).name('Intensidade Ambiente');

lightFolder.addColor(directionalColorObj, 'color').name('Cor Direcional').onChange(c => directionalLight.color.setHex(c));
lightFolder.add(directionalLight, 'intensity', 0, 10, 0.1).name('Intens. Direcional');
lightFolder.add(directionalLight.position, 'x', -10, 10, 0.1).name('Posição X');
lightFolder.add(directionalLight.position, 'y', -10, 20, 0.1).name('Posição Y');
lightFolder.add(directionalLight.position, 'z', -10, 10, 0.1).name('Posição Z');

// Fog settings
const fogFolder = gui.addFolder('Névoa (Fog)');
fogFolder.addColor(fogColorObj, 'color').name('Cor da Névoa').onChange(c => scene.fog.color.setHex(c));
fogFolder.add(fogSettings, 'baseNear', 1, 30, 0.1).name('Início').onChange(updateCameraZ);
fogFolder.add(fogSettings, 'baseFar', 5, 80, 0.1).name('Fim').onChange(updateCameraZ);

// Floor settings
const floorFolder = gui.addFolder('Piso / Reflexo (Água)');
floorFolder.addColor(floorColorObj, 'color').name('Cor do Reflexo').onChange(c => reflector.material.uniforms.color.value.setHex(c));
floorFolder.add(config, 'waveStrength', 0, 0.1, 0.001).name('Força da Onda');
floorFolder.add(config, 'waveSpeed', 0, 5, 0.1).name('Velocidade da Onda');

// --- Resize Handler ---
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  renderer.setSize(width, height);
  galleryComposer.setSize(width, height);
  updateCameraZ();
  update3DText(); // Ensure text scales dynamically on resize
  
  // Re-render immediately on resize
  renderer.render(scene, camera);
});

// --- Render Loop ---
const clock = new THREE.Clock();
const currentMouse = new THREE.Vector2(0.5, 0.5);
const targetMouse = new THREE.Vector2(0.5, 0.5);

window.addEventListener('mousemove', (e) => {
  targetMouse.x = (e.clientX / window.innerWidth);
  targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
});

window.addEventListener('enterProjectGallery', (e) => {
  gsap.to(camera.position, {
    z: 1,
    duration: 1.5,
    ease: 'power3.inOut'
  });
  
  const transitionLayer = document.getElementById('transition-layer');
  gsap.to(transitionLayer, { 
    opacity: 1, 
    duration: 1, 
    delay: 0.5,
    onComplete: () => {
      window.activeScene = 'gallery';
      window.dispatchEvent(new CustomEvent('enterGalleryScene'));
      gsap.to(transitionLayer, { opacity: 0, duration: 1 });
    }
  });
});

window.addEventListener('exitGalleryScene', (e) => {
  const transitionLayer = document.getElementById('transition-layer');
  gsap.to(transitionLayer, { 
    opacity: 1, 
    duration: 1,
    onComplete: () => {
      window.activeScene = 'main';
      gsap.to(camera.position, {
        z: cameraSettings.baseZ,
        duration: 1.5,
        ease: 'power3.out'
      });
      gsap.to(transitionLayer, { opacity: 0, duration: 1 });
    }
  });
});

function animate() {
  requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();
  const delta = clock.getDelta();

  // Update screens
  if (window.activeScene === 'main') {
    updateScreens();
    
    // Animate floor water
    if (reflector && reflector.material.uniforms) {
      reflector.material.uniforms.time.value += delta;
      reflector.material.uniforms.waveStrength.value = config.waveStrength;
      reflector.material.uniforms.waveSpeed.value = config.waveSpeed;
    }
  }

  // update text uniforms
  textUniforms.uTime.value = elapsedTime * config.textWaveSpeed;

  // ease mouse
  currentMouse.lerp(targetMouse, config.textMouseLerp);
  textUniforms.uMouse.value.copy(currentMouse);

  if (window.activeScene === 'main') {
    renderer.render(scene, camera);
  } else {
    galleryComposer.render();
  }
}

animate();

export { scene, camera, renderer };
