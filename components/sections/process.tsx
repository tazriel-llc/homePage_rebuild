"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";

const steps = [
  {
    stage: "01",
    title: "Scope",
    checkpoint: "Architecture Spec",
    body: "We map the work as it actually runs today — tooling, handoffs, and the parts nobody documented.",
    deliverable: "Operational Map & Tooling Audit",
  },
  {
    stage: "02",
    title: "Match",
    checkpoint: "Client Approval",
    body: "Named specialists are matched to the discipline. You interview them. You approve them.",
    deliverable: "Direct Candidate Interviews",
  },
  {
    stage: "03",
    title: "Embed",
    checkpoint: "System Integration",
    body: "They join your systems and your rituals. Standups, boards, and escalation paths are yours, not ours.",
    deliverable: "Native Git, Slack & Jira Access",
  },
  {
    stage: "04",
    title: "Scale",
    checkpoint: "Elastic Expansion",
    body: "The bench widens as the work does, without restarting the relationship each time.",
    deliverable: "Dynamic Bench Provisioning",
  },
];

/** Four steps on a rail that draws down as the section is read. §7.1 */
export default function Process() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;
      const rail = gsap.utils.selector(root)("[data-rail]");

      gsap.fromTo(
        rail,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: EASE.transition,
          scrollTrigger: {
            trigger: root.current,
            start: "top 65%",
            end: "bottom 75%",
            scrub: 0.6,
          },
        },
      );
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      data-field="paper"
      className="bg-paper px-gutter py-section text-ink"
    >
      <div className="mx-auto max-w-frame">
        <div className="flex flex-col justify-between gap-6 pb-16 lg:flex-row lg:items-end">
          <div>
            <RevealBlock>
              <div className="flex items-center gap-3">
                <span className="text-micro font-medium uppercase tracking-[0.2em] text-accent">
                  Engagement Framework
                </span>
                <span className="size-1 rounded-full bg-accent" />
                <span className="text-micro font-medium uppercase tracking-widest text-muted-paper">
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
              We never parachute untrusted staff into your systems. Every phase
              carries an explicit sign-off checkpoint before moving forward.
            </p>
          </RevealBlock>
        </div>

        {/* Desktop 4-Column Architectural Ledger Grid */}
        <RevealBlock stagger className="mt-12 hidden border border-line-paper lg:grid lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`group flex flex-col justify-between p-8 transition-colors duration-300 hover:bg-paper-sunk ${
                i < steps.length - 1 ? "border-r border-line-paper" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-line-paper/60 pb-4">
                  <span className="font-mono text-micro font-medium text-accent">
                    {step.stage} // PHASE
                  </span>
                  <span className="text-micro font-medium uppercase tracking-wider text-muted-paper">
                    {step.checkpoint}
                  </span>
                </div>

                <h3 className="mt-6 text-display-m font-normal text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-paper">
                  {step.body}
                </p>
              </div>

              <div className="mt-8 border-t border-line-paper/60 pt-4">
                <span className="font-mono text-micro text-accent">
                  Checkpoint
                </span>
                <p className="mt-1 text-xs font-medium text-ink">
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </RevealBlock>

        {/* Mobile & Tablet Vertical Rail Layout */}
        <div className="relative mt-12 pl-10 sm:pl-16 lg:hidden">
          <div
            aria-hidden
            className="absolute bottom-0 left-0 top-0 w-px bg-line-paper"
          >
            <span
              data-rail
              className="absolute inset-0 origin-top bg-accent"
            />
          </div>

          <RevealBlock stagger>
            {steps.map((step, i) => (
              <div key={step.title} className="relative pb-16 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-10 top-2 font-mono text-micro font-medium text-muted-paper sm:-left-16"
                >
                  {step.stage}
                </span>
                <span className="font-mono text-micro font-medium uppercase text-accent">
                  {step.checkpoint}
                </span>
                <h3 className="mt-1 text-display-m">{step.title}</h3>
                <p className="measure mt-3 text-body-l text-muted-paper">
                  {step.body}
                </p>
                <p className="mt-3 text-xs font-medium text-accent">
                  Deliverable: {step.deliverable}
                </p>
              </div>
            ))}
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
