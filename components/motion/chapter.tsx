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
      const canvas = canvasRef.current;
      const media = root.current.querySelector("[data-parallax-img]");

      // 1. Kinetic staggered entrance reveal on approach (from cinematic-scroll-storytelling skill)
      if (beats.length) {
        gsap.fromTo(
          beats,
          { y: 32, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root.current,
              start: "top 75%",
              once: true,
            },
          },
        );
      }

      // 2. Parallax drift on the photography plate
      if (media) {
        gsap.fromTo(
          media,
          { yPercent: -8, scale: 1.08 },
          {
            yPercent: 8,
            scale: 1.0,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      }

      // 3. Receding Card Stack Depth (from cinematic-scroll-storytelling skill)
      // As the user scrolls past this card towards the next, this card subtly
      // scales down, dims, and recedes to give luxurious physical sheet depth.
      if (canvas && index < 4) {
        gsap.to(canvas, {
          scale: 0.94,
          opacity: 0.65,
          y: -24,
          filter: "blur(3px)",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "bottom 100%",
            end: "bottom 0%",
            scrub: true,
          },
        });
      }
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
        className={`w-full overflow-hidden will-change-transform ${
          reduced
            ? "px-gutter py-section"
            : `sticky top-0 flex h-screen items-center justify-center px-gutter py-12 sm:py-16 ${
                paper ? "bg-paper text-ink" : "bg-ink text-paper"
              } shadow-[0_-25px_60px_rgba(0,0,0,0.45)]`
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
            paper ? "text-ink/[0.04]" : "text-paper/[0.04]"
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

        {/* Left Vertical Chapter Indicator */}
        <div className="pointer-events-none absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 font-mono text-[11px] z-20 select-none">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <span
                className={`h-px transition-all duration-300 ${
                  n === index
                    ? `w-5 bg-accent`
                    : `w-2 ${paper ? "bg-ink/20" : "bg-paper/20"}`
                }`}
              />
              <span
                className={
                  n === index
                    ? "text-accent font-semibold"
                    : paper
                    ? "text-muted-paper/50"
                    : "text-muted/40"
                }
              >
                0{n}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Architectural Canvas — Full Creative Space */}
        <div className="relative z-10 mx-auto w-full max-w-frame pt-6 sm:pt-8">
          {children}
        </div>
      </div>
    </section>
  );
}
