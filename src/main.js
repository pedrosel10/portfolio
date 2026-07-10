import * as THREE from 'three';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createScreens, screensGroup, toggleFold, updateScreens, panelsDataObj, frontTextMeshes, isFolded, updateFrontTextOffset } from './screens.js';
import { galleryScene, galleryCamera } from './gallery3d.js';
import { createFloor } from './floor.js';
import { initScroll } from './scroll.js';
import { initMouse } from './mouse.js';
import GUI from 'lil-gui';
import { config } from './config.js';
import gsap from 'gsap';

window.activeScene = 'main';

let introComplete = false;
let isIntroLocked = false;
const introState = { fogFade: 1 };

function setCameraToIntroState() {
  introComplete = false;
  introState.fogFade = 0;
  if (typeof updateBgAspect === 'function') updateBgAspect(); // Esconde o fundo imediatamente



  const aspect = window.innerWidth / window.innerHeight;
  let targetZ = cameraSettings.baseZ;
  if (aspect < 1.0) {
    targetZ = (cameraSettings.baseZ / aspect) * 1.2;
  }

  // Para mobile, calcula a altura Y exata para que o cilindro (largura ~6) ocupe ~60vw da tela
  // Isso evita que ele fique gigante e vaze da tela
  const mobileIntroY = 12.1 / aspect;

  camera.position.set(
    0,
    aspect < 1.0 ? mobileIntroY : config.introCamYDesktop,
    aspect < 1.0 ? config.introCamZMobile : config.introCamZDesktop // Restaura para -3 (centro real do 3D)
  );

  const rotXDeg = aspect < 1.0 ? -90 : config.introCamRotXDesktop;
  camera.rotation.set(
    THREE.MathUtils.degToRad(rotXDeg),
    0,
    0
  );

  if (scene.fog) {
    const dist = camera.position.length();
    const extraDist = (1 - introState.fogFade) * 5;
    scene.fog.near = dist + (fogSettings.baseNear - cameraSettings.baseZ) + extraDist;
    scene.fog.far = dist + (fogSettings.baseFar - cameraSettings.baseZ) + extraDist;
  }
}

const onIntroSettingChange = () => {
  if (!introComplete || isIntroLocked) {
    setCameraToIntroState();
  }
};

function playIntroAnimation() {
  isIntroLocked = false;
  introComplete = false;
  introState.fogFade = 0;
  setCameraToIntroState();

  const aspect = window.innerWidth / window.innerHeight;
  let targetZ = cameraSettings.baseZ;
  if (aspect < 1.0) {
    targetZ = (cameraSettings.baseZ / aspect) * 1.2;
  }

  gsap.to(camera.position, {
    y: 0,
    z: targetZ,
    duration: 2.5,
    ease: 'power3.inOut',
    onUpdate: () => {
      if (scene.fog) {
        const dist = camera.position.length();
        const extraDist = (1 - introState.fogFade) * 5;
        scene.fog.near = dist + (fogSettings.baseNear - cameraSettings.baseZ) + extraDist;
        scene.fog.far = dist + (fogSettings.baseFar - cameraSettings.baseZ) + extraDist;
      }
    }
  });

  gsap.to(camera.rotation, {
    x: 0,
    duration: 2.5,
    ease: 'power3.inOut',
    onComplete: () => {
      introComplete = true;

      // Fade in the background and push back the 3D fog
      gsap.to(introState, {
        fogFade: 1,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          updateBgAspect();
          if (scene.fog) {
            const dist = camera.position.length();
            const extraDist = (1 - introState.fogFade) * 5;
            scene.fog.near = dist + (fogSettings.baseNear - cameraSettings.baseZ) + extraDist;
            scene.fog.far = dist + (fogSettings.baseFar - cameraSettings.baseZ) + extraDist;
          }
          if (reflector) {
            reflector.material.uniforms.globalOpacity.value = introState.fogFade;
          }
        }
      });

      // reflector opacity is now updated in the introState onUpdate loop
      frontTextMeshes.forEach(mesh => {
        gsap.to(mesh.material, { opacity: 1, duration: 1.5, ease: 'power2.inOut' });
      });
      const logoEl = document.getElementById('top-logo');
      if (logoEl) {
        gsap.to(logoEl, { opacity: 1, duration: 1.5, ease: 'power2.inOut' });
      }
      const btnEl = document.getElementById('global-action-btn');
      if (btnEl) {
        gsap.to(btnEl, { opacity: 1, duration: 1.5, ease: 'power2.inOut' });
      }
    }
  });
}

const loadingState = { progress: 0 };
let realLoadComplete = false;

// Inicia a animação simulada indo até 99%
let loadingTween = gsap.to(loadingState, {
  progress: 0.99,
  duration: 2.5, // Garante pelo menos 2.5s de animação
  ease: "power1.inOut",
  onUpdate: updateLoadingVisuals,
  onComplete: () => {
    // Se o carregamento real já terminou, faz o 1% final
    if (realLoadComplete) {
      doFinalStep();
    }
  }
});

function updateLoadingVisuals() {
  const loadingCircle = document.getElementById('loading-circle');
  const loadingText = document.getElementById('loading-text');
  if (loadingCircle) {
    const offset = 315 - (315 * loadingState.progress);
    loadingCircle.style.strokeDashoffset = offset;
  }
  if (loadingText) {
    loadingText.innerText = Math.round(loadingState.progress * 100) + '%';
  }
}

function doFinalStep() {
  gsap.to(loadingState, {
    progress: 1,
    duration: 0.3,
    onUpdate: updateLoadingVisuals,
    onComplete: finishLoading
  });
}

function finishLoading() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen && loadingScreen.style.opacity !== '0') {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      playIntroAnimation();
    }, 800);
  } else if (!loadingScreen) {
    playIntroAnimation();
  }
}

THREE.DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
  // Ignoramos o progresso real para focar na animação suave
};

THREE.DefaultLoadingManager.onLoad = function () {
  realLoadComplete = true;
  // Se a animação simulada já tiver chegado no 99%, finaliza agora.
  // Caso contrário, ela vai chamar doFinalStep() quando chegar no 99%.
  if (!loadingTween.isActive()) {
    doFinalStep();
  }
};

// --- Scene Setup ---
const appContainer = document.getElementById('app');

const scene = new THREE.Scene();
// --- Camera & Fog Setup ---
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);

export const cameraSettings = { baseZ: 6.1 };
const fogSettings = { baseNear: 7, baseFar: 15 };

// Background is transparent to show the HTML text behind it
// Fog can help fade the reflection
scene.fog = new THREE.Fog(config.bgColor, fogSettings.baseNear, fogSettings.baseFar);
const fogColorObj = { color: config.bgColor };

let reflector = null; // Declare here to avoid Temporal Dead Zone (TDZ)

function updateCameraZ() {
  const aspect = window.innerWidth / window.innerHeight;
  let targetZ = cameraSettings.baseZ;

  if (aspect < 1.0) {
    // Mobile/Portrait: move camera back to fit width + 20% extra margin
    targetZ = (cameraSettings.baseZ / aspect) * 1.2;
    if (reflector && reflector.material.uniforms.fadeStrength) {
      reflector.material.uniforms.fadeStrength.value = config.fadeStrengthMobile;
      reflector.material.uniforms.fadeContrast.value = config.fadeContrastMobile;
    }
    updateFrontTextOffset(config.frontTextOffsetMobile);
  } else {
    // Landscape
    if (reflector && reflector.material.uniforms.fadeStrength) {
      reflector.material.uniforms.fadeStrength.value = config.fadeStrengthDesktop;
      reflector.material.uniforms.fadeContrast.value = config.fadeContrastDesktop;
    }
    updateFrontTextOffset(config.frontTextOffsetDesktop);
  }

  const zDiff = targetZ - cameraSettings.baseZ;

  // Apenas atualiza o Z direto se a intro ja terminou (ex: resize da janela)
  if (introComplete) {
    camera.position.z = targetZ;
  }

  // Prevent fog from swallowing the scene by pushing it back by the same amount
  if (scene.fog) {
    const dist = camera.position.length();
    const extraDist = (1 - introState.fogFade) * 5;
    scene.fog.near = dist + (fogSettings.baseNear - cameraSettings.baseZ) + extraDist;
    scene.fog.far = dist + (fogSettings.baseFar - cameraSettings.baseZ) + extraDist;
  }
}
updateCameraZ(); // Initial call

// Set initial intro position moved down

scene.add(camera);

// --- Renderer Setup ---
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // maximum quality
renderer.toneMapping = THREE.NoToneMapping;
scene.environmentIntensity = 1.2; // Aumentado para dar mais brilho ao HDRI sem acinzentar o chão
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.domElement.style.touchAction = 'none'; // Prevent browser scroll when dragging canvas
// Make the canvas transparent as fallback
renderer.setClearColor(0x000000, 0);
appContainer.appendChild(renderer.domElement);

// --- Background Texture with Canvas Gradient Mask ---
const bgCanvas = document.createElement('canvas');
bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;
const bgCtx = bgCanvas.getContext('2d', { alpha: false });
const bgTexture = new THREE.CanvasTexture(bgCanvas);
bgTexture.colorSpace = THREE.SRGBColorSpace;
scene.background = bgTexture;

// Unmasked texture for the floor reflection
const bgCanvasUnmasked = document.createElement('canvas');
bgCanvasUnmasked.width = window.innerWidth;
bgCanvasUnmasked.height = window.innerHeight;
const bgCtxUnmasked = bgCanvasUnmasked.getContext('2d', { alpha: false });
const bgTextureUnmasked = new THREE.CanvasTexture(bgCanvasUnmasked);
bgTextureUnmasked.colorSpace = THREE.SRGBColorSpace;

const bgReflectionSettings = { opacity: 1.0, mainGradientOpacity: 0.85 };
const bgImage = new Image();
bgImage.src = './img_fundo.webp';
bgImage.onload = () => {
  updateBgAspect();
};

// Set initial intro position before first render
setCameraToIntroState();


function updateReflectionBg(w, h, offsetX, offsetY, drawW, drawH) {
  bgCtxUnmasked.fillStyle = config.bgColor;
  bgCtxUnmasked.fillRect(0, 0, w, h);
  bgTextureUnmasked.needsUpdate = true;
}

function updateMainBg(w, h, offsetX, offsetY, drawW, drawH) {
  bgCtx.fillStyle = config.bgColor;
  bgCtx.fillRect(0, 0, w, h);
  bgTexture.needsUpdate = true;
}

function updateBgAspect() {
  if (!bgImage.complete || bgImage.naturalWidth === 0) return;

  if (bgCanvas.width !== window.innerWidth || bgCanvas.height !== window.innerHeight) {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    bgCanvasUnmasked.width = window.innerWidth;
    bgCanvasUnmasked.height = window.innerHeight;
  }

  const w = bgCanvas.width;
  const h = bgCanvas.height;
  const canvasAspect = w / h;
  const imageAspect = bgImage.naturalWidth / bgImage.naturalHeight;
  
  let drawW = w;
  let drawH = h;
  let offsetX = 0;
  let offsetY = 0;

  if (canvasAspect > imageAspect) {
    drawH = w / imageAspect;
    offsetY = (h - drawH) / 2;
  } else {
    drawW = h * imageAspect;
    offsetX = (w - drawW) / 2;
  }

  updateReflectionBg(w, h, offsetX, offsetY, drawW, drawH);
  updateMainBg(w, h, offsetX, offsetY, drawW, drawH);
}

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
let originalTexture = null;
let originalHdriData = null;
let hdriWidth = 0;
let hdriHeight = 0;

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

function applyHdriSaturation() {
  if (!originalHdriData || !originalTexture) return;
  const saturation = config.hdriSaturation;
  const data = originalTexture.image.data;
  const stride = originalHdriData.length / (hdriWidth * hdriHeight);

  for (let i = 0; i < originalHdriData.length; i += stride) {
    const r = originalHdriData[i];
    const g = originalHdriData[i + 1];
    const b = originalHdriData[i + 2];
    const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    data[i] = L + saturation * (r - L);
    data[i + 1] = L + saturation * (g - L);
    data[i + 2] = L + saturation * (b - L);
  }
  originalTexture.needsUpdate = true;

  if (hdriEnvMap) hdriEnvMap.dispose();
  hdriEnvMap = pmremGenerator.fromEquirectangular(originalTexture).texture;
  if (actions.useHDRI) {
    scene.environment = hdriEnvMap;
  }
}

new EXRLoader().load('./braustuble_alley_1k.exr', (texture) => {
  originalTexture = texture;
  hdriWidth = texture.image.width;
  hdriHeight = texture.image.height;
  originalHdriData = texture.image.data.slice();
  applyHdriSaturation();
});

// --- Lighting ---
// Ambient light
const ambientColorObj = { color: 0xebebeb };
const ambientLight = new THREE.AmbientLight(ambientColorObj.color, 4.5); // Intensidade definida no JSON
scene.add(ambientLight);

// Directional light for subtle shadows and highlights
const directionalColorObj = { color: 0xffffff };
const directionalLight = new THREE.DirectionalLight(directionalColorObj.color, 0); // Intensidade 0 conforme JSON fornecido
directionalLight.position.set(9, 1.3, 4.7);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 512;
directionalLight.shadow.mapSize.height = 512;
scene.add(directionalLight);

// --- Objects ---

// Screens (Carousel)
createScreens(scene);

// Reflective Floor
reflector = createFloor(scene);


// Hack to make the floor reflect the UNMASKED image and ignore the Fog Wall
const originalOnBeforeRender = reflector.onBeforeRender;
reflector.onBeforeRender = function (renderer, scene, camera) {
  const oldBg = scene.background;
  
  // Use the unmasked texture for the reflection
  scene.background = bgTextureUnmasked;
  
  originalOnBeforeRender.call(this, renderer, scene, camera);
  
  // Restore the masked texture for the main camera
  scene.background = oldBg;
};

const floorColorObj = { color: new THREE.Color(config.bgColor).getHex() };
reflector.material.uniforms.color.value.setHex(floorColorObj.color);
updateCameraZ(); // Update dynamic uniforms (e.g. fadeStrength) on load

// --- Interactions ---
initScroll();
initMouse(scene, camera, screensGroup);

let currentActionType = 'toggleFold';

const globalBtn = document.getElementById('global-action-btn');
if (globalBtn) {
  // Prevent events from bubbling to the window and triggering 3D raycaster clicks
  globalBtn.addEventListener('pointerdown', e => e.stopPropagation());
  globalBtn.addEventListener('pointerup', e => e.stopPropagation());

  globalBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentActionType === 'toggleFold') {
      const wasFolded = isFolded;
      toggleFold();
      // wasFolded=true → opening → show 'Fechar'; wasFolded=false → closing → show 'Abrir'
      setGlobalActionText(wasFolded ? 'Fechar' : 'Abrir');
    } else if (currentActionType === 'exitGallery') {
      window.dispatchEvent(new CustomEvent('exitGalleryScene'));
    } else if (currentActionType === 'exitProject') {
      window.dispatchEvent(new CustomEvent('exitProjectGallery'));
    }
  });
}

// --- Icon Morphing System (GSAP) ---
// Each path = 20 numbers: M(x,y) C(x1,y1, x2,y2, x,y) C(x1,y1, x2,y2, x,y) C(x1,y1, x2,y2, x,y)
const iconCoords = {
  'Abrir': [
    [22.37, 103.70, 22.37, 103.70, 41.59, 75.77, 41.59, 75.77, 41.59, 75.77, 60.82, 47.83, 60.82, 47.83, 60.82, 47.83, 80.04, 19.90, 80.04, 19.90],
    [31.21, 122.03, 31.21, 122.03, 65.30, 124.37, 65.30, 124.37, 65.30, 124.37, 99.38, 126.72, 99.38, 126.72, 99.38, 126.72, 133.47, 129.06, 133.47, 129.06],
    [100.51, 21.48, 100.51, 21.48, 115.12, 52.02, 115.12, 52.02, 115.12, 52.02, 129.72, 82.56, 129.72, 82.56, 129.72, 82.56, 144.33, 113.10, 144.33, 113.10]
  ],
  'Fechar': [
    [0.5, 32, 0.5, 32, 40.57, 32, 40.57, 32, 40.57, 32, 80.64, 32, 80.64, 32, 80.64, 32, 120.71, 32, 120.71, 32],
    [50.25, 138.91, 50.25, 138.91, 90.32, 138.91, 90.32, 138.91, 90.32, 138.91, 130.40, 138.91, 130.40, 138.91, 130.40, 138.91, 170.47, 138.91, 170.47, 138.91],
    [25.37, 85.46, 25.37, 85.46, 65.44, 85.46, 65.44, 85.46, 65.44, 85.46, 105.51, 85.46, 105.51, 85.46, 105.51, 85.46, 145.59, 85.46, 145.59, 85.46]
  ],
  'Voltar ao Grid': [
    [25, 31.5, 25, 31.5, 25, 71.57, 25, 71.57, 25, 71.57, 25, 111.64, 25, 111.64, 25, 111.64, 25, 151.72, 25, 151.72],
    [145.21, 31.5, 145.21, 31.5, 145.21, 71.57, 145.21, 71.57, 145.21, 71.57, 145.21, 111.64, 145.21, 111.64, 145.21, 111.64, 145.21, 151.72, 145.21, 151.72],
    [25, 31.5, 25, 31.5, 65.07, 31.5, 65.07, 31.5, 65.07, 31.5, 105.14, 31.5, 105.14, 31.5, 105.14, 31.5, 145.21, 31.5, 145.21, 31.5]
  ],
  'Voltar': [
    [138.9, 17, 138.9, 17, 138.9, 62.48, 138.9, 62.48, 138.9, 62.48, 138.9, 107.96, 138.9, 107.96, 138.9, 107.96, 138.9, 153.44, 138.9, 153.44],
    [32, 17, 32, 17, 32, 62.48, 32, 62.48, 32, 62.48, 32, 107.96, 32, 107.96, 32, 107.96, 32, 153.44, 32, 153.44],
    [85.45, 17, 85.45, 17, 85.45, 62.48, 85.45, 62.48, 85.45, 62.48, 85.45, 107.96, 85.45, 107.96, 85.45, 107.96, 85.45, 153.44, 85.45, 153.44]
  ]
};

// Live coordinate state for each of the 3 paths (starts as 'Abrir')
const liveCoords = [
  [...iconCoords['Abrir'][0]],
  [...iconCoords['Abrir'][1]],
  [...iconCoords['Abrir'][2]]
];

// References to the 3 SVG path elements
const pathEls = [
  document.getElementById('icon-path-1'),
  document.getElementById('icon-path-2'),
  document.getElementById('icon-path-3')
];

// Active tweens so we can kill them on re-trigger
let iconTweens = [];

function coordsToD(c) {
  return `M ${c[0]} ${c[1]} C ${c[2]} ${c[3]}, ${c[4]} ${c[5]}, ${c[6]} ${c[7]} C ${c[8]} ${c[9]}, ${c[10]} ${c[11]}, ${c[12]} ${c[13]} C ${c[14]} ${c[15]}, ${c[16]} ${c[17]}, ${c[18]} ${c[19]}`;
}

export function setGlobalActionText(text, newActionType = null) {
  if (newActionType) currentActionType = newActionType;

  const btnEl = document.getElementById('global-action-btn');
  if (!btnEl) return;
  if (btnEl.dataset.currentState === text) return;
  btnEl.dataset.currentState = text;

  const targetCoords = iconCoords[text];
  if (!targetCoords) return;

  // Kill any running morphs
  iconTweens.forEach(t => t.kill());
  iconTweens = [];

  for (let i = 0; i < 3; i++) {
    const target = {};
    for (let j = 0; j < 20; j++) target[j] = targetCoords[i][j];

    const tween = gsap.to(liveCoords[i], {
      ...target,
      duration: 0.8,
      ease: 'power2.inOut',
      delay: i * 0.08,
      onUpdate: () => pathEls[i] && pathEls[i].setAttribute('d', coordsToD(liveCoords[i]))
    });
    iconTweens.push(tween);
  }
}

window.addEventListener('openProjectDetail', () => {
  setGlobalActionText('Voltar ao Grid', 'exitProject');
});
window.addEventListener('exitProjectGallery', () => {
  setGlobalActionText('Voltar', 'exitGallery');
});
window.addEventListener('enterGalleryScene', () => {
  setGlobalActionText('Voltar', 'exitGallery');
  const logoEl = document.getElementById('top-logo');
  if (logoEl) gsap.to(logoEl, { opacity: 0, duration: 0.8 });
});
window.addEventListener('exitGalleryScene', () => {
  // Garante que o botão mostre "Abrir" porque as telas vão fechar automaticamente
  setGlobalActionText('Abrir', 'toggleFold');

  const logoEl = document.getElementById('top-logo');
  if (logoEl) gsap.to(logoEl, { opacity: 1, duration: 0.8, delay: 0.5 });
});

// --- GUI Setup ---
const gui = new GUI({ title: 'Configurações do Ambiente' });
gui.hide();

// Prevent clicks on the GUI from triggering 3D raycaster
if (gui.domElement) {
  gui.domElement.addEventListener('pointerdown', e => e.stopPropagation());
  gui.domElement.addEventListener('pointerup', e => e.stopPropagation());
  gui.domElement.addEventListener('click', e => e.stopPropagation());
  gui.domElement.addEventListener('pointermove', e => e.stopPropagation());
}

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
      floor: { color: floorColorObj.color },
      bgReflectionSettings: bgReflectionSettings
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
const themeFolder = gui.addFolder('Cores do Site').close();
themeFolder.addColor(config, 'bgColor').name('Cor da Névoa (Fog)').onChange(c => {
  scene.fog.color.set(c);
  updateBgAspect();
});

// Animation & Scroll settings
const animFolder = gui.addFolder('Animação e Scroll').close();
animFolder.add(config, 'foldDuration', 0.5, 5.0, 0.1).name('Vel. de Abertura');
animFolder.add(config, 'scrollSensitivity', 0.001, 0.01, 0.001).name('Vel. Scroll Cilindro');
animFolder.add(config, 'flatScrollSensitivity', 0.001, 0.03, 0.001).name('Vel. Scroll Panorama');

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

const facesFolder = gui.addFolder('Visual das Telas de Vidro').close();
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
    mesh.scale.set(config.frontTextScale, config.frontTextScale, config.frontTextScale);
  });
};

const frontTextFolder = gui.addFolder('Visual do Texto 3D (Telas)').close();
frontTextFolder.add(config, 'frontTextScale', 0.1, 5, 0.05).name('Tamanho Proporcional').onChange(applyFrontTextScale);
frontTextFolder.add(config, 'frontTextOffsetDesktop', 0.0, 2.0, 0.01).name('Distância da Face (Desk)').onChange(updateCameraZ);
frontTextFolder.add(config, 'frontTextOffsetMobile', 0.0, 2.0, 0.01).name('Distância da Face (Mob)').onChange(updateCameraZ);
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
const shatterFolder = gui.addFolder('Física do Vidro').close();
shatterFolder.add(config, 'shatterPieces', 10, 500, 10).name('Qtd. de Cacos');
shatterFolder.add(config, 'shatterForce', 0.1, 10.0, 0.1).name('Força da Explosão');
shatterFolder.add(config, 'shatterGravity', 0.0, 10.0, 0.1).name('Força da Gravidade');
shatterFolder.add(config, 'shatterDuration', 0.1, 5.0, 0.1).name('Duração da Queda');

// Camera settings
const cameraFolder = gui.addFolder('Camera').close();
cameraFolder.add(cameraSettings, 'baseZ', 2, 20, 0.1).name('Zoom (Z)').onChange(updateCameraZ);

cameraFolder.add(config, 'introCamYDesktop', 0, 50, 0.5).name('Intro Y (Desk)').onChange(onIntroSettingChange);
cameraFolder.add(config, 'introCamZDesktop', -20, 50, 0.5).name('Intro Z (Desk)').onChange(onIntroSettingChange);
cameraFolder.add(config, 'introCamRotXDesktop', -180, 180, 1).name('Intro RotX (Desk)').onChange(onIntroSettingChange);

cameraFolder.add(config, 'introCamYMobile', 0, 50, 0.5).name('Intro Y (Mob)').onChange(onIntroSettingChange);
cameraFolder.add(config, 'introCamZMobile', -20, 50, 0.5).name('Intro Z (Mob)').onChange(onIntroSettingChange);
cameraFolder.add(config, 'introCamRotXMobile', -180, 180, 1).name('Intro RotX (Mob)').onChange(onIntroSettingChange);

cameraFolder.add({
  lock: () => {
    isIntroLocked = true;
    setCameraToIntroState();
  }
}, 'lock').name('🔒 Travar na Intro (Ajustar)');

cameraFolder.add({
  play: () => {
    playIntroAnimation();
  }
}, 'play').name('▶️ Testar Animação');

// Lighting settings
const lightFolder = gui.addFolder('Luzes').close();
lightFolder.add(scene, 'environmentIntensity', 0, 5, 0.1).name('Brilho do HDRI');
lightFolder.add(config, 'hdriSaturation', 0, 2, 0.05).name('Saturação do HDRI').onChange(applyHdriSaturation);
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
const fogFolder = gui.addFolder('Névoa (Fog)').close();
fogFolder.addColor(fogColorObj, 'color').name('Cor da Névoa').onChange(c => scene.fog.color.setHex(c));
fogFolder.add(fogSettings, 'baseNear', 1, 30, 0.1).name('Início 3D').onChange(updateCameraZ);
fogFolder.add(fogSettings, 'baseFar', 5, 80, 0.1).name('Fim 3D').onChange(updateCameraZ);

// Controles da Parede de Fumaça (Fog Wall) e Fundo 2D
fogFolder.add(bgReflectionSettings, 'mainGradientOpacity', 0, 1, 0.01).name('Fumaça do Fundo (2D)').onChange(updateBgAspect);

// Floor settings
const floorFolder = gui.addFolder('Piso / Reflexo (Água)').close();
floorFolder.addColor(floorColorObj, 'color').name('Cor do Reflexo').onChange(c => reflector.material.uniforms.color.value.setHex(c));
floorFolder.add(bgReflectionSettings, 'opacity', 0, 1, 0.01).name('Opacidade Refl. Fundo').onChange(() => {
  if (bgImage.complete && bgImage.naturalWidth > 0) {
    updateBgAspect(); // This will recalculate dimensions and update both safely
  }
});
floorFolder.add(config, 'waveStrength', 0, 0.1, 0.001).name('Força da Onda');
floorFolder.add(config, 'waveSpeed', 0, 5, 0.1).name('Velocidade da Onda');
floorFolder.add(config, 'fadeStrengthDesktop', 0, 10, 0.01).name('Fade (Desktop)').onChange(updateCameraZ);
floorFolder.add(config, 'fadeContrastDesktop', 0.1, 5, 0.01).name('Contraste (Desktop)').onChange(updateCameraZ);
floorFolder.add(config, 'fadeStrengthMobile', 0, 10, 0.01).name('Fade (Mobile)').onChange(updateCameraZ);
floorFolder.add(config, 'fadeContrastMobile', 0.1, 5, 0.01).name('Contraste (Mobile)').onChange(updateCameraZ);

// --- Resize Handler ---
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  galleryComposer.setSize(width, height);
  updateCameraZ();

  updateBgAspect();

  // Re-render immediately on resize
  if (window.activeScene === 'main') {
    renderer.render(scene, camera);
  }
});

// Start the animation loop
const timer = new THREE.Timer();

window.addEventListener('enterProjectGallery', (e) => {
  setTimeout(() => {
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute('content', '#050505');
  }, 1000);

  gsap.to(camera.position, {
    z: 1,
    duration: 1.5,
    ease: 'power3.inOut'
  });

  const transitionLayer = document.getElementById('transition-layer');
  transitionLayer.style.display = 'block';
  gsap.to(transitionLayer, {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    onComplete: () => {
      window.activeScene = 'gallery';
      window.dispatchEvent(new CustomEvent('enterGalleryScene'));
      gsap.to(transitionLayer, {
        opacity: 0, duration: 1, onComplete: () => {
          transitionLayer.style.display = 'none';
        }
      });
    }
  });
});

window.addEventListener('exitGalleryScene', (e) => {
  setTimeout(() => {
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute('content', config.bgColor);
  }, 1000);

  const transitionLayer = document.getElementById('transition-layer');
  transitionLayer.style.display = 'block';
  gsap.to(transitionLayer, {
    opacity: 1,
    duration: 1,
    onComplete: () => {
      window.activeScene = 'main';

      const aspect = window.innerWidth / window.innerHeight;
      let targetZ = cameraSettings.baseZ;
      if (aspect < 1.0) {
        targetZ = (cameraSettings.baseZ / aspect) * 1.2;
      }

      gsap.to(camera.position, {
        z: targetZ,
        duration: 1.5,
        ease: 'power3.out',
        onUpdate: () => {
          if (scene.fog) {
            const zDiff = camera.position.z - cameraSettings.baseZ;
            scene.fog.near = fogSettings.baseNear + zDiff;
            scene.fog.far = fogSettings.baseFar + zDiff;
          }
        }
      });

      gsap.to(transitionLayer, {
        opacity: 0, duration: 1, onComplete: () => {
          transitionLayer.style.display = 'none';

          // Dispara a animação de fechar somente DEPOIS que a tela clarear
          if (!isFolded) {
            toggleFold();
          }
        }
      });
    }
  });
});

function animate() {
  requestAnimationFrame(animate);

  timer.update();
  const elapsedTime = timer.getElapsed();
  const delta = timer.getDelta();

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

  if (window.activeScene === 'main') {
    renderer.render(scene, camera);
  } else {
    galleryComposer.render();
  }
}

animate();

// --- Top Logo Slot Machine Effect ---
const logoEl = document.getElementById('top-logo');
if (logoEl) {
  const word = 'PORTFOLIO';
  const letters = word.split('');
  logoEl.innerHTML = '';

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
  const strips = [];

  letters.forEach((letter) => {
    const col = document.createElement('div');
    col.className = 'slot-column';

    // Measure exact width of the original letter to prevent layout shifts
    const measure = document.createElement('span');
    measure.style.visibility = 'hidden';
    measure.style.position = 'absolute';
    measure.style.whiteSpace = 'nowrap';
    measure.style.fontFamily = "'CooperLtBT', serif";
    measure.style.fontSize = '14px';
    measure.style.letterSpacing = '8px';
    measure.innerText = letter;
    document.body.appendChild(measure);
    // Use getBoundingClientRect for sub-pixel accuracy, or offsetWidth
    const width = measure.getBoundingClientRect().width;
    document.body.removeChild(measure);

    col.style.width = width + 'px';

    const strip = document.createElement('div');
    strip.className = 'slot-strip';

    let html = `<div class="slot-char">${letter}</div>`;
    for (let i = 0; i < 15; i++) {
      html += `<div class="slot-char">${chars[Math.floor(Math.random() * chars.length)]}</div>`;
    }
    html += `<div class="slot-char">${letter}</div>`;

    strip.innerHTML = html;
    col.appendChild(strip);
    logoEl.appendChild(col);
    strips.push(strip);
  });

  setInterval(() => {
    strips.forEach((strip, i) => {
      const children = strip.children;
      for (let j = 1; j < children.length - 1; j++) {
        children[j].innerText = chars[Math.floor(Math.random() * chars.length)];
      }

      gsap.set(strip, { y: 0 });

      const targetY = - (children.length - 1) * 18;

      gsap.to(strip, {
        y: targetY,
        duration: 1.5 + Math.random() * 1.0,
        ease: 'power3.inOut',
        delay: i * 0.05
      });
    });
  }, 5000);
}

export { scene, camera, renderer };
