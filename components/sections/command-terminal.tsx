"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Discipline = {
  id: string;
  num: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  slug: string;
  benchStatus: string;
  specs: string[];
  metrics: { label: string; value: string };
  deliverables: string[];
};

const disciplines: Discipline[] = [
  {
    id: "engineering",
    num: "01",
    tag: "LOW-CODE & ENTERPRISE ARCHITECTURE",
    title: "Software Development & Mendix Architecture",
    summary:
      "Engineering teams that ship directly into your repositories, tooling, and daily sprint rituals. Certified Mendix Rapid & Advanced practitioners managing full-lifecycle enterprise delivery.",
    image: "software-development",
    slug: "software-development",
    benchStatus: "RAPID & ADVANCED BENCH ONLINE",
    specs: [
      "Certified Mendix Rapid, Intermediate & Advanced Developers",
      "Native GitHub & GitLab CI/CD pull request integration",
      "Full-stack web systems, RESTful microservices & API pipelines",
      "Automated unit testing & regression verification",
    ],
    metrics: { label: "SPRINT CADENCE", value: "DAILY SPRINT ALIGNED" },
    deliverables: [
      "Production-ready feature PRs",
      "Domain model architecture audits",
      "Sprint velocity burn-up reports",
    ],
  },
  {
    id: "ai-data",
    num: "02",
    tag: "MACHINE LEARNING INFRASTRUCTURE",
    title: "Data Annotation & AI Model Training",
    summary:
      "High-accuracy labelled datasets, multi-turn RLHF evaluation, and model training pipelines held to verified mathematical agreement thresholds. Zero automated hallucinations.",
    image: "data-annotation-and-ai-training",
    slug: "data-annotation-and-ai-training",
    benchStatus: "DOMAIN SPECIALIST PIPELINE ACTIVE",
    specs: [
      "Rigorous domain-specialist annotation teams (Legal, Medical, Code)",
      "Strict multi-pass QA with Cohen's Kappa agreement scoring ≥ 0.92",
      "RLHF preference ranking & red-teaming adversarial safety probes",
      "Custom taxonomy design & synthetic dataset generation",
    ],
    metrics: { label: "ACCURACY BENCHMARK", value: "≥ 99.2% VERIFIED" },
    deliverables: [
      "Gold-standard evaluation sets",
      "Inter-annotator agreement metrics",
      "Audit-ready data lineage logs",
    ],
  },
  {
    id: "m365",
    num: "03",
    tag: "CLOUD GOVERNANCE & IDENTITY",
    title: "Microsoft 365 & Power Platform Administration",
    summary:
      "Enterprise tenant administration, zero-trust conditional access, and automated Power Platform workflow pipelines run by credentialed Microsoft cloud specialists.",
    image: "microsoft-365-administration",
    slug: "microsoft-365-administration",
    benchStatus: "ZERO-TRUST GOVERNANCE ACTIVE",
    specs: [
      "Azure AD / Entra ID conditional access & RBAC policy enforcement",
      "Enterprise Power Automate flow architecture & error handling",
      "Continuous licensing drift audits & cost optimization",
      "Automated tenant security posture management (M365 Secure Score)",
    ],
    metrics: { label: "ENDPOINT DRIFT", value: "0.0% DRIFT POLICY" },
    deliverables: [
      "Weekly security posture ledger",
      "Workflow run telemetry dashboards",
      "Identity access governance logs",
    ],
  },
  {
    id: "cvent",
    num: "04",
    tag: "ENTERPRISE EVENT INFRASTRUCTURE",
    title: "Meetings & Events Operations (Cvent)",
    summary:
      "Cvent-certified event architects managing complex enterprise registration build-outs, multi-track agenda logic, live on-site attendee desks, and post-conference telemetry.",
    image: "meetings-and-events",
    slug: "meetings-and-events",
    benchStatus: "CVENT CERTIFIED BENCH ONLINE",
    specs: [
      "Complex conditional registration pathways & VIP logic",
      "Payment gateway integration, multi-currency refunds & reconciliation",
      "Pre-event failover architecture & load testing",
      "Live global incident desk & attendee concierge support",
    ],
    metrics: { label: "PLATFORM STATUS", value: "CERTIFIED PRACTITIONERS" },
    deliverables: [
      "End-to-end registration portals",
      "Live attendee analytics telemetry",
      "Post-event attribution reports",
    ],
  },
  {
    id: "support",
    num: "05",
    tag: "ROOT-CAUSE RESOLUTION",
    title: "SaaS Product Support & IT Helpdesk",
    summary:
      "Tier-3 technical support teams that master your platform deeply enough to resolve root causes rather than deflect tickets. Real engineers writing code fixes and reproducible bug reports.",
    image: "saas-product-support",
    slug: "saas-product-support",
    benchStatus: "TIER-3 RESOLUTION BENCH ONLINE",
    specs: [
      "Engineers staffing queues, not uncertified deflectors",
      "Direct code-level bug triage with reproducible Docker environments",
      "HubSpot Service Hub, Jira Service Management & Zendesk Enterprise",
      "Bidirectional customer engineering escalation loops",
    ],
    metrics: { label: "FIRST-CONTACT RESOLUTION", value: "≥ 86.4% TIER-3" },
    deliverables: [
      "Reproducible bug reproductions",
      "Root-cause pull requests",
      "Zero-deflection incident logs",
    ],
  },
];

/**
 * CommandTerminal — The Sovereign Platform Console.
 *
 * Replaces the forced horizontal slide zoom with an executive, high-tech Command Deck:
 * - Left column: Pinned architectural discipline docket with live status and progress line.
 * - Right column: Live operational deck with high-res duotone visual, spec matrix, and deliverables.
 * - Click-operable and scroll-synchronized: Users can click any discipline or scroll naturally.
 */
export default function CommandTerminal() {
  const root = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"specs" | "deliverables">("specs");
  const reduced = useReducedMotion();

  const activeDiscipline = disciplines[activeIdx];

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      // Scroll-driven synchronization through the 5 disciplines
      const trigger = root.current;
      const count = disciplines.length;

      gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: `+=${count * 100}%`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            const p = self.progress;
            const newIndex = Math.min(
              Math.floor(p * count),
              count - 1,
            );
            setActiveIdx((prev) => (prev !== newIndex ? newIndex : prev));
          },
        },
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      id="platform-console"
      data-theme="dark"
      className="relative min-h-screen w-full bg-ink text-paper py-20 lg:py-0 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient luxury depth bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 size-[55vw] rounded-full opacity-10 blur-[150px]"
        style={{
          background: "radial-gradient(circle, var(--color-depth) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-1/4 size-[45vw] rounded-full opacity-10 blur-[130px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto w-full max-w-frame px-gutter py-8 sm:py-12 relative z-10">
        {/* Top Console Meta Ribbon */}
        <div className="flex items-center justify-between border-b border-line/60 pb-4 mb-8 sm:mb-12 font-mono text-micro select-none">
          <div className="flex items-center gap-3">
            <span className="text-accent font-semibold flex items-center gap-2">
              <span className="size-2 rounded-full bg-accent animate-ping" />
              <span>COMMAND CONSOLE // PLATFORM BENCH</span>
            </span>
            <span className="h-px w-6 bg-line" />
            <span className="text-muted hidden sm:inline">
              EMBEDDED OPERATIONAL ARCHITECTURE
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-accent font-semibold">
              0{activeIdx + 1} / 0{disciplines.length}
            </span>
            <span className="size-1 rounded-full bg-accent" />
            <span className="text-muted hidden md:inline">SOVEREIGN CAPABILITY</span>
          </div>
        </div>

        {/* Main 2-Column Command Terminal */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Pinned Discipline Docket */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-micro uppercase tracking-[0.25em] text-accent">
                Core Production Disciplines
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.08] tracking-tight text-paper">
                Depth in the systems your enterprise runs on.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted max-w-md">
                Senior practitioners embedded directly into your sprints, tooling, and
                operating cadences. Select or scroll to inspect the operational bench.
              </p>
            </div>

            {/* Discipline Selector Buttons */}
            <div className="mt-8 sm:mt-10 space-y-2.5">
              {disciplines.map((d, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveIdx(i)}
                    className={`group w-full text-left p-4 sm:p-4.5 border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? "border-accent/80 bg-ink-raised/90 shadow-lg translate-x-1"
                        : "border-line/40 bg-ink/40 hover:border-line hover:bg-ink-raised/40 text-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`font-mono text-xs font-semibold ${
                          isActive ? "text-accent" : "text-muted/60"
                        }`}
                      >
                        {d.num}
                      </span>
                      <span
                        className={`text-sm sm:text-base font-medium transition-colors ${
                          isActive ? "text-paper" : "text-muted group-hover:text-paper"
                        }`}
                      >
                        {d.title.split("&")[0].trim()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                      )}
                      <span
                        className={`font-mono text-micro uppercase transition-colors ${
                          isActive ? "text-accent" : "text-muted/40"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Operational Deck Canvas */}
          <div className="lg:col-span-7">
            <div className="border border-line/80 bg-ink-raised/90 shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-500">
              {/* Deck Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line/60 p-5 sm:p-6 bg-ink/50">
                <div>
                  <div className="flex items-center gap-2 font-mono text-micro text-accent">
                    <span className="size-1.5 rounded-full bg-accent" />
                    <span>{activeDiscipline.tag}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-normal text-paper leading-tight">
                    {activeDiscipline.title}
                  </h3>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 border border-line/60 bg-ink p-1">
                  <button
                    onClick={() => setActiveTab("specs")}
                    className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                      activeTab === "specs"
                        ? "bg-accent text-white font-semibold"
                        : "text-muted hover:text-paper"
                    }`}
                  >
                    Specs Matrix
                  </button>
                  <button
                    onClick={() => setActiveTab("deliverables")}
                    className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                      activeTab === "deliverables"
                        ? "bg-accent text-white font-semibold"
                        : "text-muted hover:text-paper"
                    }`}
                  >
                    Deliverables
                  </button>
                </div>
              </div>

              {/* Deck Visual & Details */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-paper/85">
                  {activeDiscipline.summary}
                </p>

                {/* Visual Photography Plate with status badge */}
                <div className="group relative aspect-[21/9] w-full overflow-hidden border border-line/60 bg-ink">
                  <img
                    src={`/media/${activeDiscipline.image}-1280.webp`}
                    alt={activeDiscipline.title}
                    className="size-full object-cover grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/50 mix-blend-color" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

                  {/* Operational Badge Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-paper">
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-accent animate-ping" />
                      <span>{activeDiscipline.benchStatus}</span>
                    </span>
                    <span className="text-accent font-semibold">
                      {activeDiscipline.metrics.value}
                    </span>
                  </div>
                </div>

                {/* Dynamic Tab Content */}
                {activeTab === "specs" ? (
                  <div>
                    <span className="font-mono text-micro uppercase tracking-widest text-accent block mb-3">
                      Production Architecture &amp; Competencies
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-paper/90">
                      {activeDiscipline.specs.map((spec, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 p-3 border border-line/40 bg-ink/60"
                        >
                          <span className="size-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div>
                    <span className="font-mono text-micro uppercase tracking-widest text-accent block mb-3">
                      Standard Verified Deliverables
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-paper/90">
                      {activeDiscipline.deliverables.map((del, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 p-3 border border-line/40 bg-ink/60"
                        >
                          <span className="size-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Footer Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/${activeDiscipline.slug}`}
                      className="group inline-flex items-center gap-2.5 bg-paper px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-white"
                    >
                      <span>Explore {activeDiscipline.title.split("&")[0].trim()}</span>
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>

                    <Link
                      href="/contact"
                      className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-paper"
                    >
                      Request Specialist CVs
                    </Link>
                  </div>

                  <div className="font-mono text-xs text-muted flex items-center gap-2">
                    <span>{activeDiscipline.metrics.label}:</span>
                    <span className="font-semibold text-accent">
                      {activeDiscipline.metrics.value}
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
