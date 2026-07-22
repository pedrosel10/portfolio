import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

export function createFloor(scene, isMobile = false) {
  const floorGeometry = new THREE.PlaneGeometry(50, 50);

  // Clone the default shader to inject water distortion
  const customShader = {
    name: 'WaterReflectorShader',
    uniforms: THREE.UniformsUtils.clone(Reflector.ReflectorShader.uniforms),
    vertexShader: Reflector.ReflectorShader.vertexShader,
    fragmentShader: Reflector.ReflectorShader.fragmentShader
  };

  // Add our custom uniforms
  customShader.uniforms.time = { value: 0 };
  customShader.uniforms.waveStrength = { value: 0.015 };
  customShader.uniforms.waveSpeed = { value: 1.5 };
  customShader.uniforms.fadeStrength = { value: 0.05 };
  customShader.uniforms.fadeContrast = { value: 1.0 };
  customShader.uniforms.globalOpacity = { value: 0.0 };

  // Inject time uniform into fragment shader
  customShader.fragmentShader = customShader.fragmentShader.replace(
    'uniform sampler2D tDiffuse;',
    `uniform sampler2D tDiffuse;
varying vec2 vLocalUv;
uniform float time;
uniform float waveStrength;
uniform float waveSpeed;
uniform float fadeStrength;
uniform float fadeContrast;
uniform float globalOpacity;`
  );

  // Replace texture lookup with distorted UVs
  customShader.fragmentShader = customShader.fragmentShader.replace(
    'vec4 base = texture2DProj( tDiffuse, vUv );',
    `
    vec2 distortedUv = vUv.xy / vUv.w;
    
    // Simple procedural water distortion using sine waves
    float distortionX = sin(distortedUv.y * 30.0 + time * waveSpeed) * waveStrength;
    float distortionY = cos(distortedUv.x * 30.0 + time * waveSpeed) * waveStrength;
    
    distortedUv.x += distortionX;
    distortedUv.y += distortionY;
    
    vec4 base = texture2D( tDiffuse, distortedUv );
    
    // Calculate fade distance and apply contrast
    float fade = smoothstep(0.0, fadeStrength, distortedUv.y);
    fade = pow(fade, fadeContrast);
    `
  );

  // Apply the fade AFTER the color overlay to avoid darkening the edge
  // And also fade out the edges of the Plane Geometry using vLocalUv
  customShader.fragmentShader = customShader.fragmentShader.replace(
    'gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );',
    `
    // Removendo o blendOverlay para que a cor original do fundo não seja distorcida
    vec3 tintedReflection = base.rgb;
    vec3 opReflection = mix(color, tintedReflection, globalOpacity);
    vec3 finalReflection = mix(color, opReflection, fade);
    
    // Smooth out all outer edges of the 50x50 plane so it blends perfectly into the background
    float edgeDistX = abs(vLocalUv.x - 0.5) * 2.0;
    float edgeDistY = abs(vLocalUv.y - 0.5) * 2.0;
    float edgeDist = max(edgeDistX, edgeDistY);
    // Começa a suavizar desde o centro (0.2) até a borda (1.0) para um degradê 200% mais longo
    float edgeFade = smoothstep(0.2, 1.0, edgeDist);
    
    gl_FragColor = vec4( mix(finalReflection, color, edgeFade), 1.0 );
    `
  );

  // Pass local UV from vertex shader
  customShader.vertexShader = customShader.vertexShader.replace(
    'varying vec4 vUv;',
    'varying vec4 vUv;\nvarying vec2 vLocalUv;'
  ).replace(
    'void main() {',
    'void main() {\n\tvLocalUv = uv;'
  );

  // Lower resolution on mobile to save GPU bandwidth
  const reflectorRes = isMobile ? 256 : 512;

  const reflector = new Reflector(floorGeometry, {
    clipBias: 0.003,
    textureWidth: reflectorRes,
    textureHeight: reflectorRes,
    color: 0xffffff, // White tint to blend with background
    shader: customShader
  });

  reflector.rotation.x = -Math.PI / 2;
  reflector.position.y = -1.5; // Just below the cylinder
  scene.add(reflector);
  return reflector;
}
