"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";

type Step = {
  stage: string;
  title: string;
  checkpoint: string;
  body: string;
  timeline: string;
  authority: string;
  deliverable: string;
  badge: string;
  milestones: string[];
};

const steps: Step[] = [
  {
    stage: "01",
    title: "Scope",
    checkpoint: "Architecture Spec",
    timeline: "48 – 72 Hours",
    authority: "Diagnostic Mapping",
    badge: "OPERATIONAL AUDIT",
    body: "We map the work as it actually runs today — tooling, handoffs, and the parts nobody documented.",
    deliverable: "Operational Map & Tooling Audit",
    milestones: [
      "Deep audit of existing repositories, boards, and workflows",
      "Identification of hidden manual escalations",
      "Mutual sign-off on SLA and technical deliverables",
    ],
  },
  {
    stage: "02",
    title: "Match",
    checkpoint: "Client Approval",
    timeline: "5 – 10 Business Days",
    authority: "100% Client Veto",
    badge: "SPECIALIST INTERVIEW",
    body: "Named specialists are matched to the discipline. You interview them. You approve them.",
    deliverable: "Direct Candidate Interviews",
    milestones: [
      "Rigorous technical pre-screening by our practice leads",
      "Video panel interviews with your engineering or ops team",
      "Unilateral client approval before commercial start",
    ],
  },
  {
    stage: "03",
    title: "Embed",
    checkpoint: "System Integration",
    timeline: "48 Hours to Production",
    authority: "Native Tooling Access",
    badge: "SYSTEM INTEGRATION",
    body: "They join your systems and your rituals. Standups, boards, and escalation paths are yours, not ours.",
    deliverable: "Native Git, Slack & Jira Access",
    milestones: [
      "Provisioning inside your company MDM, VPN, and identity providers",
      "Direct participation in sprint planning and daily standups",
      "Zero deflection queues — work is resolved at source",
    ],
  },
  {
    stage: "04",
    title: "Scale",
    checkpoint: "Elastic Expansion",
    timeline: "On-Demand Elasticity",
    authority: "Zero Knowledge Loss",
    badge: "ELASTIC CONTINUITY",
    body: "The bench widens as the work does, without restarting the relationship each time.",
    deliverable: "Dynamic Bench Provisioning",
    milestones: [
      "Shadow leads briefed on your architecture to ensure continuity",
      "Rapid addition of adjacent platform practitioners",
      "Continuous performance and security posture reviews",
    ],
  },
];

/**
 * Process — Engagement Framework.
 *
 * Brought alive with rich motion & interaction:
 * 1. Living Auto-Advance Cycle: Gently rotates phases every 4.5s with an animated progress laser.
 * 2. Instant User Override: Hovering or clicking any card pauses the cycle and locks onto that phase.
 * 3. Interactive Phase Stepper: 1-click jump tabs with real-time indicators.
 * 4. Expanded Milestone Dossier: Animated checkmarks and live deliverable specs on active card.
 */
export default function Process() {
  const root = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduced = useReducedMotion();

  // ── Ambient Auto-Advance Engine (Brings the framework ALIVE) ─────────────
  useEffect(() => {
    if (isPaused || reduced) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, reduced]);

  // ── Scroll & Laser Animations ──────────────────────────────────────────
  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const laser = laserRef.current;
      if (!laser) return;

      // Draw laser across the top as you scroll into the section
      gsap.fromTo(
        laser,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      data-field="paper"
      className="relative overflow-hidden bg-paper px-gutter py-section text-ink"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-frame">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 pb-12 lg:flex-row lg:items-end">
          <div>
            <RevealBlock>
              <div className="flex items-center gap-3">
                <span className="font-mono text-micro font-medium uppercase tracking-[0.2em] text-accent">
                  Engagement Framework
                </span>
                <span className="size-1 rounded-full bg-accent" />
                <span className="font-mono text-micro uppercase tracking-widest text-muted-paper">
                  Controlled Integration
                </span>
              </div>
            </RevealBlock>

            <RevealText as="h2" className="mt-4 max-w-[16ch] text-display-l">
              Four steps, and you approve every one.
            </RevealText>
          </div>

          <RevealBlock delay={0.2} className="max-w-md">
            <p className="text-body-l text-muted-paper">
              We never parachute unvetted staff into your infrastructure. Every
              phase carries a strict sign-off checkpoint before moving forward.
            </p>
          </RevealBlock>
        </div>

        {/* Interactive Phase Stepper Tabs & Auto-Advance Control */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-line-paper pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-micro uppercase tracking-wider text-muted-paper">
              Phase Select:
            </span>
            {steps.map((step, idx) => (
              <button
                key={step.stage}
                type="button"
                onClick={() => {
                  setActiveStep(idx);
                  setIsPaused(true);
                }}
                className={`group flex items-center gap-2 px-3.5 py-1.5 font-mono text-xs transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-ink text-paper shadow-sm"
                    : "bg-paper-sunk/60 text-ink hover:bg-paper-sunk"
                }`}
              >
                <span
                  className={
                    activeStep === idx ? "text-accent font-bold" : "text-muted-paper"
                  }
                >
                  {step.stage}
                </span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          {/* Live Engine Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-micro text-muted-paper">
            <span className="size-1.5 rounded-full bg-accent animate-ping" />
            <span>{isPaused ? "MANUAL INSPECTION" : "LIFECYCLE ROTATING"}</span>
          </div>
        </div>

        {/* Continuous Laser Track (Draws horizontally across the grid) */}
        <div
          ref={railRef}
          aria-hidden
          className="relative hidden h-0.5 w-full bg-line-paper lg:block"
        >
          <div
            ref={laserRef}
            className="absolute inset-y-0 left-0 w-full origin-left bg-accent shadow-[0_0_8px_rgba(237,76,0,0.6)]"
          />
        </div>

        {/* Desktop 4-Column Interactive Grid */}
        <div className="mt-6 hidden border border-line-paper lg:grid lg:grid-cols-4">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={step.title}
                onMouseEnter={() => {
                  setActiveStep(i);
                  setIsPaused(true);
                }}
                onClick={() => {
                  setActiveStep(i);
                  setIsPaused(true);
                }}
                className={`group relative flex cursor-pointer flex-col justify-between p-8 transition-all duration-500 ${
                  i < steps.length - 1 ? "border-r border-line-paper" : ""
                } ${
                  isActive
                    ? "bg-paper-sunk shadow-xl"
                    : "bg-paper/40 hover:bg-paper-sunk/50"
                }`}
              >
                {/* Active Indicator Top Edge Laser */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 transition-all duration-300 ${
                    isActive ? "bg-accent" : "bg-transparent"
                  }`}
                />

                {/* Architectural Corner Crosshair `+` */}
                <span className="absolute top-2 left-2 font-mono text-[9px] text-accent/50 select-none">+</span>
                <span className="absolute top-2 right-2 font-mono text-[9px] text-accent/50 select-none">+</span>

                <div>
                  <div className="flex items-center justify-between border-b border-line-paper/60 pb-4">
                    <span
                      className={`font-mono text-micro font-medium transition-colors duration-300 ${
                        isActive ? "text-accent font-bold" : "text-muted-paper"
                      }`}
                    >
                      {step.stage} // PHASE
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-paper">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-display-m font-normal text-ink">
                        {step.title}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                        {step.badge}
                      </span>
                    </div>

                    {isActive && (
                      <span className="relative flex size-2.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
                      </span>
                    )}
                  </div>

                  {/* Animated Progress Bar under Title when active */}
                  {isActive && !isPaused && (
                    <div className="mt-3 h-0.5 w-full overflow-hidden bg-line-paper/60">
                      <div className="h-full w-full bg-accent origin-left animate-[progress_4.5s_linear_infinite]" />
                    </div>
                  )}

                  <p className="mt-4 text-sm leading-relaxed text-muted-paper">
                    {step.body}
                  </p>

                  {/* Interactive Milestones Checklist (Alive on Active) */}
                  <div
                    className={`mt-6 space-y-2.5 overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "max-h-56 opacity-100"
                        : "max-h-0 opacity-0 group-hover:max-h-56 group-hover:opacity-100"
                    }`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                      Key Milestone Outputs:
                    </p>
                    {step.milestones.map((m) => (
                      <div
                        key={m}
                        className="flex items-start gap-2 text-xs text-ink/85"
                      >
                        <span className="mt-0.5 font-bold text-accent">✓</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Sign-Off Checkpoint */}
                <div className="mt-8 border-t border-line-paper/60 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-micro text-accent font-semibold">
                      Client Checkpoint:
                    </span>
                    <span className="font-mono text-[10px] uppercase text-muted-paper">
                      {step.authority}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-ink">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Interactive Accordion Layout */}
        <div className="mt-8 space-y-4 lg:hidden">
          {steps.map((step, i) => {
            const isOpen = activeStep === i;
            return (
              <div
                key={step.title}
                className={`border border-line-paper transition-colors ${
                  isOpen ? "bg-paper-sunk" : "bg-paper/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep(isOpen ? -1 : i);
                    setIsPaused(true);
                  }}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-accent">
                      {step.stage}
                    </span>
                    <span className="font-serif text-xl font-normal text-ink">
                      {step.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-paper">
                      {step.timeline}
                    </span>
                    <span className="font-mono text-accent">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-line-paper/60 px-6 pb-6 pt-4">
                    <p className="text-sm text-muted-paper">{step.body}</p>

                    <div className="mt-4 space-y-2 border-t border-line-paper/40 pt-4">
                      {step.milestones.map((m) => (
                        <div
                          key={m}
                          className="flex items-start gap-2 text-xs text-ink/80"
                        >
                          <span className="text-accent font-bold">✓</span>
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-2">
                      <span className="font-mono text-micro text-accent">
                        Deliverable:
                      </span>
                      <p className="text-xs font-semibold text-ink">
                        {step.deliverable} ({step.authority})
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
