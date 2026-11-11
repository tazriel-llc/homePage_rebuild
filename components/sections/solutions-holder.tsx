"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsDesktop } from "@/hooks/use-media-query";

type SolutionSlide = {
  id: string;
  num: string;
  category: string;
  title: string;
  summary: string;
  discipline: string;
  image: string;
  slug: string;
  points: string[];
};

const slides: SolutionSlide[] = [
  {
    id: "engineering",
    num: "01",
    category: "LOW-CODE & CLOUD SYSTEMS",
    title: "Software Development & Mendix Architecture",
    summary:
      "Engineering teams that ship into your codebase, your repositories, and your daily sprint rituals.",
    discipline: "Engineering",
    image: "software-development",
    slug: "software-development",
    points: [
      "Mendix Certified Rapid & Advanced Developers",
      "Native GitHub & GitLab CI/CD integration",
      "Full-stack web & API service architecture",
    ],
  },
  {
    id: "ai-data",
    num: "02",
    category: "MACHINE LEARNING INFRASTRUCTURE",
    title: "Data Annotation & AI Model Training",
    summary:
      "Labelled datasets, RLHF feedback, and model-training pipelines held to verified accuracy benchmarks.",
    discipline: "Machine Learning",
    image: "data-annotation-and-ai-training",
    slug: "data-annotation-and-ai-training",
    points: [
      "Rigorous domain-specialist annotation teams",
      "Strict multi-pass QA and agreement scoring",
      "RLHF & LLM evaluation benchmarks",
    ],
  },
  {
    id: "m365",
    num: "03",
    category: "CLOUD GOVERNANCE & IDENTITY",
    title: "Microsoft 365 & Power Platform Administration",
    summary:
      "Tenant administration, security posture, conditional access, and automated workflow pipelines.",
    discipline: "Platform Operations",
    image: "microsoft-365-administration",
    slug: "microsoft-365-administration",
    points: [
      "Enterprise Azure AD & identity governance",
      "Power Automate & Power Apps development",
      "Licensing drift & tenant security audits",
    ],
  },
  {
    id: "cvent",
    num: "04",
    category: "ENTERPRISE EVENT INFRASTRUCTURE",
    title: "Meetings & Events Operations (Cvent)",
    summary:
      "Cvent-certified event operations, from complex registration build-outs through live on-site execution.",
    discipline: "Event Operations",
    image: "meetings-and-events",
    slug: "meetings-and-events",
    points: [
      "Complex multi-track registration logic",
      "Pre-event path testing and failover plans",
      "Live incident desk & attendee support",
    ],
  },
  {
    id: "support",
    num: "05",
    category: "RESOLUTION OPERATIONS",
    title: "SaaS Product Support & IT Helpdesk",
    summary:
      "Tier-3 technical support teams that master your platform deeply enough to resolve rather than deflect.",
    discipline: "Product Support",
    image: "saas-product-support",
    slug: "saas-product-support",
    points: [
      "Engineers staffing queues, not deflecting scripts",
      "HubSpot Service Hub & Jira Service Desk",
      "Direct escalations with reproducible logs",
    ],
  },
];

/**
 * SolutionsHolder — Directly modelled on InterGest Canada's `solutions_group` & `solutions_holder`:
 *
 * 1. Background typography: Massive subtle title across the stage.
 * 2. Center framed window portal (starts vertical in the center of the dark screen).
 * 3. On scroll Phase 1: Window smoothly ZOOMS IN to fill the entire viewport.
 * 4. On scroll Phase 2: Slides horizontally through the solutions showcase with rich discipline specs!
 */
export default function SolutionsHolder() {
  const root = useRef<HTMLElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const cinematic = isDesktop && !reduced;

  useGSAP(
    () => {
      if (!cinematic || !root.current) return;

      const portal = portalRef.current;
      const bgText = bgTextRef.current;
      const track = trackRef.current;
      if (!portal || !track) return;

      // Master scrubbed timeline across the 450vh runway
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Track slide index once past the zoom phase (0.35 -> 1.0)
            if (self.progress > 0.35) {
              const slideProgress = (self.progress - 0.35) / 0.65;
              const idx = Math.min(
                slides.length - 1,
                Math.floor(slideProgress * slides.length),
              );
              setActiveSlide(idx);
            } else {
              setActiveSlide(0);
            }
          },
        },
      });

      // ── PHASE 1: Zoom the center window portal into full screen ──────────
      // Portal starts as a vertical 380x580 window, scales to 100vw x 100vh
      tl.fromTo(
        portal,
        {
          width: "380px",
          height: "580px",
          borderRadius: "8px",
          borderColor: "rgba(244, 241, 236, 0.2)",
        },
        {
          width: "100vw",
          height: "100svh",
          borderRadius: "0px",
          borderColor: "rgba(244, 241, 236, 0)",
          duration: 1.2,
          ease: "power2.inOut",
        },
        0,
      );

      // Background text fades and scales slightly during zoom
      if (bgText) {
        tl.to(
          bgText,
          {
            opacity: 0,
            scale: 1.12,
            duration: 0.9,
            ease: "power2.out",
          },
          0,
        );
      }

      // ── PHASE 2: Horizontal Carousel slides through all solutions ────────
      // track moves from 0% to -(N - 1) * 100%
      const totalSlideDistance = (slides.length - 1) * 100;
      tl.to(
        track,
        {
          xPercent: -totalSlideDistance,
          duration: 2.8,
          ease: "none",
        },
        1.2,
      );
    },
    { scope: root, dependencies: [cinematic] },
  );

  // ── Fallback for mobile or reduced motion ────────────────────────────────
  if (!cinematic) {
    return (
      <section
        ref={root}
        id="solutions"
        className="border-t border-line bg-ink px-gutter py-section text-paper"
      >
        <div className="mx-auto max-w-frame">
          <div className="mb-12">
            <span className="font-mono text-micro uppercase tracking-widest text-accent">
              Platform Solutions
            </span>
            <h2 className="mt-4 text-display-l">
              Depth in the systems your operation runs on.
            </h2>
          </div>

          <div className="space-y-12">
            {slides.map((s) => (
              <div
                key={s.id}
                className="overflow-hidden border border-line bg-ink-raised"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={`/media/${s.image}-1280.webp`}
                    alt={s.title}
                    className="size-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-ink/70 mix-blend-color" />
                </div>
                <div className="p-8">
                  <span className="font-mono text-micro text-accent">
                    {s.num} // {s.category}
                  </span>
                  <h3 className="mt-3 text-display-m font-normal">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted">{s.summary}</p>
                  <ul className="mt-6 space-y-2 border-t border-line/60 pt-6">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 text-xs text-muted"
                      >
                        <span className="size-1 rounded-full bg-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={`/${s.slug}`}
                      className="link-wipe inline-flex items-center gap-2 text-sm font-medium text-paper"
                    >
                      <span>Explore {s.discipline}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── Cinematic: InterGest Canada Zoom-in Portal & Slide Carousel ─────────
  return (
    <section
      ref={root}
      id="solutions"
      className="solutions_group relative w-full bg-ink text-paper"
      style={{ height: "480vh" }}
    >
      <div className="solutions_holder sticky top-0 flex h-svh w-full items-center justify-center overflow-hidden">
        {/* Background Typography (Image 4 from InterGest: "WE SOLVE WHAT STANDS IN YOUR WAY") */}
        <div
          ref={bgTextRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none text-center"
        >
          <span className="font-mono text-micro uppercase tracking-[0.3em] text-accent">
            Operational Architecture
          </span>
          <h2 className="mt-4 font-display text-[9vw] leading-[0.88] tracking-tight text-paper/[0.08]">
            WE SOLVE WHAT STANDS
          </h2>
          <h2 className="font-display text-[9vw] leading-[0.88] tracking-tight text-paper/[0.08]">
            IN YOUR WAY
          </h2>
          <p className="mt-6 max-w-md font-mono text-xs uppercase tracking-widest text-muted/40">
            Scroll to enter the specialist bench
          </p>
        </div>

        {/* Center Portal Window (Scales to 100vw x 100vh) */}
        <div
          ref={portalRef}
          data-portal
          className="relative z-20 flex size-full items-center justify-center overflow-hidden border border-line bg-ink shadow-2xl transition-[border-color]"
        >
          {/* Horizontal Conveyor Track across all slides */}
          <div
            ref={trackRef}
            className="flex h-full w-[500vw]"
            style={{ willChange: "transform" }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className="relative flex h-full w-screen shrink-0 items-center overflow-hidden px-gutter"
              >
                {/* Full-bleed photography plate */}
                <div aria-hidden className="absolute inset-0 -z-10">
                  <img
                    src={`/media/${slide.image}-1280.webp`}
                    srcSet={`/media/${slide.image}-640.webp 640w, /media/${slide.image}-1280.webp 1280w`}
                    sizes="100vw"
                    alt=""
                    className="size-full object-cover grayscale"
                  />
                  {/* Luxury duotone navy tint */}
                  <span className="absolute inset-0 bg-ink/75 mix-blend-color" />
                  <span className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 mx-auto w-full max-w-frame">
                  <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    {/* Left: Title & Overview */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-micro font-medium uppercase tracking-[0.2em] text-accent">
                          {slide.num} // {slide.category}
                        </span>
                        <span className="size-1 rounded-full bg-accent" />
                        <span className="font-mono text-micro uppercase tracking-wider text-muted">
                          {slide.discipline}
                        </span>
                      </div>

                      <h3 className="mt-4 max-w-[16ch] text-display-l font-normal tracking-tight">
                        {slide.title}
                      </h3>

                      <p className="measure mt-6 text-body-l text-muted">
                        {slide.summary}
                      </p>

                      <div className="mt-10 flex items-center gap-6">
                        <Link
                          href={`/${slide.slug}`}
                          className="group inline-flex items-center gap-3 bg-paper px-8 py-4 text-sm font-medium text-ink transition-all duration-300 hover:bg-white"
                        >
                          <span>Explore {slide.discipline}</span>
                          <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </Link>
                        <Link
                          href="/contact"
                          className="link-wipe text-sm font-medium text-muted hover:text-paper"
                        >
                          Start a conversation
                        </Link>
                      </div>
                    </div>

                    {/* Right: Architectural Spec Ledger */}
                    <div className="border border-line bg-ink-raised/70 p-8 backdrop-blur-sm lg:col-span-5">
                      <span className="font-mono text-micro uppercase tracking-widest text-accent">
                        Production Competencies
                      </span>
                      <ul className="mt-6 space-y-4 border-t border-line/60 pt-6">
                        {slide.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-3 text-sm text-paper/90"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 border-t border-line/60 pt-6">
                        <div className="flex items-center justify-between font-mono text-xs text-muted">
                          <span>TEAM INTEGRATION</span>
                          <span className="text-paper">100% EMBEDDED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Progress Bar & Slide Navigator */}
          <div className="pointer-events-none absolute bottom-8 inset-x-0 z-30 mx-auto flex max-w-frame items-center justify-between px-gutter">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-accent">
                0{activeSlide + 1}
              </span>
              <span className="h-px w-8 bg-line" />
              <span className="font-mono text-xs text-muted">05</span>
            </div>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-300 ${
                    i === activeSlide
                      ? "w-8 bg-accent"
                      : "w-2 bg-paper/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
