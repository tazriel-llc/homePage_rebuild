import Chapter from "@/components/motion/chapter";

/**
 * The narrative spine. Four chapters, in dependency order — 03 only lands if
 * you have read 02, and 04 is only an answer because 03 named the question.
 * Reordering them breaks the page, which is the point: the old homepage was
 * eight interchangeable sections, and that is why it read as a catalogue.
 *
 * Structural rule learned from otsuka-air.jp: a chapter holds exactly ONE idea
 * in one viewport. Lists, grids, and indexes stay in ordinary flow sections
 * below — they need scroll room a sticky viewport cannot give them.
 */

export function ChapterStakes() {
  return (
    <Chapter index={1} label="What this actually runs on">
      <h2 id="chapter-1" data-beat className="max-w-[16ch] text-display-l">
        Every operation you run is somebody&rsquo;s full attention.
      </h2>
      <p data-beat className="measure mt-8 text-body-l text-muted">
        Not headcount. Attention — the finite, expensive kind that notices the
        thing nobody wrote down. Your people are already spending all of theirs.
      </p>
    </Chapter>
  );
}

export function ChapterProblem() {
  return (
    <Chapter index={2} label="Why it went wrong last time">
      <h2 id="chapter-2" data-beat className="max-w-[18ch] text-display-l">
        Outsourcing sold you capacity. Capacity is not{" "}
        <em className="italic">judgement</em>.
      </h2>
      <p data-beat className="measure mt-8 text-body-l text-muted">
        More hands closed more tickets and understood less. Escalations came
        back twice. The work got done and quietly got worse — and your own
        engineers ended up doing it anyway.
      </p>
    </Chapter>
  );
}

/** The turn. The only chapter on paper — the light comes on here. */
export function ChapterMechanism() {
  return (
    <Chapter index={3} label="The variable that actually moves" field="paper">
      <h2 id="chapter-3" data-beat className="max-w-[18ch] text-display-l">
        It was never how many. It was whether they had{" "}
        <em className="italic">done it before</em>.
      </h2>
      <p data-beat className="measure mt-8 text-body-l text-muted-paper">
        One operator who has run the discipline — in your tooling, against your
        constraints — resolves what a room of trained-yesterday staff escalates.
        That is the whole difference. It is the only thing we hire for.
      </p>
    </Chapter>
  );
}

export function ChapterAnswer() {
  return (
    <Chapter index={4} label="What we built instead">
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
