"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

// Registered once, here. Never in a component. GSAP guards its own SSR access,
// so this is safe to evaluate during the server render of a client module.
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, Observer);

/**
 * The only eases used on this site. §4.4
 * `back`, `elastic`, and anything springy are banned — they read as playful,
 * and playful is the opposite of what we're selling.
 */
export const EASE = {
  micro: "power2.out", // hover, focus, toggle
  reveal: "expo.out", // content entering
  transition: "power3.inOut", // page and section changes
  ambient: "sine.inOut", // background drift
} as const;

export const DUR = {
  micro: 0.28,
  reveal: 1.0,
  transition: 0.7,
} as const;

/** Shared ScrollTrigger defaults. `once` matters: content must never re-animate
 *  on scroll-back — the single most irritating scroll bug on the web. §5.2 */
export const TRIGGER = {
  start: "top 82%",
  once: true,
} as const;

ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, SplitText, Observer, useGSAP };
