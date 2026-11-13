"use client";

import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";

type Location = {
  city: string;
  country: string;
  role: string;
  tz: string;
  coords: string;
  status: string;
  disciplines: string[];
  summary: string;
};

const locations: Location[] = [
  {
    city: "Springfield",
    country: "United States",
    role: "Global Headquarters",
    tz: "CT (UTC-6)",
    coords: "39.7817° N, 89.6501° W",
    status: "EXECUTIVE STEWARDSHIP",
    disciplines: ["Executive Leadership", "Client Strategy", "Account Governance"],
    summary:
      "Direct executive alignment, contract stewardship, and US operating hours oversight.",
  },
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    role: "Primary Delivery Hub",
    tz: "EAT (UTC+3)",
    coords: "9.0320° N, 38.7482° E",
    status: "PRIMARY PRODUCTION BENCH",
    disciplines: [
      "Software Development",
      "AI Data Annotation",
      "IT Helpdesk & SaaS Support",
    ],
    summary:
      "Deep technical bench operating dedicated specialist teams inside client tooling and engineering sprints.",
  },
  {
    city: "Skopje",
    country: "North Macedonia",
    role: "European Delivery Hub",
    tz: "CET (UTC+1)",
    coords: "41.9973° N, 21.4280° E",
    status: "EMEA DELIVERY HUB",
    disciplines: [
      "Platform Operations",
      "Meetings & Events (Cvent)",
      "EMEA Timezone Support",
    ],
    summary:
      "Nearshore European operations providing direct EMEA working hours overlap and multilingual capabilities.",
  },
];

/**
 * Global Footprint & Operating Model.
 *
 * Inspired by InterGest Worldwide's architectural network ledger:
 * Replaces generic claims with concrete geographic infrastructure, institutional posture,
 * and clear division of operational responsibilities.
 */
export default function GlobalFootprint() {

  return (
    <section
      id="footprint"
      data-field="ink"
      className="relative overflow-hidden border-t border-line bg-ink px-gutter py-section text-paper"
    >
      <div className="mx-auto max-w-frame">
        {/* Header with InterGest-style metadata */}
        <div className="flex flex-col justify-between gap-6 pb-16 lg:flex-row lg:items-end">
          <div>
            <RevealBlock>
              <div className="flex items-center gap-3">
                <span className="text-micro font-medium uppercase tracking-[0.18em] text-accent">
                  Infrastructure & Reach
                </span>
                <span className="size-1 rounded-full bg-accent" />
                <span className="text-micro font-medium uppercase tracking-widest text-muted">
                  Follow-The-Sun Topology
                </span>
              </div>
            </RevealBlock>

            <RevealText as="h2" className="mt-4 max-w-[18ch] text-display-l">
              Two continents. One unbroken operational rhythm.
            </RevealText>
          </div>

          <RevealBlock delay={0.2} className="max-w-md">
            <p className="text-body-l text-muted">
              Structured presence across US Central, East Africa, and Central
              European time zones. We design handoffs so active work transitions
              seamlessly across operating hours.
            </p>
          </RevealBlock>
        </div>

        {/* 3-Column Architectural Ledger Grid */}
        <RevealBlock stagger className="grid border border-line lg:grid-cols-3">
          {locations.map((loc, i) => (
            <div
              key={loc.city}
              className={`group relative flex flex-col justify-between p-8 sm:p-10 transition-colors duration-500 hover:bg-ink-raised ${
                i < locations.length - 1 ? "border-b border-line lg:border-b-0 lg:border-r" : ""
              }`}
            >
              {/* Top Row: Index + Live Telemetry */}
              <div>
                <div className="flex items-center justify-between border-b border-line/60 pb-5">
                  <span className="font-mono text-micro font-medium text-muted">
                    0{i + 1} // {loc.coords}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="font-mono text-micro uppercase tracking-wider text-accent font-semibold">
                      {loc.status}
                    </span>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-micro font-medium uppercase tracking-wider text-accent">
                    {loc.role}
                  </p>
                  <h3 className="mt-2 text-display-m font-normal tracking-tight">
                    {loc.city}
                  </h3>
                  <p className="text-sm font-medium text-muted">
                    {loc.country} · {loc.tz}
                  </p>

                  <p className="mt-6 text-sm leading-relaxed text-muted">
                    {loc.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Disciplines Badges */}
              <div className="mt-10 border-t border-line/60 pt-6">
                <p className="text-micro font-medium uppercase tracking-wider text-muted">
                  Core Mandate
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {loc.disciplines.map((d) => (
                    <li
                      key={d}
                      className="border border-line/80 px-2.5 py-1 text-xs text-paper/85 transition-colors duration-300 group-hover:border-accent/40"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </RevealBlock>

        {/* Global Topology Summary Banner */}
        <RevealBlock delay={0.3} className="mt-12">
          <div className="flex flex-col items-start justify-between gap-6 border border-line bg-ink-raised/40 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex size-9 items-center justify-center rounded-full border border-line font-mono text-xs font-medium text-accent">
                24H
              </span>
              <div>
                <p className="text-sm font-medium text-paper">
                  Continuous Follow-The-Sun Handover
                </p>
                <p className="text-xs text-muted">
                  Standups, code reviews, and escalations bridge seamlessly between
                  North America and EMEA.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 font-mono text-xs text-muted">
              <div>
                <span className="block text-paper">100%</span>
                Embedded Teams
              </div>
              <div className="h-6 w-px bg-line" />
              <div>
                <span className="block text-paper">Zero</span>
                Ticket Queues
              </div>
              <div className="h-6 w-px bg-line" />
              <div>
                <span className="block text-paper">Direct</span>
                Engineering Handoff
              </div>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
