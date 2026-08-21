/**
 * Screenshot + DOM-probe harness. Dev tooling, never shipped.
 *
 * Drives the installed Chrome via puppeteer-core, so there is no browser
 * download. Exists because motion bugs (off-centre perspective origin, layers
 * blowing past the perspective plane, captions out of sync with geometry) are
 * invisible when reading source and obvious when measuring the rendered page.
 *
 * Sections size themselves from `useIsDesktop`, which is false during SSR and
 * flips after hydration — the page grows a lot after load. Everything is
 * measured only once height has been stable across two checks.
 *
 * Usage:
 *   node scripts/shoot.mjs <url> <outPrefix> sel:<css> <pct> [pct...]
 *   node scripts/shoot.mjs <url> <outPrefix> <px> [px...]
 *   node scripts/shoot.mjs <url> --map            list sections with offsets
 */
import puppeteer from "puppeteer-core";

const CHROME =
  process.env.CHROME_PATH ??
  "C:/Program Files/Google/Chrome/Application/chrome.exe";

const [, , url, prefix, ...rest] = process.argv;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push(String(e)));

await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

let stable = -1;
for (let i = 0; i < 20; i++) {
  await new Promise((r) => setTimeout(r, 500));
  const h = await page.evaluate(() => document.body.scrollHeight);
  if (h === stable) break;
  stable = h;
}
console.log(`height ${stable}px (${(stable / 900).toFixed(1)} viewports)`);

if (prefix === "--map") {
  const rows = await page.evaluate(() =>
    [...document.querySelectorAll("main > section, main > div > section")].map(
      (el, i) => {
        const b = el.getBoundingClientRect();
        return {
          i,
          top: Math.round(b.top + window.scrollY),
          h: Math.round(b.height),
          vh: +(b.height / window.innerHeight).toFixed(1),
          text: (el.textContent || "").trim().slice(0, 34),
        };
      },
    ),
  );
  console.table(rows);
  await browser.close();
  process.exit(0);
}

let targets;
if (rest[0]?.startsWith("sel:")) {
  const sel = rest[0].slice(4);
  const geo = await page.evaluate((s) => {
    const el = document.querySelector(s);
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return { top: Math.round(b.top + window.scrollY), h: Math.round(b.height) };
  }, sel);
  if (!geo) throw new Error(`selector not found: ${sel}`);
  console.log(`section ${sel}: top=${geo.top} h=${geo.h}`);
  const range = geo.h - 900;
  targets = rest
    .slice(1)
    .map((f) => ({ label: f, y: geo.top + Math.round((+f / 100) * range) }));
} else {
  targets = rest.map((p) => ({ label: p, y: +p }));
}

for (const { label, y } of targets) {
  await page.evaluate((v) => window.scrollTo(0, v), y);
  // Lenis lerps and ScrollTrigger scrubs; both need time to land.
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: `${prefix}-${label}.png` });
  console.log(`  ${prefix}-${label}.png @ ${y}px`);
}

console.log(
  errors.length
    ? "errors:\n  " + [...new Set(errors)].slice(0, 6).join("\n  ")
    : "no console errors",
);

await browser.close();
