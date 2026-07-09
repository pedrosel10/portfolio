import * as THREE from 'three';
import gsap from 'gsap';

export const galleryScene = new THREE.Scene();
galleryScene.background = new THREE.Color('#050505');

function getCameraBounds() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  const maxW = 1800; // Prevent seeing past the 5-column grid (5 * 400 = 2000)
  if (w > maxW) {
    h = h * (maxW / w);
    w = maxW;
  }
  return { w, h };
}

const initialBounds = getCameraBounds();
export const galleryCamera = new THREE.OrthographicCamera(
  initialBounds.w / -2, initialBounds.w / 2,
  initialBounds.h / 2, initialBounds.h / -2,
  0.1, 1000
);
galleryCamera.position.z = 100;

window.addEventListener('resize', () => {
  const bounds = getCameraBounds();
  galleryCamera.left = bounds.w / -2;
  galleryCamera.right = bounds.w / 2;
  galleryCamera.top = bounds.h / 2;
  galleryCamera.bottom = bounds.h / -2;
  galleryCamera.updateProjectionMatrix();
});

function applyCoverAspect(tex) {
  const imgAspect = tex.image.width / tex.image.height;
  if (imgAspect > 1) {
    tex.repeat.set(1 / imgAspect, 1);
    tex.offset.set((1 - 1 / imgAspect) / 2, 0);
  } else {
    tex.repeat.set(1, imgAspect);
    tex.offset.set(0, (1 - imgAspect) / 2);
  }
}

const textureLoader = new THREE.TextureLoader();

const projectsData = [
  {
    cover: './PROJETO 01/capa_1x.webp',
    images: [
      './PROJETO 01/img1_1x.webp',
      './PROJETO 01/img2_1x.webp',
      './PROJETO 01/img3_1x.webp',
      './PROJETO 01/img4_1x.webp',
      './PROJETO 01/img5_1x.webp',
      './PROJETO 01/img6_1x.webp',
      './PROJETO 01/img7_1x.webp',
      './PROJETO 01/img8_1x.webp',
      './PROJETO 01/img9_1x.webp',
      './PROJETO 01/img10_1x.webp',
      './PROJETO 01/img11_1x.webp',
      './PROJETO 01/img12_1x.webp',
      './PROJETO 01/img13_1x.webp',
      './PROJETO 01/img14_1x.webp'
    ]
  },
  {
    cover: './PROJETO 02/capa_1x.webp',
    images: [
      './PROJETO 02/img1_1x.webp',
      './PROJETO 02/img2_1x.webp',
      './PROJETO 02/img3_1x.webp',
      './PROJETO 02/img4_1x.webp',
      './PROJETO 02/img5_1x.webp',
      './PROJETO 02/img6_1x.webp',
      './PROJETO 02/img7_1x.webp',
      './PROJETO 02/img8_1x.webp',
      './PROJETO 02/img9_1x.webp',
      './PROJETO 02/img10_1x.webp'
    ]
  },
  {
    cover: './PROJETO 03/capa_1x.webp',
    images: [
      './PROJETO 03/img1_1x.webp',
      './PROJETO 03/img2_1x.webp',
      './PROJETO 03/img3_1x.webp',
      './PROJETO 03/img4_1x.webp',
      './PROJETO 03/img5_1x.webp',
      './PROJETO 03/img6_1x.webp',
      './PROJETO 03/img7_1x.webp',
      './PROJETO 03/img8_1x.webp',
      './PROJETO 03/img9_1x.webp',
      './PROJETO 03/img10_1x.webp'
    ]
  },
  {
    cover: './PROJETO 04/capa_1x.webp',
    images: [
      './PROJETO 04/img1_1x.webp',
      './PROJETO 04/img2_1x.webp',
      './PROJETO 04/img3_1x.webp',
      './PROJETO 04/img4_1x.webp',
      './PROJETO 04/img5_1x.webp',
      './PROJETO 04/img6_1x.webp',
      './PROJETO 04/img7_1x.webp',
      './PROJETO 04/img8_1x.webp',
      './PROJETO 04/img9_1x.webp',
      './PROJETO 04/img10_1x.webp',
      './PROJETO 04/img11_1x.webp'
    ]
  },
  {
    cover: './PROJETO 05/capa_1x.webp',
    images: [
      './PROJETO 05/img1_1x.webp',
      './PROJETO 05/img2_1x.webp',
      './PROJETO 05/img3_1x.webp',
      './PROJETO 05/img4_1x.webp',
      './PROJETO 05/img5_1x.webp',
      './PROJETO 05/img6_1x.webp',
      './PROJETO 05/img7_1x.webp',
      './PROJETO 05/img8_1x.webp',
      './PROJETO 05/img9_1x.webp'
    ]
  }
];

// Background Parallax Grid
const bgGridGeo = new THREE.PlaneGeometry(10000, 10000);
export const bgGridMat = new THREE.ShaderMaterial({
  uniforms: {
    uOffset: { value: new THREE.Vector2(0, 0) }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec2 uOffset;
    varying vec2 vUv;
    void main() {
      // 10000 / 200 = 50 tiles. Each tile is 200x200 pixels.
      vec2 uv = vUv * 50.0 + uOffset;
      vec2 grid = fract(uv);
      
      float thickness = 0.01;
      float lineX = step(1.0 - thickness, grid.x);
      float lineY = step(1.0 - thickness, grid.y);
      float line = max(lineX, lineY);
      
      gl_FragColor = vec4(vec3(1.0), line * 0.04);
    }
  `,
  transparent: true,
  depthWrite: false
});
const bgGrid = new THREE.Mesh(bgGridGeo, bgGridMat);
bgGrid.position.z = -50;
galleryScene.add(bgGrid);



const cols = 5;
const rows = 3;
const isMobile = window.innerWidth < 768;
const itemWidth = isMobile ? window.innerWidth * 0.6 : 300;
const itemHeight = isMobile ? window.innerWidth * 0.6 : 300;
const spacing = itemWidth + (isMobile ? 50 : 100); 

export const gridGroup = new THREE.Group();
galleryScene.add(gridGroup);

const gridMeshes = [];
const planeGeo = new THREE.PlaneGeometry(itemWidth, itemHeight);

function createPlaceholderTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#1c1c1c';
  ctx.fillRect(0, 0, 1024, 1024);
  
  ctx.strokeStyle = '#333333';
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, 984, 984);
  
  ctx.fillStyle = '#555555';
  ctx.font = '80px "CooperLtBT", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('EM BREVE', 512, 512);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const placeholderTex = createPlaceholderTexture();

let gridIndex = 0;

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    
    // Mostra os projetos reais. O resto vira EM BREVE.
    if (gridIndex < projectsData.length) {
      const projIndex = gridIndex % projectsData.length;
      const pData = projectsData[projIndex];
      
      const tex = textureLoader.load(pData.cover, applyCoverAspect);
      tex.colorSpace = THREE.SRGBColorSpace;
      
      const mat = new THREE.MeshBasicMaterial({ 
        map: tex, 
        transparent: true, 
        color: new THREE.Color(0xffffff) 
      });
      const mesh = new THREE.Mesh(planeGeo, mat);
      mesh.userData = { c, r, isGrid: true, projectIndex: projIndex, isPlaceholder: false };
      gridGroup.add(mesh);
      gridMeshes.push(mesh);
    } else {
      const mat = new THREE.MeshBasicMaterial({ 
        map: placeholderTex, 
        transparent: true, 
        color: new THREE.Color(0xffffff) 
      });
      const mesh = new THREE.Mesh(planeGeo, mat);
      mesh.userData = { c, r, isGrid: true, isPlaceholder: true };
      gridGroup.add(mesh);
      gridMeshes.push(mesh);
    }
    
    gridIndex++;
  }
}

let offsetX = 0;
let offsetY = 0;
let isProjectOpen = false;
let projectScrollY = 0;
let currentProjectImagesLength = 0;
export let isDraggingGallery = false;

function updateGridPositions() {
  const modX = cols * spacing;
  const modY = rows * spacing;
  const halfX = modX / 2;
  const halfY = modY / 2;
  
  gridMeshes.forEach(mesh => {
    const c = mesh.userData.c;
    const r = mesh.userData.r;
    
    let x = (c * spacing + offsetX);
    let y = (r * spacing + offsetY);
    
    x = ((x + halfX) % modX + modX) % modX - halfX;
    y = ((y + halfY) % modY + modY) % modY - halfY;
    
    mesh.userData.currentX = x;
    mesh.userData.currentY = -y; // Three.js Y is up, but our offset is screen-based
    
    mesh.position.set(mesh.userData.currentX, mesh.userData.currentY, 0);
  });
  
  bgGridMat.uniforms.uOffset.value.set(
    -offsetX * 0.2 / 200.0,
    (offsetY - projectScrollY) * 0.2 / 200.0
  );
}

updateGridPositions();

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let pointerStartX = 0;
let pointerStartY = 0;
let isPointerDown = false;

export const detailGroup = new THREE.Group();
galleryScene.add(detailGroup);
let detailMeshes = [];

// The global action button handles closing the gallery or project
window.addEventListener('exitProjectGallery', () => {
  if (!isProjectOpen) return;
  
  // Reset color of clicked mesh instantly
  if (window.clickedMesh) {
    window.clickedMesh.material.color.setRGB(1, 1, 1);
  }
  
  // Fade out detail meshes
  detailMeshes.forEach(m => gsap.to(m.material, { opacity: 0, duration: 0.8 }));
  
  // Fade in grid meshes
  gridMeshes.forEach(m => {
    if (m !== window.clickedMesh) {
      gsap.to(m.material, { opacity: 1, duration: 1.5, ease: 'power2.inOut' });
    }
  });

  const animObj = { scrollY: projectScrollY, zoom: galleryCamera.zoom };
  
  gsap.to(animObj, {
    scrollY: 0,
    zoom: 1,
    duration: 1.5,
    ease: 'power3.inOut',
    onUpdate: () => {
      // Update detail group position
      detailGroup.position.y = animObj.scrollY;
      
      // Update clicked mesh position to stay with detail group
      if (window.clickedMesh) {
        window.clickedMesh.position.y = window.clickedMesh.userData.currentY + animObj.scrollY;
      }
      
      // Update camera zoom
      galleryCamera.zoom = animObj.zoom;
      galleryCamera.updateProjectionMatrix();
      
      // Update parallax grid during close
      bgGridMat.uniforms.uOffset.value.set(
        -offsetX * 0.2 / 200.0,
        (offsetY - animObj.scrollY) * 0.2 / 200.0
      );
    },
    onComplete: () => {
      // Remove detail meshes completely
      detailMeshes.forEach(m => {
        detailGroup.remove(m);
        m.geometry.dispose();
        m.material.dispose();
      });
      detailMeshes = [];
      projectScrollY = 0;
      isProjectOpen = false;
      
      // Tell main to update the global button back to gallery close
      window.dispatchEvent(new CustomEvent('exitProjectGalleryCompleted'));
    }
  });
});

window.addEventListener('pointerdown', (e) => {
  if (window.activeScene !== 'gallery') return;
  isPointerDown = true;
  isDraggingGallery = false;
  pointerStartX = e.clientX;
  pointerStartY = e.clientY;
});

window.addEventListener('pointermove', (e) => {
  if (window.activeScene !== 'gallery') return;
  
  // Handle hover effect
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  
  if (!isPointerDown && !isProjectOpen) {
    raycaster.setFromCamera(mouse, galleryCamera);
    const intersects = raycaster.intersectObjects(gridMeshes);
    document.body.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
  } else if (!isPointerDown && isProjectOpen) {
    document.body.style.cursor = 'default';
  }

  if (!isPointerDown) return;
  
  const dx = e.clientX - pointerStartX;
  const dy = e.clientY - pointerStartY;
  
  if (Math.hypot(dx, dy) > 3) isDraggingGallery = true;
  
  if (!isProjectOpen) {
    offsetX += dx;
    offsetY += dy; // Screen Y is inverted to 3D Y, but updateGridPositions handles it
    updateGridPositions();
  } else {
    // Scroll detail (invertido para ser scroll natural no touch)
    projectScrollY -= dy;
    const maxScroll = currentProjectImagesLength * spacing;
    projectScrollY = Math.max(0, Math.min(projectScrollY, maxScroll));
    detailGroup.position.y = projectScrollY;
    if (window.clickedMesh) {
      window.clickedMesh.position.y = window.clickedMesh.userData.currentY + projectScrollY;
    }
    // Update parallax
    bgGridMat.uniforms.uOffset.value.set(
      -offsetX * 0.2 / 200.0,
      (offsetY - projectScrollY) * 0.2 / 200.0
    );
  }
  
  pointerStartX = e.clientX;
  pointerStartY = e.clientY;
});

window.addEventListener('wheel', (e) => {
  if (window.activeScene !== 'gallery') return;
  
  if (!isProjectOpen) {
    offsetX -= e.deltaX;
    offsetY -= e.deltaY;
    updateGridPositions();
  } else {
    projectScrollY += e.deltaY;
    const maxScroll = currentProjectImagesLength * spacing;
    projectScrollY = Math.max(0, Math.min(projectScrollY, maxScroll));
    detailGroup.position.y = projectScrollY;
    if (window.clickedMesh) {
      window.clickedMesh.position.y = window.clickedMesh.userData.currentY + projectScrollY;
    }
    // Update parallax
    bgGridMat.uniforms.uOffset.value.set(
      -offsetX * 0.2 / 200.0,
      (offsetY - projectScrollY) * 0.2 / 200.0
    );
  }
});

window.addEventListener('pointerup', (e) => {
  if (window.activeScene !== 'gallery') return;
  isPointerDown = false;
  
  // Update mouse coordinates on pointerup so that simple taps on mobile
  // calculate the correct intersection, instead of using old coordinates.
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  
  if (!isDraggingGallery && !isProjectOpen) {
    raycaster.setFromCamera(mouse, galleryCamera);
    const intersects = raycaster.intersectObjects(gridMeshes);
    if (intersects.length > 0) {
      const clicked = intersects[0].object;
      if (!clicked.userData.isPlaceholder) {
        openProject(clicked);
      }
    }
  }
  
  setTimeout(() => isDraggingGallery = false, 0);
});

function openProject(clickedMesh) {
  isProjectOpen = true;
  window.clickedMesh = clickedMesh;
  
  // Tell main to update the global button to close project mode
  window.dispatchEvent(new CustomEvent('openProjectDetail'));

  // Fade out other meshes, brighten clicked
  gridMeshes.forEach(m => {
    if (m !== clickedMesh) {
      gsap.to(m.material, { opacity: 0, duration: 1 });
    } else {
      gsap.to(m.material.color, { r: 1, g: 1, b: 1, duration: 1 });
    }
  });

  // Pan grid to center clicked mesh and zoom in
  const targetX = clickedMesh.userData.currentX;
  const targetY = -clickedMesh.userData.currentY; // back to screen space offset
  
  // Calcular o zoom para a imagem ocupar: 90% no mobile, 60% no desktop
  const pct = isMobile ? 0.9 : 0.8;
  const targetZoomX = (window.innerWidth * pct) / itemWidth;
  const targetZoomY = (window.innerHeight * pct) / itemHeight;
  const targetZoom = Math.min(targetZoomX, targetZoomY);
  
  const panObj = { ox: offsetX, oy: offsetY, zoom: 1 };
  gsap.to(panObj, {
    ox: offsetX - targetX,
    oy: offsetY - targetY,
    zoom: targetZoom, // aproxima até preencher 90% da tela
    duration: 1.5,
    ease: 'power3.inOut',
    onUpdate: () => {
      offsetX = panObj.ox;
      offsetY = panObj.oy;
      updateGridPositions();
      galleryCamera.zoom = panObj.zoom;
      galleryCamera.updateProjectionMatrix();
    },
    onComplete: () => {
      // Spawn detail meshes below
      projectScrollY = 0;
      detailGroup.position.y = 0;
      
      let yOffset = -spacing; // espaçamento entre os itens
      
      const imagesToLoad = projectsData[clickedMesh.userData.projectIndex].images;
      currentProjectImagesLength = imagesToLoad.length;
      
      imagesToLoad.forEach((src, idx) => {
        const tex = textureLoader.load(src, applyCoverAspect);
        tex.colorSpace = THREE.SRGBColorSpace;
        const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0 });
        const geo = new THREE.PlaneGeometry(itemWidth, itemHeight); // Quadradas iguais à capa
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(0, yOffset, 0);
        detailGroup.add(mesh);
        detailMeshes.push(mesh);
        
        gsap.to(mat, { opacity: 1, duration: 1, delay: idx * 0.1 });
        yOffset -= spacing;
      });
    }
  });
}

// Show/Hide close button based on scene
window.addEventListener('enterGalleryScene', () => {
});
window.addEventListener('exitGalleryScene', () => {
  // Hiding is handled globally now
});
