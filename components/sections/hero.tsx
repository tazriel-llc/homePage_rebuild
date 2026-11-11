"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, EASE } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";
import Magnetic from "@/components/motion/magnetic";
import CineMedia from "@/components/motion/cine-media";
import { company } from "@/content/site";
import { heroVideo } from "@/content/media";

/**
 * Cinematic entrance. One idea, one action — no stat cards, no secondary CTA,
 * no scroll hint. Every one of those was on the old hero and every one diluted
 * it. §7.1
 *
 * Two motions, deliberately different in kind:
 *
 * MI-1 Settle — trigger: load, once the curtain has lifted. Rules: the plate
 *   eases from 1.16 to 1.0 over 1.8s while the headline masks in line by line.
 *   Feedback: the frame arrives rather than appears. Not scrubbed — an entrance
 *   the visitor can scrub is not an entrance.
 * MI-2 Depart — trigger: scrolling out of the hero. Rules: the plate pushes to
 *   1.14 while the copy lifts and fades. Feedback: scrubbed and reversible, so
 *   scrolling back restores the frame exactly.
 *
 * Under reduced motion neither runs, no clip is mounted, and the hero renders
 * as a still frame with type at full opacity.
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const q = gsap.utils.selector(root);
      const plate = q("[data-plate]");
      const copy = q("[data-copy]");

      // MI-1 — starts after the 1.1s CSS curtain has cleared the frame.
      gsap.fromTo(
        plate,
        { scale: 1.16 },
        { scale: 1, duration: 1.8, ease: EASE.reveal, delay: 0.35 },
      );

      // MI-2 — transform and opacity only; never the layout box.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
        .to(plate, { scale: 1.14, ease: "none" }, 0)
        .to(copy, { yPercent: -18, opacity: 0, ease: "none" }, 0);
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-svh items-center overflow-hidden px-gutter pb-section pt-40"
    >
      <div data-plate className="absolute inset-0">
        <CineMedia video={heroVideo} poster="it-helpdesk" tint={0.8} />
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70"
      />

      <div data-copy className="relative z-10 mx-auto w-full max-w-frame">
        <RevealBlock>
          <div className="mb-8 flex flex-wrap items-center gap-3 text-micro font-medium uppercase tracking-[0.2em] text-accent">
            <span className="border border-accent/40 bg-ink-raised/80 px-2.5 py-1 text-paper">
              01 // Global BPO & Technology Services
            </span>
            <span className="hidden size-1 rounded-full bg-accent sm:inline-block" />
            <span className="hidden items-center gap-2 text-muted sm:inline-flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Springfield · Addis Ababa · Skopje
            </span>
          </div>
        </RevealBlock>

        <RevealText as="h1" className="max-w-[14ch] text-display-xl" delay={0.1}>
          Specialists who work the way you <em className="italic">already</em>{" "}
          do.
        </RevealText>

        <RevealBlock delay={0.4}>
          <p className="measure mt-8 text-body-l text-muted">
            {company.description}
          </p>
        </RevealBlock>

        <RevealBlock delay={0.55}>
          <div className="-ml-3 mt-10 flex flex-wrap items-center gap-1">
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white"
              >
                <span>Start a conversation</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Magnetic>
            <Link
              href="#disciplines"
              className="link-wipe ml-6 text-sm font-medium text-muted transition-colors duration-300 hover:text-paper"
            >
              Explore seven disciplines
            </Link>
          </div>
        </RevealBlock>

        {/* InterGest / Spectup style architectural metric ledger */}
        <RevealBlock delay={0.7} className="mt-20">
          <div className="grid grid-cols-2 border-t border-line pt-8 sm:grid-cols-4 sm:gap-6">
            <div className="border-b border-line pb-6 sm:border-b-0 sm:pb-0">
              <p className="font-mono text-micro uppercase tracking-wider text-accent">
                01 // Model
              </p>
              <p className="mt-1 font-serif text-2xl text-paper">100% Embedded</p>
              <p className="mt-1 text-xs text-muted">Inside your tooling and daily standups</p>
            </div>

            <div className="border-b border-line pb-6 sm:border-b-0 sm:pb-0 sm:border-l sm:border-line sm:pl-6">
              <p className="font-mono text-micro uppercase tracking-wider text-accent">
                02 // Reach
              </p>
              <p className="mt-1 font-serif text-2xl text-paper">2 Continents</p>
              <p className="mt-1 text-xs text-muted">US & EMEA follow-the-sun coverage</p>
            </div>

            <div className="pt-6 sm:pt-0 sm:border-l sm:border-line sm:pl-6">
              <p className="font-mono text-micro uppercase tracking-wider text-accent">
                03 // Breadth
              </p>
              <p className="mt-1 font-serif text-2xl text-paper">7 Disciplines</p>
              <p className="mt-1 text-xs text-muted">From Engineering to AI Annotation</p>
            </div>

            <div className="pt-6 sm:pt-0 sm:border-l sm:border-line sm:pl-6">
              <p className="font-mono text-micro uppercase tracking-wider text-accent">
                04 // Standing
              </p>
              <p className="mt-1 font-serif text-2xl text-paper">DesignRush</p>
              <p className="mt-1 text-xs text-muted">Vetted top outsourcing partner</p>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
