"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsDesktop } from "@/hooks/use-media-query";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import { platforms } from "@/content/site";

/**
 * Exploded corridor — scroll-driven frame assembly, Apple's pattern adapted.
 *
 * Apple renders a 3D model to a few hundred PNG frames and scrubs them on a
 * canvas. That needs an asset we do not have and costs megabytes, so the object
 * is built out of DOM in CSS 3D: six plates in a `preserve-3d` stack separated
 * along Z, with the camera travelling the whole corridor and passing each one.
 *
 * It earns its place because the metaphor is literal rather than borrowed — the
 * headline claims depth in the systems an operation runs on, and the block comes
 * apart into exactly those layers, outermost to innermost.
 *
 * Three geometry rules, each fixing a measured bug in the previous version:
 *
 * 1. **The stage is full-bleed and the stack is centred in it.** Perspective
 *    origin defaults to the centre of the element carrying `perspective`, so
 *    when the stage lived in a 12-column grid cell the camera was aimed at
 *    x≈996 on a 1440 viewport and the whole corridor expanded off the right
 *    edge. `inset-0` + `place-items-center` makes the geometry correct by
 *    construction rather than by correction.
 * 2. **Passed layers are removed, not faded.** At `opacity: 0` a passed plate
 *    still painted at 3479x2204 and dragged the compositor hard enough to smear
 *    text in the next section. They now take `visibility: hidden` one step after
 *    passing — one step later so the change itself is never visible.
 * 3. **The exit lands on a change of state.** Paper opening onto paper was
 *    seamless to the point of being invisible. The last layer fills the viewport
 *    as a dark photograph, and the paper portal opens over it: dark to light.
 *
 * MI-1 Explode — trigger: entering the section. Rules: the solid block opens
 *   into a corridor running away from camera, staggered. Feedback: scrubbed,
 *   reversible.
 * MI-2 Walk — trigger: scroll across each layer's segment. Rules: layer i sits
 *   on the camera plane once the stack has travelled (i+1)*SPACING; it takes an
 *   accent hairline and full opacity, and the caption crossfades. Feedback:
 *   visual plus a polite live region, so the layer name is announced.
 * MI-3 Fly-through — trigger: continued scroll past the last layer. Rules: the
 *   camera does not stop, z lands 1000 short of the 1200 perspective origin
 *   (~6x) so the plate fills the viewport and passes.
 *
 * Linear throughout: with a scrub this literal any easing reads as the page
 * fighting the wheel rather than tracking it.
 *
 * Below `lg`, and under reduced motion at any width, none of this exists — the
 * section is a plain list with every platform visible at once.
 */

const PERSPECTIVE = 1200;
const SPACING = 340; // gap between layers along Z
const EXPLODE = 0.12; // block opens into a corridor
const FACE = 0.2; // camera squares up to the corridor mouth
const GATE = 0.86; // last layer reached; fly through it

/* A few degrees off-axis is what makes six layers read as a corridor instead of
 * one flat card — at rotate 0 the nearest plate occludes every plate behind it. */
const ROT_X = 6;
const ROT_Y = -13;

/* Rotating about Y throws deep layers sideways: a layer at local z = -d lands
 * d * sin(13°) to the right. Since the layer under the camera gets deeper as the
 * dolly advances, the framing would slide further right on every step. Countering
 * it on X keeps every layer composed identically — corridor right, copy left. */
const SIN_Y = Math.sin((Math.abs(ROT_Y) * Math.PI) / 180);
const OFFSET_X = 240; // where the active layer sits, right of viewport centre
const xForLayer = (i: number) => OFFSET_X - (i + 1) * SPACING * SIN_Y;

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

      // GSAP owns this element's transform outright. Centring is done by the
      // stage's grid, never by a CSS translate, so nothing competes with it.
      gsap.set(stack, { rotateX: 56, rotateY: 0, rotateZ: -26, x: 0, z: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            /* Derive the caption from the SAME mapping that drives the dolly,
             * or the two drift apart. The stack travels 0 -> n*SPACING across
             * [FACE, GATE], and layer i sits on the camera plane at
             * (i+1)*SPACING — so the layer under the camera is
             * (progress fraction) * n - 1. Dropping that -1 is what made the
             * caption run a whole layer ahead of the geometry. */
            const t =
              ((self.progress - FACE) / (GATE - FACE)) * n - 1;
            const next =
              t < -0.5 ? -1 : Math.min(n - 1, Math.max(0, Math.round(t)));

            // Fires every scroll frame; only re-render on a real change.
            if (next !== activeRef.current) {
              activeRef.current = next;
              setActive(next);
            }
          },
        },
      });

      // MI-1
      tl.fromTo(
        plates,
        { z: 0 },
        {
          z: (i: number) => -(i + 1) * SPACING,
          ease: "power2.out",
          duration: EXPLODE,
          stagger: 0.012,
        },
        0,
      );

      // The diagram turns off-axis and becomes a corridor to travel down.
      tl.to(
        stack,
        {
          rotateX: ROT_X,
          rotateY: ROT_Y,
          rotateZ: 0,
          x: xForLayer(0),
          ease: "none",
          duration: FACE - EXPLODE,
        },
        EXPLODE,
      );

      // MI-2 — the dolly, with X countering the rotateY drift in lockstep.
      tl.to(
        stack,
        {
          z: n * SPACING,
          x: xForLayer(n - 1),
          ease: "none",
          duration: GATE - FACE,
        },
        FACE,
      );

      // MI-3 — and straight through the last layer, into the next section.
      tl.to(
        stack,
        { z: n * SPACING + 1000, ease: "none", duration: 1 - GATE },
        GATE,
      )
        .to(copy, { opacity: 0, ease: "none", duration: 0.05 }, GATE)
        .fromTo(
          portal,
          { clipPath: "inset(50% 50% 50% 50%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ease: "none", duration: 0.1 },
          GATE + 0.04,
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

  /* ── Cinematic ─────────────────────────────────────────────────────────── */
  const current = active >= 0 ? platforms[active] : null;

  return (
    <section
      ref={root}
      data-field="paper"
      className="bg-paper text-ink"
      style={{ height: `${(n + 2) * 58}svh` }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Stage. Full-bleed, so perspective-origin is the viewport centre. */}
        <div
          aria-hidden
          className="absolute inset-0 grid place-items-center"
          style={{ perspective: `${PERSPECTIVE}px` }}
        >
          <div
            data-stack
            className="relative h-[24rem] w-[38rem]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {platforms.map((platform, i) => {
              const state =
                active < 0
                  ? "diagram"
                  : i === active
                    ? "on"
                    : i < active - 1
                      ? "gone"
                      : i < active
                        ? "passing"
                        : "ahead";

              return (
                <div
                  key={platform.name}
                  data-plate
                  className={`absolute inset-0 isolate overflow-hidden border transition-[opacity,border-color] duration-300 ${
                    {
                      diagram: "border-line-paper opacity-90",
                      on: "border-accent opacity-100",
                      passing: "border-line-paper opacity-0",
                      /* display:none, not visibility:hidden. A passed plate
                       * keeps travelling toward the perspective origin, where
                       * scale tends to infinity — one was measured at
                       * 119682x73921. visibility:hidden still leaves that box
                       * in layout for the compositor to reckon with; display
                       * removes it outright. */
                      gone: "hidden border-line-paper opacity-0",
                      ahead: "border-line-paper opacity-25",
                    }[state]
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={`/media/${platform.image}-1280.webp`}
                    alt=""
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="size-full object-cover grayscale"
                  />
                  <span className="absolute inset-0 bg-ink/75 mix-blend-color" />
                  <span
                    className={`absolute inset-0 transition-colors duration-300 ${
                      state === "on" ? "bg-ink/20" : "bg-paper/35"
                    }`}
                  />
                  <span className="absolute bottom-4 left-5 font-display text-5xl leading-none text-paper/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Caption. Upright and unrotated — the 3D is the diagram, not the prose. */}
        <div
          data-copy
          className="absolute inset-x-0 bottom-0 px-gutter pb-16 pt-40"
          style={{
            background:
              "linear-gradient(to top, var(--color-paper) 22%, transparent)",
          }}
        >
          <div className="mx-auto max-w-frame">
            <p className="mb-5 text-micro font-medium uppercase text-accent">
              Platform depth
            </p>

            {/* Both states share one grid cell so nothing reflows on change. */}
            <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
              <h2
                className={`max-w-[15ch] text-display-m transition-opacity duration-500 ${
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
                    <h3 className="mt-3 text-display-m">{current.name}</h3>
                    <p className="measure mt-3 text-body-l text-muted-paper">
                      {current.note}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* The far side of the doorway. Opens over the dark final layer, so the
            arrival is a visible change of state rather than paper on paper. */}
        <div
          data-portal
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 bg-paper"
          style={{ clipPath: "inset(50% 50% 50% 50%)" }}
        />
      </div>
    </section>
  );
}
