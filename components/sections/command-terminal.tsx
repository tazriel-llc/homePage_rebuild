"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Discipline = {
  id: string;
  num: string;
  category: string;
  title: string;
  shortTitle: string;
  summary: string;
  image: string;
  slug: string;
  points: string[];
  metric: { label: string; value: string };
};

const disciplines: Discipline[] = [
  {
    id: "mendix",
    num: "01",
    category: "LOW-CODE & CLOUD ARCHITECTURE",
    title: "Software Development & Mendix Architecture",
    shortTitle: "Software Development & Mendix",
    summary:
      "Engineering teams that ship directly into your repositories, tooling, and daily sprint rituals. Certified Mendix Rapid & Advanced practitioners managing full-lifecycle enterprise delivery.",
    image: "software-development",
    slug: "software-development",
    points: [
      "Certified Mendix Rapid, Intermediate & Advanced Developers",
      "Native GitHub & GitLab CI/CD pull request integration",
      "Full-stack web systems, RESTful microservices & API pipelines",
    ],
    metric: { label: "SPRINT CADENCE", value: "DAILY SPRINT ALIGNED" },
  },
  {
    id: "ai-data",
    num: "02",
    category: "MACHINE LEARNING INFRASTRUCTURE",
    title: "Data Annotation & AI Model Training",
    shortTitle: "Data Annotation & AI Training",
    summary:
      "High-accuracy labelled datasets, multi-turn RLHF evaluation, and model training pipelines held to verified mathematical agreement thresholds. Zero automated hallucinations.",
    image: "data-annotation-and-ai-training",
    slug: "data-annotation-and-ai-training",
    points: [
      "Rigorous domain-specialist annotation teams (Legal, Medical, Code)",
      "Strict multi-pass QA with Cohen's Kappa agreement scoring ≥ 0.92",
      "RLHF preference ranking & red-teaming adversarial safety probes",
    ],
    metric: { label: "ACCURACY BENCHMARK", value: "≥ 99.2% VERIFIED" },
  },
  {
    id: "m365",
    num: "03",
    category: "CLOUD GOVERNANCE & IDENTITY",
    title: "Microsoft 365 & Power Platform Administration",
    shortTitle: "Microsoft 365 & Power Platform",
    summary:
      "Enterprise tenant administration, zero-trust conditional access, and automated Power Platform workflow pipelines run by credentialed Microsoft cloud specialists.",
    image: "microsoft-365-administration",
    slug: "microsoft-365-administration",
    points: [
      "Azure AD / Entra ID conditional access & RBAC policy enforcement",
      "Enterprise Power Automate flow architecture & error handling",
      "Continuous licensing drift audits & cost optimization",
    ],
    metric: { label: "SECURITY POSTURE", value: "ZERO ENDPOINT DRIFT" },
  },
  {
    id: "cvent",
    num: "04",
    category: "ENTERPRISE EVENT INFRASTRUCTURE",
    title: "Meetings & Events Operations (Cvent)",
    shortTitle: "Meetings & Events (Cvent)",
    summary:
      "Cvent-certified event architects managing complex enterprise registration build-outs, multi-track agenda logic, live on-site attendee desks, and post-conference telemetry.",
    image: "meetings-and-events",
    slug: "meetings-and-events",
    points: [
      "Complex conditional registration pathways & VIP logic",
      "Payment gateway integration, multi-currency refunds & reconciliation",
      "Live global incident desk & attendee concierge support",
    ],
    metric: { label: "PLATFORM STATUS", value: "CVENT CERTIFIED BENCH" },
  },
  {
    id: "support",
    num: "05",
    category: "ROOT-CAUSE RESOLUTION",
    title: "SaaS Product Support & IT Helpdesk",
    shortTitle: "SaaS Product Support & Helpdesk",
    summary:
      "Tier-3 technical support teams that master your platform deeply enough to resolve root causes rather than deflect tickets. Real engineers writing code fixes and reproducible bug reports.",
    image: "saas-product-support",
    slug: "saas-product-support",
    points: [
      "Engineers staffing queues, not uncertified deflectors",
      "Direct code-level bug triage with reproducible Docker environments",
      "HubSpot Service Hub, Jira Service Management & Zendesk Enterprise",
    ],
    metric: { label: "RESOLUTION MODEL", value: "ZERO DEFLECTION QUEUES" },
  },
];

/**
 * CommandTerminal — The Sovereign Platform Showcase.
 *
 * Designed with pure editorial luxury (InterGest Canada & Spectup aesthetic):
 * - NO cramped rectangular boxes or table frames.
 * - Expansive whitespace, calm typographic hierarchy.
 * - Interactive left-hand index with fluid crossfade of the right-hand exhibition plate.
 */
export default function CommandTerminal() {
  const root = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const reduced = useReducedMotion();

  const active = disciplines[activeIdx];

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const items = root.current.querySelectorAll("[data-terminal-fade]");
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05,
        },
      );
    },
    { scope: root, dependencies: [activeIdx, reduced] },
  );

  return (
    <section
      ref={root}
      id="platform-showcase"
      data-theme="dark"
      className="relative w-full bg-ink text-paper py-28 sm:py-36 px-gutter overflow-hidden border-t border-line/40"
    >
      {/* Background ambient luxury depth bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 size-[50vw] rounded-full opacity-10 blur-[150px]"
        style={{
          background: "radial-gradient(circle, var(--color-depth) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-frame relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-micro uppercase tracking-[0.25em] text-accent mb-4">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span>03 // PLATFORM DISCIPLINES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-paper">
            Depth in the systems your enterprise{" "}
            <span className="font-serif italic text-accent">actually runs on.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted max-w-2xl">
            Senior practitioners embedded directly into your sprints, tooling, and
            daily operating cadences. Select any discipline to inspect our production bench.
          </p>
        </div>

        {/* 2-Column Editorial Master Showcase */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Spacious Typographic Index (NO BOXES) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
            {disciplines.map((d, i) => {
              const isSelected = i === activeIdx;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveIdx(i)}
                  className="group w-full text-left transition-all duration-300 focus:outline-none"
                >
                  <div className="flex items-baseline gap-5 pb-5 border-b border-line/30 transition-colors duration-300 group-hover:border-accent/60">
                    {/* Numeral */}
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                        isSelected ? "text-accent" : "text-muted/40 group-hover:text-muted"
                      }`}
                    >
                      {d.num}
                    </span>

                    {/* Title */}
                    <div className="flex-1">
                      <span
                        className={`font-serif text-xl sm:text-2xl lg:text-[1.75rem] font-normal leading-snug transition-colors duration-300 block ${
                          isSelected
                            ? "text-paper font-normal"
                            : "text-muted/60 group-hover:text-paper/85"
                        }`}
                      >
                        {d.shortTitle}
                      </span>
                    </div>

                    {/* Active Accent Slash */}
                    <span
                      className={`font-mono text-xs transition-all duration-300 ${
                        isSelected
                          ? "text-accent translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0 text-muted/30 group-hover:opacity-60"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Expansive Exhibition Canvas (NO RECTANGLE CLUTTER) */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden">
              {/* Full-width Photography Plate */}
              <div
                data-terminal-fade
                className="group relative aspect-[16/9] w-full overflow-hidden border border-line/60 bg-ink-raised shadow-2xl"
              >
                <img
                  src={`/media/${active.image}-1280.webp`}
                  alt={active.title}
                  className="size-full object-cover grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Luxury duotone scrims */}
                <div className="absolute inset-0 bg-ink/45 mix-blend-color" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

                {/* Status Badge */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-micro text-paper select-none">
                  <span className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent animate-ping" />
                    <span>{active.category}</span>
                  </span>
                  <span className="text-accent font-semibold">
                    {active.metric.value}
                  </span>
                </div>
              </div>

              {/* Editorial Narrative & Specs Below Photo */}
              <div className="mt-8 space-y-6">
                <h3
                  data-terminal-fade
                  className="font-serif text-2xl sm:text-3xl font-normal text-paper leading-tight"
                >
                  {active.title}
                </h3>

                <p
                  data-terminal-fade
                  className="text-base sm:text-lg leading-relaxed text-muted max-w-2xl"
                >
                  {active.summary}
                </p>

                {/* Clean, Open Bullet Points (NO OUTLINE BOXES) */}
                <ul data-terminal-fade className="space-y-3 pt-2">
                  {active.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-paper/85 leading-relaxed"
                    >
                      <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Link & Metric */}
                <div
                  data-terminal-fade
                  className="pt-6 border-t border-line/40 flex flex-wrap items-center justify-between gap-6"
                >
                  <Link
                    href={`/${active.slug}`}
                    className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-paper hover:text-accent transition-colors"
                  >
                    <span>Explore {active.shortTitle}</span>
                    <span
                      aria-hidden
                      className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>

                  <div className="font-mono text-xs text-muted flex items-center gap-2">
                    <span>{active.metric.label}:</span>
                    <span className="text-paper font-semibold">
                      {active.metric.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
