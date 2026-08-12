/**
 * Fixed SVG grain over the ink field. Costs ~400 bytes and does the work a
 * generated background image would have done — no asset, nothing to license. §10
 */
export default function Grain() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] size-full opacity-[0.035] mix-blend-overlay"
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}
