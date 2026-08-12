import RevealText from "@/components/motion/reveal-text";

/**
 * One sentence, one viewport, nothing else. The confidence of an empty room —
 * and the clearest possible signal that the site is not fighting for attention. §7.1
 *
 * `data-field="paper"` is what the nav watches to invert itself. §5.2
 */
export default function Statement() {
  return (
    <section
      data-field="paper"
      className="flex min-h-[80svh] items-center bg-paper px-gutter py-section text-ink"
    >
      <div className="mx-auto w-full max-w-frame">
        <RevealText
          as="h2"
          className="max-w-[20ch] text-display-l lg:ml-[16.66%]"
        >
          Outsourcing failed you because you were sold capacity. We sell{" "}
          <em className="italic">judgement</em>.
        </RevealText>
      </div>
    </section>
  );
}
