"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Fraction of cursor offset the element travels. Above ~0.5 it reads as a toy. */
  strength?: number;
};

/**
 * Cursor attraction for primary CTAs only. §5.1
 *
 * The wrapper carries padding so the pull begins ~40px out; the inner span is
 * what actually moves, so the element's own hit area never shifts under the
 * cursor. Suppressed on touch and under reduced motion.
 */
export default function Magnetic({
  children,
  className,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inner = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      const target = inner.current;
      if (reduced || !el || !target) return;
      // Coarse pointers have no hover to be magnetic about.
      if (!window.matchMedia("(pointer: fine)").matches) return;

      // quickTo reuses one tween instead of creating one per pointermove event.
      const xTo = gsap.quickTo(target, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(target, "y", { duration: 0.4, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: ref, dependencies: [reduced, strength], revertOnUpdate: true },
  );

  return (
    <span ref={ref} className={`inline-block p-3 ${className ?? ""}`}>
      <span ref={inner} className="inline-block">
        {children}
      </span>
    </span>
  );
}
