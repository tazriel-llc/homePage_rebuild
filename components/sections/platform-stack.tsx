"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsDesktop } from "@/hooks/use-media-query";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import { platforms } from "@/content/site";

/**
 * Exploded stack — scroll-driven frame assembly, Apple's pattern adapted.
 *
 * Apple renders a 3D model to a few hundred PNG frames and scrubs them on a
 * canvas. That needs an asset we do not have and costs megabytes, so the object
 * is built out of DOM in CSS 3D instead: six plates in a `preserve-3d` stack,
 * separated along Z. Six transformed elements, no WebGL, no image sequence.
 *
 * It earns its place because the metaphor is literal rather than borrowed —
 * the headline claims depth in the systems an operation runs on, and the block
 * comes apart to show exactly those layers, outermost to innermost.
 *
 * Replaces the horizontal platform track, which stranded card 01 off-screen and
 * left dead space above and below it.
 *
 * MI-1 Assemble — trigger: scroll entering the section. Rules: plates separate
 *   along Z from a single solid block, staggered. Feedback: scrubbed, reversible.
 * MI-2 Walk — trigger: scroll past each layer's segment. Rules: the active plate
 *   lifts to full opacity with an accent hairline, the rest dim to 0.3; the
 *   upright text block crossfades. Feedback: visual, no colour-only meaning.
 * MI-3 Turn — trigger: continued scroll. Rules: the whole stack rotates toward
 *   the viewer as the walk progresses, so later layers are read more face-on.
 *
 * Below `lg`, and under reduced motion at any width, it becomes a plain card
 * grid — no 3D, no scrub, every platform visible at once.
 */
export default function PlatformStack() {
  const root = useRef<HTMLElement>(null);
  const activeRef = useRef(-1);
  const [active, setActive] = useState(-1);

  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const cinematic = isDesktop && !reduced;
  const n = platforms.length;

  useGSAP(
    () => {
      if (!cinematic || !root.current) return;

      const q = gsap.utils.selector(root);
      const stack = q("[data-stack]");
      const plates = q("[data-plate]");
      const copy = q("[data-copy]");
      const portal = q("[data-portal]");

      // The resting pose. GSAP owns this element's transform outright so the
      // rotation tween below cannot fight a competing CSS transform.
      gsap.set(stack, { rotateX: 58, rotateZ: -28 });

      const START = 0.16; // block stays solid until here
      const GATE = 0.8; // layers are read between START and here; then fly through
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const next =
              self.progress < START
                ? -1
                : Math.min(
                    n - 1,
                    Math.floor((self.progress - START) / ((GATE - START) / n)),
                  );
            // onUpdate runs every scroll frame; only re-render on a real change.
            if (next !== activeRef.current) {
              activeRef.current = next;
              setActive(next);
            }
          },
        },
      });

      // MI-1 — the block comes apart.
      tl.fromTo(
        plates,
        { z: 0 },
        {
          z: (i: number) => (i - (n - 1) / 2) * 118,
          ease: "power2.out",
          duration: START,
          stagger: 0.015,
        },
        0,
      );

      // MI-3 — and turns toward the viewer while the layers are read.
      tl.to(
        stack,
        { rotateX: 44, rotateZ: -8, ease: "none", duration: GATE - START },
        START,
      );

      /* MI-4 Fly through — the camera moves into the stack.
       *
       * Linear throughout, as requested: with a scrub this literal, any easing
       * reads as the page fighting the scroll wheel rather than tracking it.
       *
       * The portal is the same paper as the section ground and as the section
       * that follows, so when it finishes opening there is no cut — the pin
       * simply releases onto matching ground and the next section continues.
       */
      tl.to(stack, { rotateX: 0, rotateZ: 0, ease: "none", duration: 0.05 }, GATE)
        .to(plates, { z: 0, ease: "none", duration: 0.05 }, GATE)
        .to(copy, { opacity: 0, ease: "none", duration: 0.05 }, GATE)
        // Past ~14x the front plate has long left the viewport — that is the
        // moment the camera is "inside" it.
        .to(stack, { scale: 15, ease: "none", duration: 0.2 }, GATE)
        .fromTo(
          portal,
          { clipPath: "inset(50% 50% 50% 50%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "none", duration: 0.13 },
          GATE + 0.05,
        );
    },
    { scope: root, dependencies: [cinematic, n], revertOnUpdate: true },
  );

  /* ── Fallback: mobile, and reduced motion at any width ─────────────────── */
  if (!cinematic) {
    return (
      <section
        ref={root}
        data-field="paper"
        className="bg-paper px-gutter py-section text-ink"
      >
        <div className="mx-auto max-w-frame">
          <RevealBlock>
            <p className="mb-6 text-micro font-medium uppercase text-accent">
              Platform depth
            </p>
          </RevealBlock>
          <RevealText as="h2" className="max-w-[16ch] text-display-m">
            Depth in the systems your operation already runs on.
          </RevealText>

          <RevealBlock stagger className="mt-16 border-t border-line-paper">
            {platforms.map((platform, i) => (
              <div key={platform.name} className="border-b border-line-paper py-6">
                <p className="text-micro font-medium uppercase text-muted-paper">
                  {String(i + 1).padStart(2, "0")} — {platform.role}
                </p>
                <h3 className="mt-3 text-display-m">{platform.name}</h3>
                <p className="measure mt-2 text-body-l text-muted-paper">
                  {platform.note}
                </p>
              </div>
            ))}
          </RevealBlock>
        </div>
      </section>
    );
  }

  /* ── Cinematic: exploded stack ─────────────────────────────────────────── */
  const current = active >= 0 ? platforms[active] : null;

  return (
    <section
      ref={root}
      data-field="paper"
      className="bg-paper text-ink"
      // Runway covers the explode, the walk, and the fly-through gate.
      style={{ height: `${(n + 4) * 90}svh` }}
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden px-gutter">
        {/* The far side of the doorway. Opens from the centre as the camera
            passes through the stack, and is the same paper as both this
            section and the one after it — so the pin releases onto matching
            ground with no cut. */}
        <div
          data-portal
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 bg-paper"
          style={{ clipPath: "inset(50% 50% 50% 50%)" }}
        />

        <div className="mx-auto grid w-full max-w-frame grid-cols-12 items-center gap-8">
          {/* Upright text. Never rotated — the 3D is the diagram, not the copy. */}
          <div data-copy className="col-span-5">
            <p className="mb-6 text-micro font-medium uppercase text-accent">
              Platform depth
            </p>

            {/* Both states occupy the same cell so nothing reflows on change. */}
            <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
              <h2
                className={`max-w-[15ch] text-display-l transition-opacity duration-500 ${
                  current ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
              >
                Depth in the systems your operation already runs on.
              </h2>

              <div
                aria-live="polite"
                className={`transition-opacity duration-500 ${
                  current ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {current && (
                  <>
                    <p className="text-micro font-medium uppercase text-muted-paper">
                      Layer {String(active + 1).padStart(2, "0")} of{" "}
                      {String(n).padStart(2, "0")} — {current.role}
                    </p>
                    <h3 className="mt-4 max-w-[14ch] text-display-l">
                      {current.name}
                    </h3>
                    <p className="measure mt-5 text-body-l text-muted-paper">
                      {current.note}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* The object. Decorative — every layer is named in the text above. */}
          <div
            aria-hidden
            className="col-span-7 flex items-center justify-center"
            style={{ perspective: "1500px" }}
          >
            <div
              data-stack
              className="relative h-[19rem] w-[30rem]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {platforms.map((platform, i) => (
                <div
                  key={platform.name}
                  data-plate
                  className={`absolute inset-0 isolate overflow-hidden border transition-[opacity,border-color] duration-500 ${
                    active === i
                      ? "border-accent opacity-100"
                      : "border-line-paper opacity-30"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={`/media/${platform.image}-640.webp`}
                    alt=""
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="size-full object-cover grayscale"
                  />
                  {/* Same navy duotone as the rest of the page's photography. */}
                  <span className="absolute inset-0 bg-depth mix-blend-color" />
                  <span
                    className={`absolute inset-0 transition-colors duration-500 ${
                      active === i ? "bg-ink/25" : "bg-paper/55"
                    }`}
                  />
                  <span className="absolute bottom-3 left-4 font-display text-4xl leading-none text-paper/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
