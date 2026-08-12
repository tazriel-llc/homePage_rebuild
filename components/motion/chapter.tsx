"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import ImageField, { type Shard } from "@/components/motion/image-field";

type Props = {
  index: number;
  label: string;
  field?: "ink" | "paper";
  /** Scroll runway in svh. Longer = the beat holds longer before it exits. */
  runway?: number;
  /** Decorative photographic collage behind the beat. */
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
  runway = 260,
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

      tl.to(beats, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.08,
        ease: "expo.out",
      })
        .to({}, { duration: 1.8 }) // the hold — where the beat is actually read
        .to(beats, {
          yPercent: -28,
          opacity: 0,
          duration: 0.9,
          stagger: 0.05,
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
        {media && (
          <>
            <ImageField shards={media} tint={paper ? "ink" : "depth"} />
            {/* Scrim. Photography never gets to compete with the sentence. */}
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${
                paper
                  ? "from-paper via-paper/85 to-paper/40"
                  : "from-ink via-ink/85 to-ink/40"
              }`}
            />
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
