const { createCanvas, Image } = require('canvas');
const w = 1920, h = 1080;
const bgCanvas = createCanvas(w, h);
const bgCtx = bgCanvas.getContext('2d', { alpha: false });
const config = { bgColor: '#B16B3E' };
// Mock THREE.Color
class Color {
  constructor(c) {
    // simplified
    this.r = 0.69; this.g = 0.42; this.b = 0.24;
  }
}
const color = new Color(config.bgColor);
const r = Math.round(color.r * 255);
const g = Math.round(color.g * 255);
const b = Math.round(color.b * 255);
const grad = bgCtx.createLinearGradient(0, 0, 0, h);
grad.addColorStop(0, `rgba(${r},${g},${b},0.4)`);
grad.addColorStop(0.5, `rgba(${r},${g},${b},1.0)`);
grad.addColorStop(1, `rgba(${r},${g},${b},1.0)`);
bgCtx.fillStyle = grad;
bgCtx.fillRect(0, 0, w, h);
console.log("Success! rgba values:", r, g, b);
