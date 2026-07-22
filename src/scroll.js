import gsap from 'gsap';
import { isFolded, isTransitioning, scrollState, S } from './screens.js';
import { config } from './config.js';
import { state } from './state.js';

export function initScroll() {
  let isScrolling = false;
  let scrollTimeout;
  
  const anglePerPanel = (120 * Math.PI) / 180; // 120 degrees
  
  window.addEventListener('wheel', (e) => {
    if (state.activeScene && state.activeScene !== 'main') return;
    if (isTransitioning) return;
    if (isFolded) {
      // Cylinder mode
      let targetRotation = scrollState.angle + e.deltaY * config.scrollSensitivity;
      
      gsap.to(scrollState, {
        angle: targetRotation,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto'
      });
      
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        snapToNearestPanel();
      }, 150);
    } else {
      // Flat panorama mode
      let targetOffsetX = scrollState.offsetX - e.deltaY * config.flatScrollSensitivity;
      
      gsap.to(scrollState, {
        offsetX: targetOffsetX,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto'
      });
      
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        snapToNearestFlatPanel();
      }, 150);
    }
  });
  
  function snapToNearestPanel() {
    // Find the nearest multiple of 120 degrees
    const nearestSnap = Math.round(scrollState.angle / anglePerPanel) * anglePerPanel;
    
    gsap.to(scrollState, {
      angle: nearestSnap,
      duration: 1,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  }

  function snapToNearestFlatPanel() {
    // Find the nearest multiple of S
    const nearestSnapX = Math.round(scrollState.offsetX / S) * S;
    
    gsap.to(scrollState, {
      offsetX: nearestSnapX,
      duration: 1,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  }

  // --- Drag to Scroll Logic ---
  let isDragging = false;
  let lastPointerX = 0;
  let dragVelocityX = 0;
  let lastDragTime = 0;

  window.addEventListener('pointerdown', (e) => {
    if (state.activeScene && state.activeScene !== 'main') return;
    if (isTransitioning) return;
    // Only capture if on the canvas (app container) to prevent interfering with UI
    if (e.target.tagName !== 'CANVAS') return;
    isDragging = true;
    lastPointerX = e.clientX;
    dragVelocityX = 0;
    clearTimeout(scrollTimeout);
  });

  window.addEventListener('pointermove', (e) => {
    if (state.activeScene && state.activeScene !== 'main') {
      isDragging = false;
      return;
    }
    if (isTransitioning) {
      isDragging = false;
      return;
    }
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastPointerX;
    const now = performance.now();
    const dt = Math.max(1, now - lastDragTime);
    
    // Calculate velocity for inertia
    dragVelocityX = deltaX / dt;
    
    // Drag sensitivity
    const dragSens = 0.006;
    
    if (isFolded) {
      // Cylinder mode — direct assignment for immediate 1:1 response
      scrollState.angle += deltaX * dragSens;
    } else {
      // Flat panorama mode — direct assignment for immediate 1:1 response
      scrollState.offsetX += deltaX * dragSens * 5;
    }
    
    lastPointerX = e.clientX;
    lastDragTime = now;
  });

  const endDrag = () => {
    if (state.activeScene && state.activeScene !== 'main') return;
    if (!isDragging) return;
    isDragging = false;
    
    const dragSens = 0.006;
    const inertiaForce = 150; // Menor inércia para ficar mais "gripado" na posição desejada
    
    if (isFolded) {
      // Calculate where the inertia WOULD land
      const projectedRotation = scrollState.angle + (dragVelocityX * dragSens * inertiaForce); 
      // Snap that projected destination to the nearest panel
      const nearestSnap = Math.round(projectedRotation / anglePerPanel) * anglePerPanel;
      
      gsap.to(scrollState, {
        angle: nearestSnap,
        duration: 0.4, // Mais rápido, sensação magnética
        ease: 'power4.out',
        overwrite: 'auto'
      });
    } else {
      // Corrigida a direção invertida (+ em vez de -)
      const projectedOffsetX = scrollState.offsetX + (dragVelocityX * dragSens * 5 * inertiaForce);
      const nearestSnapX = Math.round(projectedOffsetX / S) * S;
      
      gsap.to(scrollState, {
        offsetX: nearestSnapX,
        duration: 0.4, // Mais rápido, sensação magnética
        ease: 'power4.out',
        overwrite: 'auto'
      });
    }
  };

  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointerleave', endDrag);
}
