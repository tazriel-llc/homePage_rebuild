"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsDesktop } from "@/hooks/use-media-query";
import RevealBlock from "@/components/motion/reveal-block";
import { liveServices } from "@/content/site";

/**
 * The seven disciplines advance in place. Same sticky mechanism as Chapter —
 * a tall runway with a sticky viewport — rather than ScrollTrigger `pin`, so
 * nothing on the page mixes pin-spacers with native sticky.
 *
 * Below `lg`, and under reduced motion at any width, this degrades to a plain
 * hairline-ruled list. `stacked` gates the LAYOUT as well as the animation:
 * absolutely-stacked panels with no timeline to reveal them would render as
 * seven items piled on top of each other.
 */
export default function ServiceIndex() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const stacked = isDesktop && !reduced;
  const steps = liveServices.length - 1;

  useGSAP(
    () => {
      if (!stacked || !root.current) return;

      const q = gsap.utils.selector(root);
      const panels = q("[data-svc]");
      const numerals = q("[data-num]");
      const shots = q("[data-shot]");

      gsap.set(panels, { opacity: 0, yPercent: 8 });
      gsap.set(numerals, { opacity: 0, yPercent: 20 });
      gsap.set(shots, { opacity: 0, scale: 1.06 });
      gsap.set([panels[0], numerals[0]], { opacity: 1, yPercent: 0 });
      gsap.set(shots[0], { opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          snap: {
            snapTo: 1 / steps,
            duration: 0.25,
            delay: 0.04,
            ease: "power2.inOut",
          },
          invalidateOnRefresh: true,
        },
      });

      for (let i = 1; i <= steps; i++) {
        tl.to(
          [panels[i - 1], numerals[i - 1]],
          { opacity: 0, yPercent: -8, duration: 0.5 },
          i - 1,
        )
          .to(
            shots[i - 1],
            { opacity: 0, scale: 0.96, duration: 0.5 },
            i - 1,
          )
          .to(
            [panels[i], numerals[i]],
            { opacity: 1, yPercent: 0, duration: 0.5 },
            i - 0.5,
          )
          .to(shots[i], { opacity: 1, scale: 1, duration: 0.5 }, i - 0.5);
      }

      tl.fromTo(
        q("[data-rail]"),
        { scaleY: 1 / liveServices.length },
        { scaleY: 1, ease: "none", duration: steps },
        0,
      );
    },
    { scope: root, dependencies: [stacked], revertOnUpdate: true },
  );

  return (
    <section
      ref={root}
      id="disciplines"
      className="bg-ink"
      style={stacked ? { height: `${(steps + 1) * 85}svh` } : undefined}
    >
      <div
        className={
          stacked
            ? "sticky top-0 flex h-svh items-center overflow-hidden px-gutter"
            : "px-gutter py-section"
        }
      >
        <div className="mx-auto w-full max-w-frame">
          {!stacked && (
            <RevealBlock>
              <p className="mb-16 text-micro font-medium uppercase text-accent">
                Seven disciplines
              </p>
            </RevealBlock>
          )}

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
            {stacked && (
              <div className="relative col-span-3 flex items-center gap-6">
                <div aria-hidden className="relative h-44 w-px shrink-0 bg-line">
                  <span
                    data-rail
                    className="absolute inset-x-0 top-0 h-full origin-top bg-accent"
                  />
                </div>
                <div aria-hidden className="relative h-[1em] w-full">
                  {liveServices.map((s, i) => (
                    <span
                      key={s.slug}
                      data-num
                      className="absolute left-0 top-0 font-display text-[clamp(4rem,7vw,7rem)] leading-none text-paper/15"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div
              className={
                stacked
                  ? "relative col-span-5 h-64"
                  : "col-span-full border-t border-line"
              }
            >
              {liveServices.map((service, i) => (
                <article
                  key={service.slug}
                  data-svc
                  className={
                    stacked ? "absolute inset-0" : "border-b border-line"
                  }
                >
                  <Link
                    href={`/${service.slug}`}
                    className="group block h-full py-8"
                  >
                    <p className="mb-4 text-micro font-medium uppercase text-accent">
                      {!stacked && (
                        <span className="mr-4 text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                      {service.discipline}
                    </p>
                    <h3 className="flex items-baseline gap-4 text-display-m">
                      {service.name}
                      <span
                        aria-hidden
                        className="text-body-l text-accent opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
                      >
                        →
                      </span>
                    </h3>
                    <p className="measure mt-4 text-body-l text-muted">
                      {service.summary}
                    </p>
                  </Link>
                </article>
              ))}
            </div>

            {/* One photograph per discipline, crossfading with its panel.
                Desktop only — on the mobile flow list it would be dead weight. */}
            {stacked && (
              <div
                aria-hidden
                className="relative col-span-4 h-[26rem] overflow-hidden"
              >
                {liveServices.map((service) => (
                  <figure
                    key={service.slug}
                    data-shot
                    className="absolute inset-0 isolate"
                  >
                    <img
                      src={`/media/${service.slug}-1280.webp`}
                      srcSet={`/media/${service.slug}-640.webp 640w, /media/${service.slug}-1280.webp 1280w`}
                      sizes="33vw"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover grayscale"
                    />
                    {/* Same navy duotone as the collage, so the whole page
                        reads as one set of photography. */}
                    <span className="absolute inset-0 bg-depth mix-blend-color" />
                    <span className="absolute inset-0 bg-ink/25" />
                  </figure>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
