import Link from "next/link";
import RevealBlock from "@/components/motion/reveal-block";
import RevealText from "@/components/motion/reveal-text";
import { liveServices } from "@/content/site";

/**
 * "Elite talent" needs evidence, and the old site had none. §7.1
 *
 * Ships as a typographic roster of disciplines rather than portraits: team
 * photography and named specialists are content dependencies (§13.1, §13.2)
 * and this site does not ship stock or synthetic faces standing in for staff.
 * When the real roster lands, names and years-in-platform slot into the same
 * rows without a layout change.
 */
export default function Bench() {
  return (
    <section className="px-gutter py-section">
      <div className="mx-auto max-w-frame">
        <RevealBlock>
          <p className="mb-6 text-micro font-medium uppercase text-accent">
            The bench
          </p>
        </RevealBlock>

        <RevealText as="h2" className="max-w-[18ch] text-display-l">
          Senior operators, not seat count.
        </RevealText>

        <RevealBlock delay={0.2}>
          <p className="measure mt-8 text-body-l text-muted">
            Every engagement is staffed by people who have run the discipline
            before — inside your tooling, inside your process, accountable to
            your standards rather than to a ticket queue.
          </p>
        </RevealBlock>

        <RevealBlock stagger className="mt-20 border-t border-line">
          {liveServices.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col gap-2 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-12"
            >
              <span className="w-56 shrink-0 text-micro font-medium uppercase text-muted">
                {service.discipline}
              </span>
              <span className="text-body-l">{service.name}</span>
            </div>
          ))}
        </RevealBlock>

        <RevealBlock delay={0.2}>
          <Link
            href="/about"
            className="link-wipe mt-12 inline-block text-sm font-medium"
          >
            Meet the firm
          </Link>
        </RevealBlock>
      </div>
    </section>
  );
}
