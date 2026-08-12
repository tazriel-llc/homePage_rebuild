/**
 * One-shot image pipeline. Source photography lives in the previous site at
 * full camera resolution (up to 6720px, 2.4MB a piece) — unusable as-is.
 *
 * We deploy as a static export to Firebase, so next/image cannot optimise at
 * request time. Everything is resized to WebP here instead and committed, and
 * the components use plain <img srcset>. Native, no loader config, no runtime.
 *
 * Run: node scripts/optimise-media.mjs
 */
import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "C:/project/tazrielUpdated/tazriel_webpage/public/images";
const OUT = "public/media";
const WIDTHS = [640, 1280];

/** source file -> slug used by the site */
const MAP = {
  "software-development-bg-image.jpg": "software-development",
  "it-helpdesk-bg-image.jpg": "it-helpdesk",
  "m365-bg-image.jpg": "microsoft-365-administration",
  "marketing-bg-image.jpg": "marketing-and-digital-services",
  "corporate-events-bg-image.jpg": "meetings-and-events",
  "saas-bg-image.jpg": "saas-product-support",
  "sdr-bg-image.jpg": "sales-development-representatives",
  "va-bg-image.jpg": "virtual-assistance",
  "tazriel-home-hero.webp": "data-annotation-and-ai-training",
  "success-story-image.png": "collage-01",
  "faq-hero-bg.png": "collage-02",
  "contact-us-hero-bg.png": "collage-03",
};

await mkdir(OUT, { recursive: true });

let total = 0;
for (const [file, slug] of Object.entries(MAP)) {
  const from = path.join(SRC, file);
  try {
    await stat(from);
  } catch {
    console.warn(`skip (missing): ${file}`);
    continue;
  }

  for (const w of WIDTHS) {
    const to = path.join(OUT, `${slug}-${w}.webp`);
    await sharp(from)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(to);
    total += (await stat(to)).size;
  }
  console.log(`${file}  ->  ${slug}`);
}

const files = await readdir(OUT);
console.log(
  `\n${files.length} files, ${(total / 1024).toFixed(0)}KB total ` +
    `(${(total / 1024 / files.length).toFixed(0)}KB average)`,
);
