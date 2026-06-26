import * as THREE from 'three';
import gsap from 'gsap';

export function initMouse(scene, camera, screensGroup) {
  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  
  // Point light that follows cursor
  const cursorLight = new THREE.PointLight(0xffffee, 0, 5, 2);
  scene.add(cursorLight);
  
  let targetTiltX = 0;
  let targetTiltY = 0;
  
  window.addEventListener('mousemove', (e) => {
    // Normalize mouse position: -1 to +1
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    
    // Parallax Tilt logic
    targetTiltX = mouse.y * 0.05; // Look up/down
    targetTiltY = mouse.x * 0.1;  // Look left/right
    
    gsap.to(screensGroup.rotation, {
      x: targetTiltX,
      // We don't overwrite Y completely because scrolling handles Y rotation.
      // But we can tilt the whole scene or an outer group.
      // For now, tilt X and Z on the screensGroup
      z: -mouse.x * 0.02,
      duration: 0.5,
      ease: 'power2.out'
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
      
      // Fade in light
      gsap.to(cursorLight, { intensity: 4, duration: 0.2 });
      
      // Change cursor
      document.body.style.cursor = 'pointer';
    } else {
      // Fade out light
      gsap.to(cursorLight, { intensity: 0, duration: 0.5 });
      document.body.style.cursor = 'default';
    }
  });

  // Handle clicks to trigger shatter, ignoring drags
  let startX = 0;
  let startY = 0;
  window.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
    startY = e.clientY;
  });

  window.addEventListener('pointerup', (e) => {
    const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
    if (dist > 5) return; // Ignore if it was a drag

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(screensGroup.children, true);
    const screenHit = intersects.find(hit => hit.object.userData.isScreen);
    
    if (screenHit) {
      // Dispatch custom event to the mesh
      screenHit.object.dispatchEvent({ type: 'shatter', detail: { point: screenHit.point } });
    }
  });
}

