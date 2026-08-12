"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsDesktop } from "@/hooks/use-media-query";
import RevealBlock from "@/components/motion/reveal-block";
import Magnetic from "@/components/motion/magnetic";
import { liveServices } from "@/content/site";

/**
 * The offer. Full-bleed, one discipline per viewport.
 *
 * This section has to do more work than any other on the page — it is where a
 * visitor decides whether Tazriel does the thing they came for. The earlier
 * version put small type in a twelve-column grid beside a modest photograph,
 * which made the most important section on the site the quietest.
 *
 * Micro-interactions, specced trigger / rules / feedback:
 *
 * MI-1 Advance — trigger: scroll crossing a step boundary. Rules: outgoing name
 *   and numeral rise and fade, incoming falls in, photograph crossfades from
 *   1.08 scale. Feedback: visual, scrubbed and reversible. Duration 0.5 of a
 *   step, ease handled by the scrub.
 * MI-2 Colour reveal — trigger: pointer over the panel. Rules: the active
 *   photograph drops its navy duotone and desaturation. Feedback: the workplace
 *   turns real. 0.7s decelerate. Colour carries no information, so nothing is
 *   lost without it.
 * MI-3 Jump — trigger: click or keypress on a progress segment. Real
 *   navigation, keyboard operable, with an accessible name per segment.
 *
 * Below `lg`, and under reduced motion at any width, the whole thing becomes a
 * stacked card list: no sticky, no scrub, every discipline visible at once.
 */
export default function ServiceIndex() {
  const root = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [warm, setWarm] = useState(false);

  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const cinematic = isDesktop && !reduced;
  const steps = liveServices.length - 1;

  useGSAP(
    () => {
      if (!cinematic || !root.current) return;

      const q = gsap.utils.selector(root);
      const panels = q("[data-svc]");
      const numerals = q("[data-num]");
      const shots = q("[data-shot]");

      gsap.set(panels, { opacity: 0, yPercent: 12 });
      gsap.set(numerals, { opacity: 0, yPercent: 25 });
      gsap.set(shots, { opacity: 0, scale: 1.08 });
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
          // Drive the progress UI from React, but only re-render when the index
          // actually changes — onUpdate fires on every scroll frame.
          onUpdate: (self) => {
            const next = Math.round(self.progress * steps);
            if (next !== activeRef.current) {
              activeRef.current = next;
              setActive(next);
            }
          },
        },
      });

      for (let i = 1; i <= steps; i++) {
        tl.to(
          [panels[i - 1], numerals[i - 1]],
          { opacity: 0, yPercent: -12, duration: 0.5 },
          i - 1,
        )
          .to(shots[i - 1], { opacity: 0, duration: 0.5 }, i - 1)
          .to(
            [panels[i], numerals[i]],
            { opacity: 1, yPercent: 0, duration: 0.5 },
            i - 0.5,
          )
          .to(shots[i], { opacity: 1, scale: 1, duration: 0.6 }, i - 0.6);
      }
    },
    { scope: root, dependencies: [cinematic, steps], revertOnUpdate: true },
  );

  const jumpTo = (i: number) => {
    const el = root.current;
    if (!el) return;
    // Each step owns an equal slice of the section's runway.
    const top = el.offsetTop + (el.offsetHeight - window.innerHeight) * (i / steps);
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  };

  /* ── Stacked fallback: mobile, and reduced motion at any width ────────── */
  if (!cinematic) {
    return (
      <section ref={root} id="disciplines" className="bg-ink px-gutter py-section">
        <div className="mx-auto max-w-frame">
          <RevealBlock>
            <p className="mb-16 text-micro font-medium uppercase text-accent">
              Seven disciplines
            </p>
          </RevealBlock>

          <RevealBlock stagger className="flex flex-col gap-px">
            {liveServices.map((service, i) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group relative isolate flex min-h-[60svh] flex-col justify-end overflow-hidden p-8"
              >
                <img
                  src={`/media/${service.slug}-1280.webp`}
                  srcSet={`/media/${service.slug}-640.webp 640w, /media/${service.slug}-1280.webp 1280w`}
                  sizes="100vw"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 -z-10 size-full object-cover grayscale"
                />
                <span className="absolute inset-0 -z-10 bg-depth mix-blend-color" />
                <span className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

                <span className="text-micro font-medium uppercase text-accent">
                  {String(i + 1).padStart(2, "0")} — {service.discipline}
                </span>
                <h3 className="mt-3 text-display-m">{service.name}</h3>
                <p className="measure mt-3 text-body-l text-muted">
                  {service.summary}
                </p>
              </Link>
            ))}
          </RevealBlock>
        </div>
      </section>
    );
  }

  /* ── Cinematic: full-bleed, one discipline per viewport ───────────────── */
  return (
    <section
      ref={root}
      id="disciplines"
      className="bg-ink"
      style={{ height: `${(steps + 1) * 90}svh` }}
    >
      <div
        className="sticky top-0 h-svh overflow-hidden"
        onPointerEnter={() => setWarm(true)}
        onPointerLeave={() => setWarm(false)}
      >
        {/* Full-bleed photography. MI-2 lifts the duotone on hover. */}
        {liveServices.map((service, i) => (
          <figure
            key={service.slug}
            data-shot
            aria-hidden
            className="absolute inset-0 isolate"
          >
            <img
              src={`/media/${service.slug}-1280.webp`}
              srcSet={`/media/${service.slug}-640.webp 640w, /media/${service.slug}-1280.webp 1280w`}
              sizes="100vw"
              alt=""
              // The first shot is on screen the moment the section is reached —
              // lazy-loading it would flash an empty frame.
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`size-full object-cover transition-[filter] duration-700 ease-out ${
                warm ? "grayscale-0" : "grayscale"
              }`}
            />
            <span
              className={`absolute inset-0 bg-depth mix-blend-color transition-opacity duration-700 ease-out ${
                warm ? "opacity-0" : "opacity-100"
              }`}
            />
          </figure>
        ))}

        {/* Scrim. Heavier at the foot, where the type sits. */}
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30"
        />
        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink/85 to-transparent"
        />

        {/* Colossal ghost numeral, bleeding off the right edge. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[2vw] bottom-[8vh] h-[1em] w-[60vw] text-right"
        >
          {liveServices.map((service, i) => (
            <span
              key={service.slug}
              data-num
              className="absolute inset-x-0 top-0 font-display text-[26vw] leading-[0.8] text-paper/[0.07]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          ))}
        </div>

        <div className="relative flex h-full flex-col justify-between px-gutter pb-16 pt-32">
          <div className="mx-auto flex w-full max-w-frame items-baseline justify-between">
            <p className="text-micro font-medium uppercase text-accent">
              What we do
            </p>
            <p className="text-micro font-medium uppercase text-muted">
              {String(active + 1).padStart(2, "0")} / {String(liveServices.length).padStart(2, "0")}
            </p>
          </div>

          {/* Panels are absolutely stacked; the wrapper reserves their height. */}
          <div className="relative mx-auto w-full max-w-frame">
            <div className="relative h-[22rem]">
              {liveServices.map((service) => (
                <article
                  key={service.slug}
                  data-svc
                  className="absolute inset-x-0 bottom-0"
                >
                  <p className="mb-6 text-micro font-medium uppercase text-accent">
                    {service.discipline}
                  </p>
                  <h3 className="max-w-[13ch] text-display-xl">
                    {service.name}
                  </h3>
                  <p className="measure mt-6 max-w-[46ch] text-body-l text-muted">
                    {service.summary}
                  </p>
                  <div className="-ml-3 mt-6">
                    <Magnetic>
                      <Link
                        href={`/${service.slug}`}
                        className="group inline-flex items-center gap-3 bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white"
                      >
                        View discipline
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </Magnetic>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* MI-3 — segmented progress doubling as navigation. */}
          <nav
            aria-label="Disciplines"
            className="mx-auto w-full max-w-frame pt-10"
          >
            <ul className="flex gap-2">
              {liveServices.map((service, i) => (
                <li key={service.slug} className="flex-1">
                  <button
                    type="button"
                    onClick={() => jumpTo(i)}
                    aria-current={i === active ? "true" : undefined}
                    className="group flex w-full flex-col gap-3 pt-3 text-left"
                  >
                    <span className="sr-only">{service.name}</span>
                    <span
                      aria-hidden
                      className={`h-px w-full transition-colors duration-500 ${
                        i === active
                          ? "bg-accent"
                          : "bg-line group-hover:bg-paper/40"
                      }`}
                    />
                    <span
                      aria-hidden
                      className={`hidden text-micro font-medium uppercase transition-opacity duration-500 lg:block ${
                        i === active
                          ? "text-paper opacity-100"
                          : "text-muted opacity-0 group-hover:opacity-70"
                      }`}
                    >
                      {service.discipline}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
