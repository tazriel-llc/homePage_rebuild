"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  index: number;
  label: string;
  tag?: string;
  coords?: string;
  field?: "ink" | "paper";
  /** Scroll runway in vh. Each chapter sticks while scrolling through its runway. */
  runway?: number;
  children: ReactNode;
};

/**
 * Chapter — Cinematic Narrative Canvas.
 *
 * Designed for high-production, bespoke storytelling:
 * - Pinned layered stacking (Sheet-over-Sheet): Chapter 2 slides over 1, 3 over 2, 4 over 3.
 * - Zero blank screens: Previous chapter remains fully visible until the next slides over it.
 * - Full-width architectural canvas: Replaces generic side-by-side [text | box] layouts
 *   with bespoke, creative, room-commanding telemetry and typography.
 */
export default function Chapter({
  index,
  label,
  tag = "OPERATIONAL PRINCIPLE",
  coords = "01 // ATTENTION ARCHITECTURE",
  field = "ink",
  runway = 140,
  children,
}: Props) {
  const root = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const paper = field === "paper";

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const beats = gsap.utils.selector(root)("[data-beat]");
      if (!beats.length) return;

      // Elegant entrance reveal on approach
      gsap.from(beats, {
        y: 28,
        opacity: 0.35,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      aria-labelledby={`chapter-${index}`}
      data-field={paper ? "paper" : undefined}
      data-chapter={index}
      className={`relative w-full ${paper ? "bg-paper text-ink" : "bg-ink text-paper"}`}
      style={
        reduced
          ? undefined
          : {
              height: `${runway}vh`,
              zIndex: index * 10,
            }
      }
    >
      {/* Pinned Viewport Container — Sticks at top: 0 with seamless layer stacking */}
      <div
        ref={canvasRef}
        className={`w-full overflow-hidden ${
          reduced
            ? "px-gutter py-section"
            : `sticky top-0 flex h-screen items-center justify-center px-gutter py-12 sm:py-16 ${
                paper ? "bg-paper text-ink" : "bg-ink text-paper"
              } shadow-[0_-20px_50px_rgba(0,0,0,0.35)]`
        }`}
      >
        {/* Background Ambient Depth Bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-1/4 size-[50vw] rounded-full opacity-15 blur-[140px]"
          style={{
            background: paper
              ? "radial-gradient(circle, var(--color-depth) 0%, transparent 70%)"
              : "radial-gradient(circle, var(--color-depth) 0%, transparent 65%)",
          }}
        />

        {/* Colossal Ghost Numeral */}
        <span
          aria-hidden
          className={`pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none font-display text-[28vw] leading-none ${
            paper ? "text-ink/[0.035]" : "text-paper/[0.035]"
          }`}
        >
          0{index}
        </span>

        {/* Architectural Framing Elements */}
        <div className="pointer-events-none absolute inset-x-gutter top-6 sm:top-8 flex items-center justify-between border-b pb-3 font-mono text-micro z-20 select-none">
          <div className="flex items-center gap-3">
            <span className="text-accent font-semibold">0{index} // CHAPTER</span>
            <span
              className={`h-px w-6 ${paper ? "bg-line-paper" : "bg-line"}`}
            />
            <span className={paper ? "text-muted-paper" : "text-muted"}>
              {label}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <span className="text-accent">{coords}</span>
            <span className="size-1 rounded-full bg-accent" />
            <span className={paper ? "text-muted-paper" : "text-muted"}>
              {tag}
            </span>
          </div>
        </div>

        {/* Dynamic Architectural Canvas — Full Creative Space */}
        <div className="relative z-10 mx-auto w-full max-w-frame pt-6 sm:pt-8">
          {children}
        </div>
      </div>
    </section>
  );
}
