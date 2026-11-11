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
  metrics: { label: string; value: string };
};

const slides: SolutionSlide[] = [
  {
    id: "engineering",
    num: "01",
    category: "LOW-CODE & CLOUD SYSTEMS",
    title: "Software Development & Mendix Architecture",
    summary:
      "Engineering teams that ship into your codebase, your repositories, and your daily sprint rituals. Certified Mendix Rapid & Advanced practitioners.",
    discipline: "Engineering",
    image: "software-development",
    slug: "software-development",
    points: [
      "Mendix Certified Rapid & Advanced Developers",
      "Native GitHub & GitLab CI/CD integration",
      "Full-stack web & enterprise API architecture",
    ],
    metrics: { label: "DELIVERY CYCLE", value: "DIRECT SPRINT ALIGNMENT" },
  },
  {
    id: "ai-data",
    num: "02",
    category: "MACHINE LEARNING INFRASTRUCTURE",
    title: "Data Annotation & AI Model Training",
    summary:
      "High-accuracy labelled datasets, RLHF feedback, and model-training pipelines held to verified mathematical accuracy standards.",
    discipline: "Machine Learning",
    image: "data-annotation-and-ai-training",
    slug: "data-annotation-and-ai-training",
    points: [
      "Rigorous domain-specialist annotation teams",
      "Strict multi-pass QA and agreement scoring",
      "RLHF & LLM evaluation benchmarks",
    ],
    metrics: { label: "ACCURACY BENCHMARK", value: "≥ 99.2% VERIFIED" },
  },
  {
    id: "m365",
    num: "03",
    category: "CLOUD GOVERNANCE & IDENTITY",
    title: "Microsoft 365 & Power Platform Administration",
    summary:
      "Tenant administration, security posture, conditional access, and automated workflow pipelines run by credentialed platform administrators.",
    discipline: "Platform Operations",
    image: "microsoft-365-administration",
    slug: "microsoft-365-administration",
    points: [
      "Enterprise Azure AD & identity governance",
      "Power Automate & Power Apps development",
      "Licensing drift & tenant security posture audits",
    ],
    metrics: { label: "GOVERNANCE", value: "ZERO ENDPOINT DRIFT" },
  },
  {
    id: "cvent",
    num: "04",
    category: "ENTERPRISE EVENT INFRASTRUCTURE",
    title: "Meetings & Events Operations (Cvent)",
    summary:
      "Cvent-certified event operations, from complex registration build-outs through live on-site execution and post-event analytics.",
    discipline: "Event Operations",
    image: "meetings-and-events",
    slug: "meetings-and-events",
    points: [
      "Complex multi-track registration logic",
      "Pre-event path testing and failover plans",
      "Live incident desk & attendee support",
    ],
    metrics: { label: "PLATFORM STATUS", value: "CVENT CERTIFIED BENCH" },
  },
  {
    id: "support",
    num: "05",
    category: "RESOLUTION OPERATIONS",
    title: "SaaS Product Support & IT Helpdesk",
    summary:
      "Tier-3 technical support teams that master your platform deeply enough to resolve rather than deflect. Real engineers staffing queues.",
    discipline: "Product Support",
    image: "saas-product-support",
    slug: "saas-product-support",
    points: [
      "Engineers staffing queues, not deflecting scripts",
      "HubSpot Service Hub & Jira Service Management",
      "Direct escalations with reproducible logs",
    ],
    metrics: { label: "RESOLUTION MODEL", value: "ZERO DEFLECTION QUEUES" },
  },
];

/**
 * SolutionsHolder — Directly modelled on InterGest Canada's `solutions_group`:
 *
 * 1. Background typography: "WE SOLVE WHAT STANDS IN YOUR WAY".
 * 2. Center framed window portal (starts vertical in the center of the dark screen).
 * 3. PHASE 1: Window smoothly ZOOMS IN to fill the entire viewport.
 * 4. PHASE 2: Controlled horizontal slide tour with dedicated reading holds.
 * 5. PHASE 3: Seamless ZOOM-OUT exit into a tailored summary card (fits 100% cleanly, zero clipping!).
 */
export default function SolutionsHolder() {
  const root = useRef<HTMLElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const exitTextRef = useRef<HTMLDivElement>(null);
  const coverCardRef = useRef<HTMLDivElement>(null);
  const outroCardRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeSlide, setActiveSlide] = useState(0);

  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const cinematic = isDesktop && !reduced;

  useGSAP(
    () => {
      if (!cinematic || !root.current || !portalRef.current) return;

      const portal = portalRef.current;
      const bgText = bgTextRef.current;
      const exitText = exitTextRef.current;
      const coverCard = coverCardRef.current;
      const outroCard = outroCardRef.current;
      const slidesContainer = slidesContainerRef.current;
      const nav = navRef.current;

      const slideEls = slideRefs.current.filter(Boolean) as HTMLDivElement[];

      // Initial Setup
      gsap.set(portal, {
        width: "400px",
        height: "600px",
        borderRadius: "8px",
        borderWidth: "1px",
        borderColor: "rgba(244, 241, 236, 0.25)",
      });

      if (coverCard) gsap.set(coverCard, { opacity: 1 });
      if (outroCard) gsap.set(outroCard, { opacity: 0, pointerEvents: "none" });
      if (slidesContainer) gsap.set(slidesContainer, { opacity: 0 });
      if (exitText) gsap.set(exitText, { opacity: 0, scale: 0.95 });
      if (nav) gsap.set(nav, { opacity: 0 });

      // Position all incoming slides (slides 1 to 4) off-screen to the right
      slideEls.slice(1).forEach((el) => {
        gsap.set(el, { xPercent: 100 });
      });
      if (slideEls[0]) gsap.set(slideEls[0], { xPercent: 0 });

      // Master Timeline across 650vh runway
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.22) {
              setActiveSlide(0);
            } else if (p < 0.38) {
              setActiveSlide(1);
            } else if (p < 0.54) {
              setActiveSlide(2);
            } else if (p < 0.70) {
              setActiveSlide(3);
            } else {
              setActiveSlide(4);
            }
          },
        },
      });

      // ── PHASE 1: Zoom the window portal into full screen (0.0 -> 1.5) ────────
      tl.to(
        portal,
        {
          width: "100vw",
          height: "100svh",
          borderRadius: "0px",
          borderColor: "rgba(244, 241, 236, 0)",
          duration: 1.5,
          ease: "power2.inOut",
        },
        0,
      );

      if (bgText) {
        tl.to(
          bgText,
          {
            opacity: 0,
            scale: 1.15,
            duration: 1.2,
            ease: "power2.out",
          },
          0,
        );
      }

      // Crossfade from the initial cover card to full-width slides container
      if (coverCard && slidesContainer) {
        tl.to(
          coverCard,
          { opacity: 0, duration: 0.4, ease: "power2.in" },
          1.0,
        );
        tl.to(
          slidesContainer,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          1.2,
        );
      }

      if (nav) {
        tl.to(
          nav,
          { opacity: 1, duration: 0.4, ease: "power2.out" },
          1.2,
        );
      }

      // ── PHASE 2: Slides with dedicated reading holds ────────────────────────
      // Slide 1 Holds (1.5 -> 2.3)
      tl.to({}, { duration: 0.8 }, 1.5);

      // Slide 1 -> Slide 2 (2.3 -> 3.1)
      if (slideEls[1]) {
        tl.to(
          slideEls[1],
          { xPercent: 0, duration: 0.8, ease: "power2.inOut" },
          2.3,
        );
      }
      // Slide 2 Holds (3.1 -> 3.9)
      tl.to({}, { duration: 0.8 }, 3.1);

      // Slide 2 -> Slide 3 (3.9 -> 4.7)
      if (slideEls[2]) {
        tl.to(
          slideEls[2],
          { xPercent: 0, duration: 0.8, ease: "power2.inOut" },
          3.9,
        );
      }
      // Slide 3 Holds (4.7 -> 5.5)
      tl.to({}, { duration: 0.8 }, 4.7);

      // Slide 3 -> Slide 4 (5.5 -> 6.3)
      if (slideEls[3]) {
        tl.to(
          slideEls[3],
          { xPercent: 0, duration: 0.8, ease: "power2.inOut" },
          5.5,
        );
      }
      // Slide 4 Holds (6.3 -> 7.1)
      tl.to({}, { duration: 0.8 }, 6.3);

      // Slide 4 -> Slide 5 (7.1 -> 7.9)
      if (slideEls[4]) {
        tl.to(
          slideEls[4],
          { xPercent: 0, duration: 0.8, ease: "power2.inOut" },
          7.1,
        );
      }
      // Slide 5 Holds in Full Screen (7.9 -> 8.7)
      tl.to({}, { duration: 0.8 }, 7.9);

      // ── PHASE 3: The Creative Zoom-Out Exit (8.7 -> 10.0) ──────────────────
      // 1. Crossfade wide slides container into the tailored outro card
      if (slidesContainer && outroCard) {
        tl.to(
          slidesContainer,
          { opacity: 0, duration: 0.35, ease: "power2.in" },
          8.7,
        );
        tl.to(
          outroCard,
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.45,
            ease: "power2.out",
          },
          8.85,
        );
      }

      // 2. Portal scales down into a perfectly sized luxury card (fits 100% cleanly!)
      tl.to(
        portal,
        {
          width: "440px",
          height: "620px",
          borderRadius: "8px",
          borderColor: "rgba(237, 76, 0, 0.5)",
          duration: 1.3,
          ease: "power2.inOut",
        },
        8.7,
      );

      // 3. As portal shrinks, reveal the exit title in background
      if (exitText) {
        tl.to(
          exitText,
          {
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power2.out",
          },
          8.9,
        );
      }

      // 4. Fade out slide counter during zoom-out
      if (nav) {
        tl.to(
          nav,
          { opacity: 0, duration: 0.35, ease: "power2.in" },
          8.7,
        );
      }
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
                    className="size-full object-cover grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-ink/50 mix-blend-color" />
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

  // ── Cinematic: InterGest Canada Zoom-in & Paced Slides ────────────────
  return (
    <section
      ref={root}
      id="solutions"
      className="solutions_group relative w-full bg-ink text-paper"
      style={{ height: "650vh" }}
    >
      <div className="solutions_holder sticky top-0 flex h-svh w-full items-center justify-center overflow-hidden">
        {/* Entrance Background Typography (InterGest Image 4) */}
        <div
          ref={bgTextRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none text-center px-4"
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

        {/* Exit Background Typography (Zoom-Out Reveal - ZERO BLANK SCREEN!) */}
        <div
          ref={exitTextRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none text-center px-4 z-10"
        >
          <span className="font-mono text-micro uppercase tracking-[0.3em] text-accent">
            Two Continents · One Bench
          </span>
          <h2 className="mt-4 font-display text-[7.5vw] leading-[0.92] tracking-tight text-paper/[0.12]">
            UNBROKEN OPERATIONAL
          </h2>
          <h2 className="font-display text-[7.5vw] leading-[0.92] tracking-tight text-paper/[0.12]">
            MOMENTUM
          </h2>
          <p className="mt-6 max-w-lg font-mono text-xs uppercase tracking-widest text-muted/60">
            Continuous handoffs across US and EMEA time zones ↓
          </p>
        </div>

        {/* Center Portal Window (Scales to 100vw x 100vh, then Zooms Out at end) */}
        <div
          ref={portalRef}
          data-portal
          className="relative z-20 flex size-full items-center justify-center overflow-hidden border bg-ink shadow-2xl transition-[border-color]"
        >
          {/* ── 1. Pristine Cover Card (Seen inside the small window BEFORE zoom) ── */}
          <div
            ref={coverCardRef}
            className="absolute inset-0 z-30 flex flex-col justify-between p-8 sm:p-10"
          >
            <div className="absolute inset-0 -z-10">
              <img
                src="/media/software-development-1280.webp"
                alt="Tazriel Platform Bench"
                className="size-full object-cover grayscale contrast-110"
              />
              <span className="absolute inset-0 bg-ink/55 mix-blend-color" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
            </div>

            <div className="flex items-center justify-between font-mono text-micro text-paper">
              <span className="text-accent">01 // PLATFORM BENCH</span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-accent animate-ping" />
                <span>ONLINE</span>
              </span>
            </div>

            <div>
              <span className="font-mono text-micro uppercase tracking-wider text-accent">
                Architectural Focus
              </span>
              <h3 className="mt-2 text-display-m font-normal text-paper">
                The Seven Disciplines
              </h3>
              <p className="mt-2 text-xs text-muted">
                Enterprise systems embedded into your daily operation.
              </p>
              <div className="mt-6 flex items-center gap-2 font-mono text-micro text-accent">
                <span>SCROLL TO ENTER</span>
                <span>↓</span>
              </div>
            </div>
          </div>

          {/* ── 2. Full-Screen Slides Container (Active during full-screen phase) ── */}
          <div
            ref={slidesContainerRef}
            className="absolute inset-0 z-20 size-full overflow-hidden"
          >
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="absolute inset-0 flex size-full items-center px-gutter bg-ink"
                style={{ willChange: "transform" }}
              >
                {/* Full-bleed photography plate with high-contrast luxury treatment */}
                <div aria-hidden className="absolute inset-0 -z-10">
                  <img
                    src={`/media/${slide.image}-1280.webp`}
                    srcSet={`/media/${slide.image}-640.webp 640w, /media/${slide.image}-1280.webp 1280w`}
                    sizes="100vw"
                    alt=""
                    className="size-full object-cover grayscale contrast-110"
                  />
                  {/* Luxury duotone navy tint */}
                  <span className="absolute inset-0 bg-ink/55 mix-blend-color" />
                  <span className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
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
                    <div className="border border-line bg-ink-raised/80 p-8 sm:p-10 shadow-2xl lg:col-span-5">
                      <div className="flex items-center justify-between border-b border-line/60 pb-4">
                        <span className="font-mono text-micro uppercase tracking-widest text-accent">
                          Production Competencies
                        </span>
                        <span className="font-mono text-micro text-muted">
                          0{i + 1} / 05
                        </span>
                      </div>

                      <ul className="mt-6 space-y-4">
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
                          <span>{slide.metrics.label}</span>
                          <span className="text-paper font-semibold">
                            {slide.metrics.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Progress Bar & Slide Navigator */}
            <div
              ref={navRef}
              className="pointer-events-none absolute bottom-8 inset-x-0 z-30 mx-auto flex max-w-frame items-center justify-between px-gutter"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-accent">
                  0{activeSlide + 1}
                </span>
                <span className="h-px w-8 bg-line" />
                <span className="font-mono text-xs text-muted">05</span>
              </div>

              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 transition-all duration-300 ${
                      idx === activeSlide
                        ? "w-8 bg-accent"
                        : "w-2 bg-paper/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── 3. Tailored Outro Card (Pristine Zoom-Out of Slide 05 — FITS 100% CLEANLY!) ── */}
          <div
            ref={outroCardRef}
            className="absolute inset-0 z-40 flex flex-col justify-between p-6 sm:p-7 overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <img
                src="/media/saas-product-support-1280.webp"
                alt="SaaS Product Support & IT Helpdesk"
                className="size-full object-cover grayscale contrast-115"
              />
              <span className="absolute inset-0 bg-ink/75 mix-blend-color" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
            </div>

            {/* Top Meta */}
            <div className="flex items-center justify-between border-b border-line/60 pb-3 font-mono text-micro text-paper">
              <span className="text-accent font-semibold">05 // RESOLUTION OPERATIONS</span>
              <span className="flex items-center gap-1.5 text-muted">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-paper">BENCH ONLINE</span>
              </span>
            </div>

            {/* Middle Content */}
            <div className="py-2">
              <span className="font-mono text-micro uppercase tracking-wider text-accent">
                Tier-3 Platform Engineering
              </span>
              <h3 className="mt-2 font-serif text-2xl font-normal leading-snug text-paper">
                SaaS Product Support &amp; IT Helpdesk
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2 sm:line-clamp-none">
                Tier-3 technical support teams that master your platform deeply enough
                to resolve rather than deflect. Real engineers staffing queues.
              </p>

              {/* Specialist Specs */}
              <ul className="mt-3.5 space-y-2 border-t border-line/50 pt-3 text-[11px] text-paper/85">
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent shrink-0" />
                  <span>Real engineers in queues, not scripted deflectors</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent shrink-0" />
                  <span>HubSpot Service Hub &amp; Jira Service Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent shrink-0" />
                  <span>Direct escalations with reproducible code logs</span>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href="/saas-product-support"
                  className="inline-flex items-center gap-2 bg-paper px-4 py-2.5 text-xs font-semibold text-ink transition-all duration-300 hover:bg-white"
                >
                  <span>Explore Product</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-medium text-muted hover:text-paper"
                >
                  Start a conversation
                </Link>
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="flex items-center justify-between border-t border-line/60 pt-2 font-mono text-[10px] text-muted">
              <span>RESOLUTION MODEL</span>
              <span className="font-semibold text-accent">ZERO DEFLECTION QUEUES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
