"use client";

import { useRef, useId } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  iconType: "waveform" | "rings" | "matrix" | "circuit" | "prism" | "diamond";
};

// 3 Left Services (Compact square glassmorphism cards)
const leftServices: ServiceItem[] = [
  {
    id: "ai-data",
    title: "AI & Intelligent Automation",
    description:
      "High-accuracy labelled datasets, multi-turn RLHF evaluation, and model training pipelines held to verified mathematical agreement thresholds.",
    iconType: "waveform",
  },
  {
    id: "m365",
    title: "Microsoft 365 & Cloud Identity",
    description:
      "Enterprise tenant administration, zero-trust conditional access, and automated Power Platform workflow pipelines run by credentialed specialists.",
    iconType: "matrix",
  },
  {
    id: "stewardship",
    title: "Executive Strategic Stewardship",
    description:
      "Direct executive alignment, SLA accountability, and dual-continent delivery architecture ensuring your engineering rituals run with zero dropped threads.",
    iconType: "prism",
  },
];

// 3 Right Services (Compact square glassmorphism cards)
const rightServices: ServiceItem[] = [
  {
    id: "software",
    title: "Software & Mendix Architecture",
    description:
      "Certified Mendix Rapid & Advanced practitioners shipping full-stack enterprise systems directly into your repositories and daily sprint rituals.",
    iconType: "rings",
  },
  {
    id: "support",
    title: "SaaS Product Support & Helpdesk",
    description:
      "Tier-3 technical support teams that master your platform deeply enough to resolve root causes rather than deflect scripts. Real engineers staffing queues.",
    iconType: "circuit",
  },
  {
    id: "cvent",
    title: "Meetings & Events (Cvent)",
    description:
      "Cvent-certified event architects managing complex enterprise registration build-outs, multi-track logic, live attendee desks, and post-conference telemetry.",
    iconType: "diamond",
  },
];

/**
 * Geometric Luxury Icons matching Screenshot 2 (media_1794551883246_21ebec83.jpg).
 * Clean, minimalist white line work.
 */
function ServiceIcon({ type }: { type: ServiceItem["iconType"] }) {
  switch (type) {
    case "waveform":
      return (
        <svg
          aria-hidden
          className="size-9 text-white/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
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
      return (
        <svg
          aria-hidden
          className="size-9 text-white/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <circle cx="24" cy="24" r="21" strokeOpacity="0.35" strokeDasharray="2 3" />
          <circle cx="24" cy="24" r="15" strokeOpacity="0.7" />
          <circle cx="24" cy="24" r="9" strokeWidth="2" />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
        </svg>
      );
    case "matrix":
      return (
        <svg
          aria-hidden
          className="size-9 text-white/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <polygon points="24 4, 42 14, 42 34, 24 44, 6 34, 6 14" strokeOpacity="0.45" />
          <polygon points="24 12, 34 18, 34 30, 24 36, 14 30, 14 18" strokeWidth="2" />
          <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        </svg>
      );
    case "circuit":
      return (
        <svg
          aria-hidden
          className="size-9 text-white/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M8 24h12l4-8 8 16 4-8h12" strokeWidth="2" />
          <circle cx="8" cy="24" r="2.5" fill="currentColor" />
          <circle cx="40" cy="24" r="2.5" fill="currentColor" />
        </svg>
      );
    case "prism":
      return (
        <svg
          aria-hidden
          className="size-9 text-white/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <polygon points="24 6, 42 38, 6 38" strokeWidth="2" />
          <line x1="24" y1="6" x2="24" y2="38" strokeDasharray="2 2" strokeOpacity="0.5" />
          <circle cx="24" cy="26" r="3" fill="currentColor" />
        </svg>
      );
    case "diamond":
      return (
        <svg
          aria-hidden
          className="size-9 text-white/90"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <polygon points="24 4, 44 24, 24 44, 4 24" strokeWidth="1.8" />
          <polygon points="24 14, 34 24, 24 34, 14 24" strokeOpacity="0.5" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
        </svg>
      );
  }
}

export default function ArcServices() {
  const root = useRef<HTMLElement>(null);
  const filterId = useId();
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const q = gsap.utils.selector(root);
      const container = root.current;

      const monolith = q("[data-tazriel-monolith]");
      const leftCardEls = q("[data-stream-left]");
      const rightCardEls = q("[data-stream-right]");
      const blinds = q("[data-trionn-blind]");
      const blindsContainer = q("[data-trionn-blinds-wrap]");
      const outroText = q("[data-trionn-outro]");

      // Monolith is ALWAYS visible in the center at massive scale
      gsap.set(monolith, { scale: 1, opacity: 1, rotationY: 0, rotationX: 0 });

      // INITIAL POSITIONS:
      // Left Cards:
      // Card 0: Starts at Upper Left (y: -22vh)
      // Card 1: Starts at Lower Left (y: 22vh)
      // Card 2: Starts below viewport (y: 68vh)
      gsap.set(leftCardEls[0], { y: "-22vh", x: -25, rotation: -3, opacity: 1, scale: 1 });
      gsap.set(leftCardEls[1], { y: "22vh", x: 0, rotation: 0, opacity: 1, scale: 1 });
      gsap.set(leftCardEls[2], { y: "68vh", x: -25, rotation: 3, opacity: 0, scale: 0.95 });

      // Right Cards:
      // Card 0: Starts at Lower Right (y: 22vh)
      // Card 1: Starts at Upper Right (y: -22vh)
      // Card 2: Starts above viewport (y: -68vh)
      gsap.set(rightCardEls[0], { y: "22vh", x: 25, rotation: 3, opacity: 1, scale: 1 });
      gsap.set(rightCardEls[1], { y: "-22vh", x: 0, rotation: 0, opacity: 1, scale: 1 });
      gsap.set(rightCardEls[2], { y: "-68vh", x: 25, rotation: -3, opacity: 0, scale: 0.95 });

      gsap.set(blindsContainer, { pointerEvents: "none" });
      gsap.set(blinds, { scaleX: 0 });
      gsap.set(outroText, { opacity: 0, y: 30 });

      // Master Timeline (end: +=5000, scrub: 1.5)
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 1 & 2: Central Monolith Gentle 3D Tilt during Scroll
      // ─────────────────────────────────────────────────────────────────────────────
      masterTl.to(
        monolith,
        {
          rotationY: 12,
          rotationX: -6,
          scale: 1.05,
          duration: 0.8,
          ease: "none",
        },
        0,
      );

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 2: Continuous Flowing Arc Streams (Left: Up, Right: Down)
      // NEVER COLLIDE: Cards stay separated by at least 44vh at all times!
      // NEVER COVER CENTER: Left cards stay on left flank, right cards stay on right flank!
      // ─────────────────────────────────────────────────────────────────────────────

      // LEFT COLUMN: Cards glide smoothly upward along the arc
      // Step A: Card 0 glides from Upper Left (-22vh) -> Exit Top (-68vh)
      masterTl.to(
        leftCardEls[0],
        {
          y: "-68vh",
          x: -35,
          rotation: -5,
          opacity: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Step A: Card 1 glides from Lower Left (22vh) -> Upper Left (-22vh)
      masterTl.to(
        leftCardEls[1],
        {
          y: "-22vh",
          x: -25,
          rotation: -3,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Step A: Card 2 enters from Below (68vh) -> Lower Left (22vh)
      masterTl.to(
        leftCardEls[2],
        {
          y: "22vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Step B: Card 1 glides from Upper Left (-22vh) -> Exit Top (-68vh)
      masterTl.to(
        leftCardEls[1],
        {
          y: "-68vh",
          x: -35,
          rotation: -5,
          opacity: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.45,
      );

      // Step B: Card 2 glides from Lower Left (22vh) -> Upper Left (-22vh)
      masterTl.to(
        leftCardEls[2],
        {
          y: "-22vh",
          x: -25,
          rotation: -3,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.45,
      );

      // RIGHT COLUMN: Cards glide smoothly downward along the counter-arc
      // Step A: Card 0 glides from Lower Right (22vh) -> Exit Bottom (68vh)
      masterTl.to(
        rightCardEls[0],
        {
          y: "68vh",
          x: 35,
          rotation: 5,
          opacity: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Step A: Card 1 glides from Upper Right (-22vh) -> Lower Right (22vh)
      masterTl.to(
        rightCardEls[1],
        {
          y: "22vh",
          x: 25,
          rotation: 3,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Step A: Card 2 enters from Above (-68vh) -> Upper Right (-22vh)
      masterTl.to(
        rightCardEls[2],
        {
          y: "-22vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Step B: Card 1 glides from Lower Right (22vh) -> Exit Bottom (68vh)
      masterTl.to(
        rightCardEls[1],
        {
          y: "68vh",
          x: 35,
          rotation: 5,
          opacity: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.45,
      );

      // Step B: Card 2 glides from Upper Right (-22vh) -> Lower Right (22vh)
      masterTl.to(
        rightCardEls[2],
        {
          y: "22vh",
          x: 25,
          rotation: 3,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.45,
      );

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 3: Smooth Breaking Transition (Horizontal Shutter Blinds)
      // ─────────────────────────────────────────────────────────────────────────────
      masterTl.set(blindsContainer, { pointerEvents: "auto" }, 0.82);

      blinds.forEach((blind, idx) => {
        const fromLeft = idx % 2 === 0;
        gsap.set(blind, { transformOrigin: fromLeft ? "left center" : "right center" });

        masterTl.to(
          blind,
          {
            scaleX: 1,
            duration: 0.08,
            ease: "power3.inOut",
          },
          0.83 + idx * 0.025,
        );
      });

      // Expand bands vertically to fuse into solid paper ground
      masterTl.to(
        blinds,
        {
          scaleY: 2.8,
          duration: 0.06,
          ease: "power2.inOut",
        },
        0.92,
      );

      // Reveal outro text
      masterTl.to(
        outroText,
        {
          opacity: 1,
          y: 0,
          duration: 0.06,
          ease: "power2.out",
        },
        0.94,
      );
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      id="disciplines"
      data-theme="dark"
      className="relative h-screen w-full overflow-hidden bg-[#020035] select-none"
    >
      {/* ── TOP & BOTTOM SEAMLESS LIQUID GRADIENTS (Fixes Point 4) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#020035] via-[#020035]/90 to-transparent z-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#020035] via-[#020035]/90 to-transparent z-30"
      />

      {/* ── SVG Filter for Stone Texture ── */}
      <svg aria-hidden className="absolute -top-[9999px] -left-[9999px] size-0 pointer-events-none">
        <filter id={`stone-noise-${filterId}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.04 0.07" numOctaves="3" result="noise" />
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0.35 0"
          />
        </filter>
      </svg>

      {/* ── CLEAN AMBIENT DEPTH BLOOM (NO TILED WALLPAPERS) ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft volumetric depth glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[65vw] rounded-full opacity-30 blur-[140px]"
          style={{ background: "radial-gradient(circle, #2100b1 0%, transparent 70%)" }}
        />
        {/* Warm amber bloom behind the monolith */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[520px] rounded-full opacity-35 blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(237, 76, 0, 0.7) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── CENTRAL TAZRIEL MONOLITH (MASSIVE, ALWAYS IN MIDDLE, NEVER COVERED) ── */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div
          data-tazriel-monolith
          className="relative size-72 sm:size-88 md:size-[440px] lg:size-[480px] xl:size-[520px] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.98)] border border-white/10 will-change-transform"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #2c2e3c 0%, #171822 50%, #0a0b12 85%, #040508 100%)",
            boxShadow:
              "inset 0 1px 3px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.95), 0 35px 90px -10px rgba(0,0,0,0.95)",
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

          {/* Deep Carved Tazriel Sigil (Massive Size) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <svg
              className="size-36 sm:size-44 md:size-52 lg:size-60 text-paper/90 drop-shadow-[0_6px_16px_rgba(0,0,0,0.95)]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              <path d="M32 25 L55 60 L45 60 L24 25 Z" fill="currentColor" fillOpacity="0.88" />
              <path d="M52 25 L75 60 L65 60 L44 25 Z" fill="currentColor" fillOpacity="0.88" />
              <line x1="18" y1="72" x2="82" y2="72" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.65" />
            </svg>

            <span className="mt-4 font-mono text-xs sm:text-sm uppercase tracking-[0.32em] text-paper/75 font-semibold drop-shadow-md">
              TAZRIEL SOVEREIGN BENCH
            </span>
          </div>

          {/* Ambient Rim Lighting */}
          <div className="absolute inset-0 border border-accent/25 rounded-3xl pointer-events-none" />
        </div>
      </div>

      {/* ── LEFT FLANK: ARC SERVICES (Bottom to Top) ── */}
      {/* Anchored to the outer left flank, guaranteed 360px fixed width, never squished */}
      <div className="pointer-events-none absolute left-6 sm:left-12 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-20 w-[340px] sm:w-[380px] shrink-0">
        {leftServices.map((svc) => (
          <div
            key={svc.id}
            data-stream-left
            className="absolute inset-x-0 will-change-transform pointer-events-auto"
          >
            {/* Compact Square Glassmorphism Card (matching media_1794551883246_21ebec83.jpg) */}
            <div className="w-full rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-accent/50 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-sans text-2xl font-bold text-white tracking-tight leading-snug">
                  {svc.title}
                </h3>
                <div className="shrink-0 text-white/90">
                  <ServiceIcon type={svc.iconType} />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {svc.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── RIGHT FLANK: ARC SERVICES (Top to Bottom) ── */}
      {/* Anchored to the outer right flank, guaranteed 360px fixed width, never squished */}
      <div className="pointer-events-none absolute right-6 sm:right-12 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-20 w-[340px] sm:w-[380px] shrink-0">
        {rightServices.map((svc) => (
          <div
            key={svc.id}
            data-stream-right
            className="absolute inset-x-0 will-change-transform pointer-events-auto"
          >
            {/* Compact Square Glassmorphism Card (matching media_1794551883246_21ebec83.jpg) */}
            <div className="w-full rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-accent/50 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-sans text-2xl font-bold text-white tracking-tight leading-snug">
                  {svc.title}
                </h3>
                <div className="shrink-0 text-white/90">
                  <ServiceIcon type={svc.iconType} />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {svc.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── FOOTER SUB-INDICATOR ── */}
      <div className="pointer-events-none absolute bottom-6 inset-x-0 z-20 flex items-center justify-between px-gutter max-w-frame mx-auto text-paper/60 font-mono text-micro uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-accent">✦</span>
          <span>DIFFERENT DISCIPLINES. ONE STANDARD OF CRAFT.</span>
        </span>
        <span className="hidden sm:inline text-accent">
          SYNCHRONOUS COUNTER-ORBITAL BENCH
        </span>
      </div>

      {/* ── STAGE 3: SMOOTH BREAKING TRANSITION BLINDS ── */}
      <div
        data-trionn-blinds-wrap
        className="absolute inset-0 z-40 size-full overflow-hidden"
      >
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
