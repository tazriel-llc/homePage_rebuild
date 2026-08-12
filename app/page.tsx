import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";
import Magnetic from "@/components/motion/magnetic";

/**
 * Phase 0 foundation check — not the homepage.
 *
 * Exercises every token and every motion primitive on one screen so the
 * foundation can be judged before eight real sections are built on top of it.
 * Replaced entirely in Phase 2.
 */

const tokens = [
  ["--color-ink", "#020035", "primary ground, ~55%"],
  ["--color-paper", "#F4F1EC", "warm neutral, ~40%"],
  ["--color-ink-raised", "#0A0A4D", "panels — replaces frosted glass"],
  ["--color-depth", "#2100B1", "ambient bloom inside ink only"],
  ["--color-accent", "#ED4C00", "≤1% of ink — never a filled button"],
];

export default function FoundationCheck() {
  return (
    <main>
      {/* ── Ink field ─────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-gutter py-section">
        {/* The one permitted gradient: a slow, low-contrast depth bloom.
            Never a discrete shape, never a floating orb. §4.1 */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-1/3 left-1/4 h-[80vw] w-[80vw] rounded-full opacity-25 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--color-depth) 0%, transparent 65%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-frame">
          <RevealBlock>
            <p className="mb-8 text-micro font-medium uppercase text-accent">
              Phase 0 — Foundation
            </p>
          </RevealBlock>

          <RevealText
            as="h1"
            className="max-w-[14ch] text-display-xl"
            delay={0.1}
          >
            Specialists who work the way you <em className="italic">already</em>{" "}
            do.
          </RevealText>

          <RevealBlock delay={0.4}>
            <p className="measure mt-10 text-body-l text-muted">
              Tazriel places senior operators inside your process — across seven
              disciplines, on two continents. This page exists to verify the
              type scale, the colour ratio, and the motion system before any
              real section is built on top of them.
            </p>
          </RevealBlock>

          <RevealBlock delay={0.55}>
            <div className="mt-12 flex flex-wrap items-center gap-2">
              {/* Primary CTA: solid paper on ink. Not orange, not a pill. §4.1 */}
              <Magnetic>
                <a
                  href="#paper"
                  className="inline-block bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white"
                >
                  Start a conversation
                </a>
              </Magnetic>

              <a
                href="#tokens"
                className="link-wipe ml-4 text-sm font-medium text-muted transition-colors duration-300 hover:text-paper"
              >
                Inspect the tokens
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ── Paper field — the warm/cold contrast doing the work ── */}
      <section
        id="paper"
        className="bg-paper px-gutter py-section text-ink"
        style={{ colorScheme: "light" }}
      >
        <div className="mx-auto max-w-frame">
          {/* Asymmetric: offset to a 7-column measure, never centred. §4.3 */}
          <RevealText
            as="h2"
            className="ml-0 max-w-[18ch] text-display-l lg:ml-[16.66%]"
          >
            Confidence is what you leave out.
          </RevealText>
        </div>
      </section>

      {/* ── Token audit ───────────────────────────────────────── */}
      <section id="tokens" className="px-gutter py-section">
        <div className="mx-auto max-w-frame">
          <RevealBlock>
            <p className="mb-16 text-micro font-medium uppercase text-accent">
              Palette — brand retained, ratio rewritten
            </p>
          </RevealBlock>

          {/* Structure from hairlines, not shadows. §4.1 */}
          <RevealBlock stagger className="border-t border-line">
            {tokens.map(([name, hex, role]) => (
              <div
                key={name}
                className="flex items-center gap-6 border-b border-line py-6"
              >
                <span
                  aria-hidden
                  className="size-10 shrink-0 border border-line"
                  style={{ backgroundColor: hex }}
                />
                <code className="w-56 shrink-0 text-sm text-paper">{name}</code>
                <code className="w-24 shrink-0 text-sm text-muted">{hex}</code>
                <span className="text-sm text-muted">{role}</span>
              </div>
            ))}
          </RevealBlock>

          <RevealBlock delay={0.2}>
            <p className="measure mt-16 text-sm text-muted">
              No box-shadow anywhere on this page. No backdrop-blur. No filled
              orange. Scroll back up — nothing re-animates.
            </p>
          </RevealBlock>
        </div>
      </section>
    </main>
  );
}
