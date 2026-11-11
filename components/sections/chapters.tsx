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
      runway={135}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <span
              data-beat
              className="inline-block font-mono text-micro uppercase tracking-[0.25em] text-accent"
            >
              The Attention Axiom
            </span>

            <h2
              id="chapter-1"
              data-beat
              className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-paper"
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
              className="mt-8 border-l border-accent/60 pl-5 text-sm"
            >
              <span className="block font-mono text-micro uppercase tracking-wider text-accent font-semibold">
                The Core Axiom
              </span>
              <p className="mt-1 italic text-paper/90">
                &ldquo;Attention is non-fungible. Adding untrained hands divides it
                further.&rdquo;
              </p>
            </div>
          </div>

          {/* Architectural Photography Plate with Parallax */}
          <div className="hidden lg:col-span-5 lg:block">
            <div
              data-beat
              className="group relative aspect-[4/5] w-full overflow-hidden border border-line/70 bg-ink-raised shadow-2xl"
            >
              <img
                src="/media/software-development-1280.webp"
                alt="Operational Focus"
                className="size-full object-cover grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/40 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-muted">
                <span className="text-paper">SYSTEM ARCHITECTURE</span>
                <span className="text-accent">ONLINE</span>
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
      runway={135}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <span
              data-beat
              className="inline-block font-mono text-micro uppercase tracking-[0.25em] text-accent"
            >
              The Capacity Trap
            </span>

            <h2
              id="chapter-2"
              data-beat
              className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-paper"
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
              className="mt-8 border-l border-accent/60 pl-5 text-sm"
            >
              <span className="block font-mono text-micro uppercase tracking-wider text-accent font-semibold">
                Strategic Principle
              </span>
              <p className="mt-1 italic text-paper/90">
                &ldquo;Capacity closes tickets. Judgement resolves systems.&rdquo;
              </p>
            </div>
          </div>

          {/* Architectural Photography Plate with Parallax */}
          <div className="hidden lg:col-span-5 lg:block">
            <div
              data-beat
              className="group relative aspect-[4/5] w-full overflow-hidden border border-line/70 bg-ink-raised shadow-2xl"
            >
              <img
                src="/media/saas-product-support-1280.webp"
                alt="System Resolution"
                className="size-full object-cover grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/40 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-muted">
                <span className="text-paper">ROOT-CAUSE RESOLUTION</span>
                <span className="text-accent">TIER-3 BENCH</span>
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
      runway={135}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <span
              data-beat
              className="inline-block font-mono text-micro uppercase tracking-[0.25em] text-accent"
            >
              The Decisive Delta
            </span>

            <h2
              id="chapter-3"
              data-beat
              className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-ink"
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
              className="mt-8 border-l border-accent/60 pl-5 text-sm"
            >
              <span className="block font-mono text-micro uppercase tracking-wider text-accent font-semibold">
                The Decisive Delta
              </span>
              <p className="mt-1 italic text-ink/90">
                &ldquo;We hire only specialists who have run the discipline in
                production.&rdquo;
              </p>
            </div>
          </div>

          {/* Architectural Photography Plate with Parallax */}
          <div className="hidden lg:col-span-5 lg:block">
            <div
              data-beat
              className="group relative aspect-[4/5] w-full overflow-hidden border border-line-paper bg-paper-sunk shadow-2xl"
            >
              <img
                src="/media/meetings-and-events-1280.webp"
                alt="Production Practitioner"
                className="size-full object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-paper/30 mix-blend-color" />
              <div className="absolute inset-0 bg-gradient-to-t from-paper/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-muted-paper">
                <span className="text-ink font-semibold">PRODUCTION RUNTIME</span>
                <span className="text-accent">VERIFIED</span>
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
          hour12: false,
        }),
      );
      setCetTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/Skopje",
          hour: "2-digit",
          minute: "2-digit",
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
      runway={135}
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span
            data-beat
            className="inline-block font-mono text-micro uppercase tracking-[0.25em] text-accent"
          >
            Sovereign Architecture
          </span>

          <h2
            id="chapter-4"
            data-beat
            className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-paper"
          >
            Senior operators, embedded, on{" "}
            <span className="font-serif italic text-accent">
              two continents.
            </span>
          </h2>

          <p
            data-beat
            className="mt-6 text-base sm:text-lg leading-relaxed text-muted max-w-2xl mx-auto"
          >
            Delivery runs from Addis Ababa and is expanding into North Macedonia,
            giving structured coverage across US and EMEA hours. Seven disciplines.
            You interview every specialist before they join.
          </p>
        </div>

        {/* Two Sovereign Hubs */}
        <div
          data-beat
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
        >
          {/* Hub 01: Addis Ababa */}
          <div className="border border-line/70 bg-ink-raised/90 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-line/50 pb-3 font-mono text-micro">
              <span className="text-accent font-semibold">PRIMARY HUB 01 // EAST AFRICA</span>
              <span className="text-muted">9.03° N // 38.74° E</span>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-2xl font-normal text-paper">
                Addis Ababa Delivery Hub
              </h3>
              <span className="font-mono text-lg font-bold text-accent">
                {eatTime || "EAT"}
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Certified Mendix Rapid &amp; Advanced architecture, high-accuracy
              ML data annotation, and enterprise cloud operations.
            </p>
          </div>

          {/* Hub 02: Skopje */}
          <div className="border border-line/70 bg-ink-raised/90 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-line/50 pb-3 font-mono text-micro">
              <span className="text-accent font-semibold">EXPANSION HUB 02 // EMEA</span>
              <span className="text-muted">41.99° N // 21.42° E</span>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-2xl font-normal text-paper">
                Skopje EMEA Hub
              </h3>
              <span className="font-mono text-lg font-bold text-accent">
                {cetTime || "CET"}
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Tier-3 SaaS product support, incident resolution, Cvent event
              operations, and continuous EMEA timeline coverage.
            </p>
          </div>
        </div>
      </div>
    </Chapter>
  );
}
