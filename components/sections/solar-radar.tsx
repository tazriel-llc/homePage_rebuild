"use client";

import { useEffect, useState, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Hub = {
  id: string;
  city: string;
  country: string;
  region: string;
  tzLabel: string;
  timeZoneId: string;
  offset: string;
  status: string;
  disciplines: string[];
  coords: string;
};

const hubs: Hub[] = [
  {
    id: "us",
    city: "Springfield",
    country: "United States",
    region: "Executive Governance & Strategy",
    tzLabel: "CT (UTC-6)",
    timeZoneId: "America/Chicago",
    offset: "UTC-6",
    status: "EXECUTIVE STEWARDSHIP",
    disciplines: ["Client Governance", "Contract SLA Enforcement", "Executive Leadership"],
    coords: "39.78° N // 89.65° W",
  },
  {
    id: "emea",
    city: "London / EMEA",
    country: "United Kingdom",
    region: "Enterprise Client Overlap",
    tzLabel: "GMT (UTC+0)",
    timeZoneId: "Europe/London",
    offset: "UTC+0",
    status: "SYNCHRONOUS COVERAGE",
    disciplines: ["Commercial Operations", "EMEA Stakeholder Sync", "Real-time Escalations"],
    coords: "51.50° N // 0.12° W",
  },
  {
    id: "skopje",
    city: "Skopje",
    country: "North Macedonia",
    region: "European Delivery Hub",
    tzLabel: "CET (UTC+1)",
    timeZoneId: "Europe/Skopje",
    offset: "UTC+1",
    status: "EMEA BENCH ACTIVE",
    disciplines: ["Tier-3 SaaS Support", "Cvent Event Infrastructure", "EMEA Agile Sprints"],
    coords: "41.99° N // 21.42° E",
  },
  {
    id: "addis",
    city: "Addis Ababa",
    country: "Ethiopia",
    region: "Primary Engineering Hub",
    tzLabel: "EAT (UTC+3)",
    timeZoneId: "Africa/Addis_Ababa",
    offset: "UTC+3",
    status: "PRODUCTION HUB ACTIVE",
    disciplines: ["Mendix Architecture", "AI/ML Data Annotation", "Cloud Infrastructure"],
    coords: "9.03° N // 38.74° E",
  },
];

const timelinePhases = [
  {
    time: "08:00 – 16:00 EAT",
    hub: "Addis Ababa Hub",
    action: "Core Mendix feature engineering, dataset annotation runs, and tenant security posture audits.",
  },
  {
    time: "10:00 – 18:00 CET",
    hub: "Skopje Hub",
    action: "Live Tier-3 resolution queues, enterprise Cvent logic build-outs, and London business hour overlap.",
  },
  {
    time: "14:00 – 22:00 EAT",
    hub: "Bilateral Handoff",
    action: "Direct daily sprint syncs with US East Coast engineering leadership. Bidirectional PR reviews.",
  },
  {
    time: "Overnight US",
    hub: "Autonomous Velocity",
    action: "Automated regression tests run, ticket backlog triaged, morning status reports compiled.",
  },
];

/**
 * SolarRadar — The Solar Handoff Horizon.
 *
 * Demonstrates Tazriel's true operational superpower:
 * Real-time synchronous coverage across four time zones with continuous
 * operational momentum and zero overnight deflection delays.
 */
export default function SolarRadar() {
  const root = useRef<HTMLElement>(null);
  const [times, setTimes] = useState<Record<string, string>>({});
  const reduced = useReducedMotion();

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const newTimes: Record<string, string> = {};
      hubs.forEach((h) => {
        newTimes[h.id] = now.toLocaleTimeString("en-US", {
          timeZone: h.timeZoneId,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
      });
      setTimes(newTimes);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

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
      className="relative w-full bg-ink text-paper py-24 sm:py-32 px-gutter overflow-hidden border-t border-line/60"
    >
      {/* Subtle ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[60vw] rounded-full opacity-10 blur-[160px]"
        style={{
          background: "radial-gradient(circle, var(--color-depth) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-frame relative z-10">
        {/* Section Header */}
        <div data-radar-beat className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-micro uppercase tracking-[0.25em] text-accent">
            <span className="size-1.5 rounded-full bg-accent animate-ping" />
            <span>04 // SYNCHRONOUS OPERATIONAL TOPOLOGY</span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.04] tracking-tight text-paper">
            Two continents. Four time zones.{" "}
            <span className="font-serif italic text-accent">Unbroken velocity.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted max-w-2xl">
            Your domestic engineering teams shouldn&rsquo;t wake up to overnight fires.
            Our dual-continent delivery architecture ensures structured coverage from
            dawn in London through dusk in Silicon Valley.
          </p>
        </div>

        {/* Live Synchronous Clocks Grid */}
        <div
          data-radar-beat
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {hubs.map((hub) => (
            <div
              key={hub.id}
              className="border border-line/80 bg-ink-raised/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent/60"
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between border-b border-line/50 pb-3 font-mono text-micro text-muted">
                <span className="text-accent font-semibold">{hub.offset}</span>
                <span>{hub.coords}</span>
              </div>

              {/* City & Live Clock */}
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-paper">
                    {hub.city}
                  </h3>
                  <span className="block text-xs text-muted mt-0.5">
                    {hub.country}
                  </span>
                </div>

                <div className="text-right">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-accent tracking-wider">
                    {times[hub.id] || "00:00:00"}
                  </span>
                  <span className="block font-mono text-[10px] text-muted">
                    {hub.tzLabel}
                  </span>
                </div>
              </div>

              {/* Core Role */}
              <p className="mt-4 text-xs leading-relaxed text-paper/80 border-t border-line/40 pt-3">
                {hub.region}
              </p>

              {/* Status Ribbon */}
              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-muted pt-2 border-t border-line/30">
                <span>STATUS:</span>
                <span className="text-paper font-semibold flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-accent animate-pulse" />
                  <span>{hub.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The 24-Hour Handoff Architecture Ledger */}
        <div
          data-radar-beat
          className="mt-12 sm:mt-16 border border-line/80 bg-ink-raised/60 p-6 sm:p-8 backdrop-blur-md"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line/50 pb-4 mb-6">
            <div>
              <span className="font-mono text-micro uppercase tracking-wider text-accent font-semibold">
                Continuous Operational Momentum
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-paper mt-1">
                How tasks and incident queues hand off without delay
              </h3>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="size-2 rounded-full bg-accent" />
              <span>OVERNIGHT DEFLECTION: ZERO</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelinePhases.map((phase, i) => (
              <div key={i} className="border-l-2 border-accent/70 pl-4 space-y-2">
                <span className="font-mono text-xs font-semibold text-accent block">
                  {phase.time}
                </span>
                <h4 className="font-serif text-lg text-paper font-normal">
                  {phase.hub}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {phase.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
