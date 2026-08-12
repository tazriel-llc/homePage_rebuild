"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, EASE, TRIGGER } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger direct children instead of animating the block as one unit. */
  stagger?: boolean;
  delay?: number;
};

/**
 * Generic content reveal — transform and opacity only, never layout properties. §4.4
 */
export default function RevealBlock({
  children,
  className,
  stagger = false,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !ref.current) return;

      const targets = stagger
        ? Array.from(ref.current.children)
        : [ref.current];

      gsap.set(targets, { y: 40, opacity: 0, willChange: "transform, opacity" });
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: EASE.reveal,
        stagger: stagger ? 0.06 : 0,
        delay,
        scrollTrigger: { trigger: ref.current, ...TRIGGER },
        // Never leave will-change standing — it holds a compositor layer forever. §4.4
        onComplete: () => gsap.set(targets, { willChange: "auto" }),
      });
    },
    { scope: ref, dependencies: [reduced, stagger], revertOnUpdate: true },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
