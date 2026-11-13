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
      "Enterprise tenant administration, zero-trust conditional access, and automated Power Platform workflow pipelines run by credentialed Microsoft specialists.",
    iconType: "matrix",
  },
  {
    id: "stewardship",
    title: "Executive Strategic Stewardship",
    description:
      "Direct executive alignment, SLA accountability, and dual-continent delivery architecture ensuring your US and European engineering rituals run with zero dropped threads.",
    iconType: "prism",
  },
];

// 3 Right Services (Compact square glassmorphism cards)
const rightServices: ServiceItem[] = [
  {
    id: "software",
    title: "Software & Mendix Architecture",
    description:
      "Certified Mendix Rapid & Advanced practitioners shipping full-stack enterprise systems directly into your repositories, tooling, and daily sprint rituals.",
    iconType: "rings",
  },
  {
    id: "support",
    title: "SaaS Product Support & Helpdesk",
    description:
      "Tier-3 technical support teams that master your platform deeply enough to resolve root causes rather than deflect scripts. Real engineers staffing resolution queues.",
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
          className="size-9 sm:size-10 text-white/90"
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
      // Concentric circular harmonic arcs (from Screenshot 2)
      return (
        <svg
          aria-hidden
          className="size-9 sm:size-10 text-white/90"
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
          className="size-9 sm:size-10 text-white/90"
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
          className="size-9 sm:size-10 text-white/90"
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
          className="size-9 sm:size-10 text-white/90"
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
          className="size-9 sm:size-10 text-white/90"
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

// 7 Hero letters for TAZRIEL
const heroLetters = [
  { char: "T", targetOffset: -220, initX: -420, initY: 150, initRotZ: -32, initScale: 1.8, initBlur: 3 },
  { char: "A", targetOffset: -148, initX: -180, initY: -260, initRotZ: 18, initScale: 1.5, initBlur: 2 },
  { char: "Z", targetOffset: -74, initX: -260, initY: -90, initRotZ: -22, initScale: 1.4, initBlur: 2 },
  { char: "R", targetOffset: 0, initX: 400, initY: 230, initRotZ: 36, initScale: 1.8, initBlur: 4 },
  { char: "I", targetOffset: 55, initX: -30, initY: 180, initRotZ: -10, initScale: 1.1, initBlur: 1 },
  { char: "E", targetOffset: 125, initX: 310, initY: -160, initRotZ: 24, initScale: 1.5, initBlur: 2.5 },
  { char: "L", targetOffset: 200, initX: 160, initY: 80, initRotZ: -14, initScale: 1.2, initBlur: 1 },
];

// Deep vortex background depth letters (from media_1794550809920_8b280451.png)
const depthLetters = [
  { char: "R", x: -460, y: -290, rot: 45, scale: 0.9, blur: 4 },
  { char: "E", x: -390, y: -170, rot: -25, scale: 0.8, blur: 5 },
  { char: "L", x: -340, y: 240, rot: 15, scale: 0.85, blur: 4 },
  { char: "Z", x: -290, y: 340, rot: -30, scale: 0.75, blur: 6 },
  { char: "A", x: -190, y: -360, rot: 20, scale: 0.7, blur: 5 },
  { char: "T", x: -130, y: 310, rot: -15, scale: 0.9, blur: 4 },
  { char: "I", x: 45, y: -330, rot: 10, scale: 0.8, blur: 4 },
  { char: "R", x: 190, y: -280, rot: -25, scale: 0.75, blur: 5 },
  { char: "E", x: 280, y: 300, rot: 30, scale: 0.85, blur: 4 },
  { char: "L", x: 400, y: -240, rot: -18, scale: 0.7, blur: 6 },
  { char: "A", x: 440, y: 150, rot: 22, scale: 0.8, blur: 4 },
  { char: "Z", x: 480, y: -90, rot: -40, scale: 0.65, blur: 7 },
];

export default function ArcServices() {
  const root = useRef<HTMLElement>(null);
  const filterId = useId();
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const q = gsap.utils.selector(root);
      const container = root.current;

      // Targets
      const heroLetterEls = q("[data-hero-letter]");
      const depthLetterEls = q("[data-depth-letter]");
      const assembledWordmark = q("[data-assembled-wordmark]");
      const orangeGlow = q("[data-orange-glow]");
      const monolith = q("[data-tazriel-monolith]");
      const leftCardEls = q("[data-stream-left]");
      const rightCardEls = q("[data-stream-right]");
      const blinds = q("[data-trionn-blind]");
      const blindsContainer = q("[data-trionn-blinds-wrap]");
      const outroText = q("[data-trionn-outro]");

      // Initial scatter positions for 3D letters
      heroLetters.forEach((data, i) => {
        const el = heroLetterEls[i];
        if (!el) return;
        gsap.set(el, {
          x: data.initX,
          y: data.initY,
          rotationZ: data.initRotZ,
          scale: data.initScale,
          opacity: 0.85,
          filter: `blur(${data.initBlur}px)`,
        });
      });

      depthLetters.forEach((data, i) => {
        const el = depthLetterEls[i];
        if (!el) return;
        gsap.set(el, {
          x: data.x,
          y: data.y,
          rotationZ: data.rot,
          scale: data.scale,
          opacity: 0.45,
          filter: `blur(${data.blur}px)`,
        });
      });

      gsap.set(orangeGlow, { opacity: 0, scale: 0.6 });

      // Monolith stays in the center at massive scale
      gsap.set(monolith, { scale: 0.8, opacity: 0, filter: "blur(12px)" });

      // Left cards initial vertical separation (spaced 45vh apart to NEVER overlap)
      gsap.set(leftCardEls[0], { y: "45vh", x: -35, rotation: 4, opacity: 0, scale: 0.94 });
      gsap.set(leftCardEls[1], { y: "90vh", x: -35, rotation: 4, opacity: 0, scale: 0.94 });
      gsap.set(leftCardEls[2], { y: "135vh", x: -35, rotation: 4, opacity: 0, scale: 0.94 });

      // Right cards initial vertical separation (spaced 45vh apart to NEVER overlap)
      gsap.set(rightCardEls[0], { y: "-45vh", x: 35, rotation: -4, opacity: 0, scale: 0.94 });
      gsap.set(rightCardEls[1], { y: "-90vh", x: 35, rotation: -4, opacity: 0, scale: 0.94 });
      gsap.set(rightCardEls[2], { y: "-135vh", x: 35, rotation: -4, opacity: 0, scale: 0.94 });

      gsap.set(blindsContainer, { pointerEvents: "none" });
      gsap.set(blinds, { scaleX: 0 });
      gsap.set(outroText, { opacity: 0, y: 30 });

      // Master Scroll-Controlled Timeline (+=6000 scrub: 2)
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=6000",
          pin: true,
          scrub: 2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 1: 0% -> 35% | Scattered Letters Fly & Assemble into TAZRIEL
      // ─────────────────────────────────────────────────────────────────────────────
      heroLetters.forEach((data, i) => {
        const el = heroLetterEls[i];
        if (!el) return;
        masterTl.to(
          el,
          {
            x: data.targetOffset,
            y: 0,
            rotationZ: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.35,
            ease: "power3.inOut",
          },
          0.02,
        );
      });

      depthLetters.forEach((data, i) => {
        const el = depthLetterEls[i];
        if (!el) return;
        masterTl.to(
          el,
          {
            x: data.x * 0.25,
            y: data.y * 0.25,
            rotationZ: data.rot * 2,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.32,
            ease: "power2.inOut",
          },
          0.04,
        );
      });

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 2: 32% -> 55% | TAZRIEL Wordmark Holds with Ambient Orange Light Bloom
      // ─────────────────────────────────────────────────────────────────────────────
      masterTl.to(
        orangeGlow,
        {
          opacity: 0.85,
          scale: 1.35,
          duration: 0.15,
          ease: "power2.out",
        },
        0.30,
      );

      // Subtle monumental hold & breathing
      masterTl.to(
        assembledWordmark,
        {
          scale: 1.05,
          duration: 0.15,
          ease: "none",
        },
        0.35,
      );

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 3: 50% -> 85% | Wordmark Dissolves; Monolith Emerges at Center;
      // Cards Glide in Flanking Arcs (Never Covering the Center Logo!)
      // ─────────────────────────────────────────────────────────────────────────────
      masterTl.to(
        assembledWordmark,
        {
          opacity: 0,
          scale: 1.15,
          filter: "blur(12px)",
          duration: 0.08,
          ease: "power2.in",
        },
        0.48,
      );

      // Monolith emerges at center at massive scale
      masterTl.to(
        monolith,
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "power2.out",
        },
        0.48,
      );

      // Keep monolith floating gently in the center throughout the services scroll
      masterTl.to(
        monolith,
        {
          scale: 1.05,
          rotationY: 10,
          rotationX: -4,
          duration: 0.36,
          ease: "none",
        },
        0.50,
      );

      // CONTINUOUS ARCS STREAM:
      // Left side: 3 cards move from Bottom -> Top, spaced 45vh apart (NEVER OVERLAP)
      // Right side: 3 cards move from Top -> Bottom, spaced 45vh apart (NEVER OVERLAP)
      // Both columns are anchored to the outer flanks (NEVER COVER THE CENTER LOGO)

      // Left Card 01: y from +25vh -> -20vh -> -65vh
      masterTl.to(
        leftCardEls[0],
        {
          y: "-20vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1.02,
          duration: 0.18,
          ease: "power2.out",
        },
        0.50,
      );
      masterTl.to(
        leftCardEls[0],
        {
          y: "-65vh",
          x: -35,
          rotation: -4,
          opacity: 0,
          scale: 0.94,
          duration: 0.14,
          ease: "power2.in",
        },
        0.68,
      );

      // Left Card 02: y from +70vh -> +25vh -> -20vh
      masterTl.to(
        leftCardEls[1],
        {
          y: "+25vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1.02,
          duration: 0.18,
          ease: "power2.out",
        },
        0.54,
      );
      masterTl.to(
        leftCardEls[1],
        {
          y: "-20vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1.02,
          duration: 0.14,
          ease: "power2.inOut",
        },
        0.72,
      );

      // Left Card 03: y from +115vh -> +70vh -> +25vh
      masterTl.to(
        leftCardEls[2],
        {
          y: "+70vh",
          x: 0,
          rotation: 0,
          opacity: 0.85,
          scale: 0.98,
          duration: 0.18,
          ease: "power2.out",
        },
        0.60,
      );
      masterTl.to(
        leftCardEls[2],
        {
          y: "+25vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1.02,
          duration: 0.14,
          ease: "power2.out",
        },
        0.78,
      );

      // Right Card 01: y from -25vh -> +20vh -> +65vh
      masterTl.to(
        rightCardEls[0],
        {
          y: "+20vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1.02,
          duration: 0.18,
          ease: "power2.out",
        },
        0.50,
      );
      masterTl.to(
        rightCardEls[0],
        {
          y: "+65vh",
          x: 35,
          rotation: 4,
          opacity: 0,
          scale: 0.94,
          duration: 0.14,
          ease: "power2.in",
        },
        0.68,
      );

      // Right Card 02: y from -70vh -> -25vh -> +20vh
      masterTl.to(
        rightCardEls[1],
        {
          y: "-25vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1.02,
          duration: 0.18,
          ease: "power2.out",
        },
        0.54,
      );
      masterTl.to(
        rightCardEls[1],
        {
          y: "+20vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1.02,
          duration: 0.14,
          ease: "power2.inOut",
        },
        0.72,
      );

      // Right Card 03: y from -115vh -> -70vh -> -25vh
      masterTl.to(
        rightCardEls[2],
        {
          y: "-70vh",
          x: 0,
          rotation: 0,
          opacity: 0.85,
          scale: 0.98,
          duration: 0.18,
          ease: "power2.out",
        },
        0.60,
      );
      masterTl.to(
        rightCardEls[2],
        {
          y: "-25vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1.02,
          duration: 0.14,
          ease: "power2.out",
        },
        0.78,
      );

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 4: 84% -> 100% | Smooth Breaking Transition (Horizontal Paper Shutter)
      // ─────────────────────────────────────────────────────────────────────────────
      masterTl.set(blindsContainer, { pointerEvents: "auto" }, 0.84);

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
          0.85 + idx * 0.025,
        );
      });

      // Expand bands vertically to fuse into a solid paper canvas
      masterTl.to(
        blinds,
        {
          scaleY: 2.8,
          duration: 0.06,
          ease: "power2.inOut",
        },
        0.93,
      );

      // Reveal outro text on paper ground
      masterTl.to(
        outroText,
        {
          opacity: 1,
          y: 0,
          duration: 0.06,
          ease: "power2.out",
        },
        0.95,
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
      {/* ── TOP & BOTTOM SEAMLESS GRADIENT FEATHERS (Fixes Point 4) ── */}
      {/* Seamless feather from previous Hero section */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-ink via-ink/80 to-transparent z-30"
      />
      {/* Seamless feather to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-ink via-ink/80 to-transparent z-30"
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

      {/* ── BACKGROUND 3D VORTEX ATMOSPHERE (Feathered edges, zero hard cuts) ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft image veil with feathered linear gradient mask */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-screen scale-105"
          style={{
            backgroundImage: "url('/media/letter-vortex.png')",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />
        {/* Volumetric ambient depth bloom */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[70vw] rounded-full opacity-25 blur-[150px]"
          style={{ background: "radial-gradient(circle, #2100b1 0%, transparent 70%)" }}
        />
      </div>

      {/* ── STAGE 1 & 2: 3D SCATTERED LETTERS CONVERGING TO TAZRIEL ── */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
        {/* Subtle orange backlight bloom behind TAZRIEL */}
        <div
          data-orange-glow
          className="pointer-events-none absolute size-[550px] rounded-full blur-[90px] will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(237, 76, 0, 0.75) 0%, rgba(33, 0, 177, 0.35) 60%, transparent 80%)",
          }}
        />

        {/* Ambient Depth Letters scattered in 3D background */}
        <div className="absolute inset-0 size-full flex items-center justify-center">
          {depthLetters.map((dl, idx) => (
            <span
              key={idx}
              data-depth-letter
              className="absolute font-sans font-black text-4xl sm:text-6xl text-white/40 will-change-transform select-none"
            >
              {dl.char}
            </span>
          ))}
        </div>

        {/* Assembled Wordmark Container: T A Z R I E L (Massive Scale) */}
        <div
          data-assembled-wordmark
          className="relative flex items-center justify-center will-change-transform"
        >
          {heroLetters.map((hl, idx) => (
            <span
              key={idx}
              data-hero-letter
              className="absolute font-sans font-black text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-[0.25em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] will-change-transform select-none"
            >
              {hl.char}
            </span>
          ))}
        </div>
      </div>

      {/* ── STAGE 3: MASSIVE CENTRAL TAZRIEL MONOLITH (Fixed in Center, Never Covered) ── */}
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

      {/* ── STAGE 3: FLANKING GLASSMORPHISM SERVICE CARDS (Screenshot 2 Aesthetic) ── */}
      {/* Anchored to outer flanks so they NEVER collide or cover the central Tazriel logo */}
      <div className="relative z-20 mx-auto size-full max-w-[1520px] px-4 sm:px-8 lg:px-12 flex items-center justify-between pointer-events-none">
        {/* LEFT COLUMN: Bottom to Top Arc (Left Flank) */}
        <div className="relative w-[300px] sm:w-[340px] md:w-[370px] lg:w-[400px] h-full flex items-center justify-center">
          {leftServices.map((svc) => (
            <div
              key={svc.id}
              data-stream-left
              className="absolute inset-x-0 mx-auto will-change-transform pointer-events-auto"
            >
              {/* Compact Square Glassmorphism Card (matching media_1794551883246_21ebec83.jpg) */}
              <div className="rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:border-accent/50 hover:bg-white/[0.08] transition-all duration-300">
                {/* Header: Title + Geometric Line Icon */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {svc.title}
                  </h3>
                  <div className="shrink-0 text-white/90">
                    <ServiceIcon type={svc.iconType} />
                  </div>
                </div>

                {/* Minimalist 2-line Description */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/70">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Top to Bottom Arc (Right Flank) */}
        <div className="relative w-[300px] sm:w-[340px] md:w-[370px] lg:w-[400px] h-full flex items-center justify-center">
          {rightServices.map((svc) => (
            <div
              key={svc.id}
              data-stream-right
              className="absolute inset-x-0 mx-auto will-change-transform pointer-events-auto"
            >
              {/* Compact Square Glassmorphism Card (matching media_1794551883246_21ebec83.jpg) */}
              <div className="rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:border-accent/50 hover:bg-white/[0.08] transition-all duration-300">
                {/* Header: Title + Geometric Line Icon */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {svc.title}
                  </h3>
                  <div className="shrink-0 text-white/90">
                    <ServiceIcon type={svc.iconType} />
                  </div>
                </div>

                {/* Minimalist 2-line Description */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/70">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sub-Indicator */}
      <div className="pointer-events-none absolute bottom-6 inset-x-0 z-20 flex items-center justify-between px-gutter max-w-frame mx-auto text-paper/60 font-mono text-micro uppercase tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-accent">✦</span>
          <span>DIFFERENT DISCIPLINES. ONE STANDARD OF CRAFT.</span>
        </span>
        <span className="hidden sm:inline text-accent">
          SYNCHRONOUS COUNTER-ORBITAL BENCH
        </span>
      </div>

      {/* ── STAGE 4: SMOOTH BREAKING TRANSITION BLINDS ── */}
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
