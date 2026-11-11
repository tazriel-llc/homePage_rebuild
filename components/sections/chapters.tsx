import Chapter from "@/components/motion/chapter";

/**
 * The narrative spine. Four chapters, in dependency order — 03 only lands if
 * you have read 02, and 04 is only an answer because 03 named the question.
 *
 * Upgraded:
 * 1. Zero dead zones / zero blank screens during slow scrolling.
 * 2. Chapter 2 elevated from generic stock photo to Executive Strategic Diagnostic Ledger.
 * 3. Chapter 4 features a sovereign dual-continent operational command display.
 */

export function ChapterStakes() {
  return (
    <Chapter
      index={1}
      label="What this actually runs on"
      tag="ATTENTION ARCHITECTURE"
      image="it-helpdesk"
      coords="39.78° N // 89.65° W"
    >
      <h2 id="chapter-1" data-beat className="max-w-[16ch] text-display-l">
        Every operation you run is somebody&rsquo;s full attention.
      </h2>
      <p data-beat className="measure mt-8 text-body-l text-muted">
        Not headcount. Attention — the finite, expensive kind that notices the
        thing nobody wrote down. Your people are already spending all of theirs.
      </p>
      <div data-beat className="mt-8 border-l border-accent/60 pl-5">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          The Core Axiom
        </p>
        <p className="mt-1 text-sm text-paper/80 italic">
          &ldquo;Attention is non-fungible. Adding untrained hands divides it further.&rdquo;
        </p>
      </div>
    </Chapter>
  );
}

export function ChapterProblem() {
  return (
    <Chapter
      index={2}
      label="Why it went wrong last time"
      tag="STRATEGIC DIAGNOSTIC"
      image="saas-product-support"
      coords="DEFLECTION VS RESOLUTION"
      diagnosticLedger={{
        conventionalTitle: "Headcount Illusion",
        conventionalDesc: "More seats closed more tickets, understood less, and bounced escalations back to your engineering team.",
        sovereignTitle: "Root-Cause Mastery",
        sovereignDesc: "Named senior operators work directly in your codebase and rituals, resolving issues at source.",
      }}
    >
      <h2 id="chapter-2" data-beat className="max-w-[18ch] text-display-l">
        Outsourcing sold you capacity. Capacity is not{" "}
        <em className="italic">judgement</em>.
      </h2>
      <p data-beat className="measure mt-8 text-body-l text-muted">
        More hands closed more tickets and understood less. Escalations came
        back twice. The work got done and quietly got worse — and your own
        engineers ended up doing it anyway.
      </p>
      <div data-beat className="mt-8 border-l border-accent/60 pl-5">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          Strategic Principle
        </p>
        <p className="mt-1 text-sm text-paper/80 italic">
          &ldquo;Capacity closes tickets. Judgement resolves systems.&rdquo;
        </p>
      </div>
    </Chapter>
  );
}

/** The turn. The only chapter on paper — the light comes on here. */
export function ChapterMechanism() {
  return (
    <Chapter
      index={3}
      label="The variable that actually moves"
      field="paper"
      tag="DOMAIN MASTERY"
      image="meetings-and-events"
      coords="EXPERIENCE OVER HEADCOUNT"
    >
      <h2 id="chapter-3" data-beat className="max-w-[18ch] text-display-l">
        It was never how many. It was whether they had{" "}
        <em className="italic">done it before</em>.
      </h2>
      <p data-beat className="measure mt-8 text-body-l text-muted-paper">
        One operator who has run the discipline — in your tooling, against your
        constraints — resolves what a room of trained-yesterday staff escalates.
        That is the whole difference. It is the only thing we hire for.
      </p>
      <div data-beat className="mt-8 border-l border-accent/60 pl-5">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          The Decisive Delta
        </p>
        <p className="mt-1 text-sm text-ink/80 italic">
          &ldquo;We hire only specialists who have run the discipline in production.&rdquo;
        </p>
      </div>
    </Chapter>
  );
}

export function ChapterAnswer() {
  return (
    <Chapter
      index={4}
      label="What we built instead"
      tag="SOVEREIGN GLOBAL BENCH"
      coords="TWO CONTINENTS // 24H COVERAGE"
      dualImages={{
        image1: "software-development",
        label1: "ADDIS ABABA HUB",
        tz1: "EAT (UTC+3) · 9.03° N",
        image2: "marketing-and-digital-services",
        label2: "SKOPJE EMEA HUB",
        tz2: "CET (UTC+1) · 41.99° N",
      }}
    >
      <h2 id="chapter-4" data-beat className="max-w-[16ch] text-display-l">
        Senior operators, embedded, on two continents.
      </h2>
      <p data-beat className="measure mt-8 text-body-l text-muted">
        Delivery runs from Addis Ababa and is expanding into North Macedonia,
        giving structured coverage across US and EMEA hours. Seven disciplines.
        You interview every specialist before they join, and they work inside
        your systems rather than beside them.
      </p>
    </Chapter>
  );
}
