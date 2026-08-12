import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import { platforms } from "@/content/site";

/**
 * Proof section. §7.1
 *
 * Deliberately short: it carries only what is verifiable today — the DesignRush
 * listing and the platforms teams work in. Quantified client outcomes are a
 * content dependency (§13.4); when three cleared results land they become the
 * lead of this section and the platform strip drops below them. Invented
 * statistics do not ship, and a counting-number animation is banned regardless. §5.2
 */
export default function Recognition() {
  return (
    <section className="px-gutter py-section">
      <div className="mx-auto max-w-frame">
        <RevealBlock>
          <p className="mb-6 text-micro font-medium uppercase text-accent">
            Standing
          </p>
        </RevealBlock>

        <RevealText as="h2" className="max-w-[20ch] text-display-m">
          Listed among vetted outsourcing partners on DesignRush.
        </RevealText>

        <RevealBlock stagger className="mt-20 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-ink-raised px-8 py-10 transition-colors duration-300 hover:bg-ink-raised/70"
            >
              <h3 className="font-sans text-sm font-medium">{platform.name}</h3>
              <p className="mt-2 text-sm text-muted">{platform.role}</p>
            </div>
          ))}
        </RevealBlock>
      </div>
    </section>
  );
}
