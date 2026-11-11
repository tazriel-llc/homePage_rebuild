"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * BuildFutureCta — Directly modelled on InterGest Canada's `cta_wrap u-zindex-1`:
 *
 * Placed immediately after `solutions_holder`.
 * As you scroll into this section:
 * 1. The satellite Earth / globe background ZOOMS OUT smoothly (from scale 1.45 to 1.0).
 * 2. Large display typography reveals:
 *    "BUILD YOUR FUTURE WITH TAZRIEL"
 * 3. Centered subtitle and consultation CTA button.
 */
export default function BuildFutureCta() {
  const root = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const img = imgRef.current;
      const content = contentRef.current;
      if (!img || !content) return;

      const beats = content.querySelectorAll("[data-cta-item]");

      // Master Timeline: The Globe Image Zooms Out on Scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      // The satellite Earth image zooms out as you scroll down
      tl.fromTo(
        img,
        { scale: 1.45 },
        { scale: 1.0, ease: "none" },
        0,
      );

      // Typography line reveals
      gsap.fromTo(
        beats,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      data-theme="dark"
      className="cta_wrap u-zindex-1 relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink py-28 text-paper"
    >
      {/* ── Satellite Earth Background (Zooms Out on Scroll) ───────────── */}
      <div
        ref={visualRef}
        className="cta_visual_wrap pointer-events-none absolute inset-0 -z-10 size-full overflow-hidden"
      >
        <img
          ref={imgRef}
          src="/media/globe-cta.webp"
          alt="Global Satellite Network"
          className="size-full object-cover will-change-transform brightness-90 contrast-110"
        />
        {/* Cinematic dark scrim matching InterGest Canada */}
        <div className="absolute inset-0 bg-ink/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/80" />
      </div>

      {/* ── Centered CTA Content ────────────────────────────────────────── */}
      <div
        ref={contentRef}
        className="cta_component relative z-10 mx-auto w-full max-w-frame px-gutter text-center"
      >
        <div className="cta_content_wrap mx-auto flex max-w-4xl flex-col items-center justify-center">
          {/* Header pill */}
          <div
            data-cta-item
            className="cta_content_header u-text-h3 font-mono text-micro uppercase tracking-[0.25em] text-accent"
          >
            Accepting Local &amp; Global Clients
          </div>

          {/* Colossal Display Heading */}
          <div
            data-cta-item
            className="cta_content_header u-text-display mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.92] tracking-tight uppercase"
          >
            <div>BUILD YOUR FUTURE</div>
            <div>
              WITH <span className="font-serif italic text-accent">TAZRIEL</span>
            </div>
          </div>

          {/* Subtitle */}
          <p
            data-cta-item
            className="paragraph mt-8 max-w-[48ch] text-sm sm:text-base md:text-lg leading-relaxed text-muted"
          >
            Partner with us for structured entry, seamless operations, and
            long-term success.
          </p>

          {/* Consultation Button */}
          <div data-cta-item className="btn_main_wrap mt-10">
            <Link
              href="/contact"
              className="button button--stroke group inline-flex items-center gap-3 rounded-full border border-line/80 bg-ink/90 px-10 py-5 font-mono text-xs uppercase tracking-widest text-paper shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-ink hover:text-white"
            >
              <span>Start Your Consultation</span>
              <span
                aria-hidden
                className="text-accent transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
