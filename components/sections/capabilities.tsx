"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsDesktop } from "@/hooks/use-media-query";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import { platforms } from "@/content/site";

/**
 * Horizontal track driven by vertical scroll, on the same sticky runway the
 * chapters use — no ScrollTrigger `pin` anywhere on this page.
 *
 * Below `lg` and under reduced motion it becomes a native swipe track with
 * scroll-snap: same content, no JavaScript, keyboard-scrollable.
 */
export default function Capabilities() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const scrubbed = isDesktop && !reduced;

  useGSAP(
    () => {
      const el = track.current;
      if (!scrubbed || !el || !root.current) return;

      // Functional value so the distance re-measures on resize.
      const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);

      gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: root, dependencies: [scrubbed], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      data-field="paper"
      className="bg-paper text-ink"
      style={scrubbed ? { height: "260svh" } : undefined}
    >
      <div
        className={
          scrubbed
            ? "sticky top-0 flex h-svh flex-col justify-center overflow-hidden"
            : "py-section"
        }
      >
        <div className="mx-auto w-full max-w-frame px-gutter">
          <RevealBlock>
            <p className="mb-6 text-micro font-medium uppercase text-accent">
              Platform depth
            </p>
          </RevealBlock>
          <RevealText as="h2" className="max-w-[16ch] text-display-m">
            Depth in the systems your operation already runs on.
          </RevealText>
        </div>

        <ul
          ref={track}
          className={`mt-16 flex gap-6 px-gutter ${
            scrubbed
              ? "w-max"
              : "snap-x snap-mandatory overflow-x-auto pb-4 [scrollbar-width:thin]"
          }`}
        >
          {platforms.map((platform, i) => (
            <li
              key={platform.name}
              className="w-[78vw] shrink-0 snap-start border-t border-line-paper pt-6 sm:w-[52vw] lg:w-[30vw]"
            >
              <p className="text-micro font-medium uppercase text-muted-paper">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-display-m">{platform.name}</h3>
              <p className="mt-3 text-body-l text-muted-paper">
                {platform.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
