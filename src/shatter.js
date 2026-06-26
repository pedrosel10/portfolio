import * as THREE from 'three';
import gsap from 'gsap';

export function setupShatterInteraction(mesh, group) {
  let isTransitioning = false;
  let isOpen = false;
  
  // Custom event listener for the click transition
  mesh.addEventListener('shatter', (event) => {
    if (isTransitioning || isOpen) return;
    isTransitioning = true;
    
    const scene = mesh.scene || getScene(mesh);
    const camera = getCamera(scene);
    
    // Save original parent
    const originalParent = mesh.parent;
    mesh.userData.originalParent = originalParent;
    
    // Detach from rotating group and attach to scene to maintain world transform
    scene.attach(mesh);
    
    // Calculate target position in front of camera
    // We want it to be perfectly flat and centered
    const targetPos = new THREE.Vector3(0, 0, camera.position.z - 2.5); 
    const targetRot = new THREE.Euler(0, 0, 0);
    
    // We want the mesh to scale up to cover the whole viewport
    // The panel has an original scale of 1, 1, 1, but its geometry width is around 6
    // So scale 3.2 is enough for a beautiful zoom without stretching the texture too much
    const targetScale = new THREE.Vector3(3.5, 3.5, 1);
    
    // Hide other panels
    const allPanels = originalParent.parent.children;
    allPanels.forEach(panel => {
      if (panel !== originalParent) {
        if (!panel.userData.origScale) panel.userData.origScale = panel.scale.clone();
        gsap.to(panel.scale, { x: 0, y: 0, z: 0, duration: 0.8, ease: "power3.inOut" });
      }
    });
    
    // Animate the clicked panel to become the portal background
    gsap.to(mesh.position, {
      x: targetPos.x, y: targetPos.y, z: targetPos.z,
      duration: 1.2, ease: "power3.inOut"
    });
    gsap.to(mesh.rotation, {
      x: targetRot.x, y: targetRot.y, z: targetRot.z,
      duration: 1.2, ease: "power3.inOut"
    });
    gsap.to(mesh.scale, {
      x: targetScale.x, y: targetScale.y, z: targetScale.z,
      duration: 1.2, ease: "power3.inOut",
      onComplete: () => {
        isTransitioning = false;
        isOpen = true;
        
        // Show HTML Portfolio View
        const portfolioView = document.getElementById('portfolio-view');
        portfolioView.style.display = 'block';
        portfolioView.style.pointerEvents = 'auto';
        gsap.to(portfolioView, { opacity: 1, duration: 0.5 });
      }
    });

    // Wire up close button
    const closeBtn = document.getElementById('close-portfolio');
    closeBtn.onclick = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      
      const portfolioView = document.getElementById('portfolio-view');
      portfolioView.style.pointerEvents = 'none';
      
      // Fade out HTML
      gsap.to(portfolioView, { 
        opacity: 0, 
        duration: 0.4, 
        onComplete: () => {
          portfolioView.style.display = 'none';
          
          // Re-attach to the original group (it will snap to local coordinates, but we want it smooth)
          // To make it smooth, we use attach again so it keeps its world transform,
          // then we animate its LOCAL transform back to 0,0,0
          originalParent.attach(mesh);
          
          gsap.to(mesh.position, { x: 0, y: 0, z: 0, duration: 1.2, ease: "power3.inOut" });
          gsap.to(mesh.rotation, { x: 0, y: 0, z: 0, duration: 1.2, ease: "power3.inOut" });
          gsap.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 1.2, ease: "power3.inOut",
            onComplete: () => {
              isTransitioning = false;
              isOpen = false;
            }
          });
          
          // Show other panels
          allPanels.forEach(panel => {
            if (panel !== originalParent && panel.userData.origScale) {
              gsap.to(panel.scale, { 
                x: panel.userData.origScale.x, 
                y: panel.userData.origScale.y, 
                z: panel.userData.origScale.z, 
                duration: 1.2, ease: "power3.inOut" 
              });
            }
          });
        }
      });
    };
  });
}

function getScene(obj) {
  if (obj.type === 'Scene') return obj;
  if (obj.parent) return getScene(obj.parent);
  return null;
}

function getCamera(scene) {
  // Hacky way to find the perspective camera, assuming it's a child of scene
  let cam = null;
  scene.traverse((child) => {
    if (child.isPerspectiveCamera) cam = child;
  });
  return cam;
}
