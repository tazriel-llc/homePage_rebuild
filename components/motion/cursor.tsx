"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Custom luxury cursor. PRD §5.1
 *
 * Rules:
 * - Pointer-devices only (`pointer: fine`). Suppressed on touch and under reduced-motion.
 * - 6px dot following with smooth damping, expanding to a 40px ring over interactive
 *   targets (links, buttons, inputs), collapsing to a subtle bar over readable text.
 * - quickTo reuses persistent tweens for 60fps tracking without layout thrash.
 * - Hidden until first pointer move so it never flashes at (0, 0).
 */
export default function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    // Coarse pointers (touch) and reduced-motion visitors never mount this.
    if (!reduced && window.matchMedia("(pointer: fine)").matches) {
      setMounted(true);
    }
  }, [reduced]);

  useGSAP(
    () => {
      if (!mounted || !rootRef.current || !dotRef.current || !ringRef.current)
        return;

      const root = rootRef.current;
      const dot = dotRef.current;
      const ring = ringRef.current;

      // Initial placement off-screen
      gsap.set(root, { opacity: 0 });
      gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

      // quickTo for 60fps tracking
      const xDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" });
      const yDot = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" });
      const xRing = gsap.quickTo(ring, "x", { duration: 0.32, ease: "power3.out" });
      const yRing = gsap.quickTo(ring, "y", { duration: 0.32, ease: "power3.out" });

      let isVisible = false;

      const onPointerMove = (e: PointerEvent) => {
        if (!isVisible) {
          isVisible = true;
          gsap.to(root, { opacity: 1, duration: 0.3, ease: "power2.out" });
        }

        const { clientX, clientY } = e;
        xDot(clientX);
        yDot(clientY);
        xRing(clientX);
        yRing(clientY);

        // Detect target type
        const target = e.target as HTMLElement | null;
        if (!target) return;

        const isInteractive = Boolean(
          target.closest(
            'a, button, [role="button"], input, select, textarea, [data-cursor="interactive"]',
          ),
        );

        const isText =
          !isInteractive &&
          Boolean(
            target.closest(
              'p, h1, h2, h3, h4, h5, h6, blockquote, .measure, [data-cursor="text"]',
            ),
          );

        if (isInteractive) {
          gsap.to(ring, {
            scale: 1,
            opacity: 1,
            borderColor: "var(--color-accent)",
            backgroundColor: "rgba(237, 76, 0, 0.08)",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(dot, {
            scale: 0.4,
            opacity: 0.6,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else if (isText) {
          gsap.to(ring, {
            scale: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(dot, {
            scaleX: 0.3,
            scaleY: 2.5,
            opacity: 0.9,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          // Resting state
          gsap.to(ring, {
            scale: 0.35,
            opacity: 0.3,
            borderColor: "var(--color-paper)",
            backgroundColor: "transparent",
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(dot, {
            scale: 1,
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      };

      const onPointerDown = () => {
        gsap.to([dot, ring], {
          scale: "-=0.2",
          duration: 0.15,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const onPointerUp = () => {
        gsap.to([dot, ring], {
          scale: "+=0.2",
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const onMouseLeave = () => {
        isVisible = false;
        gsap.to(root, { opacity: 0, duration: 0.3, ease: "power2.out" });
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerdown", onPointerDown, { passive: true });
      window.addEventListener("pointerup", onPointerUp, { passive: true });
      document.documentElement.addEventListener("mouseleave", onMouseLeave);

      return () => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerdown", onPointerDown);
        window.removeEventListener("pointerup", onPointerUp);
        document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      };
    },
    { scope: rootRef, dependencies: [mounted] },
  );

  if (!mounted) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference"
    >
      {/* 40px expanding ring */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 size-10 rounded-full border border-paper/40"
        style={{ transform: "scale(0.35)", opacity: 0.3 }}
      />
      {/* 6px core follower dot */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 size-1.5 rounded-full bg-paper"
      />
    </div>
  );
}
