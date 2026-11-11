import Link from "next/link";
import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";
import Magnetic from "@/components/motion/magnetic";
import CineMedia from "@/components/motion/cine-media";
import { closingVideo, videoPoster } from "@/content/media";

/** Oversized invitation, one action. §7.1 */
export default function ContactCta() {
  return (
    <section
      data-field="paper"
      className="relative flex min-h-[85svh] items-center overflow-hidden border-t border-line-paper bg-paper px-gutter py-section text-ink"
    >
      {closingVideo && (
        <>
          <CineMedia
            video={closingVideo}
            poster={videoPoster[closingVideo]}
            tint={0.55}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-paper/50"
          />
        </>
      )}

      <div className="relative z-10 mx-auto w-full max-w-frame">
        <RevealBlock>
          <div className="mb-8 flex items-center gap-3">
            <span className="text-micro font-medium uppercase tracking-[0.2em] text-accent">
              Consultation Initiation
            </span>
            <span className="size-1 rounded-full bg-accent" />
            <span className="text-micro font-medium uppercase tracking-widest text-muted-paper">
              Direct Executive Access
            </span>
          </div>
        </RevealBlock>

        <RevealText as="h2" className="max-w-[14ch] text-display-xl">
          Tell us what isn&rsquo;t working.
        </RevealText>

        <RevealBlock delay={0.3}>
          <p className="measure mt-8 text-body-l text-muted-paper">
            One conversation, no pitch deck. We will evaluate your platforms and
            tell you candidly whether this is work we should be doing for you.
          </p>
        </RevealBlock>

        <RevealBlock delay={0.45}>
          <div className="-ml-3 mt-12 flex flex-wrap items-center gap-6">
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-ink px-10 py-5 text-sm font-medium text-paper transition-all duration-300 hover:bg-ink-raised"
              >
                <span>Initiate a consultation</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Magnetic>

            <Link
              href="/about"
              className="link-wipe text-sm font-medium text-muted-paper hover:text-ink"
            >
              Explore our operating model
            </Link>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
