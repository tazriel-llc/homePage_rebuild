"use client";

import { useRef, useId } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ServiceItem = {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  spec: string;
  slug: string;
  side: "left" | "right";
  iconType: "waveform" | "rings" | "matrix" | "circuit" | "prism" | "diamond";
};

const leftServices: ServiceItem[] = [
  {
    id: "ai-data",
    num: "01",
    category: "MACHINE LEARNING",
    title: "AI & Intelligent Automation",
    description:
      "High-accuracy labelled datasets, multi-turn RLHF evaluation, and model training pipelines held to verified mathematical agreement thresholds.",
    spec: "RLHF BENCH ≥ 99.2%",
    slug: "data-annotation-and-ai-training",
    side: "left",
    iconType: "waveform",
  },
  {
    id: "m365",
    num: "02",
    category: "CLOUD GOVERNANCE",
    title: "Microsoft 365 & Cloud Identity",
    description:
      "Enterprise tenant administration, zero-trust conditional access, and automated Power Platform workflow pipelines run by credentialed Microsoft specialists.",
    spec: "ZERO ENDPOINT DRIFT",
    slug: "microsoft-365-administration",
    side: "left",
    iconType: "matrix",
  },
  {
    id: "stewardship",
    num: "03",
    category: "SOVEREIGN POSTURE",
    title: "Executive Strategic Stewardship",
    description:
      "Direct executive alignment, SLA accountability, and dual-continent delivery architecture ensuring your US and European engineering sprints run with zero dropped threads.",
    spec: "100% CLIENT INTERVIEWED",
    slug: "contact",
    side: "left",
    iconType: "prism",
  },
];

const rightServices: ServiceItem[] = [
  {
    id: "software",
    num: "04",
    category: "LOW-CODE & CLOUD",
    title: "Software & Mendix Architecture",
    description:
      "Certified Mendix Rapid & Advanced practitioners shipping full-stack enterprise systems directly into your repositories, tooling, and daily sprint rituals.",
    spec: "CERTIFIED MENDIX BENCH",
    slug: "software-development",
    side: "right",
    iconType: "rings",
  },
  {
    id: "support",
    num: "05",
    category: "RESOLUTION OPERATIONS",
    title: "SaaS Product Support & Helpdesk",
    description:
      "Tier-3 technical support teams that master your platform deeply enough to resolve root causes rather than deflect scripts. Real engineers staffing resolution queues.",
    spec: "ZERO DEFLECTION QUEUES",
    slug: "saas-product-support",
    side: "right",
    iconType: "circuit",
  },
  {
    id: "cvent",
    num: "06",
    category: "EVENT INFRASTRUCTURE",
    title: "Meetings & Events (Cvent)",
    description:
      "Cvent-certified event architects managing complex enterprise registration build-outs, multi-track logic, live attendee desks, and post-conference telemetry.",
    spec: "CVENT CERTIFIED BENCH",
    slug: "meetings-and-events",
    side: "right",
    iconType: "diamond",
  },
];

/**
 * Geometric Luxury Icons inspired by TRIONN (Screenshot 3).
 * Minimalist, precision-engineered SVG line work.
 */
function ServiceIcon({ type }: { type: ServiceItem["iconType"] }) {
  switch (type) {
    case "waveform":
      // Parallel vertical scan array
      return (
        <svg
          aria-hidden
          className="size-11 sm:size-14 text-accent/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="6" y1="16" x2="6" y2="32" />
          <line x1="12" y1="10" x2="12" y2="38" />
          <line x1="18" y1="6" x2="18" y2="42" strokeWidth="2" />
          <line x1="24" y1="14" x2="24" y2="34" />
          <line x1="30" y1="8" x2="30" y2="40" strokeWidth="2" />
          <line x1="36" y1="12" x2="36" y2="36" />
          <line x1="42" y1="18" x2="42" y2="30" />
        </svg>
      );
    case "rings":
      // Concentric circular harmonic arcs (from Screenshot 3)
      return (
        <svg
          aria-hidden
          className="size-11 sm:size-14 text-accent/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="24" cy="24" r="21" strokeOpacity="0.3" strokeDasharray="2 3" />
          <circle cx="24" cy="24" r="15" strokeOpacity="0.6" />
          <circle cx="24" cy="24" r="9" strokeWidth="2" />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
        </svg>
      );
    case "matrix":
      // Zero-trust cryptographic security matrix
      return (
        <svg
          aria-hidden
          className="size-11 sm:size-14 text-accent/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <polygon points="24 4, 42 14, 42 34, 24 44, 6 34, 6 14" strokeOpacity="0.4" />
          <polygon points="24 12, 34 18, 34 30, 24 36, 14 30, 14 18" strokeWidth="2" />
          <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        </svg>
      );
    case "circuit":
      // Incident resolution logic nodes
      return (
        <svg
          aria-hidden
          className="size-11 sm:size-14 text-accent/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M8 24h12l4-8 8 16 4-8h12" strokeWidth="2" />
          <circle cx="8" cy="24" r="2.5" fill="currentColor" />
          <circle cx="40" cy="24" r="2.5" fill="currentColor" />
        </svg>
      );
    case "prism":
      // Sovereign governance prism
      return (
        <svg
          aria-hidden
          className="size-11 sm:size-14 text-accent/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <polygon points="24 6, 42 38, 6 38" strokeWidth="2" />
          <line x1="24" y1="6" x2="24" y2="38" strokeDasharray="2 2" strokeOpacity="0.5" />
          <circle cx="24" cy="26" r="3" fill="currentColor" />
        </svg>
      );
    case "diamond":
      // Precision event focal optic
      return (
        <svg
          aria-hidden
          className="size-11 sm:size-14 text-accent/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <polygon points="24 4, 44 24, 24 44, 4 24" strokeWidth="1.8" />
          <polygon points="24 14, 34 24, 24 34, 14 24" strokeOpacity="0.5" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
        </svg>
      );
  }
}

/**
 * ArcServices — The Sovereign Disciplines Showcase.
 *
 * Implements the 4-phase cinematic interaction from TRIONN (trionn.com):
 * Phase 1: Massive Stacked Typographic Gate ("OUR SERVICES: A.I. / SOFTWARE / OPERATIONS / GOVERNANCE").
 * Phase 2: Letter dispersion / 3D shatter into deep cosmic ink void around the central carved stone Monolith.
 * Phase 3: Counter-directional curved arc trajectories (Left: Bottom -> Top in arc, Right: Top -> Bottom in arc).
 * Phase 4: Smooth Breaking Transition: Horizontal architectural paper bands slicing across the screen
 *          revealing the next section with seamless luxury momentum.
 */
export default function ArcServices() {
  const root = useRef<HTMLElement>(null);
  const filterId = useId();
  const reduced = useReducedMotion();

  // Words for the Phase 1 Typographic Gate
  const gateLines = [
    { text: "A.I.", letters: ["A", ".", "I", "."] },
    { text: "SOFTWARE", letters: ["S", "O", "F", "T", "W", "A", "R", "E"] },
    { text: "OPERATIONS", letters: ["O", "P", "E", "R", "A", "T", "I", "O", "N", "S"] },
    { text: "GOVERNANCE", letters: ["G", "O", "V", "E", "R", "N", "A", "N", "C", "E"] },
  ];

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const q = gsap.utils.selector(root);
      const container = root.current;

      // Select targets
      const gateContainer = q("[data-trionn-gate]");
      const letters = q("[data-trionn-letter]");
      const gateMeta = q("[data-trionn-meta]");
      const monolith = q("[data-trionn-monolith]");
      const ambientVoid = q("[data-trionn-void]");
      const leftCards = q("[data-arc-card-left]");
      const rightCards = q("[data-arc-card-right]");
      const blinds = q("[data-trionn-blind]");
      const blindsContainer = q("[data-trionn-blinds-wrap]");
      const outroText = q("[data-trionn-outro]");

      // Initial layout states
      gsap.set(monolith, { scale: 0.5, opacity: 0, rotateZ: -12, filter: "blur(10px)" });
      gsap.set(ambientVoid, { opacity: 0 });
      gsap.set(leftCards, { yPercent: 180, x: -90, rotation: 10, opacity: 0, scale: 0.85 });
      gsap.set(rightCards, { yPercent: -180, x: 90, rotation: -10, opacity: 0, scale: 0.85 });
      gsap.set(blindsContainer, { pointerEvents: "none" });
      gsap.set(blinds, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(outroText, { opacity: 0, y: 30 });

      // Master scrubbed timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=450%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ── PHASE 1 & 2: Typographic Dispersion & Monolith Entrance (0.00 -> 0.25)
      // Disperse meta info first
      masterTl.to(gateMeta, { opacity: 0, y: -20, duration: 0.08, ease: "power2.in" }, 0.02);

      // Shatter letters into 3D orbit around the center
      letters.forEach((letter, i) => {
        const angle = (i / letters.length) * Math.PI * 2 + (Math.random() - 0.5);
        const distance = 280 + Math.random() * 320;
        const targetX = Math.cos(angle) * distance;
        const targetY = Math.sin(angle) * distance;
        const targetRot = (Math.random() - 0.5) * 120;
        const targetScale = 0.4 + Math.random() * 0.9;

        masterTl.to(
          letter,
          {
            x: targetX,
            y: targetY,
            rotation: targetRot,
            scale: targetScale,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.22,
            ease: "power3.inOut",
          },
          0.04,
        );
      });

      // Fade in the deep ink cosmic void & emerge the Monolith
      masterTl.to(ambientVoid, { opacity: 1, duration: 0.2, ease: "power2.out" }, 0.06);
      masterTl.to(
        monolith,
        {
          scale: 1,
          opacity: 1,
          rotateZ: 0,
          filter: "blur(0px)",
          duration: 0.22,
          ease: "power2.out",
        },
        0.08,
      );

      // Hide gate container once dispersed
      masterTl.set(gateContainer, { visibility: "hidden" }, 0.26);

      // ── PHASE 3: Counter-Orbital Arc Trajectories (0.24 -> 0.82)
      // Left cards travel from bottom to top in an arc (yPercent: 160 -> -160, x: -90 -> 0 -> -90)
      // Right cards travel from top to bottom in an arc (yPercent: -160 -> 160, x: 90 -> 0 -> 90)

      // Pair 1 (0.24 -> 0.48, apex at 0.36)
      if (leftCards[0] && rightCards[0]) {
        // Left 01: Bottom -> Center -> Top
        masterTl.fromTo(
          leftCards[0],
          { yPercent: 160, x: -90, rotation: 8, opacity: 0, scale: 0.85, filter: "blur(6px)" },
          {
            yPercent: 0,
            x: 0,
            rotation: 0,
            opacity: 1,
            scale: 1.04,
            filter: "blur(0px)",
            duration: 0.12,
            ease: "power2.out",
          },
          0.24,
        );
        masterTl.to(
          leftCards[0],
          {
            yPercent: -160,
            x: -90,
            rotation: -8,
            opacity: 0,
            scale: 0.85,
            filter: "blur(6px)",
            duration: 0.12,
            ease: "power2.in",
          },
          0.36,
        );

        // Right 04: Top -> Center -> Bottom
        masterTl.fromTo(
          rightCards[0],
          { yPercent: -160, x: 90, rotation: -8, opacity: 0, scale: 0.85, filter: "blur(6px)" },
          {
            yPercent: 0,
            x: 0,
            rotation: 0,
            opacity: 1,
            scale: 1.04,
            filter: "blur(0px)",
            duration: 0.12,
            ease: "power2.out",
          },
          0.24,
        );
        masterTl.to(
          rightCards[0],
          {
            yPercent: 160,
            x: 90,
            rotation: 8,
            opacity: 0,
            scale: 0.85,
            filter: "blur(6px)",
            duration: 0.12,
            ease: "power2.in",
          },
          0.36,
        );
      }

      // Pair 2 (0.42 -> 0.66, apex at 0.54)
      if (leftCards[1] && rightCards[1]) {
        // Left 02: Bottom -> Center -> Top
        masterTl.fromTo(
          leftCards[1],
          { yPercent: 160, x: -90, rotation: 8, opacity: 0, scale: 0.85, filter: "blur(6px)" },
          {
            yPercent: 0,
            x: 0,
            rotation: 0,
            opacity: 1,
            scale: 1.04,
            filter: "blur(0px)",
            duration: 0.12,
            ease: "power2.out",
          },
          0.42,
        );
        masterTl.to(
          leftCards[1],
          {
            yPercent: -160,
            x: -90,
            rotation: -8,
            opacity: 0,
            scale: 0.85,
            filter: "blur(6px)",
            duration: 0.12,
            ease: "power2.in",
          },
          0.54,
        );

        // Right 05: Top -> Center -> Bottom
        masterTl.fromTo(
          rightCards[1],
          { yPercent: -160, x: 90, rotation: -8, opacity: 0, scale: 0.85, filter: "blur(6px)" },
          {
            yPercent: 0,
            x: 0,
            rotation: 0,
            opacity: 1,
            scale: 1.04,
            filter: "blur(0px)",
            duration: 0.12,
            ease: "power2.out",
          },
          0.42,
        );
        masterTl.to(
          rightCards[1],
          {
            yPercent: 160,
            x: 90,
            rotation: 8,
            opacity: 0,
            scale: 0.85,
            filter: "blur(6px)",
            duration: 0.12,
            ease: "power2.in",
          },
          0.54,
        );
      }

      // Pair 3 (0.60 -> 0.82, apex at 0.71)
      if (leftCards[2] && rightCards[2]) {
        // Left 03: Bottom -> Center -> Top
        masterTl.fromTo(
          leftCards[2],
          { yPercent: 160, x: -90, rotation: 8, opacity: 0, scale: 0.85, filter: "blur(6px)" },
          {
            yPercent: 0,
            x: 0,
            rotation: 0,
            opacity: 1,
            scale: 1.04,
            filter: "blur(0px)",
            duration: 0.11,
            ease: "power2.out",
          },
          0.60,
        );
        masterTl.to(
          leftCards[2],
          {
            yPercent: -160,
            x: -90,
            rotation: -8,
            opacity: 0,
            scale: 0.85,
            filter: "blur(6px)",
            duration: 0.11,
            ease: "power2.in",
          },
          0.71,
        );

        // Right 06: Top -> Center -> Bottom
        masterTl.fromTo(
          rightCards[2],
          { yPercent: -160, x: 90, rotation: -8, opacity: 0, scale: 0.85, filter: "blur(6px)" },
          {
            yPercent: 0,
            x: 0,
            rotation: 0,
            opacity: 1,
            scale: 1.04,
            filter: "blur(0px)",
            duration: 0.11,
            ease: "power2.out",
          },
          0.60,
        );
        masterTl.to(
          rightCards[2],
          {
            yPercent: 160,
            x: 90,
            rotation: 8,
            opacity: 0,
            scale: 0.85,
            filter: "blur(6px)",
            duration: 0.11,
            ease: "power2.in",
          },
          0.71,
        );
      }

      // Subtle dynamic float of the monolith during orbit
      masterTl.to(
        monolith,
        {
          scale: 1.08,
          rotationY: 15,
          rotationX: -5,
          duration: 0.55,
          ease: "none",
        },
        0.25,
      );

      // ── PHASE 4: Smooth Breaking Transition (Screenshot 4) (0.80 -> 1.00)
      // Horizontal paper bands slice across the screen leaving dark letterboxes,
      // then expand vertically into a solid paper ground revealing the outro statement!
      masterTl.set(blindsContainer, { pointerEvents: "auto" }, 0.80);

      // Staggered horizontal wipe across the screen
      blinds.forEach((blind, idx) => {
        const fromLeft = idx % 2 === 0;
        gsap.set(blind, { transformOrigin: fromLeft ? "left center" : "right center" });

        masterTl.to(
          blind,
          {
            scaleX: 1,
            duration: 0.1,
            ease: "power3.inOut",
          },
          0.81 + idx * 0.03,
        );
      });

      // Expand bands vertically to fuse into a solid paper backdrop
      masterTl.to(
        blinds,
        {
          scaleY: 2.8,
          duration: 0.08,
          ease: "power2.inOut",
        },
        0.91,
      );

      // Fade in the clean outro announcement on the fused paper canvas
      masterTl.to(
        outroText,
        {
          opacity: 1,
          y: 0,
          duration: 0.07,
          ease: "power2.out",
        },
        0.93,
      );
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      id="disciplines"
      data-theme="dark"
      className="relative h-screen w-full overflow-hidden bg-ink select-none"
    >
      {/* ── SVG Filter for Chiseled Basalt Stone Texture (Screenshot 2 & 3) ── */}
      <svg aria-hidden className="absolute -top-[9999px] -left-[9999px] size-0 pointer-events-none">
        <filter id={`stone-noise-${filterId}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.04 0.07" numOctaves="3" result="noise" />
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0.35 0"
          />
        </filter>
      </svg>

      {/* ── AMBIENT COSMIC VOID (Activates during Monolith & Arc phase) ── */}
      <div
        data-trionn-void
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#020035]"
      >
        {/* Soft volumetric depth glows */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[65vw] rounded-full opacity-25 blur-[140px]"
          style={{
            background: "radial-gradient(circle, #2100b1 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute left-1/4 top-1/3 size-[40vw] rounded-full opacity-10 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #ed4c00 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ── PHASE 1: MASSIVE STACKED TYPOGRAPHIC GATE (Screenshot 1) ── */}
      <div
        data-trionn-gate
        className="absolute inset-0 z-20 flex size-full items-center justify-center px-gutter bg-[#F4F1EC] text-ink transition-colors"
      >
        <div className="w-full max-w-frame flex flex-col justify-between h-[82vh]">
          {/* Header Tag */}
          <div
            data-trionn-meta
            className="flex items-center justify-between border-b border-line-paper pb-4"
          >
            <div className="flex items-center gap-3 font-mono text-micro uppercase tracking-[0.22em] text-accent font-semibold">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              <span>OUR SERVICES</span>
            </div>
            <span className="hidden sm:inline font-mono text-micro uppercase tracking-widest text-muted-paper">
              THE SOVEREIGN BENCH // DIRECT INTEGRATION
            </span>
          </div>

          {/* Colossal Stacked Typography (Letters split for Phase 2 explosion) */}
          <div className="flex flex-col items-center justify-center my-auto text-center">
            {gateLines.map((line, lineIdx) => (
              <div
                key={lineIdx}
                className="font-sans font-black uppercase text-[11vw] sm:text-[9.5vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.88] tracking-tighter text-ink flex items-center justify-center select-none"
              >
                {line.letters.map((char, charIdx) => (
                  <span
                    key={charIdx}
                    data-trionn-letter
                    className="inline-block will-change-transform"
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Footer Sub-Bar */}
          <div
            data-trionn-meta
            className="flex items-center justify-between border-t border-line-paper pt-4"
          >
            <span className="font-mono text-micro uppercase tracking-[0.2em] text-ink/80 flex items-center gap-2">
              <span className="text-accent">✦</span>
              <span>DESIGN WITH INTENT. BUILT TO SCALE.</span>
            </span>

            <div className="flex items-center gap-2 font-mono text-micro uppercase tracking-wider text-accent font-semibold">
              <span>SCROLL TO ENTER BENCH</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── PHASE 2 & 3: CENTRAL STONE MONOLITH (Screenshot 2 & 3) ── */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div
          data-trionn-monolith
          className="relative size-48 sm:size-64 md:size-72 lg:size-84 rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] border border-white/10 will-change-transform"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #2c2e3c 0%, #171822 50%, #0a0b12 85%, #040508 100%)",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.9), 0 25px 70px -10px rgba(0,0,0,0.9)",
          }}
        >
          {/* Subtle Stone Texture Overlay */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
            style={{
              filter: `url(#stone-noise-${filterId})`,
              background: "#555",
            }}
          />

          {/* Volumetric Specular Glint */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />

          {/* Deep Carved Tazriel Sigil (Emblem from Screenshot 3) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <svg
              className="size-20 sm:size-28 lg:size-32 text-paper/85 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              {/* Carved Sovereign Chevron Sigil */}
              <path
                d="M32 25 L55 60 L45 60 L24 25 Z"
                fill="currentColor"
                fillOpacity="0.85"
              />
              <path
                d="M52 25 L75 60 L65 60 L44 25 Z"
                fill="currentColor"
                fillOpacity="0.85"
              />
              <line
                x1="20"
                y1="72"
                x2="80"
                y2="72"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeOpacity="0.6"
              />
            </svg>

            <span className="mt-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-paper/70 font-semibold drop-shadow-md">
              TAZRIEL BENCH
            </span>
          </div>

          {/* Ambient Rim Lighting */}
          <div className="absolute inset-0 border border-accent/20 rounded-2xl pointer-events-none" />
        </div>
      </div>

      {/* ── PHASE 3: DUAL COUNTER-ORBITAL ARCS (Screenshot 3) ── */}
      {/* Container holding the Left and Right Arcs */}
      <div className="relative z-20 mx-auto size-full max-w-frame px-gutter flex items-center justify-between pointer-events-none">
        {/* LEFT COLUMN: Bottom to Top in Arc */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[440px] h-full flex items-center">
          {leftServices.map((svc) => (
            <div
              key={svc.id}
              data-arc-card-left
              className="absolute inset-x-0 mx-auto will-change-transform pointer-events-auto"
            >
              <div className="p-6 sm:p-8 rounded-xl bg-ink/70 backdrop-blur-md border border-line/50 hover:border-accent/60 transition-colors shadow-2xl">
                {/* Meta Header with Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-micro uppercase tracking-widest text-accent font-semibold block mb-1">
                      {svc.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-normal text-paper leading-tight">
                      {svc.title}
                    </h3>
                  </div>

                  <div className="shrink-0 p-2 rounded-lg bg-ink-raised border border-line/40">
                    <ServiceIcon type={svc.iconType} />
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted">
                  {svc.description}
                </p>

                {/* Bottom Action Ribbon */}
                <div className="mt-6 pt-4 border-t border-line/40 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                    {svc.spec}
                  </span>

                  <Link
                    href={`/${svc.slug}`}
                    className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-paper/85 hover:text-accent transition-colors"
                  >
                    <span>Inspect</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Top to Bottom in Arc */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[440px] h-full flex items-center">
          {rightServices.map((svc) => (
            <div
              key={svc.id}
              data-arc-card-right
              className="absolute inset-x-0 mx-auto will-change-transform pointer-events-auto"
            >
              <div className="p-6 sm:p-8 rounded-xl bg-ink/70 backdrop-blur-md border border-line/50 hover:border-accent/60 transition-colors shadow-2xl">
                {/* Meta Header with Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-micro uppercase tracking-widest text-accent font-semibold block mb-1">
                      {svc.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-normal text-paper leading-tight">
                      {svc.title}
                    </h3>
                  </div>

                  <div className="shrink-0 p-2 rounded-lg bg-ink-raised border border-line/40">
                    <ServiceIcon type={svc.iconType} />
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted">
                  {svc.description}
                </p>

                {/* Bottom Action Ribbon */}
                <div className="mt-6 pt-4 border-t border-line/40 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                    {svc.spec}
                  </span>

                  <Link
                    href={`/${svc.slug}`}
                    className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-paper/85 hover:text-accent transition-colors"
                  >
                    <span>Inspect</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Orbit Footer Metadata (Seen in Screenshot 3: "✦ DIFFERENT DISCIPLINES. ONE STANDARD OF CRAFT.") */}
      <div className="pointer-events-none absolute bottom-6 inset-x-0 z-20 flex items-center justify-between px-gutter max-w-frame mx-auto text-paper/60 font-mono text-micro uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-accent">✦</span>
          <span>DIFFERENT DISCIPLINES. ONE STANDARD OF CRAFT.</span>
        </span>
        <span className="hidden sm:inline text-accent">
          SYNCHRONOUS COUNTER-ORBITAL BENCH
        </span>
      </div>

      {/* ── PHASE 4: SMOOTH BREAKING TRANSITION BLINDS (Screenshot 4) ── */}
      <div
        data-trionn-blinds-wrap
        className="absolute inset-0 z-40 size-full overflow-hidden"
      >
        {/* 3 Horizontal Paper Bars slicing across the screen (matching Screenshot 4) */}
        <div
          data-trionn-blind
          className="absolute left-0 right-0 top-0 h-[34%] bg-[#F4F1EC] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        />
        <div
          data-trionn-blind
          className="absolute left-0 right-0 top-[33%] h-[34%] bg-[#F4F1EC] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        />
        <div
          data-trionn-blind
          className="absolute left-0 right-0 top-[66%] h-[35%] bg-[#F4F1EC] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        />

        {/* Emergence Outro Typography on the Fused Paper Canvas */}
        <div
          data-trionn-outro
          className="absolute inset-0 z-50 flex flex-col items-center justify-center px-gutter text-center text-ink pointer-events-auto"
        >
          <div className="flex items-center gap-3 font-mono text-micro uppercase tracking-[0.25em] text-accent mb-4 font-semibold">
            <span className="size-1.5 rounded-full bg-accent" />
            <span>GLOBAL TOPOLOGY & INFRASTRUCTURE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal text-ink tracking-tight max-w-3xl leading-[0.98]">
            Two continents. One bench.{" "}
            <span className="font-serif italic text-accent">Unbroken velocity.</span>
          </h2>

          <p className="mt-6 font-sans text-base sm:text-lg text-muted-paper max-w-xl leading-relaxed">
            Delivering structured operational coverage from dawn in London through dusk in
            Silicon Valley with zero dropped threads.
          </p>

          <div className="mt-8 flex items-center gap-2 font-mono text-micro uppercase tracking-wider text-accent font-semibold">
            <span>EXPLORE GLOBAL NETWORK</span>
            <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
