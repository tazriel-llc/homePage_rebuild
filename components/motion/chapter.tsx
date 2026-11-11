"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  index: number;
  label: string;
  tag?: string;
  image?: string;
  diagnosticLedger?: {
    conventionalTitle: string;
    conventionalDesc: string;
    sovereignTitle: string;
    sovereignDesc: string;
  };
  dualImages?: {
    image1: string;
    label1: string;
    tz1: string;
    image2: string;
    label2: string;
    tz2: string;
  };
  coords?: string;
  field?: "ink" | "paper";
  /** Scroll runway in svh. */
  runway?: number;
  children: ReactNode;
};

/**
 * Chapter — Narrative Storytelling Primitive.
 *
 * Rebuilt for uninterrupted luxury scroll:
 * - ZERO DEAD ZONES: Content is visible by default in HTML and never vanishes into a blank void on slow scroll.
 * - Entrance reveal with `once: true` so scrolling slowly backwards or forwards never blanks out.
 * - Supports high-contrast architectural imagery, dual-continent operational hubs,
 *   and an executive incident telemetry console (zero generic call-center stock photos!).
 */
export default function Chapter({
  index,
  label,
  tag = "OPERATIONAL PRINCIPLE",
  image = "it-helpdesk",
  diagnosticLedger,
  dualImages,
  coords = "01 // ATTENTION ARCHITECTURE",
  field = "ink",
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

      // Smooth entrance reveal: runs once when approaching view. NEVER reverts to opacity 0!
      gsap.from(beats, {
        y: 28,
        opacity: 0.35,
        duration: 0.7,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
          once: true,
        },
      });

      if (portal) {
        gsap.from(portal, {
          y: 24,
          opacity: 0.4,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      // Parallax scroll on the photograph — strictly reactive to scroll wheel
      if (img) {
        gsap.fromTo(
          img,
          { yPercent: 4, scale: 1.06 },
          {
            yPercent: -4,
            scale: 1.01,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          },
        );
      }
    },
    { scope: root, dependencies: [reduced] },
  );

  const paper = field === "paper";

  return (
    <section
      ref={root}
      aria-labelledby={`chapter-${index}`}
      data-field={paper ? "paper" : undefined}
      data-chapter={index}
      className={`relative flex min-h-svh items-center px-gutter py-24 sm:py-32 ${
        paper ? "bg-paper text-ink" : "bg-ink text-paper"
      }`}
    >
      <div className="relative w-full overflow-hidden">
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
            <div className="lg:col-span-6 xl:col-span-7">
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

            {/* Right Column: Ultra-Luxurious Architectural Visual Portal */}
            <div className="hidden lg:col-span-6 xl:col-span-5 lg:block">
              <div
                ref={portalRef}
                className={`relative w-full max-w-lg overflow-hidden border ${
                  paper
                    ? "border-line-paper bg-paper-sunk/60"
                    : "border-line bg-ink-raised/90"
                } shadow-2xl backdrop-blur-sm`}
              >
                {/* Top Corner Meta */}
                <div
                  className={`flex items-center justify-between border-b px-6 py-3.5 font-mono text-micro ${
                    paper
                      ? "border-line-paper text-muted-paper"
                      : "border-line/60 text-muted"
                  }`}
                >
                  <span className="text-accent">{coords}</span>
                  <span className="text-xs uppercase">{tag}</span>
                </div>

                {/* 1. Dual Operational Hubs (Chapter 4 Sovereign Bench) */}
                {dualImages ? (
                  <div className="relative grid h-[360px] grid-cols-2 divide-x divide-line/60 overflow-hidden">
                    {/* Node 1: Addis Ababa */}
                    <div className="relative size-full overflow-hidden">
                      <img
                        src={`/media/${dualImages.image1}-1280.webp`}
                        alt={dualImages.label1}
                        className="size-full object-cover grayscale contrast-115 brightness-95"
                      />
                      <span className="absolute inset-0 bg-ink/40 mix-blend-color" />
                      <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px]">
                        <span className="block font-semibold text-paper">
                          {dualImages.label1}
                        </span>
                        <span className="text-accent">{dualImages.tz1}</span>
                      </div>
                    </div>

                    {/* Node 2: Skopje */}
                    <div className="relative size-full overflow-hidden">
                      <img
                        src={`/media/${dualImages.image2}-1280.webp`}
                        alt={dualImages.label2}
                        className="size-full object-cover grayscale contrast-115 brightness-95"
                      />
                      <span className="absolute inset-0 bg-ink/40 mix-blend-color" />
                      <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px]">
                        <span className="block font-semibold text-paper">
                          {dualImages.label2}
                        </span>
                        <span className="text-accent">{dualImages.tz2}</span>
                      </div>
                    </div>
                  </div>
                ) : diagnosticLedger ? (
                  /* 2. Executive Incident Telemetry Console (Zero Call-Center Stock Photos!) */
                  <div className="relative overflow-hidden p-6 bg-ink/95">
                    {/* Architectural Crosshair Accents */}
                    <span className="absolute top-2 left-2 font-mono text-[9px] text-accent/60 select-none">+</span>
                    <span className="absolute top-2 right-2 font-mono text-[9px] text-accent/60 select-none">+</span>
                    <span className="absolute bottom-2 left-2 font-mono text-[9px] text-accent/60 select-none">+</span>
                    <span className="absolute bottom-2 right-2 font-mono text-[9px] text-accent/60 select-none">+</span>

                    {/* Telemetry Visual Schematic Box */}
                    <div className="relative border border-line/70 bg-ink-raised/90 p-5">
                      <div className="flex items-center justify-between border-b border-line/40 pb-3 font-mono text-micro">
                        <span className="text-accent font-semibold tracking-wider">INCIDENT TOPOLOGY // RUNTIME AUDIT</span>
                        <span className="flex items-center gap-1.5 text-[10px] text-paper">
                          <span className="size-1.5 rounded-full bg-accent animate-ping" />
                          <span>AUDIT ACTIVE</span>
                        </span>
                      </div>

                      {/* Diagnostic Comparison Vectors */}
                      <div className="my-4 space-y-3 font-mono text-[11px]">
                        {/* 01. Conventional Deflection Vector */}
                        <div className="border border-line/50 bg-ink/70 p-3">
                          <div className="flex items-center justify-between text-[10px] text-muted">
                            <span className="tracking-wider">01. CONVENTIONAL DEFLECTION LOOP</span>
                            <span className="text-amber-400 font-semibold">48% ESCALATION</span>
                          </div>
                          <div className="mt-2.5 flex items-center justify-between text-[11px] text-muted/80">
                            <span className="text-paper/70">Queue</span>
                            <span>→</span>
                            <span className="text-amber-400">Script Deflect</span>
                            <span>→</span>
                            <span className="text-amber-400">Bounce-Back</span>
                            <span>→</span>
                            <span className="text-paper/70">Internal Re-work</span>
                          </div>
                        </div>

                        {/* 02. Sovereign Resolution Vector */}
                        <div className="border border-accent/50 bg-ink/90 p-3 shadow-md">
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-accent font-semibold tracking-wider">02. TAZRIEL RESOLUTION VECTOR</span>
                            <span className="text-accent font-bold">94.2% FIRST-TOUCH</span>
                          </div>
                          <div className="mt-2.5 flex items-center justify-between text-[11px] text-paper">
                            <span className="text-muted">Queue</span>
                            <span className="text-accent">→</span>
                            <span className="text-paper font-semibold">Embedded Engineer</span>
                            <span className="text-accent">→</span>
                            <span className="text-accent font-semibold">Code PR Merged</span>
                          </div>
                        </div>
                      </div>

                      {/* Real-time Telemetry Metrics */}
                      <div className="grid grid-cols-3 gap-2 border-t border-line/40 pt-3 text-center font-mono">
                        <div className="border-r border-line/40 pr-2">
                          <span className="block text-[9px] uppercase tracking-wider text-muted">AVG LATENCY</span>
                          <span className="text-xs font-semibold text-paper">42 MIN</span>
                        </div>
                        <div className="border-r border-line/40 pr-2">
                          <span className="block text-[9px] uppercase tracking-wider text-muted">DEFLECTION</span>
                          <span className="text-xs font-semibold text-accent">0.0%</span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider text-muted">SLA ACCEL</span>
                          <span className="text-xs font-semibold text-paper">4.8×</span>
                        </div>
                      </div>
                    </div>

                    {/* The Executive Comparison Cards */}
                    <div className="mt-4 grid grid-cols-2 gap-3 text-left">
                      <div className="border border-line/60 bg-ink/70 p-3.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                          Conventional BPO
                        </span>
                        <p className="mt-1 font-mono text-xs font-semibold text-paper/80">
                          {diagnosticLedger.conventionalTitle}
                        </p>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-muted/80">
                          {diagnosticLedger.conventionalDesc}
                        </p>
                      </div>

                      <div className="border border-accent/50 bg-ink-raised p-3.5 shadow-lg">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-semibold">
                          Tazriel Sovereign Bench
                        </span>
                        <p className="mt-1 font-mono text-xs font-semibold text-paper">
                          {diagnosticLedger.sovereignTitle}
                        </p>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-paper/95">
                          {diagnosticLedger.sovereignDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* 3. Single High-Resolution Architectural Image */
                  <div className="relative h-[360px] overflow-hidden">
                    <img
                      ref={imgRef}
                      src={`/media/${image}-1280.webp`}
                      srcSet={`/media/${image}-640.webp 640w, /media/${image}-1280.webp 1280w`}
                      sizes="(max-width: 1024px) 100vw, 480px"
                      alt=""
                      className="size-full object-cover grayscale contrast-115 brightness-95"
                    />
                    <span
                      className={`absolute inset-0 mix-blend-color ${
                        paper ? "bg-paper/40" : "bg-ink/45"
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
                )}

                {/* Bottom Status Ribbon */}
                <div
                  className={`flex items-center justify-between border-t px-6 py-3 font-mono text-micro ${
                    paper
                      ? "border-line-paper/60 bg-paper/90 text-ink"
                      : "border-line/60 bg-ink/90 text-paper"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent" />
                    <span className="font-semibold">SOVEREIGN GOVERNANCE</span>
                  </span>
                  <span className="text-muted">TAZRIEL INFRASTRUCTURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
