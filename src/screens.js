import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { setupShatterInteraction } from './shatter.js';
import gsap from 'gsap';
import { config } from './config.js';

export const screensGroup = new THREE.Group();
export let isFolded = true;
export let isTransitioning = false;
export const panelsData = [];
export const scrollState = { angle: 0, offsetX: 0 };

const radius = 3;
const R = radius;
// Export S so scroll.js can use it for flat snapping
export const S = (radius * 115 * Math.PI / 180) + (radius * 5 * Math.PI / 180); // Arc length + flat gap

const skeletonGroup = new THREE.Group();
const panelsGroup = new THREE.Group();
screensGroup.add(skeletonGroup);
screensGroup.add(panelsGroup);

const centerDummy = new THREE.Group();
centerDummy.position.set(0, 0, 3);
skeletonGroup.add(centerDummy);

const rightHinge = new THREE.Group();
const rightDummy = new THREE.Group();
rightHinge.add(rightDummy);
skeletonGroup.add(rightHinge);

const leftHinge = new THREE.Group();
const leftDummy = new THREE.Group();
leftHinge.add(leftDummy);
skeletonGroup.add(leftHinge);

let targetDummies = [null, null, null];
export const panelsDataObj = [];

const angles = [0, 120, -120].map(a => a * Math.PI / 180);

export function createScreens(scene) {
  scene.add(screensGroup);
  screensGroup.position.z = -3;
  
  const numScreens = 3;
  const radius = 3;
  const height = 2.5;
  const thickness = 0.05;
  const anglePerScreen = (115 * Math.PI) / 180;
  const angleGap = (5 * Math.PI) / 180;
  const S = (radius * anglePerScreen) + (radius * angleGap);
  
  const textureLoader = new THREE.TextureLoader();
  const images = ['./12802.jpg', './1644.jpg', './29038.jpg'];
  
  for (let i = 0; i < numScreens; i++) {
    const texture = textureLoader.load(images[i], (loadedTex) => {
      loadedTex.colorSpace = THREE.SRGBColorSpace;
      const imageAspect = loadedTex.image.width / loadedTex.image.height;
      const screenAspect = (anglePerScreen * radius) / height;
      if (imageAspect > screenAspect) {
        loadedTex.repeat.x = screenAspect / imageAspect;
        loadedTex.offset.x = (1 - loadedTex.repeat.x) / 2;
      } else {
        loadedTex.repeat.y = imageAspect / screenAspect;
        loadedTex.offset.y = (1 - loadedTex.repeat.y) / 2;
      }
    });
    
    createSimpleScreenPanel(i, texture, radius, height, anglePerScreen, thickness, S);
  }

  setFoldedState(true, radius, S);
}

function createSimpleScreenPanel(index, texture, radius, height, anglePerScreen, glassThickness, S) {
  const panelGroup = new THREE.Group();
  const flatWidth = radius * anglePerScreen;
  
  let geo = new THREE.BoxGeometry(flatWidth, height, glassThickness, 32, 1, 1);
  geo = geo.toNonIndexed(); // Required for three-pinata destructible mesh
  
  const curvedPositions = [];
  const curvedNormals = [];
  const posAttribute = geo.attributes.position;
  const normAttribute = geo.attributes.normal;

  for (let i = 0; i < posAttribute.count; i++) {
    const x = posAttribute.getX(i);
    const y = posAttribute.getY(i);
    const z = posAttribute.getZ(i);
    const nx = normAttribute.getX(i);
    const ny = normAttribute.getY(i);
    const nz = normAttribute.getZ(i);

    const angle = (x / flatWidth) * anglePerScreen;
    const r = radius + z;

    const cX = r * Math.sin(angle);
    const cZ = r * Math.cos(angle) - radius;
    curvedPositions.push(cX, y, cZ);

    const cNx = nx * Math.cos(angle) + nz * Math.sin(angle);
    const cNz = -nx * Math.sin(angle) + nz * Math.cos(angle);
    curvedNormals.push(cNx, ny, cNz);
  }

  geo.morphAttributes.position = [];
  geo.morphAttributes.position[0] = new THREE.Float32BufferAttribute(curvedPositions, 3);
  geo.morphAttributes.normal = [];
  geo.morphAttributes.normal[0] = new THREE.Float32BufferAttribute(curvedNormals, 3);

  const colors = [config.faceColor1, config.faceColor2, config.faceColor3]; 
  const glassMat = new THREE.MeshPhysicalMaterial({ 
    map: texture,
    color: colors[index],
    transmission: config.transmission,
    opacity: config.opacity,
    metalness: config.metalness,
    roughness: config.roughness,
    ior: config.ior,
    thickness: config.thickness,
    side: THREE.DoubleSide,
    transparent: true
  });
  
  const glassMesh = new THREE.Mesh(geo, glassMat);
  glassMesh.castShadow = true;
  glassMesh.receiveShadow = true;
  
  panelGroup.add(glassMesh);
  
  panelsGroup.add(panelGroup);
  
  glassMesh.userData = { isScreen: true, screenIndex: index };
  panelsDataObj.push({ group: panelGroup, mesh: glassMesh, index: index });
  panelsData.push(panelGroup);
  
  setupShatterInteraction(glassMesh, panelGroup);
}

function setFoldedState(folded, R, S) {
  const t = folded ? 1 : 0;
  
  panelsDataObj.forEach(p => {
    p.mesh.morphTargetInfluences[0] = t;
  });

  if (folded) {
    rightHinge.position.set(R * Math.sin(Math.PI/3), 0, R * Math.cos(Math.PI/3));
    rightHinge.rotation.y = 2 * Math.PI / 3;
    rightDummy.position.set(R * Math.sin(Math.PI/3), 0, R * Math.cos(Math.PI/3));

    leftHinge.position.set(-R * Math.sin(Math.PI/3), 0, R * Math.cos(Math.PI/3));
    leftHinge.rotation.y = -2 * Math.PI / 3;
    leftDummy.position.set(-R * Math.sin(Math.PI/3), 0, R * Math.cos(Math.PI/3));
  } else {
    rightHinge.position.set(S/2, 0, R);
    rightHinge.rotation.y = 0;
    rightDummy.position.set(S/2, 0, 0);

    leftHinge.position.set(-S/2, 0, R);
    leftHinge.rotation.y = 0;
    leftDummy.position.set(-S/2, 0, 0);
  }
}

function assignDummies(snapAngle) {
  let minDiff = Infinity;
  let frontIndex = 0;
  
  for (let i = 0; i < 3; i++) {
    let currentAngle = snapAngle + angles[i];
    currentAngle = currentAngle % (2 * Math.PI);
    if (currentAngle > Math.PI) currentAngle -= 2 * Math.PI;
    if (currentAngle <= -Math.PI) currentAngle += 2 * Math.PI;
    
    if (Math.abs(currentAngle) < minDiff) {
      minDiff = Math.abs(currentAngle);
      frontIndex = i;
    }
  }
  
  let rightIndex = 0, leftIndex = 0;
  for (let i = 0; i < 3; i++) {
    if (i === frontIndex) continue;
    let currentAngle = snapAngle + angles[i];
    currentAngle = currentAngle % (2 * Math.PI);
    if (currentAngle > Math.PI) currentAngle -= 2 * Math.PI;
    if (currentAngle <= -Math.PI) currentAngle += 2 * Math.PI;
    
    if (currentAngle > 0) rightIndex = i;
    else leftIndex = i;
  }
  
  targetDummies[frontIndex] = centerDummy;
  targetDummies[rightIndex] = rightDummy;
  targetDummies[leftIndex] = leftDummy;
}

export function toggleFold() {
  if (isTransitioning) return;
  const duration = config.foldDuration;
  const ease = "sine.inOut";

  if (isFolded) {
    isTransitioning = true;
    const snapAngle = Math.round(scrollState.angle / ((120 * Math.PI) / 180)) * ((120 * Math.PI) / 180);
    
    const startUnfold = () => {
      assignDummies(snapAngle);
      isFolded = false;
      runFoldAnimation(false, duration, ease, () => {
        isTransitioning = false;
      });
    };

    if (Math.abs(scrollState.angle - snapAngle) > 0.001) {
      gsap.to(scrollState, {
        angle: snapAngle,
        duration: 0.6,
        ease: "power2.out",
        overwrite: true,
        onComplete: startUnfold
      });
    } else {
      scrollState.angle = snapAngle;
      startUnfold();
    }
  } else {
    isTransitioning = true;
    
    const nearestSnapX = Math.round(scrollState.offsetX / S) * S;
    const shiftSlots = Math.round(nearestSnapX / S);
    
    const startFold = () => {
      if (shiftSlots !== 0) {
        scrollState.angle += shiftSlots * ((120 * Math.PI) / 180);
        assignDummies(scrollState.angle);
        scrollState.offsetX = 0;
      }
      runFoldAnimation(true, duration, ease, () => {
        isFolded = true;
        isTransitioning = false;
      });
    };

    if (Math.abs(scrollState.offsetX - nearestSnapX) > 0.001) {
      gsap.to(scrollState, {
        offsetX: nearestSnapX,
        duration: 0.6,
        ease: "power2.out",
        overwrite: true,
        onComplete: startFold
      });
    } else {
      scrollState.offsetX = nearestSnapX;
      startFold();
    }
  }
}

function runFoldAnimation(targetFolded, duration, ease, onComplete) {
  // Use global R and S

  panelsDataObj.forEach(p => {
    gsap.to(p.mesh.morphTargetInfluences, {
      [0]: targetFolded ? 1 : 0,
      duration: duration,
      ease: ease,
      overwrite: true
    });
  });

  const rHingeTargetPos = targetFolded ? { x: R * Math.sin(Math.PI/3), z: R * Math.cos(Math.PI/3) } : { x: S/2, z: R };
  const rHingeTargetRot = targetFolded ? 2 * Math.PI / 3 : 0;
  const p1DummyTargetPos = targetFolded ? { x: R * Math.sin(Math.PI/3), z: R * Math.cos(Math.PI/3) } : { x: S/2, z: 0 };

  const lHingeTargetPos = targetFolded ? { x: -R * Math.sin(Math.PI/3), z: R * Math.cos(Math.PI/3) } : { x: -S/2, z: R };
  const lHingeTargetRot = targetFolded ? -2 * Math.PI / 3 : 0;
  const p2DummyTargetPos = targetFolded ? { x: -R * Math.sin(Math.PI/3), z: R * Math.cos(Math.PI/3) } : { x: -S/2, z: 0 };

  gsap.to(rightHinge.position, { x: rHingeTargetPos.x, z: rHingeTargetPos.z, duration: duration, ease: ease, overwrite: true });
  gsap.to(rightHinge.rotation, { y: rHingeTargetRot, duration: duration, ease: ease, overwrite: true });
  gsap.to(rightDummy.position, { x: p1DummyTargetPos.x, z: p1DummyTargetPos.z, duration: duration, ease: ease, overwrite: true });

  gsap.to(leftHinge.position, { x: lHingeTargetPos.x, z: lHingeTargetPos.z, duration: duration, ease: ease, overwrite: true });
  gsap.to(leftHinge.rotation, { y: lHingeTargetRot, duration: duration, ease: ease, overwrite: true });
  gsap.to(leftDummy.position, { x: p2DummyTargetPos.x, z: p2DummyTargetPos.z, duration: duration, ease: ease, overwrite: true });

  gsap.delayedCall(duration, onComplete);
}

export function updateScreens() {
  if (isFolded) {
    for (let i = 0; i < 3; i++) {
      const panelGroup = panelsDataObj[i].group;
      const angle = scrollState.angle + angles[i];
      panelGroup.position.set(3 * Math.sin(angle), 0, 3 * Math.cos(angle));
      panelGroup.rotation.set(0, angle, 0);
    }
  } else {
    const vec = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const parentQuat = new THREE.Quaternion();
    
    for (let i = 0; i < 3; i++) {
      const panelGroup = panelsDataObj[i].group;
      const dummy = targetDummies[i];
      if (dummy) {
        dummy.getWorldPosition(vec);
        dummy.getWorldQuaternion(quat);
        
        // Remove mouse parallax/world position offset to get local coordinates
        panelsGroup.worldToLocal(vec);
        
        if (!isTransitioning) {
          // Infinite Scroll Wrap Logic
          vec.x += scrollState.offsetX;
          while (vec.x > 1.5 * S) vec.x -= 3 * S;
          while (vec.x < -1.5 * S) vec.x += 3 * S;
        }

        panelGroup.position.copy(vec);
        
        // Remove mouse parallax/world rotation to get local rotation
        panelsGroup.getWorldQuaternion(parentQuat);
        quat.premultiply(parentQuat.invert());
        panelGroup.quaternion.copy(quat);
      }
    }
  }
}
