@AGENTS.md

# Tazriel — redesign

Luxury repositioning of tazriel.com. Global BPO, Springfield IL, delivery from
Addis Ababa expanding into North Macedonia. Full spec: `docs/PRD.md`.

Stack: Next 16 (App Router, Turbopack) · React 19 · Tailwind v4 · GSAP 3.15 +
`@gsap/react` · Lenis. Static export → Firebase Hosting.

## Measure the page, do not read the source

`node scripts/shoot.mjs <url> <prefix> sel:<css> <pct>...` screenshots at scroll
positions; `--map` lists every section's offset, height, and viewport count.
Drives installed Chrome via `puppeteer-core` (devDep, ships nothing).

Motion bugs are invisible in source and obvious when measured. Five real ones
survived multiple source reviews and died in one probe: perspective origin
aimed at x=996 instead of 720, a passed 3D layer painting at 119682×73921,
a caption one layer ahead of the geometry, six layers occluding into one flat
card, and a grain overlay turning every paper section into grey static.

**Before claiming any visual or motion change works, screenshot it.**

## Copy rules — non-negotiable

Banned sitewide: *affordable, cheap, low-cost, cost-effective, budget, save
money, competitive rates, offshore*, and every currency figure. The old site
led on price; that is the whole thing being fixed.

`24/7` appears ONLY in a service page `spec` block. Never a headline, hero, or
meta description. No exclamation marks anywhere.

Never ship invented names, faces, logos, client outcomes, or certifications.
Team photography and named specialists are outstanding content dependencies
(PRD §13) — sections ship honest and typographic until real ones arrive.

## Design system

Brand palette is retained; only the ratio changed. Tokens in `app/globals.css`.

- `--color-ink` #020035 — dominant ground, ~55%
- `--color-paper` #F4F1EC — warm neutral, ~40%. The warm/cold contrast is the
  primary luxury signal
- `--color-depth` #2100b1 — ambient bloom inside ink ONLY. Never text, border,
  or fill. Used as a photo tint once and every photograph turned electric violet
- `--color-accent` #ed4c00 — ≤1% of visible ink. Hairlines, eyebrow labels,
  hover underlines, indicator dots. **Never a filled orange button**

No `box-shadow`. No `backdrop-blur` frosted glass. No gradient orbs or blobs.
Structure comes from hairlines and the ink/paper contrast.

Type: Instrument Serif (display, never bolded) + Inter (text). Body capped at
68ch via `.measure`. Curly quotes, em dashes, proper ellipses.

Photography: grayscale + `bg-ink/75 mix-blend-color`, isolated per figure. That
single duotone is what makes unrelated shoots read as one body of work.

## Motion

- **CSS `position: sticky`, never ScrollTrigger `pin`.** No pin-spacer, cannot
  desync from Lenis, survives resize. ScrollTrigger only reads progress.
- **Beats exit as well as enter.** `once: true` reveals that arrive and sit
  forever are what made this read as a catalogue instead of a narrative.
- Scrubbed timelines: short in, long hold, short out. `in(1)/hold(1.8)/out(0.9)`
  left a third of every chapter blank; `0.5/3.4/0.5` does not.
- Transform and opacity only. Banned: `back`/`elastic` eases, bounce, counting
  numbers, rotation past 3° on flat elements.
- Gate layout AND animation on `isDesktop && !reduced`. Gating only the
  animation leaves absolutely-stacked panels piled on top of each other.
- `prefers-reduced-motion` is a first-class path, not a degradation. Verify it.

## Structure

`content/` holds all copy — `site.ts`, `service-content.ts`, `media.ts`.
Sections stay presentational.

Every URL from the old site is preserved exactly; `/[service]` covers all nine
slugs with a `notFound()` guard. Do not rename routes.

Six video slots (`content/media.ts`) map to the narrative spine: entrance, four
chapters, closing. `undefined` is a valid shipping state — each renders its
poster still. Never point a slot at a file that does not exist.

## Gotchas

- `npm run build` corrupts the Turbopack dev cache. Always `rm -rf .next`
  before restarting `next dev`, or fonts fail with
  `Can't resolve '@vercel/turbopack-next/internal/font/google/font'`.
- Only one `next dev` at a time; a second exits 1 and the first keeps the port.
- `<html>` carries `suppressHydrationWarning` — browser extensions stamp
  attributes on it before React hydrates. Genuine mismatches inside the tree
  still surface.
- Backticks inside a `git commit -m "…"` message get shell-expanded. Use a
  heredoc with `-F -`.
