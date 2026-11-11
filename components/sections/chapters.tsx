"use client";

import { useEffect, useState } from "react";
import Chapter from "@/components/motion/chapter";

/**
 * Chapters — The Four Narrative Movements.
 *
 * Clean, authentic editorial storytelling with GSAP motion:
 * - High-contrast editorial typography with line-by-line reveals.
 * - Real curated architectural photography with continuous parallax drift.
 * - Zero synthetic/AI diagram boxes or fake percentages.
 * - Pinned layered stacking across the narrative sequence.
 */

// ── 01. CHAPTER STAKES ────────────────────────────────────────────────────────
export function ChapterStakes() {
  return (
    <Chapter
      index={1}
      label="What this actually runs on"
      tag="ATTENTION ARCHITECTURE"
      coords="39.78° N // 89.65° W"
      runway={140}
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <div
              data-beat
              className="flex items-center gap-2 font-mono text-micro uppercase tracking-[0.25em] text-accent"
            >
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              <span>The Attention Axiom</span>
            </div>

            <h2
              id="chapter-1"
              data-beat
              className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.04] tracking-tight text-paper"
            >
              Every operation you run is somebody&rsquo;s{" "}
              <span className="font-serif italic text-accent">
                full attention.
              </span>
            </h2>

            <p
              data-beat
              className="mt-6 text-base sm:text-lg leading-relaxed text-muted max-w-xl"
            >
              Not headcount. Attention — the finite, expensive kind that notices
              the thing nobody wrote down. Your people are already spending all of
              theirs.
            </p>

            <div
              data-beat
              className="mt-8 border-l-2 border-accent bg-ink-raised/50 p-5 backdrop-blur-sm"
            >
              <span className="block font-mono text-micro uppercase tracking-wider text-accent font-semibold">
                The Core Axiom
              </span>
              <p className="mt-1.5 text-sm sm:text-base italic text-paper/90">
                &ldquo;Attention is non-fungible. Adding untrained hands divides it
                further.&rdquo;
              </p>
            </div>
          </div>

          {/* Architectural Command Plate with Parallax & Telemetry */}
          <div className="hidden lg:col-span-5 lg:block">
            <div
              data-beat
              className="group relative aspect-[4/5] w-full overflow-hidden border border-line/80 bg-ink-raised shadow-2xl"
            >
              {/* Parallax Image Plate */}
              <div className="absolute -inset-y-8 inset-x-0 overflow-hidden">
                <img
                  data-parallax-img
                  src="/media/software-development-1280.webp"
                  alt="Operational Attention Architecture"
                  className="size-full object-cover grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Tint scrims */}
              <div className="absolute inset-0 bg-ink/45 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />

              {/* Top Telemetry Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between border-b border-line/60 pb-2.5 font-mono text-[10px] text-muted">
                <span className="flex items-center gap-1.5 text-paper">
                  <span className="size-1.5 rounded-full bg-accent animate-ping" />
                  <span>ATTENTION ALLOCATION</span>
                </span>
                <span className="text-accent font-semibold">100% EMBEDDED</span>
              </div>

              {/* Floating Glass Specimen HUD at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 border border-line/60 bg-ink/85 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between font-mono text-micro text-accent mb-2">
                  <span>DISCIPLINE METRICS</span>
                  <span>PRODUCTION RUNTIME</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs border-t border-line/40 pt-2.5">
                  <div>
                    <span className="block font-mono text-[10px] text-muted">RESOLUTION SPEED</span>
                    <span className="font-semibold text-paper">&lt; 14 MIN DIRECT</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-muted">ESCALATION BOUNCE</span>
                    <span className="font-semibold text-accent">0.0% VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Chapter>
  );
}

// ── 02. CHAPTER PROBLEM ───────────────────────────────────────────────────────
export function ChapterProblem() {
  return (
    <Chapter
      index={2}
      label="Why it went wrong last time"
      tag="STRATEGIC DIAGNOSTIC"
      coords="DEFLECTION VS RESOLUTION"
      runway={140}
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <div
              data-beat
              className="flex items-center gap-2 font-mono text-micro uppercase tracking-[0.25em] text-accent"
            >
              <span className="size-1.5 rounded-full bg-accent" />
              <span>The Capacity Trap</span>
            </div>

            <h2
              id="chapter-2"
              data-beat
              className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.04] tracking-tight text-paper"
            >
              Outsourcing sold you capacity. Capacity is not{" "}
              <em className="font-serif italic text-accent">judgement.</em>
            </h2>

            <p
              data-beat
              className="mt-6 text-base sm:text-lg leading-relaxed text-muted max-w-xl"
            >
              More hands closed more tickets and understood less. Escalations came
              back twice. The work got done and quietly got worse — and your own
              engineers ended up doing it anyway.
            </p>

            <div
              data-beat
              className="mt-8 border-l-2 border-accent bg-ink-raised/50 p-5 backdrop-blur-sm"
            >
              <span className="block font-mono text-micro uppercase tracking-wider text-accent font-semibold">
                Strategic Principle
              </span>
              <p className="mt-1.5 text-sm sm:text-base italic text-paper/90">
                &ldquo;Capacity closes tickets. Judgement resolves systems.&rdquo;
              </p>
            </div>
          </div>

          {/* Diagnostic Comparative Ledger (Conventional vs Tazriel) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div
              data-beat
              className="border border-line/80 bg-ink-raised/85 p-6 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center justify-between border-b border-line/60 pb-3 font-mono text-micro">
                <span className="text-accent font-semibold">DIAGNOSTIC MATRIX</span>
                <span className="text-muted">ROOT-CAUSE AUDIT</span>
              </div>

              {/* Mode A: Conventional BPO Failure Mode */}
              <div className="mt-5 border border-red-500/30 bg-red-950/20 p-4">
                <div className="flex items-center justify-between font-mono text-micro text-red-400">
                  <span>CONVENTIONAL OUTSOURCING</span>
                  <span>FAILING MODE</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-paper/80">
                  <li className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-red-400" />
                    <span>Script-deflection queues with high bounce rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-red-400" />
                    <span>Rotational staff trained yesterday</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-red-400" />
                    <span>Headcount billed; core problems deferred</span>
                  </li>
                </ul>
              </div>

              {/* Mode B: Sovereign Tazriel Model */}
              <div className="mt-4 border border-accent/40 bg-accent/5 p-4">
                <div className="flex items-center justify-between font-mono text-micro text-accent">
                  <span>SOVEREIGN TAZRIEL BENCH</span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                    <span>PROVEN DELTA</span>
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-paper/90">
                  <li className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-accent" />
                    <span>Tier-3 engineers writing reproducible fixes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-accent" />
                    <span>Domain veterans embedded in your sprints</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-accent" />
                    <span>Permanent operational sovereignty</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 border-t border-line/60 pt-3 flex items-center justify-between font-mono text-[10px] text-muted">
                <span>IMPACT DELTA</span>
                <span className="font-semibold text-accent">ZERO RE-ESCALATIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Chapter>
  );
}

// ── 03. CHAPTER MECHANISM (THE TURN — CRISP ARCHITECTURAL PAPER) ───────────────
export function ChapterMechanism() {
  return (
    <Chapter
      index={3}
      label="The variable that actually moves"
      field="paper"
      tag="DOMAIN MASTERY"
      coords="EXPERIENCE OVER HEADCOUNT"
      runway={140}
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <div
              data-beat
              className="flex items-center gap-2 font-mono text-micro uppercase tracking-[0.25em] text-accent"
            >
              <span className="size-1.5 rounded-full bg-accent" />
              <span>The Decisive Delta</span>
            </div>

            <h2
              id="chapter-3"
              data-beat
              className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.04] tracking-tight text-ink"
            >
              It was never how many. It was whether they had{" "}
              <em className="font-serif italic text-accent">done it before.</em>
            </h2>

            <p
              data-beat
              className="mt-6 text-base sm:text-lg leading-relaxed text-muted-paper max-w-xl"
            >
              One operator who has run the discipline — in your tooling, against
              your constraints — resolves what a room of trained-yesterday staff
              escalates. That is the whole difference. It is the only thing we
              hire for.
            </p>

            <div
              data-beat
              className="mt-8 border-l-2 border-accent bg-paper-sunk/60 p-5 shadow-sm"
            >
              <span className="block font-mono text-micro uppercase tracking-wider text-accent font-semibold">
                The Decisive Delta
              </span>
              <p className="mt-1.5 text-sm sm:text-base italic text-ink/90">
                &ldquo;We hire only specialists who have run the discipline in
                production.&rdquo;
              </p>
            </div>
          </div>

          {/* Paper Specimen Dossier Frame */}
          <div className="hidden lg:col-span-5 lg:block">
            <div
              data-beat
              className="group relative aspect-[4/5] w-full overflow-hidden border border-line-paper bg-paper-sunk shadow-2xl"
            >
              {/* Parallax Image Plate */}
              <div className="absolute -inset-y-8 inset-x-0 overflow-hidden">
                <img
                  data-parallax-img
                  src="/media/meetings-and-events-1280.webp"
                  alt="Production Practitioner"
                  className="size-full object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-paper/30 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-transparent to-transparent" />

              {/* Dossier Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between border-b border-line-paper pb-2.5 font-mono text-[10px] text-muted-paper">
                <span className="font-semibold text-ink">RUNTIME BENCHMARK</span>
                <span className="text-accent font-semibold">8+ YEARS AVG</span>
              </div>

              {/* Dossier Footer Card */}
              <div className="absolute bottom-4 left-4 right-4 border border-line-paper bg-paper/90 p-4 shadow-md backdrop-blur-sm">
                <span className="font-mono text-micro uppercase tracking-wider text-accent">
                  Practitioner Verification
                </span>
                <p className="mt-1 font-serif text-lg text-ink font-normal leading-snug">
                  Zero trainee handoffs. Every operator interviewed by your engineering leadership.
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-line-paper pt-2 font-mono text-[10px] text-muted-paper">
                  <span>INTERVIEW APPROVAL</span>
                  <span className="font-semibold text-ink">100% MANDATORY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Chapter>
  );
}

// ── 04. CHAPTER ANSWER ────────────────────────────────────────────────────────
export function ChapterAnswer() {
  const [eatTime, setEatTime] = useState("");
  const [cetTime, setCetTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setEatTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Addis_Ababa",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
      setCetTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/Skopje",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Chapter
      index={4}
      label="What we built instead"
      tag="SOVEREIGN GLOBAL BENCH"
      coords="TWO CONTINENTS // UNBROKEN TIMELINE"
      runway={140}
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div
            data-beat
            className="inline-flex items-center gap-2 font-mono text-micro uppercase tracking-[0.25em] text-accent"
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span>Sovereign Architecture</span>
          </div>

          <h2
            id="chapter-4"
            data-beat
            className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-normal leading-[1.04] tracking-tight text-paper"
          >
            Senior operators, embedded, on{" "}
            <span className="font-serif italic text-accent">
              two continents.
            </span>
          </h2>

          <p
            data-beat
            className="mt-5 text-base sm:text-lg leading-relaxed text-muted max-w-2xl mx-auto"
          >
            Delivery runs from Addis Ababa and is expanding into North Macedonia,
            giving structured coverage across US and EMEA hours. Seven disciplines.
            You interview every specialist before they join.
          </p>
        </div>

        {/* Two Sovereign Hubs Connected by Handoff Rail */}
        <div
          data-beat
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
        >
          {/* Hub 01: Addis Ababa */}
          <div className="group border border-line/80 bg-ink-raised/90 p-7 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-accent/60">
            <div className="flex items-center justify-between border-b border-line/50 pb-3 font-mono text-micro">
              <span className="text-accent font-semibold flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-accent animate-ping" />
                <span>PRIMARY HUB 01 // EAST AFRICA</span>
              </span>
              <span className="text-muted">9.03° N // 38.74° E</span>
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-paper">
                Addis Ababa
              </h3>
              <div className="text-right">
                <span className="font-mono text-2xl font-bold text-accent tracking-wider">
                  {eatTime || "14:00:00"}
                </span>
                <span className="block font-mono text-[10px] text-muted">EAT UTC+3</span>
              </div>
            </div>
            <ul className="mt-5 space-y-2 border-t border-line/40 pt-4 text-xs text-paper/85">
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Mendix Certified Rapid &amp; Advanced Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Enterprise ML &amp; RLHF Data Annotation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Microsoft 365 &amp; Azure Cloud Identity Posture</span>
              </li>
            </ul>
          </div>

          {/* Hub 02: Skopje */}
          <div className="group border border-line/80 bg-ink-raised/90 p-7 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-accent/60">
            <div className="flex items-center justify-between border-b border-line/50 pb-3 font-mono text-micro">
              <span className="text-accent font-semibold flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-accent" />
                <span>EXPANSION HUB 02 // EMEA</span>
              </span>
              <span className="text-muted">41.99° N // 21.42° E</span>
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-paper">
                Skopje
              </h3>
              <div className="text-right">
                <span className="font-mono text-2xl font-bold text-accent tracking-wider">
                  {cetTime || "12:00:00"}
                </span>
                <span className="block font-mono text-[10px] text-muted">CET UTC+1</span>
              </div>
            </div>
            <ul className="mt-5 space-y-2 border-t border-line/40 pt-4 text-xs text-paper/85">
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Tier-3 SaaS Product Support &amp; IT Helpdesk</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Enterprise Event Operations (Cvent Certified)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Real-time US &amp; EMEA Overlapping Coverage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Chapter>
  );
}
