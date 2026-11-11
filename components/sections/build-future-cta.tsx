"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * BuildFutureCta — Directly modelled on InterGest Canada's `cta_wrap u-zindex-1`
 * and the user's architectural glass atrium globe visual:
 *
 * Placed immediately after `solutions_group`.
 * As you scroll into / through this section:
 * 1. The glass atrium globe background ZOOMS OUT smoothly (from scale 1.5 down to 1.0),
 *    revealing the full architectural window grid and grand globe installation.
 * 2. High-contrast typography:
 *    "Accepting Local & Global Clients"
 *    "BUILD YOUR FUTURE"
 *    "WITH TAZRIEL"
 *    "Partner with us for structured entry, seamless operations, and long-term success."
 *    "Start Your Consultation" button.
 */
export default function BuildFutureCta() {
  const root = useRef<HTMLElement>(null);
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

      // Master Timeline: Pinned Zoom-Out as you scroll through the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      // 1. Zoom out from close-up globe (1.55) to the full architectural atrium (1.0)
      tl.fromTo(
        img,
        { scale: 1.55 },
        { scale: 1.0, ease: "power1.out" },
        0,
      );

      // 2. Elegant typography line reveal on entrance
      tl.fromTo(
        beats,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, ease: "power2.out" },
        0.05,
      );
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      data-theme="dark"
      className="cta_wrap u-zindex-1 relative h-screen w-full overflow-hidden bg-ink text-paper"
    >
      {/* ── Architectural Glass Atrium Globe Plate (Zooms Out on Scroll) ── */}
      <div className="cta_visual_wrap pointer-events-none absolute inset-0 -z-10 size-full overflow-hidden">
        <img
          ref={imgRef}
          src="/media/globe-atrium.jpg"
          alt="Tazriel Global Command Atrium"
          className="size-full object-cover will-change-transform brightness-[0.72] contrast-[1.05]"
        />
        {/* Subtle, clean luxury dark veil so the photo is clearly visible (matching user Image 4) */}
        <div
          suppressHydrationWarning
          className="absolute inset-0 bg-[#020035]/45 mix-blend-multiply"
        />
        <div
          suppressHydrationWarning
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/60"
        />
      </div>

      {/* ── Centered CTA Content (Matching InterGest Image 4) ───────────── */}
      <div
        ref={contentRef}
        className="cta_component relative z-10 flex size-full items-center justify-center px-gutter text-center"
      >
        <div className="cta_content_wrap mx-auto flex max-w-4xl flex-col items-center justify-center">
          {/* Header Tag */}
          <div
            data-cta-item
            className="cta_content_header u-text-h3 font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-paper/80 mb-5"
          >
            Accepting Local &amp; Global Clients
          </div>

          {/* Colossal Display Heading */}
          <div
            data-cta-item
            className="cta_content_header u-text-display font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[0.96] tracking-tight uppercase text-paper max-w-[18ch]"
          >
            <div>BUILD YOUR FUTURE</div>
            <div>
              WITH <span className="font-serif italic font-normal text-paper">TAZRIEL</span>
            </div>
          </div>

          {/* Subtitle */}
          <p
            data-cta-item
            className="paragraph mt-6 sm:mt-8 max-w-[48ch] text-xs sm:text-sm md:text-base leading-relaxed text-paper/85"
          >
            Partner with us for structured entry, seamless operations, and
            long-term success.
          </p>

          {/* Consultation Button (Matching Image 4) */}
          <div data-cta-item className="btn_main_wrap mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="button button--stroke group inline-flex items-center gap-3 rounded-full border border-paper/30 bg-black/75 px-8 py-3.5 sm:px-10 sm:py-4 font-mono text-xs uppercase tracking-wider text-paper shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-paper hover:bg-black hover:text-white"
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
