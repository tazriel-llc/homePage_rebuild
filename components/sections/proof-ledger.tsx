"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ComparisonRow = {
  dimension: string;
  conventional: {
    status: string;
    description: string;
  };
  tazriel: {
    status: string;
    description: string;
  };
};

const rows: ComparisonRow[] = [
  {
    dimension: "Practitioner Selection",
    conventional: {
      status: "OPAQUE ALLOCATION",
      description: "Vendor assigns arbitrary rotational staff trained yesterday. Zero client interview rights or vetting.",
    },
    tazriel: {
      status: "100% CLIENT INTERVIEWED",
      description: "You interview and approve every specialist before they join your sprint rituals. Zero unvetted handoffs.",
    },
  },
  {
    dimension: "Incident Queue Philosophy",
    conventional: {
      status: "SCRIPT DEFLECTION",
      description: "Staff read scripts designed to close tickets rather than fix bugs, bouncing issues back to your engineers.",
    },
    tazriel: {
      status: "ROOT-CAUSE RESOLUTION",
      description: "Real engineers writing reproducible reproduction scripts and direct pull requests into your codebase.",
    },
  },
  {
    dimension: "Team Embedding & Culture",
    conventional: {
      status: "DISCONNECTED SILOS",
      description: "Isolated call-center floors with 40%+ annual turnover and zero alignment with your engineering sprints.",
    },
    tazriel: {
      status: "NATIVE SPRINT EMBEDDED",
      description: "Specialists sit inside your Slack, Jira, GitHub, and daily standups. High retention with continuous institutional memory.",
    },
  },
  {
    dimension: "Governance & Data Sovereignty",
    conventional: {
      status: "AGGREGATED SHARED POOLS",
      description: "Shared agents switching across competing clients with generic shared credentials and high data leakage risk.",
    },
    tazriel: {
      status: "DEDICATED SOVEREIGN POSTURE",
      description: "Strict tenant isolation, zero-trust Entra ID governance, SOC-2 aligned protocols, and non-fungible attention.",
    },
  },
  {
    dimension: "Economic Alignment",
    conventional: {
      status: "HEADCOUNT BILLING THEATER",
      description: "Incentivized to bill as many bodies as possible regardless of output or resolution quality.",
    },
    tazriel: {
      status: "DISCIPLINE MASTERY COVENANT",
      description: "Senior specialist bench delivering measurable velocity, reduced domestic burn, and zero deflection debt.",
    },
  },
];

/**
 * ProofLedger — Comparative Specimen Ledger.
 *
 * Provides enterprise CTOs and COOs with undeniable proof of why Tazriel
 * is a sovereign technology partner, not an offshore call center.
 */
export default function ProofLedger() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const beats = root.current.querySelectorAll("[data-ledger-beat]");
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
      className="relative w-full bg-ink text-paper py-24 sm:py-32 px-gutter overflow-hidden border-t border-line/60"
    >
      <div className="mx-auto w-full max-w-frame relative z-10">
        {/* Header */}
        <div data-ledger-beat className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-micro uppercase tracking-[0.25em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            <span>05 // THE STRATEGIC AUDIT</span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.04] tracking-tight text-paper">
            Why sovereign partnership resolves what{" "}
            <span className="font-serif italic text-accent">outsourcing broke.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted max-w-2xl">
            Conventional outsourcing optimizes for billable headcount. Tazriel optimizes
            for operational sovereignty. Compare the structural deltas below.
          </p>
        </div>

        {/* Comparative Ledger Table */}
        <div
          data-ledger-beat
          className="border border-line/80 bg-ink-raised/85 shadow-2xl backdrop-blur-md overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-line/60 bg-ink/70 font-mono text-micro text-muted p-4 sm:p-5 select-none">
            <div className="md:col-span-3 uppercase tracking-wider text-accent font-semibold">
              Operational Dimension
            </div>
            <div className="md:col-span-4 uppercase tracking-wider text-red-400/90 hidden md:block">
              Conventional BPO / Offshore Model
            </div>
            <div className="md:col-span-5 uppercase tracking-wider text-accent hidden md:block">
              Sovereign Tazriel Benchmark
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-line/40">
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-4 md:gap-6 items-start transition-colors duration-200 hover:bg-ink/40"
              >
                {/* Dimension Name */}
                <div className="md:col-span-3">
                  <span className="font-serif text-lg sm:text-xl font-normal text-paper block">
                    {row.dimension}
                  </span>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mt-1">
                    AUDIT SPEC 0{i + 1}
                  </span>
                </div>

                {/* Conventional Outsourcing Failure Mode */}
                <div className="md:col-span-4 border border-red-500/20 bg-red-950/10 p-4">
                  <div className="flex items-center justify-between font-mono text-micro text-red-400 mb-2">
                    <span>CONVENTIONAL BPO</span>
                    <span className="text-[10px] uppercase font-semibold">
                      {row.conventional.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-paper/75 leading-relaxed">
                    {row.conventional.description}
                  </p>
                </div>

                {/* Tazriel Sovereign Model */}
                <div className="md:col-span-5 border border-accent/40 bg-accent/5 p-4">
                  <div className="flex items-center justify-between font-mono text-micro text-accent mb-2">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                      <span>TAZRIEL SOVEREIGN BENCH</span>
                    </span>
                    <span className="text-[10px] uppercase font-semibold">
                      {row.tazriel.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-paper/95 leading-relaxed font-medium">
                    {row.tazriel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Ledger Summary */}
          <div className="p-6 sm:p-8 bg-ink/60 border-t border-line/60 flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="font-mono text-micro uppercase tracking-wider text-accent font-semibold block mb-1">
                The Executive Takeaway
              </span>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                You do not need more rotational staff. You need dedicated specialists
                who take permanent ownership of the discipline inside your tooling.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-paper px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-white"
            >
              <span>Schedule Strategic Consultation</span>
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
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
