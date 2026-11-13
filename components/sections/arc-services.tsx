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

// 3 Left Services
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

// 3 Right Services
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
          style={{ width: "36px", height: "36px" }}
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
          style={{ width: "36px", height: "36px" }}
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
          style={{ width: "36px", height: "36px" }}
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
          style={{ width: "36px", height: "36px" }}
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
          style={{ width: "36px", height: "36px" }}
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
          style={{ width: "36px", height: "36px" }}
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

      // Monolith is ALWAYS permanently visible in center
      gsap.set(monolith, { scale: 1, opacity: 1, rotationY: 0, rotationX: 0 });

      // INITIAL POSITIONS (Guaranteed 40vh vertical gap, NEVER overlap):
      // Left Cards:
      // Card 0: Upper Left (-20vh)
      // Card 1: Lower Left (20vh)
      // Card 2: Below Screen (60vh)
      gsap.set(leftCardEls[0], { yPercent: -50, y: "-20vh", x: -15, rotation: -2, opacity: 1, scale: 1 });
      gsap.set(leftCardEls[1], { yPercent: -50, y: "20vh", x: 0, rotation: 0, opacity: 1, scale: 1 });
      gsap.set(leftCardEls[2], { yPercent: -50, y: "60vh", x: -15, rotation: 2, opacity: 0, scale: 0.94 });

      // Right Cards:
      // Card 0: Lower Right (20vh)
      // Card 1: Upper Right (-20vh)
      // Card 2: Above Screen (-60vh)
      gsap.set(rightCardEls[0], { yPercent: -50, y: "20vh", x: 15, rotation: 2, opacity: 1, scale: 1 });
      gsap.set(rightCardEls[1], { yPercent: -50, y: "-20vh", x: 0, rotation: 0, opacity: 1, scale: 1 });
      gsap.set(rightCardEls[2], { yPercent: -50, y: "-60vh", x: 15, rotation: -2, opacity: 0, scale: 0.94 });

      gsap.set(blindsContainer, { pointerEvents: "none" });
      gsap.set(blinds, { scaleX: 0 });
      gsap.set(outroText, { opacity: 0, y: 30 });

      // Master Timeline (scrub: 1.5)
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

      // Monolith 3D perspective tilt during scroll
      masterTl.to(
        monolith,
        {
          rotationY: 10,
          rotationX: -5,
          scale: 1.04,
          duration: 0.8,
          ease: "none",
        },
        0,
      );

      // LEFT COLUMN: Bottom to Top Arc Flow
      // Phase 1 (0.05 -> 0.40):
      // Card 0 glides from -20vh -> -62vh (exits top)
      masterTl.to(
        leftCardEls[0],
        {
          y: "-62vh",
          x: -25,
          rotation: -4,
          opacity: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Card 1 glides from 20vh -> -20vh (takes Upper Left)
      masterTl.to(
        leftCardEls[1],
        {
          y: "-20vh",
          x: -15,
          rotation: -2,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Card 2 enters from 60vh -> 20vh (takes Lower Left)
      masterTl.to(
        leftCardEls[2],
        {
          y: "20vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Phase 2 (0.42 -> 0.78):
      // Card 1 glides from -20vh -> -62vh (exits top)
      masterTl.to(
        leftCardEls[1],
        {
          y: "-62vh",
          x: -25,
          rotation: -4,
          opacity: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.42,
      );

      // Card 2 glides from 20vh -> -20vh (takes Upper Left)
      masterTl.to(
        leftCardEls[2],
        {
          y: "-20vh",
          x: -15,
          rotation: -2,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.42,
      );

      // RIGHT COLUMN: Top to Bottom Arc Flow
      // Phase 1 (0.05 -> 0.40):
      // Card 0 glides from 20vh -> 62vh (exits bottom)
      masterTl.to(
        rightCardEls[0],
        {
          y: "62vh",
          x: 25,
          rotation: 4,
          opacity: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Card 1 glides from -20vh -> 20vh (takes Lower Right)
      masterTl.to(
        rightCardEls[1],
        {
          y: "20vh",
          x: 15,
          rotation: 2,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Card 2 enters from -60vh -> -20vh (takes Upper Right)
      masterTl.to(
        rightCardEls[2],
        {
          y: "-20vh",
          x: 0,
          rotation: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.05,
      );

      // Phase 2 (0.42 -> 0.78):
      // Card 1 glides from 20vh -> 62vh (exits bottom)
      masterTl.to(
        rightCardEls[1],
        {
          y: "62vh",
          x: 25,
          rotation: 4,
          opacity: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.42,
      );

      // Card 2 glides from -20vh -> 20vh (takes Lower Right)
      masterTl.to(
        rightCardEls[2],
        {
          y: "20vh",
          x: 15,
          rotation: 2,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.42,
      );

      // Smooth Breaking Transition (Phase 3: 0.80 -> 1.00)
      masterTl.set(blindsContainer, { pointerEvents: "auto" }, 0.80);

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
          0.81 + idx * 0.025,
        );
      });

      // Expand bands to fuse solid
      masterTl.to(
        blinds,
        {
          scaleY: 2.8,
          duration: 0.06,
          ease: "power2.inOut",
        },
        0.91,
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

      {/* ── SVG Filter for Stone Texture ── */}
      <svg aria-hidden style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}>
        <filter id={`stone-noise-${filterId}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.04 0.07" numOctaves="3" result="noise" />
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 0.35 0"
          />
        </filter>
      </svg>

      {/* ── AMBIENT COSMIC DEPTH BLOOMS (NO TILED WALLPAPER) ── */}
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
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            opacity: 0.35,
            filter: "blur(90px)",
            background: "radial-gradient(circle, rgba(237, 76, 0, 0.75) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── MASSIVE CENTRAL TAZRIEL MONOLITH (PERMANENTLY VISIBLE IN MIDDLE) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <div
          data-tazriel-monolith
          style={{
            position: "relative",
            width: "440px",
            height: "440px",
            maxWidth: "85vw",
            maxHeight: "85vw",
            borderRadius: "28px",
            overflow: "hidden",
            background: "radial-gradient(circle at 35% 30%, #2c2e3c 0%, #171822 50%, #0a0b12 85%, #040508 100%)",
            boxShadow:
              "inset 0 1px 3px rgba(255,255,255,0.3), inset 0 -3px 6px rgba(0,0,0,0.95), 0 35px 90px -10px rgba(0,0,0,0.95)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            willChange: "transform",
          }}
        >
          {/* Stone Texture Filter */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.35,
              mixBlendMode: "overlay",
              filter: `url(#stone-noise-${filterId})`,
              background: "#555",
              pointerEvents: "none",
            }}
          />

          {/* Specular Sheen */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />

          {/* Deep Carved Tazriel Sigil (Massive Scale) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "32px",
            }}
          >
            <svg
              style={{
                width: "200px",
                height: "200px",
                color: "rgba(244, 241, 236, 0.9)",
                filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.95))",
              }}
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              <path d="M32 25 L55 60 L45 60 L24 25 Z" fill="currentColor" fillOpacity="0.88" />
              <path d="M52 25 L75 60 L65 60 L44 25 Z" fill="currentColor" fillOpacity="0.88" />
              <line
                x1="18"
                y1="72"
                x2="82"
                y2="72"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeOpacity="0.65"
              />
            </svg>

            <span
              style={{
                marginTop: "16px",
                fontFamily: "monospace",
                fontSize: "12px",
                letterSpacing: "0.28em",
                color: "rgba(244, 241, 236, 0.75)",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              TAZRIEL SOVEREIGN BENCH
            </span>
          </div>

          {/* Accent Rim Highlight */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "28px",
              border: "1px solid rgba(237, 76, 0, 0.25)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* ── LEFT FLANK: ARC SERVICES (Bottom to Top) ── */}
      {/* Anchored to outer left flank, guaranteed 360px width, never squished */}
      <div
        style={{
          position: "absolute",
          left: "5vw",
          top: "50%",
          width: "360px",
          height: "100%",
          pointerEvents: "none",
          zIndex: 20,
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
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "20px",
                padding: "26px 28px",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "180px",
              }}
            >
              {/* Header: Title + Geometric Line Icon */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                <h3
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "1.35rem",
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
                  marginTop: "16px",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.7)",
                  margin: "16px 0 0 0",
                }}
              >
                {svc.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── RIGHT FLANK: ARC SERVICES (Top to Bottom) ── */}
      {/* Anchored to outer right flank, guaranteed 360px width, never squished */}
      <div
        style={{
          position: "absolute",
          right: "5vw",
          top: "50%",
          width: "360px",
          height: "100%",
          pointerEvents: "none",
          zIndex: 20,
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
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "20px",
                padding: "26px 28px",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "180px",
              }}
            >
              {/* Header: Title + Geometric Line Icon */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                <h3
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontSize: "1.35rem",
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
                  marginTop: "16px",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.7)",
                  margin: "16px 0 0 0",
                }}
              >
                {svc.description}
              </p>
            </div>
          </div>
        ))}
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

      {/* ── SMOOTH BREAKING TRANSITION BLINDS (Screenshot 4) ── */}
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
              fontFamily: "Georgia, serif",
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
