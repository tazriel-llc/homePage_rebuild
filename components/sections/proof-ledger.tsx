"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Covenant = {
  num: string;
  tag: string;
  title: string;
  statement: string;
  conventional: string;
  sovereign: string;
};

const covenants: Covenant[] = [
  {
    num: "01",
    tag: "PRACTITIONER SELECTION",
    title: "You interview every specialist before they join.",
    statement:
      "Conventional vendors assign arbitrary rotational staff trained yesterday. At Tazriel, your engineering leadership interviews and personally approves every specialist before they touch your codebase.",
    conventional: "Opaque pool allocation · Zero client vetting",
    sovereign: "100% Client Interviewed · Dedicated Senior Practitioners",
  },
  {
    num: "02",
    tag: "INCIDENT RESOLUTION",
    title: "Real engineers in queues, not script-readers.",
    statement:
      "Outsourcing failed because script-deflectors bounced tickets back to your domestic engineers. We staff queues with Tier-3 practitioners who write reproducible Docker bug reports and direct code pull requests.",
    conventional: "Script deflection · High ticket bounce rate",
    sovereign: "Root-Cause Engineering · Direct Repository Pull Requests",
  },
  {
    num: "03",
    tag: "ATTENTION ARCHITECTURE",
    title: "Dedicated sovereign posture. Zero shared pools.",
    statement:
      "Specialists sit natively inside your Slack, Jira, GitHub, and daily sprint rituals. High retention ensures deep institutional memory rather than the 40%+ turnover of conventional offshore call centers.",
    conventional: "Shared multi-client pools · 40%+ annual turnover",
    sovereign: "Native Sprint Embedded · High Long-Term Retention",
  },
];

/**
 * ProofLedger — The Sovereign Covenants.
 *
 * Designed with pure editorial luxury:
 * - NO cramped rectangular boxes, NO spreadsheet tables.
 * - Commanding typography, expansive whitespace, calm Swiss precision.
 * - Conveys undeniable strategic authority with clarity and breathing room.
 */
export default function ProofLedger() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const beats = root.current.querySelectorAll("[data-covenant-beat]");
      gsap.fromTo(
        beats,
        { y: 30, opacity: 0, filter: "blur(6px)" },
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
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      data-theme="dark"
      className="relative w-full bg-ink text-paper py-28 sm:py-36 px-gutter overflow-hidden border-t border-line/40"
    >
      <div className="mx-auto w-full max-w-frame relative z-10">
        {/* Section Header */}
        <div data-covenant-beat className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 font-mono text-micro uppercase tracking-[0.25em] text-accent mb-4">
            <span className="size-1.5 rounded-full bg-accent" />
            <span>05 // THE STRATEGIC AUDIT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-paper">
            Why sovereign partnership resolves what{" "}
            <span className="font-serif italic text-accent">outsourcing broke.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted max-w-2xl">
            Conventional outsourcing optimizes for billable headcount. Tazriel optimizes
            for operational sovereignty. Three fundamental covenants define our delivery.
          </p>
        </div>

        {/* 3 Spacious Editorial Pillars (NO TABLES, NO CRAMMED RECTANGLES) */}
        <div
          data-covenant-beat
          className="space-y-16 sm:space-y-24 border-t border-line/40 pt-12 sm:pt-16"
        >
          {covenants.map((c) => (
            <div
              key={c.num}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-line/30"
            >
              {/* Left Column: Number & Overline */}
              <div className="lg:col-span-3">
                <span className="font-mono text-xs sm:text-sm font-semibold text-accent block mb-2">
                  {c.num} // COVENANT
                </span>
                <span className="font-mono text-micro uppercase tracking-widest text-muted block">
                  {c.tag}
                </span>
              </div>

              {/* Middle Column: Major Heading & Narrative */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-paper leading-tight">
                  {c.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-muted max-w-2xl">
                  {c.statement}
                </p>
              </div>

              {/* Right Column: Clean Comparative Delta (Subtle & Elegant) */}
              <div className="lg:col-span-3 space-y-4 border-l border-line/40 pl-6 lg:pl-8">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted block mb-1">
                    Conventional Vendor
                  </span>
                  <span className="text-xs sm:text-sm text-paper/60 line-through decoration-red-500/60 block">
                    {c.conventional}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold block mb-1">
                    Tazriel Sovereign Standard
                  </span>
                  <span className="text-xs sm:text-sm text-paper font-medium block">
                    {c.sovereign}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Closing Callout */}
        <div
          data-covenant-beat
          className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <p className="font-serif italic text-lg sm:text-xl text-paper/85 max-w-xl">
            &ldquo;Attention is non-fungible. Adding untrained hands divides it further.&rdquo;
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-paper hover:text-accent transition-colors"
          >
            <span>Schedule Strategic Consultation</span>
            <span
              aria-hidden
              className="text-accent transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
