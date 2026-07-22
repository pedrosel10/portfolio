import * as THREE from 'three';
import gsap from 'gsap';
import { isFolded, toggleFold } from './screens.js';
import { state } from './state.js';

export function initMouse(scene, camera, screensGroup) {
  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

  // Point light that follows cursor
  const cursorLight = new THREE.PointLight(0xffffee, 0, 5, 2);
  scene.add(cursorLight);

  let targetTiltX = 0;
  let targetTiltY = 0;

  window.addEventListener('pointermove', (e) => {
    if (state.activeScene !== 'main') return;

    // Normalize mouse position: -1 to +1
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // Parallax Tilt logic
    targetTiltX = mouse.y * 0.05; // Look up/down
    targetTiltY = mouse.x * 0.1;  // Look left/right

    gsap.to(screensGroup.rotation, {
      x: targetTiltX,
      z: -mouse.x * 0.02,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto'
    });

    // Raycast to find screen intersections
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(screensGroup.children, true);

    // Filter for the front screens
    const screenHit = intersects.find(hit => hit.object.userData.isScreen);

    if (screenHit) {
      // Place light slightly in front of the hit point
      const offset = screenHit.face.normal.clone().multiplyScalar(0.2);
      const lightPos = screenHit.point.clone().add(offset);

      cursorLight.position.copy(lightPos);

      // Fade in light (slightly stronger on mobile as requested)
      const isMobile = window.innerWidth < 768;
      const targetIntensity = isMobile ? 4.5 : 4;
      gsap.to(cursorLight, { intensity: targetIntensity, duration: 0.2, overwrite: 'auto' });

      // Change cursor
      document.body.style.cursor = 'pointer';
    } else {
      // Fade out light
      gsap.to(cursorLight, { intensity: 0, duration: 0.5, overwrite: 'auto' });
      document.body.style.cursor = 'default';
    }
  });

  // Handle clicks to trigger shatter, ignoring drags
  let startX = 0;
  let startY = 0;
  window.addEventListener('pointerdown', (e) => {
    if (state.activeScene !== 'main') return;
    startX = e.clientX;
    startY = e.clientY;
  });

  window.addEventListener('pointerup', (e) => {
    if (state.activeScene !== 'main') return;

    // Apaga a luz no mobile se tirar o dedo da tela
    if (e.pointerType === 'touch') {
      gsap.to(cursorLight, { intensity: 0, duration: 0.5 });
      mouse.x = -9999;
      mouse.y = -9999;
    }

    const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
    if (dist > 5) return; // Ignore if it was a drag

    // Update mouse coordinates for mobile taps
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(screensGroup.children, true);
    const screenHit = intersects.find(hit => hit.object.userData.isScreen);

    if (screenHit) {
      const clickedIndex = screenHit.object.userData.screenIndex;

      // Somente abre a galeria se for a tela "BRAND" (índice 0)
      if (clickedIndex === 0) {
        const triggerTransition = () => {
          window.dispatchEvent(new CustomEvent('enterProjectGallery', {
            detail: {
              index: clickedIndex,
              point: screenHit.point
            }
          }));
        };

        if (isFolded) {
          toggleFold(triggerTransition, clickedIndex);
        } else {
          triggerTransition();
        }
      }
    }
  });
}

