import Link from "next/link";
import RevealText from "@/components/motion/reveal-text";
import RevealBlock from "@/components/motion/reveal-block";
import Magnetic from "@/components/motion/magnetic";

/** Oversized invitation, one action. §7.1 */
export default function ContactCta() {
  return (
    <section
      data-field="paper"
      className="flex min-h-[80svh] items-center bg-paper px-gutter py-section text-ink"
    >
      <div className="mx-auto w-full max-w-frame">
        <RevealText as="h2" className="max-w-[12ch] text-display-xl">
          Tell us what isn&rsquo;t working.
        </RevealText>

        <RevealBlock delay={0.3}>
          <p className="measure mt-10 text-body-l text-muted-paper">
            One conversation, no pitch deck. We will tell you whether this is
            work we should be doing for you.
          </p>
        </RevealBlock>

        <RevealBlock delay={0.45}>
          <div className="-ml-3 mt-12">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-block bg-ink px-8 py-4 text-sm font-medium text-paper transition-opacity duration-300 hover:opacity-90"
              >
                Start a conversation
              </Link>
            </Magnetic>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
