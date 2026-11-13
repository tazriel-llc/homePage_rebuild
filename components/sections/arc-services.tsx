"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ServiceItem = {
  id: string;
  index: string;
  title: string;
  tag: string;
  description: string;
  iconType: "waveform" | "rings" | "matrix" | "circuit" | "prism" | "diamond";
};

// 6 Disciplines shown 1-by-1 along counter-orbital arcs around TAZRIEL
const allServices: ServiceItem[] = [
  {
    id: "ai-data",
    index: "01",
    tag: "AI & INTELLIGENCE",
    title: "AI & Intelligent Automation",
    description:
      "High-accuracy labelled datasets, multi-turn RLHF evaluation, and model training pipelines held to verified mathematical agreement thresholds.",
    iconType: "waveform",
  },
  {
    id: "software",
    index: "02",
    tag: "SOFTWARE ARCHITECTURE",
    title: "Software & Mendix Architecture",
    description:
      "Certified Mendix Rapid & Advanced practitioners shipping full-stack enterprise systems directly into your repositories and daily sprint rituals.",
    iconType: "rings",
  },
  {
    id: "m365",
    index: "03",
    tag: "CLOUD & SECURITY",
    title: "Microsoft 365 & Cloud Identity",
    description:
      "Enterprise tenant administration, zero-trust conditional access, and automated Power Platform workflow pipelines run by credentialed specialists.",
    iconType: "matrix",
  },
  {
    id: "support",
    index: "04",
    tag: "TECHNICAL OPERATIONS",
    title: "SaaS Product Support & Helpdesk",
    description:
      "Tier-3 technical support teams that master your platform deeply enough to resolve root causes rather than deflect scripts. Real engineers staffing queues.",
    iconType: "circuit",
  },
  {
    id: "stewardship",
    index: "05",
    tag: "EXECUTIVE ALIGNMENT",
    title: "Executive Strategic Stewardship",
    description:
      "Direct executive alignment, SLA accountability, and dual-continent delivery architecture ensuring your engineering rituals run with zero dropped threads.",
    iconType: "prism",
  },
  {
    id: "cvent",
    index: "06",
    tag: "ENTERPRISE EVENTS",
    title: "Meetings & Events (Cvent)",
    description:
      "Cvent-certified event architects managing complex enterprise registration build-outs, multi-track logic, live attendee desks, and post-conference telemetry.",
    iconType: "diamond",
  },
];

/**
 * Geometric Luxury Icons matching Swiss / Trionn aesthetic.
 */
function ServiceIcon({ type }: { type: ServiceItem["iconType"] }) {
  switch (type) {
    case "waveform":
      return (
        <svg
          aria-hidden
          style={{ width: "30px", height: "30px" }}
          viewBox="0 0 48 48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.95)"
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
          style={{ width: "30px", height: "30px" }}
          viewBox="0 0 48 48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.95)"
          strokeWidth="1.6"
        >
          <circle cx="24" cy="24" r="21" strokeOpacity="0.35" strokeDasharray="2 3" />
          <circle cx="24" cy="24" r="15" strokeOpacity="0.7" />
          <circle cx="24" cy="24" r="9" strokeWidth="2" />
          <circle cx="24" cy="24" r="3" fill="rgba(255, 255, 255, 0.95)" />
        </svg>
      );
    case "matrix":
      return (
        <svg
          aria-hidden
          style={{ width: "30px", height: "30px" }}
          viewBox="0 0 48 48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.95)"
          strokeWidth="1.6"
        >
          <polygon points="24 4, 42 14, 42 34, 24 44, 6 34, 6 14" strokeOpacity="0.45" />
          <polygon points="24 12, 34 18, 34 30, 24 36, 14 30, 14 18" strokeWidth="2" />
          <circle cx="24" cy="24" r="2.5" fill="rgba(255, 255, 255, 0.95)" />
        </svg>
      );
    case "circuit":
      return (
        <svg
          aria-hidden
          style={{ width: "30px", height: "30px" }}
          viewBox="0 0 48 48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.95)"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M8 24h12l4-8 8 16 4-8h12" strokeWidth="2" />
          <circle cx="8" cy="24" r="2.5" fill="rgba(255, 255, 255, 0.95)" />
          <circle cx="40" cy="24" r="2.5" fill="rgba(255, 255, 255, 0.95)" />
        </svg>
      );
    case "prism":
      return (
        <svg
          aria-hidden
          style={{ width: "30px", height: "30px" }}
          viewBox="0 0 48 48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.95)"
          strokeWidth="1.6"
        >
          <polygon points="24 6, 42 38, 6 38" strokeWidth="2" />
          <line x1="24" y1="6" x2="24" y2="38" strokeDasharray="2 2" strokeOpacity="0.5" />
          <circle cx="24" cy="26" r="3" fill="rgba(255, 255, 255, 0.95)" />
        </svg>
      );
    case "diamond":
      return (
        <svg
          aria-hidden
          style={{ width: "30px", height: "30px" }}
          viewBox="0 0 48 48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.95)"
          strokeWidth="1.8"
        >
          <polygon points="24 4, 44 24, 24 44, 4 24" strokeWidth="1.8" />
          <polygon points="24 14, 34 24, 24 34, 14 24" strokeOpacity="0.5" />
          <circle cx="24" cy="24" r="2" fill="rgba(255, 255, 255, 0.95)" />
        </svg>
      );
  }
}

// 7 Hero letters for TAZRIEL initial natural 3D vortex scatter coords
const heroScatter = [
  { char: "T", x: -360, y: 130, rot: -16, scale: 0.85, blur: 2 },
  { char: "A", x: -150, y: -220, rot: 12, scale: 0.78, blur: 3 },
  { char: "Z", x: -95, y: -95, rot: -10, scale: 0.72, blur: 2 },
  { char: "R", x: 240, y: 160, rot: 18, scale: 0.88, blur: 3 },
  { char: "I", x: 60, y: 170, rot: -8, scale: 0.75, blur: 2 },
  { char: "E", x: 260, y: -140, rot: 14, scale: 0.82, blur: 3 },
  { char: "L", x: 370, y: -50, rot: -12, scale: 0.86, blur: 2 },
];

// Ambient depth letters floating in cosmic background (Roman serif glyphs)
const depthLetters = [
  { char: "R", x: -420, y: -240, rot: 30, scale: 0.6, blur: 5 },
  { char: "E", x: -340, y: -140, rot: -18, scale: 0.52, blur: 6 },
  { char: "L", x: -290, y: 200, rot: 12, scale: 0.58, blur: 5 },
  { char: "Z", x: -240, y: 290, rot: -22, scale: 0.48, blur: 6 },
  { char: "A", x: -160, y: -310, rot: 16, scale: 0.52, blur: 5 },
  { char: "T", x: -100, y: 260, rot: -10, scale: 0.62, blur: 4 },
  { char: "R", x: 160, y: -230, rot: -20, scale: 0.52, blur: 5 },
  { char: "E", x: 240, y: 250, rot: 22, scale: 0.58, blur: 4 },
  { char: "L", x: 350, y: -190, rot: -14, scale: 0.48, blur: 6 },
  { char: "A", x: 390, y: 120, rot: 18, scale: 0.52, blur: 5 },
  { char: "Z", x: 430, y: -60, rot: -26, scale: 0.48, blur: 6 },
];

export default function ArcServices() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;

      const q = gsap.utils.selector(root);
      const container = root.current;

      const heroLetterEls = q("[data-hero-letter]");
      const depthLetterEls = q("[data-depth-letter]");
      const assembledWordmark = q("[data-assembled-wordmark]");
      const orangeGlow = q("[data-orange-glow]");
      const centerVortex = q("[data-center-vortex]");
      const cardEls = q("[data-orbit-card]");
      const blinds = q("[data-trionn-blind]");
      const blindsContainer = q("[data-trionn-blinds-wrap]");
      const outroText = q("[data-trionn-outro]");

      // Initial state: 3D scattered letters
      heroScatter.forEach((data, i) => {
        const el = heroLetterEls[i];
        if (!el) return;
        gsap.set(el, {
          x: data.x,
          y: data.y,
          rotationZ: data.rot,
          scale: data.scale,
          opacity: 0.8,
          filter: `blur(${data.blur}px)`,
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
          opacity: 0.3,
          filter: `blur(${data.blur}px)`,
        });
      });

      gsap.set(orangeGlow, { opacity: 0.2, scale: 0.7 });
      gsap.set(centerVortex, { opacity: 0.45, scale: 1 });
      gsap.set(blindsContainer, { pointerEvents: "none" });
      gsap.set(blinds, { scaleX: 0 });
      gsap.set(outroText, { opacity: 0, y: 30 });

      // MatchMedia for Desktop vs Mobile Responsiveness
      const mm = gsap.matchMedia(root);

      // ─────────────────────────────────────────────────────────────────────────────
      // DESKTOP & TABLET (>= 768px): TAZRIEL centered, Cards 1-by-1 in Close Arcs
      // ─────────────────────────────────────────────────────────────────────────────
      mm.add("(min-width: 768px)", () => {
        // Initial setup for cards: hide offscreen
        // Left cards: index 0, 2, 4 (start offscreen bottom-left)
        // Right cards: index 1, 3, 5 (start offscreen top-right)
        cardEls.forEach((card, idx) => {
          const isLeft = idx % 2 === 0;
          gsap.set(card, {
            x: isLeft ? -160 : 160,
            y: isLeft ? "70vh" : "-70vh",
            yPercent: -50,
            rotation: isLeft ? -10 : 10,
            opacity: 0,
            scale: 0.9,
            pointerEvents: "none",
          });
        });

        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=6000",
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. STAGE 1 (0.00 -> 0.22): Scattered letters swirl and assemble into TAZRIEL
        heroScatter.forEach((_, i) => {
          const el = heroLetterEls[i];
          if (!el) return;
          masterTl.to(
            el,
            {
              x: 0,
              y: 0,
              rotationZ: 0,
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.20,
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
              rotationZ: data.rot * 1.5,
              opacity: 0.12,
              filter: "blur(6px)",
              duration: 0.18,
              ease: "power2.inOut",
            },
            0.02,
          );
        });

        masterTl.to(
          centerVortex,
          {
            rotation: 45,
            scale: 1.15,
            duration: 0.22,
            ease: "none",
          },
          0,
        );

        masterTl.to(
          orangeGlow,
          {
            opacity: 0.95,
            scale: 1.45,
            duration: 0.10,
            ease: "power2.out",
          },
          0.16,
        );

        // STAGE 2 (0.22 -> 0.88): TAZRIEL stays in center + Cards orbit 1 by 1
        // TAZRIEL subtle breathing
        masterTl.to(
          assembledWordmark,
          {
            scale: 1.04,
            duration: 0.65,
            ease: "none",
          },
          0.22,
        );

        masterTl.to(
          orangeGlow,
          {
            scale: 1.55,
            opacity: 1,
            duration: 0.65,
            ease: "none",
          },
          0.22,
        );

        // 6 CARDS IN 1-BY-1 SEQUENTIAL ARC FLOW (Close to TAZRIEL, Alternating Left & Right)
        // Each card has a ~0.15 normalized window: Enters along arc -> Focus close to TAZRIEL -> Exits along arc
        const cardTimes = [
          { start: 0.22, mid: 0.31, end: 0.40 }, // Card 0: AI & Automation (Left)
          { start: 0.33, mid: 0.42, end: 0.51 }, // Card 1: Software & Mendix (Right)
          { start: 0.44, mid: 0.53, end: 0.62 }, // Card 2: Microsoft 365 (Left)
          { start: 0.55, mid: 0.64, end: 0.73 }, // Card 3: SaaS Support (Right)
          { start: 0.66, mid: 0.75, end: 0.84 }, // Card 4: Strategic Stewardship (Left)
          { start: 0.77, mid: 0.85, end: 0.92 }, // Card 5: Cvent Events (Right)
        ];

        cardEls.forEach((card, idx) => {
          const timing = cardTimes[idx];
          if (!timing) return;
          const isLeft = idx % 2 === 0;

          // Phase A: Glide inward along the arc towards TAZRIEL (Entrance)
          masterTl.fromTo(
            card,
            {
              x: isLeft ? -160 : 160,
              y: isLeft ? "65vh" : "-65vh",
              yPercent: -50,
              rotation: isLeft ? -10 : 10,
              opacity: 0,
              scale: 0.92,
              pointerEvents: "none",
            },
            {
              x: 0, // Brought close to TAZRIEL!
              y: "0vh", // Dead center on its flank
              yPercent: -50,
              rotation: 0,
              opacity: 1,
              scale: 1,
              pointerEvents: "auto",
              duration: timing.mid - timing.start,
              ease: "power2.out",
            },
            timing.start,
          );

          // Phase B: Glide outward along the arc to exit (Exit)
          masterTl.to(
            card,
            {
              x: isLeft ? -140 : 140,
              y: isLeft ? "-65vh" : "65vh",
              yPercent: -50,
              rotation: isLeft ? 10 : -10,
              opacity: 0,
              scale: 0.92,
              pointerEvents: "none",
              duration: timing.end - timing.mid,
              ease: "power2.in",
            },
            timing.mid,
          );
        });

        // STAGE 3 (0.92 -> 1.00): Smooth breaking paper transition
        masterTl.set(blindsContainer, { pointerEvents: "auto" }, 0.92);

        blinds.forEach((blind, idx) => {
          const fromLeft = idx % 2 === 0;
          gsap.set(blind, { transformOrigin: fromLeft ? "left center" : "right center" });

          masterTl.to(
            blind,
            {
              scaleX: 1,
              duration: 0.04,
              ease: "power3.inOut",
            },
            0.92 + idx * 0.015,
          );
        });

        masterTl.to(
          blinds,
          {
            scaleY: 2.8,
            duration: 0.03,
            ease: "power2.inOut",
          },
          0.965,
        );

        masterTl.to(
          outroText,
          {
            opacity: 1,
            y: 0,
            duration: 0.03,
            ease: "power2.out",
          },
          0.975,
        );
      });

      // ─────────────────────────────────────────────────────────────────────────────
      // MOBILE (< 768px): TAZRIEL elevated, Cards 1-by-1 in arc underneath
      // ─────────────────────────────────────────────────────────────────────────────
      mm.add("(max-width: 767px)", () => {
        cardEls.forEach((card) => {
          gsap.set(card, {
            x: 0,
            y: "65vh",
            yPercent: -50,
            opacity: 0,
            scale: 0.9,
            pointerEvents: "none",
          });
        });

        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=4500",
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Letters assemble
        heroScatter.forEach((_, i) => {
          const el = heroLetterEls[i];
          if (!el) return;
          masterTl.to(
            el,
            {
              x: 0,
              y: 0,
              rotationZ: 0,
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.22,
              ease: "power3.inOut",
            },
            0.02,
          );
        });

        masterTl.to(
          orangeGlow,
          {
            opacity: 0.9,
            scale: 1.3,
            duration: 0.12,
            ease: "power2.out",
          },
          0.16,
        );

        // 2. Mobile 1-by-1 card arc underneath TAZRIEL
        const mobileTimes = [
          { start: 0.24, mid: 0.33, end: 0.42 },
          { start: 0.35, mid: 0.44, end: 0.53 },
          { start: 0.46, mid: 0.55, end: 0.64 },
          { start: 0.57, mid: 0.66, end: 0.75 },
          { start: 0.68, mid: 0.77, end: 0.86 },
          { start: 0.79, mid: 0.87, end: 0.93 },
        ];

        cardEls.forEach((card, idx) => {
          const timing = mobileTimes[idx];
          if (!timing) return;

          masterTl.fromTo(
            card,
            {
              x: idx % 2 === 0 ? -60 : 60,
              y: "55vh",
              yPercent: -50,
              opacity: 0,
              scale: 0.92,
              pointerEvents: "none",
            },
            {
              x: 0,
              y: "18vh", // Centered under TAZRIEL
              yPercent: -50,
              opacity: 1,
              scale: 1,
              pointerEvents: "auto",
              duration: timing.mid - timing.start,
              ease: "power2.out",
            },
            timing.start,
          );

          masterTl.to(
            card,
            {
              x: idx % 2 === 0 ? 60 : -60,
              y: "-10vh",
              yPercent: -50,
              opacity: 0,
              scale: 0.92,
              pointerEvents: "none",
              duration: timing.end - timing.mid,
              ease: "power2.in",
            },
            timing.mid,
          );
        });

        // Transition blinds on mobile
        masterTl.set(blindsContainer, { pointerEvents: "auto" }, 0.93);
        blinds.forEach((blind, idx) => {
          masterTl.to(
            blind,
            { scaleX: 1, duration: 0.04, ease: "power3.inOut" },
            0.93 + idx * 0.015,
          );
        });
        masterTl.to(blinds, { scaleY: 2.8, duration: 0.03, ease: "power2.inOut" }, 0.97);
        masterTl.to(outroText, { opacity: 1, y: 0, duration: 0.03, ease: "power2.out" }, 0.98);
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      id="disciplines"
      data-theme="dark"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#020035",
        userSelect: "none",
      }}
    >
      {/* ── SEAMLESS TOP & BOTTOM GRADIENT FEATHERS (Seamless Hero Blend) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(to bottom, #020035 0%, rgba(2, 0, 53, 0.85) 50%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 35,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(to top, #020035 0%, rgba(2, 0, 53, 0.85) 50%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 35,
        }}
      />

      {/* ── AMBIENT COSMIC DEPTH BLOOMS ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "60vw",
            borderRadius: "50%",
            opacity: 0.28,
            filter: "blur(140px)",
            background: "radial-gradient(circle, #2100b1 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── CENTER VORTEX VISUAL (Single Centered Graphic, Never Tiled) ── */}
      <div
        data-center-vortex
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "620px",
          height: "620px",
          maxWidth: "90vw",
          maxHeight: "90vw",
          pointerEvents: "none",
          zIndex: 5,
          borderRadius: "50%",
          overflow: "hidden",
          mixBlendMode: "screen",
          maskImage: "radial-gradient(circle, black 38%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle, black 38%, transparent 72%)",
        }}
      >
        <img
          src="/media/letter-vortex.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.15) brightness(0.9)",
          }}
        />
      </div>

      {/* ── CENTER ANCHORED STAGE: TAZRIEL WORDMARK + ORANGE BACKLIGHT ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 20,
          overflow: "hidden",
        }}
      >
        {/* Subtle orange backlight bloom behind TAZRIEL */}
        <div
          data-orange-glow
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            filter: "blur(90px)",
            background: "radial-gradient(circle, rgba(237, 76, 0, 0.8) 0%, rgba(33, 0, 177, 0.4) 60%, transparent 80%)",
            willChange: "transform, opacity",
          }}
        />

        {/* Ambient Depth Letters floating in background (Serif Roman particles) */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {depthLetters.map((dl, idx) => (
            <span
              key={idx}
              data-depth-letter
              style={{
                position: "absolute",
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                fontSize: "2.6rem",
                color: "rgba(255, 255, 255, 0.28)",
                userSelect: "none",
                willChange: "transform, opacity",
              }}
            >
              {dl.char}
            </span>
          ))}
        </div>

        {/* ── TAZRIEL WORDMARK (Generous Luxury Spacing, No Subtitle) ── */}
        <div
          data-assembled-wordmark
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(16px, 2.5vw, 34px)",
            willChange: "transform",
            zIndex: 10,
          }}
        >
          {heroScatter.map((hl, idx) => (
            <span
              key={idx}
              data-hero-letter
              style={{
                display: "inline-block",
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(2.6rem, 5.2vw, 4.6rem)",
                letterSpacing: "0.08em",
                color: "#ffffff",
                textShadow:
                  "0 4px 20px rgba(0,0,0,0.9), 0 0 35px rgba(237, 76, 0, 0.65), 0 0 65px rgba(237, 76, 0, 0.35)",
                userSelect: "none",
                willChange: "transform, opacity, filter",
              }}
            >
              {hl.char}
            </span>
          ))}
        </div>
      </div>

      {/* ── 1-BY-1 COUNTER-ORBITAL ARC SERVICES (Brought Close to TAZRIEL) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 25,
        }}
      >
        {allServices.map((svc, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={svc.id}
              data-orbit-card
              style={{
                position: "absolute",
                // Positioned tight and close to TAZRIEL center:
                left: isLeft ? "clamp(24px, calc(50% - 460px), calc(50% - 370px))" : "auto",
                right: !isLeft ? "clamp(24px, calc(50% - 460px), calc(50% - 370px))" : "auto",
                top: "50%",
                width: "min(340px, calc(100vw - 36px))",
                willChange: "transform, opacity",
                pointerEvents: "auto",
              }}
            >
              {/* Premium Luxury Glassmorphism Card */}
              <div
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.065) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  backdropFilter: "blur(26px) saturate(180%)",
                  WebkitBackdropFilter: "blur(26px) saturate(180%)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "22px",
                  padding: "24px 26px",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "180px",
                }}
              >
                {/* Card Top: Index Tag & Geometric Icon */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#ed4c00",
                        letterSpacing: "0.2em",
                      }}
                    >
                      {svc.index} //
                    </span>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "10px",
                        letterSpacing: "0.18em",
                        color: "rgba(255, 255, 255, 0.55)",
                        textTransform: "uppercase",
                      }}
                    >
                      {svc.tag}
                    </span>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <ServiceIcon type={svc.iconType} />
                  </div>
                </div>

                {/* Card Title */}
                <h3
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "1.28rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                    margin: "12px 0 0 0",
                  }}
                >
                  {svc.title}
                </h3>

                {/* Card Description */}
                <p
                  style={{
                    marginTop: "12px",
                    fontSize: "0.85rem",
                    lineHeight: 1.55,
                    color: "rgba(255, 255, 255, 0.72)",
                    margin: "12px 0 0 0",
                  }}
                >
                  {svc.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── FOOTER SUB-INDICATOR ── */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5vw",
          pointerEvents: "none",
          zIndex: 20,
          fontFamily: "monospace",
          fontSize: "11px",
          letterSpacing: "0.14em",
          color: "rgba(244, 241, 236, 0.6)",
          textTransform: "uppercase",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "#ed4c00" }}>✦</span>
          <span>DIFFERENT DISCIPLINES. ONE STANDARD OF CRAFT.</span>
        </span>
        <span style={{ color: "#ed4c00" }}>
          SYNCHRONOUS COUNTER-ORBITAL BENCH
        </span>
      </div>

      {/* ── STAGE 4: SMOOTH BREAKING TRANSITION BLINDS (Screenshot 4) ── */}
      <div
        data-trionn-blinds-wrap
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 40,
        }}
      >
        <div
          data-trionn-blind
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "34%",
            backgroundColor: "#F4F1EC",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        />
        <div
          data-trionn-blind
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "33%",
            height: "34%",
            backgroundColor: "#F4F1EC",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        />
        <div
          data-trionn-blind
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "66%",
            height: "35%",
            backgroundColor: "#F4F1EC",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        />

        <div
          data-trionn-outro
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 5vw",
            textAlign: "center",
            color: "#020035",
            pointerEvents: "auto",
            zIndex: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "monospace",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#ed4c00",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ed4c00" }} />
            <span>GLOBAL TOPOLOGY & INFRASTRUCTURE</span>
          </div>

          <h2
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 400,
              color: "#020035",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              maxWidth: "750px",
              margin: 0,
            }}
          >
            Two continents. One bench.{" "}
            <span style={{ fontStyle: "italic", color: "#ed4c00" }}>Unbroken velocity.</span>
          </h2>

          <p
            style={{
              marginTop: "24px",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontSize: "1.125rem",
              color: "rgba(2, 0, 53, 0.6)",
              maxWidth: "540px",
              lineHeight: 1.6,
            }}
          >
            Delivering structured operational coverage from dawn in London through dusk in
            Silicon Valley with zero dropped threads.
          </p>
        </div>
      </div>
    </section>
  );
}
