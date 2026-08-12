"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsDesktop } from "@/hooks/use-media-query";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import { platforms } from "@/content/site";

/**
 * Horizontal track driven by vertical scroll while pinned. §5.2
 * Below `lg` and under reduced motion it becomes a native swipe track with
 * scroll-snap — same content, no JavaScript, fully keyboard-scrollable.
 */
export default function Capabilities() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const pinned = isDesktop && !reduced;

  useGSAP(
    () => {
      const el = track.current;
      if (!pinned || !el || !root.current) return;

      // Functional values so both distances re-measure on resize.
      const distance = () => el.scrollWidth - window.innerWidth;

      gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: root, dependencies: [pinned], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      data-field="paper"
      className={`overflow-hidden bg-paper text-ink ${pinned ? "flex h-svh flex-col justify-center" : "py-section"}`}
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
          pinned
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
            <p className="mt-3 text-body-l text-muted-paper">{platform.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
