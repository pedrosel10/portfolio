import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

export function createFloor(scene) {
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

  // Inject time uniform into fragment shader
  customShader.fragmentShader = customShader.fragmentShader.replace(
    'uniform sampler2D tDiffuse;',
    `uniform sampler2D tDiffuse;
uniform float time;
uniform float waveStrength;
uniform float waveSpeed;
uniform float fadeStrength;`
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
    
    // Fade out reflection towards the bottom of the screen
    // distortedUv.y goes from 0.0 (bottom) to 1.0 (top)
    // fadeStrength is dynamically controlled: stronger on mobile, weaker on desktop
    float fade = smoothstep(0.0, fadeStrength, distortedUv.y);
    base.rgb = mix(color, base.rgb, fade);
    `
  );

  const reflector = new Reflector(floorGeometry, {
    clipBias: 0.003,
    textureWidth: 512,
    textureHeight: 512,
    color: 0xffffff, // White tint to blend with background
    shader: customShader
  });
  
  reflector.rotation.x = -Math.PI / 2;
  reflector.position.y = -1.5; // Just below the cylinder
  scene.add(reflector);
  return reflector;
}
