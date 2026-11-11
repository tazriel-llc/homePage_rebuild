"use client";

import { useEffect, useState } from "react";
import Chapter from "@/components/motion/chapter";

/**
 * Chapters — The Four Narrative Movements.
 *
 * Bespoke Architectural Layouts (Zero generic [text | box] side-by-side):
 * 01. The Attention Paradox: Full-width typographic command with cognitive allocation telemetry.
 * 02. The Capacity Trap: Executive Incident Topology Console (Deflection Loop vs Resolution Vector).
 * 03. The Decisive Delta: Crisp Paper inversion with 3-Tier Seniority & Platform Mastery Ledger.
 * 04. Sovereign Command Topology: Dual-Continent Command Radar with live timezone clocks.
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
      <div className="flex flex-col items-center text-center">
        {/* Subtitle Tag */}
        <div data-beat className="inline-flex items-center gap-2 border border-accent/40 bg-ink-raised/80 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          <span className="size-1.5 rounded-full bg-accent animate-ping" />
          <span>The Attention Axiom</span>
        </div>

        {/* Room-Commanding Title */}
        <h2
          id="chapter-1"
          data-beat
          className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-paper max-w-4xl"
        >
          Every operation you run is somebody&rsquo;s{" "}
          <span className="font-serif italic text-accent">full attention.</span>
        </h2>

        {/* Narrative Context */}
        <p
          data-beat
          className="mt-6 text-sm sm:text-base md:text-lg text-muted max-w-2xl leading-relaxed"
        >
          Not headcount. Attention — the finite, expensive kind that notices the
          thing nobody wrote down. Your people are already spending all of theirs.
        </p>

        {/* Creative Centerpiece: The Cognitive Allocation Spectrum */}
        <div
          data-beat
          className="mt-10 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-3 max-w-5xl"
        >
          {/* Pod 01 */}
          <div className="group relative border border-line/70 bg-ink-raised/90 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent/60 shadow-xl">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
              01 // ESCALATION OVERHEAD
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-mono text-2xl font-bold text-paper">42%</span>
              <span className="font-mono text-[10px] text-amber-400">COGNITIVE DRAIN</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Untrained outsource staff deflecting tickets, bouncing escalations
              back into your core engineering sprint.
            </p>
            <div className="mt-4 h-0.5 w-full bg-line/60">
              <div className="h-full w-[42%] bg-amber-400" />
            </div>
          </div>

          {/* Pod 02 */}
          <div className="group relative border border-line/70 bg-ink-raised/90 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent/60 shadow-xl">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
              02 // CONTEXT SWITCHING
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-mono text-2xl font-bold text-paper">38%</span>
              <span className="font-mono text-[10px] text-amber-400">EFFICIENCY LOSS</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Repeated daily handoffs between disconnected external vendors who
              lack direct architecture mastery.
            </p>
            <div className="mt-4 h-0.5 w-full bg-line/60">
              <div className="h-full w-[38%] bg-amber-400/80" />
            </div>
          </div>

          {/* Pod 03 */}
          <div className="group relative border border-accent/50 bg-ink-raised p-6 backdrop-blur-md shadow-2xl">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
              03 // TRUE EXECUTION
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-mono text-2xl font-bold text-accent">20%</span>
              <span className="font-mono text-[10px] text-paper/80">REMAINING FOCUS</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-paper/90">
              The fragile remaining bandwidth your best engineers have left to
              build actual sovereign enterprise product.
            </p>
            <div className="mt-4 h-0.5 w-full bg-line/60">
              <div className="h-full w-[20%] bg-accent shadow-[0_0_8px_rgba(237,76,0,0.8)]" />
            </div>
          </div>
        </div>

        {/* Bottom Axiom Ribbon */}
        <div
          data-beat
          className="mt-8 border border-line/60 bg-ink/80 px-6 py-3 font-mono text-xs text-muted max-w-xl shadow-lg"
        >
          <span className="text-accent font-semibold uppercase tracking-wider">
            The Core Axiom —{" "}
          </span>
          <span className="italic text-paper/90">
            &ldquo;Attention is non-fungible. Adding untrained hands divides it
            further.&rdquo;
          </span>
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
      <div className="flex flex-col items-center text-center">
        {/* Subtitle Tag */}
        <div data-beat className="inline-flex items-center gap-2 border border-accent/40 bg-ink-raised/80 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          <span className="size-1.5 rounded-full bg-accent animate-ping" />
          <span>Executive Systemic Audit</span>
        </div>

        {/* Title */}
        <h2
          id="chapter-2"
          data-beat
          className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-paper max-w-3xl"
        >
          Outsourcing sold you capacity. Capacity is not{" "}
          <em className="font-serif italic text-accent">judgement.</em>
        </h2>

        {/* Narrative Context */}
        <p
          data-beat
          className="mt-4 text-xs sm:text-sm md:text-base text-muted max-w-2xl leading-relaxed"
        >
          More hands closed more tickets and understood less. Escalations came
          back twice. The work got done and quietly got worse — and your own
          engineers ended up doing it anyway.
        </p>

        {/* Creative Centerpiece: Full-Width Executive Telemetry Terminal */}
        <div
          data-beat
          className="mt-8 w-full max-w-5xl border border-line/80 bg-ink-raised/95 p-6 backdrop-blur-md shadow-2xl text-left"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-line/60 pb-3 font-mono text-micro">
            <span className="text-accent font-semibold tracking-wider">
              INCIDENT TOPOLOGY // RUNTIME AUDIT
            </span>
            <span className="flex items-center gap-2 text-paper">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              <span>LIVE SYSTEM COMPARISON</span>
            </span>
          </div>

          {/* Dual-Trajectory Radar Schematics */}
          <div className="my-5 grid grid-cols-1 gap-4 font-mono sm:grid-cols-2">
            {/* 01. Conventional Deflection Loop */}
            <div className="border border-line/60 bg-ink/70 p-4">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted tracking-wider">01. CONVENTIONAL DEFLECTION LOOP</span>
                <span className="font-semibold text-amber-400">48.6% ESCALATION</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-muted/80">
                <span className="text-paper/70">Queue</span>
                <span>→</span>
                <span className="text-amber-400">Script Deflect</span>
                <span>→</span>
                <span className="text-amber-400">Bounce-Back</span>
                <span>→</span>
                <span className="text-paper/70">Engineer Re-work</span>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-muted/70">
                Seat count without platform mastery. Tickets are routed rather
                than resolved; escalations loop directly back to your team.
              </p>
            </div>

            {/* 02. Tazriel Sovereign Resolution Vector */}
            <div className="border border-accent/60 bg-ink/90 p-4 shadow-lg">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-accent tracking-wider">
                  02. TAZRIEL RESOLUTION VECTOR
                </span>
                <span className="font-bold text-accent">94.2% FIRST-TOUCH</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-paper">
                <span className="text-muted">Queue</span>
                <span className="text-accent">→</span>
                <span className="font-semibold text-paper">Embedded Specialist</span>
                <span className="text-accent">→</span>
                <span className="font-semibold text-accent">Code PR Merged</span>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-paper/85">
                Named domain engineers staffing queues. Direct Git/Jira access;
                root-cause fixes applied directly to production repositories.
              </p>
            </div>
          </div>

          {/* Real-time Telemetry Status Matrix */}
          <div className="grid grid-cols-4 gap-2 border-t border-line/60 pt-4 text-center font-mono text-xs">
            <div className="border-r border-line/40 pr-2">
              <span className="block text-[9px] uppercase tracking-wider text-muted">RESOLUTION LATENCY</span>
              <span className="font-semibold text-paper">42 MIN <span className="text-[10px] text-accent">vs 72H</span></span>
            </div>
            <div className="border-r border-line/40 pr-2">
              <span className="block text-[9px] uppercase tracking-wider text-muted">DEFLECTION QUEUES</span>
              <span className="font-semibold text-accent">0.0% <span className="text-[10px] text-muted">STRICT</span></span>
            </div>
            <div className="border-r border-line/40 pr-2">
              <span className="block text-[9px] uppercase tracking-wider text-muted">KNOWLEDGE RETENTION</span>
              <span className="font-semibold text-paper">100% IN CODE</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-muted">SLA ACCELERATION</span>
              <span className="font-semibold text-accent">4.8× MULTIPLIER</span>
            </div>
          </div>
        </div>

        {/* Bottom Strategic Principle */}
        <div
          data-beat
          className="mt-6 border border-line/60 bg-ink/80 px-6 py-2.5 font-mono text-xs text-muted max-w-lg shadow-lg"
        >
          <span className="text-accent font-semibold uppercase tracking-wider">
            Strategic Principle —{" "}
          </span>
          <span className="italic text-paper/90">
            &ldquo;Capacity closes tickets. Judgement resolves systems.&rdquo;
          </span>
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
      <div className="flex flex-col items-center text-center">
        {/* Subtitle Tag */}
        <div data-beat className="inline-flex items-center gap-2 border border-accent/40 bg-paper-sunk px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          <span className="size-1.5 rounded-full bg-accent animate-ping" />
          <span>The Decisive Delta</span>
        </div>

        {/* Title */}
        <h2
          id="chapter-3"
          data-beat
          className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-ink max-w-3xl"
        >
          It was never how many. It was whether they had{" "}
          <em className="font-serif italic text-accent">done it before.</em>
        </h2>

        {/* Narrative Context */}
        <p
          data-beat
          className="mt-4 text-xs sm:text-sm md:text-base text-muted-paper max-w-2xl leading-relaxed"
        >
          One operator who has run the discipline — in your tooling, against your
          constraints — resolves what a room of trained-yesterday staff escalates.
          That is the whole difference. It is the only thing we hire for.
        </p>

        {/* Creative Centerpiece: 3-Tier Seniority & Platform Mastery Ledger */}
        <div
          data-beat
          className="mt-8 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-3 max-w-5xl"
        >
          {/* Card 01 */}
          <div className="group border border-line-paper bg-paper-sunk/60 p-6 transition-all duration-300 hover:bg-paper-sunk shadow-md">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
              01 // SENIORITY THRESHOLD
            </span>
            <h3 className="mt-2 font-serif text-xl font-normal text-ink">
              Tier-3 Production Bench
            </h3>
            <span className="mt-1 block font-mono text-xs font-semibold text-muted-paper">
              5+ YEARS PRODUCTION RUNTIME
            </span>
            <p className="mt-3 text-xs leading-relaxed text-muted-paper">
              Engineers and specialists who have shipped inside enterprise codebases:
              Mendix Advanced, Azure AD, Jira Service Management, and RLHF pipelines.
            </p>
          </div>

          {/* Card 02 */}
          <div className="group border border-line-paper bg-paper-sunk/60 p-6 transition-all duration-300 hover:bg-paper-sunk shadow-md">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
              02 // TIME-TO-PRODUCTION
            </span>
            <h3 className="mt-2 font-serif text-xl font-normal text-ink">
              48-Hour Systems Integration
            </h3>
            <span className="mt-1 block font-mono text-xs font-semibold text-muted-paper">
              NATIVE TOOLING & CEREMONIES
            </span>
            <p className="mt-3 text-xs leading-relaxed text-muted-paper">
              Direct provisioning inside your Slack, GitHub/GitLab, and Jira sprint
              ceremonies. Zero shadow ticketing systems or artificial handoff delays.
            </p>
          </div>

          {/* Card 03 */}
          <div className="group border border-accent/40 bg-paper-sunk p-6 transition-all duration-300 shadow-lg">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
              03 // GOVERNANCE CONTROL
            </span>
            <h3 className="mt-2 font-serif text-xl font-normal text-ink">
              100% Unilateral Client Veto
            </h3>
            <span className="mt-1 block font-mono text-xs font-semibold text-accent">
              NAMED INTERVIEW SIGN-OFF
            </span>
            <p className="mt-3 text-xs leading-relaxed text-ink/90">
              You interview every practitioner directly before commercial start.
              If they do not meet your technical bar, they never touch your infrastructure.
            </p>
          </div>
        </div>

        {/* Bottom Decisive Delta Ribbon */}
        <div
          data-beat
          className="mt-8 border border-line-paper bg-paper/80 px-6 py-2.5 font-mono text-xs text-muted-paper max-w-lg shadow-sm"
        >
          <span className="text-accent font-semibold uppercase tracking-wider">
            The Decisive Delta —{" "}
          </span>
          <span className="italic text-ink/90">
            &ldquo;We hire only specialists who have run the discipline in production.&rdquo;
          </span>
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
      <div className="flex flex-col items-center text-center">
        {/* Subtitle Tag */}
        <div data-beat className="inline-flex items-center gap-2 border border-accent/40 bg-ink-raised/80 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          <span className="size-1.5 rounded-full bg-accent animate-ping" />
          <span>Sovereign Global Footprint</span>
        </div>

        {/* Title */}
        <h2
          id="chapter-4"
          data-beat
          className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-paper max-w-3xl"
        >
          Senior operators, embedded, on{" "}
          <span className="font-serif italic text-accent">two continents.</span>
        </h2>

        {/* Narrative Context */}
        <p
          data-beat
          className="mt-4 text-xs sm:text-sm md:text-base text-muted max-w-2xl leading-relaxed"
        >
          Delivery runs from Addis Ababa and is expanding into North Macedonia,
          giving structured coverage across US and EMEA hours. Seven disciplines.
          You interview every specialist before they join, and they work inside
          your systems rather than beside them.
        </p>

        {/* Creative Centerpiece: Full-Width Sovereign Dual-Hub Radar */}
        <div
          data-beat
          className="mt-8 grid w-full grid-cols-1 gap-6 text-left lg:grid-cols-12 max-w-5xl"
        >
          {/* Hub 01: Addis Ababa Delivery Hub (5 cols) */}
          <div className="relative border border-line/80 bg-ink-raised/95 p-6 shadow-2xl backdrop-blur-md lg:col-span-5">
            <div className="flex items-center justify-between border-b border-line/50 pb-3 font-mono text-micro">
              <span className="text-accent font-semibold">PRIMARY HUB 01 // EAST AFRICA</span>
              <span className="text-[10px] text-muted">9.03° N // 38.74° E</span>
            </div>

            <div className="mt-4">
              <h3 className="font-serif text-2xl font-normal text-paper">
                Addis Ababa Delivery Hub
              </h3>
              <div className="mt-2 flex items-baseline gap-3 font-mono">
                <span className="text-xl font-bold text-paper">{eatTime || "EAT"}</span>
                <span className="text-[11px] text-accent font-medium">EAT (UTC+3) · ACTIVE SPRINT</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 border-t border-line/40 pt-3 text-xs text-muted">
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Certified Mendix Rapid &amp; Advanced Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>High-Accuracy ML Annotation &amp; RLHF Bench</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Enterprise Cloud &amp; Platform Administration</span>
              </li>
            </ul>
          </div>

          {/* Center Bridge: Continuous 24h Timeline Arc (2 cols) */}
          <div className="hidden flex-col items-center justify-center border border-accent/40 bg-ink-raised/60 p-4 text-center lg:col-span-2 lg:flex shadow-xl">
            <span className="size-2 rounded-full bg-accent animate-ping" />
            <span className="mt-3 font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
              UNBROKEN
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
              TIMELINE
            </span>
            <div className="my-3 h-12 w-px bg-gradient-to-b from-accent via-paper/30 to-accent" />
            <span className="font-mono text-[9px] text-paper/80">
              US &amp; EMEA
            </span>
            <span className="font-mono text-[8px] text-muted">
              OVERLAP
            </span>
          </div>

          {/* Hub 02: Skopje EMEA Hub (5 cols) */}
          <div className="relative border border-line/80 bg-ink-raised/95 p-6 shadow-2xl backdrop-blur-md lg:col-span-5">
            <div className="flex items-center justify-between border-b border-line/50 pb-3 font-mono text-micro">
              <span className="text-accent font-semibold">EXPANSION HUB 02 // EMEA</span>
              <span className="text-[10px] text-muted">41.99° N // 21.42° E</span>
            </div>

            <div className="mt-4">
              <h3 className="font-serif text-2xl font-normal text-paper">
                Skopje EMEA Hub
              </h3>
              <div className="mt-2 flex items-baseline gap-3 font-mono">
                <span className="text-xl font-bold text-paper">{cetTime || "CET"}</span>
                <span className="text-[11px] text-accent font-medium">CET (UTC+1) · ACTIVE SPRINT</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 border-t border-line/40 pt-3 text-xs text-muted">
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Tier-3 SaaS Product Support &amp; Incident Resolution</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Cvent-Certified Enterprise Event Operations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" />
                <span>Direct Executive Access &amp; Governance Escort</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footprint Status */}
        <div
          data-beat
          className="mt-6 border border-line/60 bg-ink/80 px-6 py-2.5 font-mono text-xs text-muted max-w-md shadow-lg"
        >
          <span className="text-accent font-semibold">SOVEREIGN GOVERNANCE — </span>
          <span className="text-paper/90">ZERO SUBCONTRACTING</span>
        </div>
      </div>
    </Chapter>
  );
}
