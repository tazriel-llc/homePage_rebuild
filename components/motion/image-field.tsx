"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export type Shard = {
  /** slug in /public/media, without the width suffix */
  src: string;
  /** position as % of the field */
  x: number;
  y: number;
  /** width in vw */
  w: number;
  /** small angles only — anything past ~5° reads as a scrapbook */
  rotate: number;
  /** 0–1. Drives parallax distance and scroll zoom. Higher = nearer = moves more. */
  depth: number;
  opacity: number;
};

type Props = {
  shards: Shard[];
  /** Which brand colour tints the duotone. */
  tint?: "depth" | "ink";
  zoom?: boolean;
};

/**
 * Scattered photographic collage behind a chapter, modelled on otsuka-air.jp.
 *
 * Three things make it work, all visible in their build:
 *
 * 1. **Everything is tinted to one colour.** They push every photo through a
 *    green duotone because green is their brand. Ours goes navy. That is what
 *    lets photography from completely different shoots read as a single set —
 *    without it, a collage of stock-looking photos is just clutter.
 * 2. **Most shards are ghosted.** Opacity mostly sits at 0.1–0.3 so type always
 *    wins. One or two shards carry full presence.
 * 3. **Depth is the organising idea.** One `depth` value drives parallax
 *    distance, mouse response, and zoom together, so near things move more.
 *
 * Purely decorative — `aria-hidden`, empty alt, `pointer-events: none`. The
 * chapter text carries all meaning. Under reduced motion nothing moves and the
 * collage renders as a still composition.
 */
export default function ImageField({
  shards,
  tint = "depth",
  zoom = true,
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const els = gsap.utils.selector(root)<HTMLElement>("[data-shard]");

      // Scroll: drift and zoom, scrubbed across the field's whole passage.
      els.forEach((el) => {
        const depth = Number(el.dataset.depth);
        gsap.to(el, {
          yPercent: -20 * depth,
          scale: zoom ? 1 + 0.2 * depth : 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      });

      // Mouse: the field leans toward the cursor. Pointer devices only.
      if (!window.matchMedia("(pointer: fine)").matches) return;

      // quickTo reuses one tween per axis instead of spawning one per event.
      // `x`/`y` are px and compose with the scroll tween's yPercent/scale.
      const setters = els.map((el) => ({
        x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
        depth: Number(el.dataset.depth),
      }));

      const onMove = (e: PointerEvent) => {
        const cx = e.clientX / window.innerWidth - 0.5;
        const cy = e.clientY / window.innerHeight - 0.5;
        for (const s of setters) {
          s.x(cx * s.depth * 90);
          s.y(cy * s.depth * 55);
        }
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      return () => window.removeEventListener("pointermove", onMove);
    },
    { scope: root, dependencies: [reduced, zoom], revertOnUpdate: true },
  );

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {shards.map((shard, i) => (
        <figure
          key={`${shard.src}-${i}`}
          data-shard
          data-depth={shard.depth}
          // `isolate` keeps the duotone blending with its own image only,
          // not with whatever else happens to sit behind the field.
          className="absolute isolate"
          style={{
            left: `${shard.x}%`,
            top: `${shard.y}%`,
            width: `${shard.w}vw`,
            // Independent `rotate` rather than a transform, so it cannot fight
            // GSAP writing to `transform` on the same element.
            rotate: `${shard.rotate}deg`,
            opacity: shard.opacity,
          }}
        >
          <img
            src={`/media/${shard.src}-1280.webp`}
            srcSet={`/media/${shard.src}-640.webp 640w, /media/${shard.src}-1280.webp 1280w`}
            sizes={`${shard.w}vw`}
            alt=""
            loading="lazy"
            decoding="async"
            className="block w-full grayscale"
          />
          <span
            className={`absolute inset-0 mix-blend-color ${
              tint === "depth" ? "bg-depth" : "bg-ink"
            }`}
          />
        </figure>
      ))}
    </div>
  );
}
