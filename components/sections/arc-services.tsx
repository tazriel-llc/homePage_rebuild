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
      "Direct executive alignment, SLA accountability, and dual-continent delivery architecture ensuring your US and European engineering rituals run with zero dropped threads.",
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
 * Minimalist, precision-engineered SVG line work without background boxes.
 */
function ServiceIcon({ type }: { type: ServiceItem["iconType"] }) {
  switch (type) {
    case "waveform":
      return (
        <svg
          aria-hidden
          className="size-10 sm:size-12 text-white/90"
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
      return (
        <svg
          aria-hidden
          className="size-10 sm:size-12 text-white/90"
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
      return (
        <svg
          aria-hidden
          className="size-10 sm:size-12 text-white/90"
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
      return (
        <svg
          aria-hidden
          className="size-10 sm:size-12 text-white/90"
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
      return (
        <svg
          aria-hidden
          className="size-10 sm:size-12 text-white/90"
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
      return (
        <svg
          aria-hidden
          className="size-10 sm:size-12 text-white/90"
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
  { char: "T", targetOffset: -180, initX: -380, initY: 130, initRotZ: -28, initScale: 1.8, initBlur: 3 },
  { char: "A", targetOffset: -120, initX: -160, initY: -230, initRotZ: 16, initScale: 1.5, initBlur: 2 },
  { char: "Z", targetOffset: -60, initX: -230, initY: -80, initRotZ: -20, initScale: 1.4, initBlur: 2 },
  { char: "R", targetOffset: 0, initX: 360, initY: 210, initRotZ: 34, initScale: 1.8, initBlur: 4 },
  { char: "I", targetOffset: 45, initX: -30, initY: 160, initRotZ: -10, initScale: 1.1, initBlur: 1 },
  { char: "E", targetOffset: 100, initX: 280, initY: -140, initRotZ: 22, initScale: 1.5, initBlur: 2.5 },
  { char: "L", targetOffset: 160, initX: 140, initY: 70, initRotZ: -12, initScale: 1.2, initBlur: 1 },
];

// Deep vortex background depth letters (matching media_1794550809920_8b280451.png)
const depthLetters = [
  { char: "R", x: -440, y: -280, z: -100, rot: 45, scale: 0.9, blur: 4 },
  { char: "E", x: -380, y: -160, z: -140, rot: -25, scale: 0.8, blur: 5 },
  { char: "L", x: -320, y: 220, z: -80, rot: 15, scale: 0.85, blur: 4 },
  { char: "Z", x: -280, y: 320, z: -120, rot: -30, scale: 0.75, blur: 6 },
  { char: "A", x: -180, y: -340, z: -150, rot: 20, scale: 0.7, blur: 5 },
  { char: "T", x: -120, y: 290, z: -90, rot: -15, scale: 0.9, blur: 4 },
  { char: "I", x: 40, y: -310, z: -110, rot: 10, scale: 0.8, blur: 4 },
  { char: "R", x: 180, y: -260, z: -130, rot: -25, scale: 0.75, blur: 5 },
  { char: "E", x: 260, y: 280, z: -90, rot: 30, scale: 0.85, blur: 4 },
  { char: "L", x: 380, y: -220, z: -140, rot: -18, scale: 0.7, blur: 6 },
  { char: "A", x: 420, y: 140, z: -110, rot: 22, scale: 0.8, blur: 4 },
  { char: "Z", x: 460, y: -80, z: -160, rot: -40, scale: 0.65, blur: 7 },
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

      // Target references
      const heroLetterEls = q("[data-hero-letter]");
      const depthLetterEls = q("[data-depth-letter]");
      const assembledWordmark = q("[data-assembled-wordmark]");
      const orangeGlow = q("[data-orange-glow]");
      const monolith = q("[data-trionn-monolith]");
      const leftCardEls = q("[data-stream-left]");
      const rightCardEls = q("[data-stream-right]");
      const blinds = q("[data-trionn-blind]");
      const blindsContainer = q("[data-trionn-blinds-wrap]");
      const outroText = q("[data-trionn-outro]");

      // Initial positions for 3D scattered letters
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

      gsap.set(orangeGlow, { opacity: 0, scale: 0.5 });
      gsap.set(monolith, { scale: 0.6, opacity: 0, filter: "blur(12px)" });

      // Initial positions for the continuous service streams (left & right)
      // Left cards travel from bottom to top along an arc
      // Right cards travel from top to bottom along an arc
      gsap.set(leftCardEls, { opacity: 0, x: -70 });
      gsap.set(rightCardEls, { opacity: 0, x: 70 });

      gsap.set(blindsContainer, { pointerEvents: "none" });
      gsap.set(blinds, { scaleX: 0 });
      gsap.set(outroText, { opacity: 0, y: 30 });

      // Master Timeline scrubbed across 5500px runway with smooth scrub: 1.8
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=5500",
          pin: true,
          scrub: 1.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 1: 0% -> 38% | Scattered Letters Fly & Assemble into TAZRIEL
      // ─────────────────────────────────────────────────────────────────────────────

      // Hero letters converge from outer space into the horizontal wordmark in the center
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

      // Ambient depth letters tumble inward and fade into the background vortex
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
      // STAGE 2: 35% -> 55% | TAZRIEL Remains Centered with Subtle Orange Light Effect
      // ─────────────────────────────────────────────────────────────────────────────
      masterTl.to(
        orangeGlow,
        {
          opacity: 0.75,
          scale: 1.25,
          duration: 0.15,
          ease: "power2.out",
        },
        0.32,
      );

      // Subtle monumental hold & breathing pulse
      masterTl.to(
        assembledWordmark,
        {
          scale: 1.04,
          duration: 0.15,
          ease: "none",
        },
        0.35,
      );

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 3: 50% -> 85% | Letters Dissolve & Monolith Emerges; Arc Stream Enters
      // ─────────────────────────────────────────────────────────────────────────────
      // Dissolve assembled letters smoothly into depth
      masterTl.to(
        assembledWordmark,
        {
          opacity: 0,
          scale: 1.15,
          filter: "blur(12px)",
          duration: 0.1,
          ease: "power2.in",
        },
        0.50,
      );

      masterTl.to(
        orangeGlow,
        {
          opacity: 0.35,
          scale: 0.9,
          duration: 0.1,
          ease: "power2.out",
        },
        0.50,
      );

      // Monolith emerges at center
      masterTl.to(
        monolith,
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.12,
          ease: "power2.out",
        },
        0.51,
      );

      // CONTINUOUS ARCS STREAM:
      // Left side: Disciplines move from BOTTOM to TOP in an arc
      // Right side: Disciplines move from TOP to BOTTOM in an arc
      // Multiple disciplines visible simultaneously at all times!

      // Left Service 01 (Enters from bottom early, exits top)
      if (leftCardEls[0]) {
        masterTl.fromTo(
          leftCardEls[0],
          { yPercent: 90, x: -65, rotation: 6, opacity: 0, scale: 0.9 },
          { yPercent: -15, x: 0, rotation: 0, opacity: 1, scale: 1.02, duration: 0.16, ease: "power2.out" },
          0.52,
        );
        masterTl.to(
          leftCardEls[0],
          { yPercent: -110, x: -65, rotation: -6, opacity: 0, scale: 0.9, duration: 0.14, ease: "power2.in" },
          0.68,
        );
      }

      // Left Service 02 (Follows behind Left 01; overlaps visibly with Left 01!)
      if (leftCardEls[1]) {
        masterTl.fromTo(
          leftCardEls[1],
          { yPercent: 120, x: -65, rotation: 6, opacity: 0, scale: 0.9 },
          { yPercent: 0, x: 0, rotation: 0, opacity: 1, scale: 1.02, duration: 0.16, ease: "power2.out" },
          0.60,
        );
        masterTl.to(
          leftCardEls[1],
          { yPercent: -105, x: -65, rotation: -6, opacity: 0, scale: 0.9, duration: 0.14, ease: "power2.in" },
          0.76,
        );
      }

      // Left Service 03 (Follows behind Left 02)
      if (leftCardEls[2]) {
        masterTl.fromTo(
          leftCardEls[2],
          { yPercent: 120, x: -65, rotation: 6, opacity: 0, scale: 0.9 },
          { yPercent: 10, x: 0, rotation: 0, opacity: 1, scale: 1.02, duration: 0.16, ease: "power2.out" },
          0.68,
        );
        masterTl.to(
          leftCardEls[2],
          { yPercent: -95, x: -65, rotation: -6, opacity: 0, scale: 0.9, duration: 0.14, ease: "power2.in" },
          0.84,
        );
      }

      // Right Service 04 (Enters from top early, exits bottom)
      if (rightCardEls[0]) {
        masterTl.fromTo(
          rightCardEls[0],
          { yPercent: -90, x: 65, rotation: -6, opacity: 0, scale: 0.9 },
          { yPercent: 15, x: 0, rotation: 0, opacity: 1, scale: 1.02, duration: 0.16, ease: "power2.out" },
          0.52,
        );
        masterTl.to(
          rightCardEls[0],
          { yPercent: 110, x: 65, rotation: 6, opacity: 0, scale: 0.9, duration: 0.14, ease: "power2.in" },
          0.68,
        );
      }

      // Right Service 05 (Follows behind Right 04; overlaps visibly with Right 04!)
      if (rightCardEls[1]) {
        masterTl.fromTo(
          rightCardEls[1],
          { yPercent: -120, x: 65, rotation: -6, opacity: 0, scale: 0.9 },
          { yPercent: 0, x: 0, rotation: 0, opacity: 1, scale: 1.02, duration: 0.16, ease: "power2.out" },
          0.60,
        );
        masterTl.to(
          rightCardEls[1],
          { yPercent: 105, x: 65, rotation: 6, opacity: 0, scale: 0.9, duration: 0.14, ease: "power2.in" },
          0.76,
        );
      }

      // Right Service 06 (Follows behind Right 05)
      if (rightCardEls[2]) {
        masterTl.fromTo(
          rightCardEls[2],
          { yPercent: -120, x: 65, rotation: -6, opacity: 0, scale: 0.9 },
          { yPercent: -10, x: 0, rotation: 0, opacity: 1, scale: 1.02, duration: 0.16, ease: "power2.out" },
          0.68,
        );
        masterTl.to(
          rightCardEls[2],
          { yPercent: 95, x: 65, rotation: 6, opacity: 0, scale: 0.9, duration: 0.14, ease: "power2.in" },
          0.84,
        );
      }

      // Monolith subtle float during service arcs
      masterTl.to(
        monolith,
        {
          scale: 1.08,
          rotationY: 15,
          rotationX: -6,
          duration: 0.35,
          ease: "none",
        },
        0.52,
      );

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 4: 83% -> 100% | Smooth Breaking Transition (Horizontal Paper Shutter)
      // ─────────────────────────────────────────────────────────────────────────────
      masterTl.set(blindsContainer, { pointerEvents: "auto" }, 0.83);

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
          0.84 + idx * 0.025,
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
      {/* ── SVG Filter for Stone Monolith Texture ── */}
      <svg aria-hidden className="absolute -top-[9999px] -left-[9999px] size-0 pointer-events-none">
        <filter id={`stone-noise-${filterId}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.04 0.07" numOctaves="3" result="noise" />
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0.35 0"
          />
        </filter>
      </svg>

      {/* ── BACKGROUND 3D VORTEX ATMOSPHERE (from media_1794550809920_8b280451.png) ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft image veil of the authentic 3D letter vortex */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-110"
          style={{ backgroundImage: "url('/media/letter-vortex.png')" }}
        />
        {/* Volumetric ambient depth bloom */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[70vw] rounded-full opacity-20 blur-[150px]"
          style={{ background: "radial-gradient(circle, #2100b1 0%, transparent 70%)" }}
        />
      </div>

      {/* ── STAGE 1 & 2: 3D SCATTERED LETTERS CONVERGING TO TAZRIEL ── */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
        {/* Subtle orange backlight bloom behind TAZRIEL */}
        <div
          data-orange-glow
          className="pointer-events-none absolute size-[450px] rounded-full blur-[80px] will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(237, 76, 0, 0.65) 0%, rgba(33, 0, 177, 0.3) 60%, transparent 80%)",
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

        {/* Assembled Wordmark Container: T A Z R I E L */}
        <div
          data-assembled-wordmark
          className="relative flex items-center justify-center will-change-transform"
        >
          {heroLetters.map((hl, idx) => (
            <span
              key={idx}
              data-hero-letter
              className="absolute font-sans font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.25em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] will-change-transform select-none"
            >
              {hl.char}
            </span>
          ))}
        </div>
      </div>

      {/* ── STAGE 3: CENTRAL STONE MONOLITH (Behind the Arc Stream) ── */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div
          data-trionn-monolith
          className="relative size-48 sm:size-64 md:size-72 lg:size-80 rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] border border-white/10 will-change-transform"
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

          {/* Deep Carved Tazriel Sigil */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <svg
              className="size-20 sm:size-28 lg:size-32 text-paper/85 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              <path d="M32 25 L55 60 L45 60 L24 25 Z" fill="currentColor" fillOpacity="0.85" />
              <path d="M52 25 L75 60 L65 60 L44 25 Z" fill="currentColor" fillOpacity="0.85" />
              <line x1="20" y1="72" x2="80" y2="72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
            </svg>

            <span className="mt-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-paper/70 font-semibold drop-shadow-md">
              TAZRIEL BENCH
            </span>
          </div>

          {/* Ambient Rim Lighting */}
          <div className="absolute inset-0 border border-accent/20 rounded-2xl pointer-events-none" />
        </div>
      </div>

      {/* ── STAGE 3: CONTINUOUS DUAL COUNTER-ORBITAL ARCS STREAM ── */}
      {/* PURE FLOATING TYPOGRAPHY — NO BOX BORDERS, NO CARDS, MULTIPLE VISIBLE AT ONCE */}
      <div className="relative z-20 mx-auto size-full max-w-frame px-gutter flex items-center justify-between pointer-events-none">
        {/* LEFT COLUMN: Bottom to Top in Arc Stream */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[440px] h-full flex items-center justify-center">
          {leftServices.map((svc) => (
            <div
              key={svc.id}
              data-stream-left
              className="absolute inset-x-0 mx-auto will-change-transform pointer-events-auto"
            >
              <div className="transition-all duration-300">
                {/* Title + Geometric SVG Line Icon beside it (from Screenshot 3) */}
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-white tracking-tight leading-tight">
                    {svc.title}
                  </h3>
                  <div className="shrink-0 text-white/90">
                    <ServiceIcon type={svc.iconType} />
                  </div>
                </div>

                {/* Minimalist 2-line description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70 max-w-sm">
                  {svc.description}
                </p>

                {/* Clean Category / Spec Tag */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                    <span>✦</span>
                    <span>{svc.spec}</span>
                  </span>

                  <Link
                    href={`/${svc.slug}`}
                    className="group inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-white/60 hover:text-accent transition-colors"
                  >
                    <span>Inspect</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Top to Bottom in Arc Stream */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[440px] h-full flex items-center justify-center">
          {rightServices.map((svc) => (
            <div
              key={svc.id}
              data-stream-right
              className="absolute inset-x-0 mx-auto will-change-transform pointer-events-auto"
            >
              <div className="transition-all duration-300">
                {/* Title + Geometric SVG Line Icon beside it */}
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-white tracking-tight leading-tight">
                    {svc.title}
                  </h3>
                  <div className="shrink-0 text-white/90">
                    <ServiceIcon type={svc.iconType} />
                  </div>
                </div>

                {/* Minimalist 2-line description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70 max-w-sm">
                  {svc.description}
                </p>

                {/* Clean Category / Spec Tag */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                    <span>✦</span>
                    <span>{svc.spec}</span>
                  </span>

                  <Link
                    href={`/${svc.slug}`}
                    className="group inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-white/60 hover:text-accent transition-colors"
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

      {/* ── STAGE 4: SMOOTH BREAKING TRANSITION BLINDS (Screenshot 4) ── */}
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
