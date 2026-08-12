"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";

const steps = [
  {
    title: "Scope",
    body: "We map the work as it actually runs today — tooling, handoffs, and the parts nobody documented.",
  },
  {
    title: "Match",
    body: "Named specialists are matched to the discipline. You interview them. You approve them.",
  },
  {
    title: "Embed",
    body: "They join your systems and your rituals. Standups, boards, and escalation paths are yours, not ours.",
  },
  {
    title: "Scale",
    body: "The bench widens as the work does, without restarting the relationship each time.",
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
        <RevealBlock>
          <p className="mb-6 text-micro font-medium uppercase text-accent">
            How an engagement starts
          </p>
        </RevealBlock>

        <RevealText as="h2" className="max-w-[16ch] text-display-l">
          Four steps, and you approve every one.
        </RevealText>

        <div className="relative mt-20 pl-10 sm:pl-16">
          {/* The rail sits behind the steps and draws as they are read. */}
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
                  className="absolute -left-10 top-2 text-micro font-medium text-muted-paper sm:-left-16"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-display-m">{step.title}</h3>
                <p className="measure mt-3 text-body-l text-muted-paper">
                  {step.body}
                </p>
              </div>
            ))}
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
