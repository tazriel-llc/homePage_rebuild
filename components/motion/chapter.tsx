"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  index: number;
  label: string;
  tag?: string;
  image?: string;
  coords?: string;
  field?: "ink" | "paper";
  /** Scroll runway in svh. Longer = the beat holds longer before it exits. */
  runway?: number;
  children: ReactNode;
};

/**
 * Chapter — Narrative Storytelling Primitive.
 *
 * Upgraded from short looping videos to an architectural, scroll-driven visual portal
 * (inspired by InterGest Canada & Spectup):
 *
 * - Left: Editorial narrative typography with enter -> hold -> exit scrub.
 * - Right: Framed architectural photographic portal with scroll-driven parallax drift (no short video loops!).
 * - Ambient background: Subtle depth bloom and colossal ghost numeral.
 * - Native CSS sticky ensures zero desync with Lenis.
 */
export default function Chapter({
  index,
  label,
  tag = "OPERATIONAL PRINCIPLE",
  image = "it-helpdesk",
  coords = "01 // ATTENTION ARCHITECTURE",
  field = "ink",
  runway = 175,
  children,
}: Props) {
  const root = useRef<HTMLElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const beats = gsap.utils.selector(root)("[data-beat]");
      const portal = portalRef.current;
      const img = imgRef.current;
      if (!beats.length) return;

      gsap.set(beats, { yPercent: 35, opacity: 0 });
      if (portal) {
        gsap.set(portal, { opacity: 0, scale: 0.94 });
      }
      if (img) {
        gsap.set(img, { scale: 1.15, yPercent: 5 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // ── Entrance (10% of runway) ───────────────────────────────────
      tl.to(
        beats,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "expo.out",
        },
        0,
      );

      if (portal) {
        tl.to(
          portal,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "expo.out",
          },
          0,
        );
      }

      // ── Hold & Parallax (75% of runway) ───────────────────────────
      tl.to({}, { duration: 3.2 }); // Hold for deep reading

      if (img) {
        // Scroll-driven parallax drift on the photograph instead of video loop!
        tl.to(
          img,
          {
            yPercent: -8,
            scale: 1.04,
            duration: 4.2,
            ease: "none",
          },
          0,
        );
      }

      // ── Exit (15% of runway) ───────────────────────────────────────
      tl.to(
        beats,
        {
          yPercent: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.in",
        },
        3.7,
      );

      if (portal) {
        tl.to(
          portal,
          {
            opacity: 0,
            scale: 0.96,
            duration: 0.5,
            ease: "power2.in",
          },
          3.7,
        );
      }
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  );

  const paper = field === "paper";

  return (
    <section
      ref={root}
      aria-labelledby={`chapter-${index}`}
      data-field={paper ? "paper" : undefined}
      data-chapter={index}
      className={`relative ${paper ? "bg-paper text-ink" : "bg-ink text-paper"}`}
      style={reduced ? undefined : { height: `${runway}svh` }}
    >
      <div
        className={`relative overflow-hidden ${
          reduced
            ? "px-gutter py-section"
            : "sticky top-0 flex h-svh items-center px-gutter"
        }`}
      >
        {/* Background Ambient Depth Bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-1/4 size-[45vw] rounded-full opacity-15 blur-[120px]"
          style={{
            background: paper
              ? "radial-gradient(circle, var(--color-depth) 0%, transparent 70%)"
              : "radial-gradient(circle, var(--color-depth) 0%, transparent 65%)",
          }}
        />

        {/* Colossal Ghost Numeral */}
        <span
          aria-hidden
          className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-display text-[25vw] leading-none ${
            paper ? "text-ink/[0.04]" : "text-paper/[0.04]"
          }`}
        >
          0{index}
        </span>

        {/* Main 12-Column Grid */}
        <div className="relative z-10 mx-auto w-full max-w-frame">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Narrative Headline & Body */}
            <div className="lg:col-span-7">
              <div
                data-beat
                className="mb-8 flex flex-wrap items-center gap-3 text-micro font-medium uppercase tracking-[0.2em]"
              >
                <span className="font-mono text-accent">
                  0{index} // CHAPTER
                </span>
                <span
                  aria-hidden
                  className={`h-px w-6 ${paper ? "bg-line-paper" : "bg-line"}`}
                />
                <span className={paper ? "text-muted-paper" : "text-muted"}>
                  {label}
                </span>
              </div>

              {children}
            </div>

            {/* Right Column: Architectural Photographic Portal */}
            <div className="hidden lg:col-span-5 lg:block">
              <div
                ref={portalRef}
                className={`relative aspect-[4/5] w-full max-w-md overflow-hidden border ${
                  paper
                    ? "border-line-paper bg-paper-sunk"
                    : "border-line bg-ink-raised"
                } shadow-2xl`}
              >
                {/* Top Corner Meta */}
                <div
                  className={`flex items-center justify-between border-b px-5 py-3 font-mono text-micro ${
                    paper
                      ? "border-line-paper text-muted-paper"
                      : "border-line/60 text-muted"
                  }`}
                >
                  <span className="text-accent">{coords}</span>
                  <span>{tag}</span>
                </div>

                {/* Parallax Image Plate */}
                <div className="relative size-full overflow-hidden">
                  <img
                    ref={imgRef}
                    src={`/media/${image}-1280.webp`}
                    srcSet={`/media/${image}-640.webp 640w, /media/${image}-1280.webp 1280w`}
                    sizes="(max-width: 1024px) 100vw, 420px"
                    alt=""
                    className="size-full object-cover grayscale"
                  />
                  {/* Duotone tint overlay */}
                  <span
                    className={`absolute inset-0 mix-blend-color ${
                      paper ? "bg-paper/50" : "bg-ink/75"
                    }`}
                  />
                  <span
                    className={`absolute inset-0 ${
                      paper
                        ? "bg-gradient-to-t from-paper/80 via-transparent to-transparent"
                        : "bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"
                    }`}
                  />
                </div>

                {/* Bottom Status Ribbon */}
                <div
                  className={`absolute inset-x-0 bottom-0 flex items-center justify-between border-t px-5 py-3 font-mono text-micro ${
                    paper
                      ? "border-line-paper/60 bg-paper/90 text-ink"
                      : "border-line/60 bg-ink/90 text-paper"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent" />
                    <span>VERIFIED OPERATIONAL CASE</span>
                  </span>
                  <span className="text-muted">TAZRIEL BENCH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
