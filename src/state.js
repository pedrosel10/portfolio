/**
 * Centralized application state — replaces window.* globals
 * for better debugging and encapsulation.
 */
export const state = {
  activeScene: 'main',  // 'main' | 'gallery'
  clickedMesh: null,     // Reference to currently clicked gallery mesh
};
