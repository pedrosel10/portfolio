export const config = {
  // Theme
  bgColor: '#ffffff',
  textColor: '#000000',
  bgTextContent: 'PORTFÓLIO',
  bgTextSize: 12, // vw
  bgTextOpacity: 1,
  bgTextSpacing: 0, // em
  bgTextX: 50, // left %
  bgTextY: 38, // top %
  bgTextZ: -4, // z-index/depth
  
  // Animation
  foldDuration: 1.2,
  
  // Scroll
  scrollSensitivity: 0.003,
  flatScrollSensitivity: 0.01,

  // Shatter Physics
  shatterPieces: 80,
  shatterForce: 3,
  shatterGravity: 2,
  shatterDuration: 1,

  // Face Materials
  faceColor1: '#ffdddd',
  faceColor2: '#cce8b5',
  faceColor3: '#ddddff',
  transmission: 0.18,
  opacity: 1,
  metalness: 0.39,
  roughness: 0.23,
  ior: 1.91,
  thickness: 0.05,

  // Front 3D Text (BRAND)
  frontTextScaleX: 1,
  frontTextScaleY: 1,
  frontTextScaleZ: 0.6,
  frontTextColor: '#ffffff',
  frontTextEmissive: '#ffffff', // Para deixar o texto mais iluminado/claro
  frontTextEmissiveIntensity: 0.32,
  frontTextTransmission: 1,
  frontTextOpacity: 1,
  frontTextMetalness: 0,
  frontTextRoughness: 0.46,
  frontTextIor: 1.24,
  frontTextThickness: 1,
  
  // Water Reflection
  waveStrength: 0.003,
  waveSpeed: 4.8,
  
  // Text Hover Ripple
  textWaveRadius: 0.3,
  textWaveStrength: 0.003,
  textVelocitySmudge: 0.5,
  textMouseLerp: 0.08,
};
