import type { Shard } from "@/components/motion/image-field";

/**
 * Collage compositions, one per chapter.
 *
 * Layout rules, all learned from the otsuka-air.jp screenshots:
 * - Shards sit right of ~45%, because the scrim is opaque on the left where the
 *   type lives. Nothing competes with the sentence.
 * - Rotation stays inside ±5°. Past that it stops reading as considered and
 *   starts reading as a scrapbook.
 * - Opacity mostly 0.15–0.35. One shard per chapter is allowed real presence.
 * - `depth` rises toward the viewer: near shards are larger, more opaque, and
 *   move furthest on both mouse and scroll.
 * - Some shards deliberately run past 85% so they bleed off the right edge.
 */

/** 01 — the work, and the people already doing all of it. */
export const stakesMedia: Shard[] = [
  { src: "it-helpdesk", x: 54, y: 16, w: 30, rotate: -3, depth: 0.8, opacity: 0.5 },
  { src: "software-development", x: 78, y: 52, w: 23, rotate: 2, depth: 1, opacity: 0.34 },
  { src: "meetings-and-events", x: 43, y: 62, w: 18, rotate: 4, depth: 0.5, opacity: 0.2 },
  { src: "microsoft-365-administration", x: 88, y: 6, w: 17, rotate: -2, depth: 0.35, opacity: 0.16 },
];

/** 02 — scattered and thinner, because this is the chapter about it going wrong. */
export const problemMedia: Shard[] = [
  { src: "saas-product-support", x: 57, y: 8, w: 26, rotate: 3, depth: 0.9, opacity: 0.28 },
  { src: "it-helpdesk", x: 80, y: 38, w: 25, rotate: -4, depth: 1, opacity: 0.22 },
  { src: "marketing-and-digital-services", x: 49, y: 66, w: 20, rotate: -2, depth: 0.6, opacity: 0.15 },
  { src: "virtual-assistance", x: 90, y: 74, w: 16, rotate: 5, depth: 0.4, opacity: 0.13 },
];

/** 03 — the turn. Two shards, both clear. Clarity is the point of this chapter. */
export const mechanismMedia: Shard[] = [
  { src: "software-development", x: 58, y: 18, w: 33, rotate: -2, depth: 0.9, opacity: 0.5 },
  { src: "data-annotation-and-ai-training", x: 84, y: 58, w: 21, rotate: 3, depth: 0.6, opacity: 0.28 },
];

/** 04 — the answer. Fullest composition on the page, and the most confident. */
export const answerMedia: Shard[] = [
  { src: "it-helpdesk", x: 53, y: 10, w: 28, rotate: -3, depth: 0.85, opacity: 0.55 },
  { src: "software-development", x: 76, y: 44, w: 24, rotate: 2, depth: 1, opacity: 0.42 },
  { src: "meetings-and-events", x: 47, y: 60, w: 20, rotate: 4, depth: 0.55, opacity: 0.28 },
  { src: "microsoft-365-administration", x: 88, y: 12, w: 18, rotate: -5, depth: 0.4, opacity: 0.22 },
  { src: "saas-product-support", x: 66, y: 78, w: 16, rotate: 2, depth: 0.7, opacity: 0.18 },
];

/** Hero — restrained. It is the first thing seen, not the loudest. */
export const heroMedia: Shard[] = [
  { src: "it-helpdesk", x: 62, y: 20, w: 26, rotate: -2, depth: 0.7, opacity: 0.28 },
  { src: "software-development", x: 84, y: 56, w: 20, rotate: 3, depth: 1, opacity: 0.2 },
  { src: "meetings-and-events", x: 55, y: 70, w: 15, rotate: -4, depth: 0.45, opacity: 0.14 },
];
