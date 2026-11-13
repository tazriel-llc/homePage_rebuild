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

// 3 Left Services (Cascade from Top to Bottom along Left Arc, covering 'T')
const leftServices: ServiceItem[] = [
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
    id: "m365",
    index: "03",
    tag: "CLOUD & SECURITY",
    title: "Microsoft 365 & Cloud Identity",
    description:
      "Enterprise tenant administration, zero-trust conditional access, and automated Power Platform workflow pipelines run by credentialed specialists.",
    iconType: "matrix",
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
];

// 3 Right Services (Cascade from Top to Bottom along Right Arc, covering 'L')
const rightServices: ServiceItem[] = [
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
    id: "support",
    index: "04",
    tag: "TECHNICAL OPERATIONS",
    title: "SaaS Product Support & Helpdesk",
    description:
      "Tier-3 technical support teams that master your platform deeply enough to resolve root causes rather than deflect scripts. Real engineers staffing queues.",
    iconType: "circuit",
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

// 7 Hero letters for TAZRIEL descending from top to bottom (Request 2)
// Each letter starts above center and cascades down smoothly into alignment
const heroCascadeTop = [
  { char: "T", initY: -320, initX: -25, rot: -10, scale: 0.82, blur: 2.5 },
  { char: "A", initY: -250, initX: -12, rot: 8, scale: 0.85, blur: 2 },
  { char: "Z", initY: -360, initX: -18, rot: -8, scale: 0.78, blur: 3 },
  { char: "R", initY: -290, initX: 0, rot: 12, scale: 0.82, blur: 2.5 },
  { char: "I", initY: -230, initX: 10, rot: -6, scale: 0.86, blur: 1.5 },
  { char: "E", initY: -350, initX: 18, rot: 9, scale: 0.78, blur: 3 },
  { char: "L", initY: -280, initX: 28, rot: -8, scale: 0.82, blur: 2 },
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
      const centerVortex = q("[data-center-vortex]");
      const leftCardEls = q("[data-left-card]");
      const rightCardEls = q("[data-right-card]");
      const blinds = q("[data-trionn-blind]");
      const blindsContainer = q("[data-trionn-blinds-wrap]");
      const outroText = q("[data-trionn-outro]");

      // Initial state: letters start above center (cascading from top to bottom)
      heroCascadeTop.forEach((data, i) => {
        const el = heroLetterEls[i];
        if (!el) return;
        gsap.set(el, {
          x: data.initX,
          y: data.initY,
          rotationZ: data.rot,
          scale: data.scale,
          opacity: 0.75,
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
          opacity: 0.25,
          filter: `blur(${data.blur}px)`,
        });
      });

      gsap.set(centerVortex, { opacity: 0.38, scale: 1 });
      gsap.set(blindsContainer, { pointerEvents: "none" });
      gsap.set(blinds, { scaleX: 0 });
      gsap.set(outroText, { opacity: 0, y: 30 });

      // MatchMedia for Desktop vs Mobile Responsiveness
      const mm = gsap.matchMedia(root);

      // ─────────────────────────────────────────────────────────────────────────────
      // DESKTOP & TABLET (>= 768px):
      // 1. Letters cascade from Top to Bottom into TAZRIEL
      // 2. OPPOSITE DIRECTION FLOW:
      //    - Left flank: Enters from BOTTOM (+75vh) and scrolls UP to exit at top (-75vh)
      //    - Right flank: Enters from TOP (-75vh) and scrolls DOWN to exit at bottom (+75vh)
      // 3. Left cards cover ONLY 'T' | Right cards cover ONLY 'L' (z-index: 30, above TAZRIEL)
      // 4. Slow, continuous counter-orbital card transitions
      // ─────────────────────────────────────────────────────────────────────────────
      mm.add("(min-width: 768px)", () => {
        // Master Timeline (end: "+=6000", scrub: 1.5)
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

        // ─────────────────────────────────────────────────────────────────────────
        // STAGE 1 (0.00 -> 0.20): Letters cascade from Top to Bottom into TAZRIEL
        // ─────────────────────────────────────────────────────────────────────────
        heroCascadeTop.forEach((_, i) => {
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
              duration: 0.18,
              ease: "power3.out",
            },
            0.01 + i * 0.008, // Staggered gentle cascade
          );
        });

        depthLetters.forEach((data, i) => {
          const el = depthLetterEls[i];
          if (!el) return;
          masterTl.to(
            el,
            {
              y: data.y + 40,
              rotationZ: data.rot * 1.3,
              opacity: 0.15,
              duration: 0.18,
              ease: "power2.out",
            },
            0.01,
          );
        });

        masterTl.to(
          centerVortex,
          {
            rotation: 35,
            scale: 1.1,
            duration: 0.20,
            ease: "none",
          },
          0,
        );

        // STAGE 2 (0.20 -> 0.90): TAZRIEL stays centered (anchored, breathing gently)
        masterTl.to(
          assembledWordmark,
          {
            scale: 1.03,
            duration: 0.70,
            ease: "none",
          },
          0.20,
        );

        // ─────────────────────────────────────────────────────────────────────────
        // STAGE 2: OPPOSITE DIRECTION COUNTER-ORBITAL FLOW
        // - Left flank: Enters from BOTTOM (+75vh, x: -60px) -> Center (y: 0, x: 0 covering 'T') -> Exits TOP (-75vh, x: -60px)
        // - Right flank: Enters from TOP (-75vh, x: 60px) -> Center (y: 0, x: 0 covering 'L') -> Exits BOTTOM (+75vh, x: 60px)
        // ─────────────────────────────────────────────────────────────────────────

        // Initial setup:
        // Left cards start BELOW the screen (y: +75vh)
        leftCardEls.forEach((card) => {
          gsap.set(card, { x: -60, y: "75vh", yPercent: -50, rotation: -5, opacity: 0 });
        });
        // Right cards start ABOVE the screen (y: -75vh)
        rightCardEls.forEach((card) => {
          gsap.set(card, { x: 60, y: "-75vh", yPercent: -50, rotation: 5, opacity: 0 });
        });

        // ── CARD 0 (Left: UP from bottom | Right: DOWN from top):
        // Enters at 0.20 -> reaches sweet spot (y: 0) at 0.32 -> glides toward exit at 0.58
        masterTl.to(
          leftCardEls[0],
          {
            x: 0,
            y: "0vh",
            yPercent: -50,
            rotation: 0,
            opacity: 1,
            duration: 0.12,
            ease: "power2.out",
          },
          0.20,
        );
        masterTl.to(
          rightCardEls[0],
          {
            x: 0,
            y: "0vh",
            yPercent: -50,
            rotation: 0,
            opacity: 1,
            duration: 0.12,
            ease: "power2.out",
          },
          0.20,
        );

        // Card 0 glides toward exit as Card 1 approaches (Opposite directions!):
        // Left Card 0 glides UP to -75vh
        masterTl.to(
          leftCardEls[0],
          {
            x: -60,
            y: "-75vh",
            yPercent: -50,
            rotation: 5,
            opacity: 0,
            duration: 0.24,
            ease: "power2.inOut",
          },
          0.34,
        );
        // Right Card 0 glides DOWN to +75vh
        masterTl.to(
          rightCardEls[0],
          {
            x: 60,
            y: "75vh",
            yPercent: -50,
            rotation: -5,
            opacity: 0,
            duration: 0.24,
            ease: "power2.inOut",
          },
          0.34,
        );

        // ── CARD 1 (Left: UP from bottom | Right: DOWN from top):
        // Left Card 1 glides UP from +75vh to 0vh
        masterTl.to(
          leftCardEls[1],
          {
            x: 0,
            y: "0vh",
            yPercent: -50,
            rotation: 0,
            opacity: 1,
            duration: 0.22,
            ease: "power2.inOut",
          },
          0.34,
        );
        // Right Card 1 glides DOWN from -75vh to 0vh
        masterTl.to(
          rightCardEls[1],
          {
            x: 0,
            y: "0vh",
            yPercent: -50,
            rotation: 0,
            opacity: 1,
            duration: 0.22,
            ease: "power2.inOut",
          },
          0.34,
        );

        // Card 1 glides toward exit as Card 2 approaches (Opposite directions!):
        // Left Card 1 glides UP to -75vh
        masterTl.to(
          leftCardEls[1],
          {
            x: -60,
            y: "-75vh",
            yPercent: -50,
            rotation: 5,
            opacity: 0,
            duration: 0.22,
            ease: "power2.inOut",
          },
          0.58,
        );
        // Right Card 1 glides DOWN to +75vh
        masterTl.to(
          rightCardEls[1],
          {
            x: 60,
            y: "75vh",
            yPercent: -50,
            rotation: -5,
            opacity: 0,
            duration: 0.22,
            ease: "power2.inOut",
          },
          0.58,
        );

        // ── CARD 2 (Left: UP from bottom | Right: DOWN from top):
        // Left Card 2 glides UP from +75vh to 0vh
        masterTl.to(
          leftCardEls[2],
          {
            x: 0,
            y: "0vh",
            yPercent: -50,
            rotation: 0,
            opacity: 1,
            duration: 0.20,
            ease: "power2.inOut",
          },
          0.58,
        );
        // Right Card 2 glides DOWN from -75vh to 0vh
        masterTl.to(
          rightCardEls[2],
          {
            x: 0,
            y: "0vh",
            yPercent: -50,
            rotation: 0,
            opacity: 1,
            duration: 0.20,
            ease: "power2.inOut",
          },
          0.58,
        );

        // Card 2 exits before blinds transition (Opposite directions!):
        // Left Card 2 glides UP to -45vh
        masterTl.to(
          leftCardEls[2],
          {
            x: -50,
            y: "-45vh",
            yPercent: -50,
            opacity: 0,
            duration: 0.10,
            ease: "power2.in",
          },
          0.82,
        );
        // Right Card 2 glides DOWN to +45vh
        masterTl.to(
          rightCardEls[2],
          {
            x: 50,
            y: "45vh",
            yPercent: -50,
            opacity: 0,
            duration: 0.10,
            ease: "power2.in",
          },
          0.82,
        );

        // ─────────────────────────────────────────────────────────────────────────
        // STAGE 3 (0.91 -> 1.00): Smooth breaking paper transition
        // ─────────────────────────────────────────────────────────────────────────
        masterTl.set(blindsContainer, { pointerEvents: "auto" }, 0.91);

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
            0.91 + idx * 0.015,
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
      // MOBILE (< 768px): Letters cascade from top, Cards enter from top and scroll down
      // ─────────────────────────────────────────────────────────────────────────────
      mm.add("(max-width: 767px)", () => {
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

        // Letters cascade from top
        heroCascadeTop.forEach((_, i) => {
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
              ease: "power3.out",
            },
            0.01 + i * 0.008,
          );
        });

        // Mobile cards cascade from top to bottom through the lower viewport
        const allCards = [...leftCardEls, ...rightCardEls];
        allCards.forEach((card, idx) => {
          gsap.set(card, { x: 0, y: "-60vh", yPercent: -50, opacity: 0 });
          const start = 0.22 + idx * 0.11;
          const mid = start + 0.08;
          const end = mid + 0.08;

          masterTl.fromTo(
            card,
            { y: "-55vh", opacity: 0 },
            { y: "18vh", opacity: 1, duration: mid - start, ease: "power2.out" },
            start,
          );
          masterTl.to(
            card,
            { y: "75vh", opacity: 0, duration: end - mid, ease: "power2.in" },
            mid,
          );
        });

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

      {/* ── CENTER VORTEX VISUAL (Pure clean cosmic graphic, no colored gradient halo) ── */}
      <div
        data-center-vortex
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          maxWidth: "88vw",
          maxHeight: "88vw",
          pointerEvents: "none",
          zIndex: 5,
          borderRadius: "50%",
          overflow: "hidden",
          mixBlendMode: "screen",
          maskImage: "radial-gradient(circle, black 35%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 70%)",
        }}
      >
        <img
          src="/media/letter-vortex.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "contrast(1.1) brightness(0.85)",
          }}
        />
      </div>

      {/* ── CENTER ANCHORED STAGE: TAZRIEL WORDMARK (Layer z-index: 10) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
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
                color: "rgba(255, 255, 255, 0.22)",
                userSelect: "none",
                willChange: "transform, opacity",
              }}
            >
              {dl.char}
            </span>
          ))}
        </div>

        {/* ── TAZRIEL WORDMARK (Centered, Regal Luxury Spacing) ── */}
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
          {heroCascadeTop.map((hl, idx) => (
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
                textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 0 30px rgba(255, 255, 255, 0.25)",
                userSelect: "none",
                willChange: "transform, opacity, filter",
              }}
            >
              {hl.char}
            </span>
          ))}
        </div>
      </div>

      {/* ── CARDS LAYER (z-index: 30, PLACED ABOVE TAZRIEL) ── */}
      {/* Left cards overlap ONLY letter 'T' | Right cards overlap ONLY letter 'L' */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 30,
        }}
      >
        {/* LEFT FLANK TRACK (Right edge covers ONLY 'T', cascading Top to Bottom along Arc) */}
        <div
          style={{
            position: "absolute",
            right: "calc(50% + clamp(130px, 15vw + 20px, 240px))",
            top: "50%",
            width: "min(340px, calc(100vw - 36px))",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {leftServices.map((svc) => (
            <div
              key={svc.id}
              data-left-card
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "100%",
                willChange: "transform, opacity",
                pointerEvents: "auto",
              }}
            >
              {/* Premium Glassmorphism Card (Floating in front of 'T') */}
              <div
                style={{
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(24px) saturate(160%)",
                  WebkitBackdropFilter: "blur(24px) saturate(160%)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "22px",
                  padding: "24px 26px",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
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
                        color: "rgba(255, 255, 255, 0.6)",
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
          ))}
        </div>

        {/* RIGHT FLANK TRACK (Left edge covers ONLY 'L', cascading Top to Bottom along Arc) */}
        <div
          style={{
            position: "absolute",
            left: "calc(50% + clamp(130px, 15vw + 20px, 240px))",
            top: "50%",
            width: "min(340px, calc(100vw - 36px))",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {rightServices.map((svc) => (
            <div
              key={svc.id}
              data-right-card
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                willChange: "transform, opacity",
                pointerEvents: "auto",
              }}
            >
              {/* Premium Glassmorphism Card (Floating in front of 'L') */}
              <div
                style={{
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(24px) saturate(160%)",
                  WebkitBackdropFilter: "blur(24px) saturate(160%)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "22px",
                  padding: "24px 26px",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
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
                        color: "rgba(255, 255, 255, 0.6)",
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
