"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type DeliveryHub = {
  id: string;
  num: string;
  name: string;
  region: string;
  coords: string;
  role: string;
  summary: string;
  capabilities: string[];
  specs: { label: string; value: string };
};

const hubs: DeliveryHub[] = [
  {
    id: "addis",
    num: "01",
    name: "Addis Ababa",
    region: "Primary Engineering Hub // East Africa",
    coords: "9.03° N // 38.74° E",
    role: "Core Software Architecture & Machine Learning",
    summary:
      "Deep technical bench operating dedicated specialist teams inside client tooling, repositories, and daily agile sprints. High-retention engineering culture.",
    capabilities: [
      "Certified Mendix Rapid, Intermediate & Advanced Developers",
      "Domain-specialist AI & RLHF data annotation pipelines",
      "Microsoft 365, Azure AD & zero-trust identity posture",
    ],
    specs: { label: "CAPACITY STATUS", value: "ACTIVE PRODUCTION BENCH" },
  },
  {
    id: "skopje",
    num: "02",
    name: "Skopje",
    region: "European Delivery Hub // EMEA",
    coords: "41.99° N // 21.42° E",
    role: "Tier-3 Product Support & Enterprise Event Infrastructure",
    summary:
      "Nearshore European operations providing direct business hours overlap with London, Zurich, and New York. Real engineers staffing live resolution queues.",
    capabilities: [
      "Tier-3 SaaS incident triage & code-level reproductions",
      "Cvent-certified enterprise event operations & attendee support",
      "Continuous US and European working hours alignment",
    ],
    specs: { label: "TIMELINE OVERLAP", value: "DIRECT EMEA & US ALIGNMENT" },
  },
];

/**
 * SolarRadar — The Sovereign Global Infrastructure.
 *
 * Completely redesigned for calm, sovereign luxury (InterGest Canada aesthetic):
 * - ZERO tacky airport clocks or ticking seconds.
 * - Expansive architectural whitespace and commanding display typography.
 * - Deep, authentic presentation of the two sovereign delivery hubs.
 */
export default function SolarRadar() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const beats = root.current.querySelectorAll("[data-radar-beat]");
      gsap.fromTo(
        beats,
        { y: 30, opacity: 0, filter: "blur(6px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            once: true,
          },
        },
      );
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      data-theme="dark"
      className="relative w-full bg-ink text-paper py-28 sm:py-36 px-gutter overflow-hidden border-t border-line/40"
    >
      {/* Background ambient luxury depth bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 size-[50vw] rounded-full opacity-10 blur-[160px]"
        style={{
          background: "radial-gradient(circle, var(--color-depth) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-frame relative z-10">
        {/* Section Header */}
        <div data-radar-beat className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 font-mono text-micro uppercase tracking-[0.25em] text-accent mb-4">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span>04 // GLOBAL INFRASTRUCTURE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-paper">
            Two continents. One bench.{" "}
            <span className="font-serif italic text-accent">Unbroken velocity.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted max-w-2xl">
            Tazriel delivery operates from Addis Ababa and is expanding into North Macedonia,
            giving structured coverage across US and European operating hours with zero dropped threads.
          </p>
        </div>

        {/* Dual Sovereign Hubs Grid (SPACIOUS, NO CLOCK TICKERS, NO AMATEUR BOXES) */}
        <div
          data-radar-beat
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch"
        >
          {hubs.map((hub) => (
            <div
              key={hub.id}
              className="border-t border-line/50 pt-8 sm:pt-10 flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between font-mono text-micro mb-4">
                  <span className="text-accent font-semibold flex items-center gap-2">
                    <span>{hub.num} //</span>
                    <span>{hub.region}</span>
                  </span>
                  <span className="text-muted/60">{hub.coords}</span>
                </div>

                {/* City Name */}
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-paper leading-tight">
                  {hub.name}
                </h3>

                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
                  {hub.role}
                </p>

                <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted max-w-xl">
                  {hub.summary}
                </p>

                {/* Capabilities List */}
                <ul className="mt-8 space-y-3.5 border-t border-line/30 pt-6">
                  {hub.capabilities.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-paper/85 leading-relaxed"
                    >
                      <span className="size-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status Ribbon */}
              <div className="mt-10 border-t border-line/40 pt-4 flex items-center justify-between font-mono text-xs text-muted">
                <span>{hub.specs.label}</span>
                <span className="text-paper font-semibold flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                  <span>{hub.specs.value}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Horizon Statement */}
        <div
          data-radar-beat
          className="mt-16 sm:mt-24 border-t border-line/40 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-micro uppercase tracking-wider text-accent font-semibold block mb-1">
              The Sovereign Handoff Covenant
            </span>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              When domestic teams close their day in New York, our East African and European
              specialists continue the sprint without interruption. Your engineers wake up to resolved PRs,
              not unattended escalations.
            </p>
          </div>

          <div className="font-mono text-xs text-muted flex items-center gap-3 shrink-0">
            <span className="size-2 rounded-full bg-accent" />
            <span>CONTRACTUAL TIMEZONE ALIGNMENT: 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
