"use client";

import { useRef } from "react";
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
 */
function ServiceIcon({ type }: { type: ServiceItem["iconType"] }) {
  switch (type) {
    case "waveform":
      return (
        <svg
          aria-hidden
          style={{ width: "32px", height: "32px" }}
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
          style={{ width: "32px", height: "32px" }}
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
          style={{ width: "32px", height: "32px" }}
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
          style={{ width: "32px", height: "32px" }}
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
          style={{ width: "32px", height: "32px" }}
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
          style={{ width: "32px", height: "32px" }}
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
// Designed with realistic depth, spiral flow, and gentle scale (no giant flat cards)
const heroScatter = [
  { char: "T", x: -380, y: 140, rot: -18, scale: 0.85, blur: 2 },
  { char: "A", x: -160, y: -240, rot: 14, scale: 0.78, blur: 3 },
  { char: "Z", x: -110, y: -110, rot: -12, scale: 0.72, blur: 2 },
  { char: "R", x: 260, y: 180, rot: 20, scale: 0.88, blur: 3 },
  { char: "I", x: 70, y: 190, rot: -8, scale: 0.75, blur: 2 },
  { char: "E", x: 280, y: -160, rot: 16, scale: 0.82, blur: 3 },
  { char: "L", x: 390, y: -60, rot: -14, scale: 0.86, blur: 2 },
];

// Deep vortex background depth letters (ambient particles from GIF)
// All serif Roman letters, no plain pipes or un-styled marks
const depthLetters = [
  { char: "R", x: -440, y: -260, rot: 35, scale: 0.65, blur: 5 },
  { char: "E", x: -360, y: -150, rot: -20, scale: 0.55, blur: 6 },
  { char: "L", x: -310, y: 220, rot: 12, scale: 0.6, blur: 5 },
  { char: "Z", x: -260, y: 310, rot: -25, scale: 0.5, blur: 6 },
  { char: "A", x: -170, y: -330, rot: 18, scale: 0.55, blur: 5 },
  { char: "T", x: -110, y: 280, rot: -12, scale: 0.65, blur: 4 },
  { char: "R", x: 170, y: -250, rot: -22, scale: 0.55, blur: 5 },
  { char: "E", x: 260, y: 270, rot: 25, scale: 0.6, blur: 4 },
  { char: "L", x: 370, y: -210, rot: -15, scale: 0.5, blur: 6 },
  { char: "A", x: 410, y: 130, rot: 20, scale: 0.55, blur: 5 },
  { char: "Z", x: 450, y: -70, rot: -30, scale: 0.5, blur: 6 },
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
      const assembledSub = q("[data-assembled-sub]");
      const orangeGlow = q("[data-orange-glow]");
      const centerVortex = q("[data-center-vortex]");
      const leftCardEls = q("[data-stream-left]");
      const rightCardEls = q("[data-stream-right]");
      const blinds = q("[data-trionn-blind]");
      const blindsContainer = q("[data-trionn-blinds-wrap]");
      const outroText = q("[data-trionn-outro]");

      // Initial state: 3D scattered letters in spiral vortex
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
          opacity: 0.35,
          filter: `blur(${data.blur}px)`,
        });
      });

      gsap.set(orangeGlow, { opacity: 0.15, scale: 0.7 });
      gsap.set(centerVortex, { opacity: 0.5, scale: 1 });
      gsap.set(assembledSub, { opacity: 0, y: 12 });

      // INITIAL POSITIONS FOR CARDS:
      // USER RULE: "always the cards are coming from left and right don't fade in them"
      // Cards start PHYSICALLY OFFSCREEN to the left and right at full opacity (1)!
      // Left Cards (start offscreen to the left):
      gsap.set(leftCardEls[0], { x: -500, yPercent: -50, y: "-20vh", rotation: -2, opacity: 1, scale: 1 });
      gsap.set(leftCardEls[1], { x: -500, yPercent: -50, y: "20vh", rotation: 0, opacity: 1, scale: 1 });
      gsap.set(leftCardEls[2], { x: -500, yPercent: -50, y: "65vh", rotation: 2, opacity: 1, scale: 0.94 });

      // Right Cards (start offscreen to the right):
      gsap.set(rightCardEls[0], { x: 500, yPercent: -50, y: "20vh", rotation: 2, opacity: 1, scale: 1 });
      gsap.set(rightCardEls[1], { x: 500, yPercent: -50, y: "-20vh", rotation: 0, opacity: 1, scale: 1 });
      gsap.set(rightCardEls[2], { x: 500, yPercent: -50, y: "-65vh", rotation: -2, opacity: 1, scale: 0.94 });

      gsap.set(blindsContainer, { pointerEvents: "none" });
      gsap.set(blinds, { scaleX: 0 });
      gsap.set(outroText, { opacity: 0, y: 30 });

      // Master Timeline (end: "+=6000", scrub: 2)
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
      // STAGE 1: 0% -> 34% | 3D Scattered Letters Swirl Toward Center & Assemble
      // ─────────────────────────────────────────────────────────────────────────────
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
            duration: 0.32,
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
            x: data.x * 0.2,
            y: data.y * 0.2,
            rotationZ: data.rot * 1.8,
            opacity: 0.12,
            filter: "blur(7px)",
            duration: 0.30,
            ease: "power2.inOut",
          },
          0.02,
        );
      });

      // Central vortex visual rotates in 3D
      masterTl.to(
        centerVortex,
        {
          rotation: 40,
          scale: 1.12,
          duration: 0.34,
          ease: "none",
        },
        0,
      );

      // Orange ambient backlight bloom emerges behind TAZRIEL
      masterTl.to(
        orangeGlow,
        {
          opacity: 0.95,
          scale: 1.45,
          duration: 0.12,
          ease: "power2.out",
        },
        0.28,
      );

      // Subtitle 'SOVEREIGN BENCH' reveals smoothly under assembled wordmark
      masterTl.to(
        assembledSub,
        {
          opacity: 0.85,
          y: 0,
          duration: 0.08,
          ease: "power2.out",
        },
        0.30,
      );

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 2: 32% -> 88% | TAZRIEL STAYS IN CENTER + CARDS GLIDE IN FROM LEFT & RIGHT
      // USER RULE: "keep tazriel in the center dont disapear it"
      // USER RULE: "always the cards are coming from left and right dont fade in them"
      // ─────────────────────────────────────────────────────────────────────────────

      // Central TAZRIEL holds firm and breathes gently throughout the entire card showcase
      masterTl.to(
        assembledWordmark,
        {
          scale: 1.03,
          duration: 0.54,
          ease: "none",
        },
        0.34,
      );

      masterTl.to(
        orangeGlow,
        {
          scale: 1.55,
          opacity: 1,
          duration: 0.54,
          ease: "none",
        },
        0.34,
      );

      // 1. CARDS GLIDE IN FROM SIDES (NO OPACITY FADE-IN!)
      // Left Cards enter from offscreen left (x: -500 -> 0)
      masterTl.to(
        leftCardEls[0],
        {
          x: 0,
          duration: 0.14,
          ease: "power3.out",
        },
        0.32,
      );

      masterTl.to(
        leftCardEls[1],
        {
          x: 0,
          duration: 0.14,
          ease: "power3.out",
        },
        0.34,
      );

      // Right Cards enter from offscreen right (x: 500 -> 0)
      masterTl.to(
        rightCardEls[0],
        {
          x: 0,
          duration: 0.14,
          ease: "power3.out",
        },
        0.32,
      );

      masterTl.to(
        rightCardEls[1],
        {
          x: 0,
          duration: 0.14,
          ease: "power3.out",
        },
        0.34,
      );

      // 2. CONTINUOUS DUAL COUNTER-ARC FLOW (Left: Bottom to Top | Right: Top to Bottom)
      // Left Cards flowing upward along arc:
      masterTl.to(
        leftCardEls[0],
        {
          y: "-65vh",
          x: -25,
          rotation: -4,
          scale: 0.92,
          duration: 0.36,
          ease: "power2.inOut",
        },
        0.48,
      );

      masterTl.to(
        leftCardEls[1],
        {
          y: "-20vh",
          x: 0,
          rotation: -2,
          scale: 1,
          duration: 0.36,
          ease: "power2.inOut",
        },
        0.48,
      );

      // Third Left Card glides in from bottom arc into view
      masterTl.to(
        leftCardEls[2],
        {
          x: 0,
          y: "20vh",
          rotation: 0,
          scale: 1,
          duration: 0.36,
          ease: "power2.inOut",
        },
        0.48,
      );

      // Right Cards flowing downward along arc:
      masterTl.to(
        rightCardEls[0],
        {
          y: "65vh",
          x: 25,
          rotation: 4,
          scale: 0.92,
          duration: 0.36,
          ease: "power2.inOut",
        },
        0.48,
      );

      masterTl.to(
        rightCardEls[1],
        {
          y: "20vh",
          x: 0,
          rotation: 2,
          scale: 1,
          duration: 0.36,
          ease: "power2.inOut",
        },
        0.48,
      );

      // Third Right Card glides in from top arc into view
      masterTl.to(
        rightCardEls[2],
        {
          x: 0,
          y: "-20vh",
          rotation: 0,
          scale: 1,
          duration: 0.36,
          ease: "power2.inOut",
        },
        0.48,
      );

      // ─────────────────────────────────────────────────────────────────────────────
      // STAGE 3: 88% -> 100% | SMOOTH BREAKING PAPER TRANSITION
      // (Only at the very end does the section transition into the next)
      // ─────────────────────────────────────────────────────────────────────────────
      masterTl.set(blindsContainer, { pointerEvents: "auto" }, 0.90);

      blinds.forEach((blind, idx) => {
        const fromLeft = idx % 2 === 0;
        gsap.set(blind, { transformOrigin: fromLeft ? "left center" : "right center" });

        masterTl.to(
          blind,
          {
            scaleX: 1,
            duration: 0.05,
            ease: "power3.inOut",
          },
          0.91 + idx * 0.02,
        );
      });

      // Expand bands to fuse solid into paper ground
      masterTl.to(
        blinds,
        {
          scaleY: 2.8,
          duration: 0.04,
          ease: "power2.inOut",
        },
        0.96,
      );

      // Reveal outro text
      masterTl.to(
        outroText,
        {
          opacity: 1,
          y: 0,
          duration: 0.04,
          ease: "power2.out",
        },
        0.97,
      );
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
        perspective: "1200px",
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

      {/* ── AMBIENT COSMIC DEPTH BLOOMS (Clean, Never Tiled) ── */}
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
          width: "650px",
          height: "650px",
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
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            filter: "blur(95px)",
            background: "radial-gradient(circle, rgba(237, 76, 0, 0.8) 0%, rgba(33, 0, 177, 0.4) 60%, transparent 80%)",
            willChange: "transform, opacity",
          }}
        />

        {/* Ambient Depth Letters floating in background (All Classic Serif, no pipes) */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {depthLetters.map((dl, idx) => (
            <span
              key={idx}
              data-depth-letter
              style={{
                position: "absolute",
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                fontSize: "2.8rem",
                color: "rgba(255, 255, 255, 0.3)",
                userSelect: "none",
                willChange: "transform, opacity",
              }}
            >
              {dl.char}
            </span>
          ))}
        </div>

        {/* ── TAZRIEL WORDMARK CONTAINER ── */}
        {/* Spaced with majestic luxury tracking, zero overlapping, letters never touch */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div
            data-assembled-wordmark
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(18px, 2.8vw, 38px)",
              willChange: "transform",
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
                  fontSize: "clamp(2.8rem, 5.8vw, 5.2rem)",
                  letterSpacing: "0.08em",
                  color: "#ffffff",
                  textShadow:
                    "0 4px 20px rgba(0,0,0,0.9), 0 0 35px rgba(237, 76, 0, 0.6), 0 0 65px rgba(237, 76, 0, 0.3)",
                  userSelect: "none",
                  willChange: "transform, opacity, filter",
                }}
              >
                {hl.char}
              </span>
            ))}
          </div>

          <div
            data-assembled-sub
            style={{
              marginTop: "16px",
              fontFamily: "monospace",
              fontSize: "12px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.75)",
              textAlign: "center",
              willChange: "transform, opacity",
            }}
          >
            SOVEREIGN BENCH
          </div>
        </div>
      </div>

      {/* ── FLANK SERVICES (ALWAYS ENTER FROM LEFT & RIGHT, NO FADE-IN!) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 25,
        }}
      >
        {/* LEFT FLANK: Arc Services (Entering from Left, Flowing Bottom to Top) */}
        <div
          style={{
            position: "absolute",
            left: "clamp(16px, 3.8vw, 54px)",
            top: "50%",
            width: "min(340px, calc(100vw - 32px))",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {leftServices.map((svc) => (
            <div
              key={svc.id}
              data-stream-left
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                willChange: "transform",
                pointerEvents: "auto",
              }}
            >
              {/* Compact Square Glassmorphism Card (matching media_1794551883246_21ebec83.jpg) */}
              <div
                style={{
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.045)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "20px",
                  padding: "24px 26px",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "175px",
                }}
              >
                {/* Header: Title + Geometric Line Icon */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px" }}>
                  <h3
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                      margin: 0,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <div style={{ flexShrink: 0 }}>
                    <ServiceIcon type={svc.iconType} />
                  </div>
                </div>

                {/* Minimalist 2-line Description */}
                <p
                  style={{
                    marginTop: "14px",
                    fontSize: "0.85rem",
                    lineHeight: 1.55,
                    color: "rgba(255, 255, 255, 0.7)",
                    margin: "14px 0 0 0",
                  }}
                >
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT FLANK: Arc Services (Entering from Right, Flowing Top to Bottom) */}
        <div
          style={{
            position: "absolute",
            right: "clamp(16px, 3.8vw, 54px)",
            top: "50%",
            width: "min(340px, calc(100vw - 32px))",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {rightServices.map((svc) => (
            <div
              key={svc.id}
              data-stream-right
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                willChange: "transform",
                pointerEvents: "auto",
              }}
            >
              {/* Compact Square Glassmorphism Card (matching media_1794551883246_21ebec83.jpg) */}
              <div
                style={{
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.045)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "20px",
                  padding: "24px 26px",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "175px",
                }}
              >
                {/* Header: Title + Geometric Line Icon */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "14px" }}>
                  <h3
                    style={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                      margin: 0,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <div style={{ flexShrink: 0 }}>
                    <ServiceIcon type={svc.iconType} />
                  </div>
                </div>

                {/* Minimalist 2-line Description */}
                <p
                  style={{
                    marginTop: "14px",
                    fontSize: "0.85rem",
                    lineHeight: 1.55,
                    color: "rgba(255, 255, 255, 0.7)",
                    margin: "14px 0 0 0",
                  }}
                >
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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
