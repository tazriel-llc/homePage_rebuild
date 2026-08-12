import Link from "next/link";
import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";
import Magnetic from "@/components/motion/magnetic";
import ImageField from "@/components/motion/image-field";
import { company } from "@/content/site";
import { heroMedia } from "@/content/media";

/**
 * One idea, one action. No stat cards, no secondary CTA, no scroll hint —
 * every one of those was on the old hero and every one diluted it. §7.1
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-gutter pb-section pt-40">
      <ImageField shards={heroMedia} zoom={false} />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/5 h-[75vw] w-[75vw] rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-depth) 0%, transparent 65%)",
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30"
      />

      <div className="relative z-10 mx-auto w-full max-w-frame">
        <RevealBlock>
          <p className="mb-10 text-micro font-medium uppercase text-accent">
            Global operations — two continents
          </p>
        </RevealBlock>

        <RevealText as="h1" className="max-w-[14ch] text-display-xl" delay={0.1}>
          Specialists who work the way you <em className="italic">already</em>{" "}
          do.
        </RevealText>

        <RevealBlock delay={0.4}>
          <p className="measure mt-10 text-body-l text-muted">
            {company.description}
          </p>
        </RevealBlock>

        <RevealBlock delay={0.55}>
          <div className="-ml-3 mt-12 flex flex-wrap items-center gap-1">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-block bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white"
              >
                Start a conversation
              </Link>
            </Magnetic>
            <Link
              href="#disciplines"
              className="link-wipe ml-6 text-sm font-medium text-muted transition-colors duration-300 hover:text-paper"
            >
              Seven disciplines
            </Link>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
