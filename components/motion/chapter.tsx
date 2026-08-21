"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import ImageField, { type Shard } from "@/components/motion/image-field";
import CineMedia from "@/components/motion/cine-media";
import { videoPoster } from "@/content/media";

type Props = {
  index: number;
  label: string;
  field?: "ink" | "paper";
  /** Scroll runway in svh. Longer = the beat holds longer before it exits. */
  runway?: number;
  /**
   * Basename in /public/media/video. When present it replaces the collage
   * outright rather than layering over it — the scattered stills were standing
   * in for footage we did not have, and running both is noise.
   */
  video?: string;
  /** Decorative photographic collage, used when there is no clip. */
  media?: Shard[];
  children: ReactNode;
};

/**
 * The storytelling primitive, modelled on otsuka-air.jp's chapter structure:
 * a tall `scroll-area` that budgets scroll distance, and a `content-area` that
 * holds still while that distance passes.
 *
 * Two decisions worth keeping:
 *
 * 1. **CSS `position: sticky`, not ScrollTrigger `pin`.** Native sticky needs no
 *    pin-spacer, cannot desynchronise from Lenis, and survives resize without a
 *    refresh. ScrollTrigger is only used to read progress.
 *
 * 2. **Beats exit as well as enter.** Everything else on this site reveals with
 *    `once: true` and then sits there forever, which is exactly what made the
 *    page read as a catalogue rather than a narrative. Inside a chapter each
 *    `[data-beat]` runs in → hold → out, scrubbed to scroll position.
 *
 * Under reduced motion the runway collapses, sticky is dropped, and the chapter
 * renders as an ordinary section with every beat at its final state. §4.4
 */
export default function Chapter({
  index,
  label,
  field = "ink",
  runway = 165,
  video,
  media,
  children,
}: Props) {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const beats = gsap.utils.selector(root)("[data-beat]");
      if (!beats.length) return;

      gsap.set(beats, { yPercent: 40, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      /* Ratio matters more than the numbers. Entry and exit are deliberately
       * short and the hold is long, because this timeline is scrubbed across
       * the WHOLE section: any scroll spent entering or leaving is scroll spent
       * looking at a half-empty viewport.
       *
       * Previously 1 / 1.8 / 0.9 — the beat was not fully in until 27% of the
       * section and had left again by 76%, so roughly a third of every chapter
       * was blank. Now in by 11%, out after 89%. */
      tl.to(beats, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "expo.out",
      })
        .to({}, { duration: 3.4 }) // the hold — where the beat is actually read
        .to(beats, {
          yPercent: -22,
          opacity: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.in",
        });
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  );

  const paper = field === "paper";

  return (
    <section
      ref={root}
      aria-labelledby={`chapter-${index}`}
      // Watched by the nav, which inverts its own colours over paper. §5.2
      data-field={paper ? "paper" : undefined}
      // Watched by ChapterRail to show where in the narrative you are.
      data-chapter={index}
      className={paper ? "bg-paper text-ink" : "bg-ink text-paper"}
      style={reduced ? undefined : { height: `${runway}svh` }}
    >
      <div
        className={`relative overflow-hidden ${
          reduced
            ? "px-gutter py-section"
            : "sticky top-0 flex h-svh items-center px-gutter"
        }`}
      >
        {(video || media) && (
          <>
            {video ? (
              <CineMedia
                video={video}
                poster={videoPoster[video]}
                tint={paper ? 0.45 : 0.8}
              />
            ) : (
              <ImageField shards={media!} tint={paper ? "ink" : "depth"} />
            )}

            {/* Scrim. Footage never gets to compete with the sentence. Two
                gradients, not one: the horizontal keeps the type side solid,
                the vertical stops a bright frame washing out the eyebrow. */}
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${
                paper
                  ? "from-paper via-paper/80 to-paper/25"
                  : "from-ink via-ink/85 to-ink/40"
              }`}
            />
            {/* Ink only. On paper the horizontal scrim already carries enough
                and a second one stacks into near-white, erasing the footage. */}
            {!paper && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 to-ink/20"
              />
            )}
          </>
        )}

        <div className="relative z-10 mx-auto w-full max-w-frame">
          <p
            data-beat
            className="mb-10 flex items-center gap-4 text-micro font-medium uppercase"
          >
            <span className="text-accent">
              {String(index).padStart(2, "0")}
            </span>
            <span
              aria-hidden
              className={`h-px w-10 ${paper ? "bg-line-paper" : "bg-line"}`}
            />
            <span className={paper ? "text-muted-paper" : "text-muted"}>
              {label}
            </span>
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
