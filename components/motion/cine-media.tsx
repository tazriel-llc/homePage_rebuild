"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Props = {
  /** Basename in /public/media/video, without extension. Omit for stills only. */
  video?: string;
  /** Slug in /public/media — the poster, and the whole picture when there is no clip. */
  poster: string;
  className?: string;
  /** Duotone strength. Lower lets more of the real colour through. */
  tint?: number;
};

/**
 * Full-bleed cinematic plate. Renders a clip when one exists and the still
 * alone when it does not, so sections can be built and judged before any video
 * is generated and the clips drop in later without touching layout.
 *
 * The still is not a fallback bolted on afterwards — it is the poster, so the
 * first frame is painted before the clip has downloaded a single byte and the
 * section never flashes empty.
 *
 * Playback is gated three ways:
 * - `preload="none"` plus IntersectionObserver, so a clip below the fold costs
 *   nothing until it is nearly on screen.
 * - Paused whenever off screen. Six autoplaying clips on one page is how a
 *   scroll-driven site drops to 20fps on a laptop.
 * - Under reduced motion the video is never mounted at all — not merely paused.
 *   A paused video still decodes its poster frame and holds a layer.
 *
 * Decorative throughout: `aria-hidden`, empty alt, no controls, muted.
 */
export default function CineMedia({
  video,
  poster,
  className = "",
  tint = 0.75,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const showVideo = Boolean(video) && !reduced;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects on some autoplay policies; nothing to recover, the
          // poster is already the correct still.
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [showVideo]);

  const posterUrl = `/media/${poster}-1280.webp`;

  return (
    <div aria-hidden className={`absolute inset-0 isolate ${className}`}>
      {showVideo ? (
        <video
          ref={ref}
          poster={posterUrl}
          muted
          loop
          playsInline
          preload="none"
          className="size-full object-cover grayscale"
        >
          <source src={`/media/video/${video}.mp4`} type="video/mp4" />
        </video>
      ) : (
        <img
          src={posterUrl}
          srcSet={`/media/${poster}-640.webp 640w, /media/${poster}-1280.webp 1280w`}
          sizes="100vw"
          alt=""
          loading="eager"
          decoding="async"
          className="size-full object-cover grayscale"
        />
      )}

      {/* Same navy duotone as every other image on the site, so generated
          footage and existing photography read as one body of work. */}
      <span
        suppressHydrationWarning
        className="absolute inset-0 mix-blend-color pointer-events-none"
        style={{ backgroundColor: `rgba(2, 0, 53, ${tint})` }}
      />
    </div>
  );
}
