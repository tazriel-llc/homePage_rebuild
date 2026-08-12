"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, SplitText, EASE, DUR, TRIGGER } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * The signature move of the site: headline lines rise out of their own mask. §5.2
 *
 * useGSAP runs in useLayoutEffect, so the initial `yPercent: 100` is applied
 * before first paint — no flash of un-masked text.
 */
export default function RevealText({
  as: Tag = "h2",
  children,
  className,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      // Reduced motion: leave the text exactly as rendered. Never hidden.
      if (reduced || !ref.current) return;

      const split = new SplitText(ref.current, { type: "lines", mask: "lines" });

      gsap.set(split.lines, { yPercent: 100 });
      gsap.to(split.lines, {
        yPercent: 0,
        duration: DUR.reveal,
        ease: EASE.reveal,
        stagger: 0.08,
        delay,
        scrollTrigger: { trigger: ref.current, ...TRIGGER },
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [reduced], revertOnUpdate: true },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
