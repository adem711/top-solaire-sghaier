// Builds the Open Graph images (1200×630) for each locale from the hero photo + logo.
// Run after prepare-images: npm run og
import { mkdir, readdir, readFile } from "node:fs/promises";
import sharp from "sharp";

const W = 1200;
const H = 630;
// Hero photo = first file of Project 6 (filenames are content-hashed, see prepare-images.mjs).
const heroDir = "public/images/projects/residentiel-4-kwc-2022-12";
const photo = `${heroDir}/${(await readdir(heroDir)).filter((f) => f.endsWith(".jpg")).sort()[0]}`;
const logo = await readFile("public/brand/logo-horizontal-on-dark.svg");

const copy = {
  fr: { dir: "ltr", lines: ["Produisez votre propre", "électricité."], sub: "Représentant agréé ANME · Depuis 2015 · 150+ installations" },
  ar: { dir: "rtl", lines: ["طاقتك من الشمس…", "وراحتك مضمونة."], sub: "ممثّل معتمد من ANME · من 2015 · أكثر من 150 تركيب" },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

await mkdir("public/og", { recursive: true });

for (const [locale, c] of Object.entries(copy)) {
  const rtl = c.dir === "rtl";
  const x = rtl ? W - 64 : 64;
  // With direction="rtl", librsvg treats "start" as the right edge.
  const anchor = "start";
  const overlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="${rtl ? 1 : 0}" y1="0" x2="${rtl ? 0 : 1}" y2="0">
      <stop offset="0" stop-color="#1F2F46" stop-opacity="0.96"/>
      <stop offset="0.55" stop-color="#1F2F46" stop-opacity="0.78"/>
      <stop offset="1" stop-color="#1F2F46" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="${rtl ? W - 64 - 48 : 64}" y="250" width="48" height="5" rx="2.5" fill="#E4702A"/>
  ${c.lines
    .map(
      (l, i) =>
        `<text x="${x}" y="${330 + i * 72}" text-anchor="${anchor}" direction="${c.dir}" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="64" fill="#FFFFFF">${esc(l)}</text>`,
    )
    .join("")}
  <text x="${x}" y="${330 + c.lines.length * 72 + 20}" text-anchor="${anchor}" direction="${c.dir}" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="26" fill="#F5A53A">${esc(c.sub)}</text>
</svg>`);

  const logoPng = await sharp(logo, { density: 200 }).resize({ height: 64 }).png().toBuffer();
  const { width: lw } = await sharp(logoPng).metadata();

  await sharp(photo)
    .resize(W, H, { fit: "cover", position: "centre" })
    .composite([
      { input: overlay, top: 0, left: 0 },
      { input: logoPng, top: 64, left: rtl ? W - 64 - lw : 64 },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`public/og/og-${locale}.jpg`);
  console.log(`public/og/og-${locale}.jpg`);
}
