// One-time script to convert PDF map sheets to WebP preview images
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { createCanvas } = require("canvas");
const sharp = require("sharp");
const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.mjs");
const fs = require("fs");
const path = require("path");

async function convertPdfToWebp(pdfPath, outputPath, targetWidth = 800) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  const page = await pdf.getPage(1);

  const viewport = page.getViewport({ scale: 1 });
  const scale = targetWidth / viewport.width;
  const scaledViewport = page.getViewport({ scale });

  const canvas = createCanvas(scaledViewport.width, scaledViewport.height);
  const ctx = canvas.getContext("2d");

  await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;

  const pngBuffer = canvas.toBuffer("image/png");
  await sharp(pngBuffer)
    .webp({ quality: 80 })
    .toFile(outputPath);

  console.log(`Created ${outputPath} (${Math.round(fs.statSync(outputPath).size / 1024)}KB)`);
}

const publicDir = path.join(process.cwd(), "public");

await convertPdfToWebp(
  path.join(publicDir, "mason-county-map-sheet1.pdf"),
  path.join(publicDir, "mason-county-map-sheet1-preview.webp"),
  1200
);

await convertPdfToWebp(
  path.join(publicDir, "mason-county-map-sheet2.pdf"),
  path.join(publicDir, "mason-county-map-sheet2-preview.webp"),
  1200
);

console.log("Done!");
