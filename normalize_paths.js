const fs = require('fs');

const svg1 = `<path id="Vector" d="M0 12.5H120.21" />
<path id="Vector_2" d="M49.75 119.41H169.97" />
<path id="Vector_3" d="M24.8701 65.96H145.09" />`;

const svg2 = `<path id="Vector" d="M17.28 111.1C14.19 103.04 12.5 94.28 12.5 85.13C12.5 45.02 45.02 12.5 85.13 12.5H85.41" />
<path id="Vector_2" d="M22.1899 121.41C34.7499 143.14 58.2299 157.77 85.1299 157.77C108.45 157.77 129.21 146.77 142.49 129.68" />
<path id="Vector_3" d="M96.64 13.4C131.28 18.92 157.76 48.94 157.76 85.13C157.76 98.25 154.28 110.56 148.2 121.18" />`;

const svg3 = `<path id="Vector" d="M119.4 0V136.44" />
<path id="Vector_2" d="M12.5 0V136.44" />
<path id="Vector_3" d="M65.95 0V136.44" />`;

const svg4 = `<path id="Vector" d="M12.5 12.5V132.72" />
<path id="Vector_2" d="M132.71 12.5V132.72" />
<path id="Vector_3" d="M12.5 12.5H132.71" />`;

// Utility to convert H/V to C or straight lines to C
function convertTo3C(dStr) {
    // 1. parse
    // M x y
    const mMatch = dStr.match(/M\s*([\d\.]+)\s+([\d\.]+)/);
    let startX = parseFloat(mMatch[1]);
    let startY = parseFloat(mMatch[2]);
    let d = dStr.replace(mMatch[0], '').trim();
    
    let segments = [];
    let curX = startX;
    let curY = startY;
    
    const tokenRe = /([A-Z])([^A-Z]*)/gi;
    let tokens = [];
    let match;
    while((match = tokenRe.exec(d)) !== null) {
        tokens.push({ cmd: match[1], args: match[2].trim().split(/[\s,]+/).map(parseFloat) });
    }
    
    tokens.forEach(t => {
        if (t.cmd === 'H') {
            const x = t.args[0];
            segments.push(`C ${curX} ${curY}, ${x} ${curY}, ${x} ${curY}`);
            curX = x;
        } else if (t.cmd === 'V') {
            const y = t.args[0];
            segments.push(`C ${curX} ${curY}, ${curX} ${y}, ${curX} ${y}`);
            curY = y;
        } else if (t.cmd === 'C') {
            const [x1, y1, x2, y2, x, y] = t.args;
            segments.push(`C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`);
            curX = x;
            curY = y;
        }
    });
    
    // pad to 3 segments with zero-length curves if needed
    while (segments.length < 3) {
        segments.push(`C ${curX} ${curY}, ${curX} ${curY}, ${curX} ${curY}`);
    }
    
    return `M ${startX} ${startY} ${segments.join(' ')}`;
}

console.log("faces_abertas:");
console.log("1:", convertTo3C("M0 12.5H120.21"));
console.log("2:", convertTo3C("M49.75 119.41H169.97"));
console.log("3:", convertTo3C("M24.8701 65.96H145.09"));

console.log("faces_redondas:");
console.log("1:", convertTo3C("M17.28 111.1C14.19 103.04 12.5 94.28 12.5 85.13C12.5 45.02 45.02 12.5 85.13 12.5H85.41"));
console.log("2:", convertTo3C("M22.1899 121.41C34.7499 143.14 58.2299 157.77 85.1299 157.77C108.45 157.77 129.21 146.77 142.49 129.68"));
console.log("3:", convertTo3C("M96.64 13.4C131.28 18.92 157.76 48.94 157.76 85.13C157.76 98.25 154.28 110.56 148.2 121.18"));

console.log("voltar_pra_tela_inicial:");
console.log("1:", convertTo3C("M119.4 0V136.44"));
console.log("2:", convertTo3C("M12.5 0V136.44"));
console.log("3:", convertTo3C("M65.95 0V136.44"));

console.log("voltar_pro_grid:");
console.log("1:", convertTo3C("M12.5 12.5V132.72"));
console.log("2:", convertTo3C("M132.71 12.5V132.72"));
console.log("3:", convertTo3C("M12.5 12.5H132.71"));

