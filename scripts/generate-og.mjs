import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "..", "app", "opengraph-image.png");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="orb" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#5eead4"/>
      <stop offset="100%" stop-color="#0891b2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#fafaf9"/>
  <circle cx="600" cy="315" r="220" fill="url(#orb)"/>
</svg>`;

const png = await sharp(Buffer.from(svg), { density: 144 })
  .png({ compressionLevel: 9 })
  .toBuffer();
await writeFile(out, png);
console.log(`Wrote ${out} (${png.length} bytes)`);
