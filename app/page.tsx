import ChapterRail from "@/components/motion/chapter-rail";
import Hero from "@/components/sections/hero";
import {
  ChapterStakes,
  ChapterProblem,
  ChapterMechanism,
  ChapterAnswer,
} from "@/components/sections/chapters";
import CommandTerminal from "@/components/sections/command-terminal";
import SolarRadar from "@/components/sections/solar-radar";
import ProofLedger from "@/components/sections/proof-ledger";
import BuildFutureCta from "@/components/sections/build-future-cta";
import Process from "@/components/sections/process";
import Recognition from "@/components/sections/recognition";
import ContactCta from "@/components/sections/contact-cta";

/**
 * Tazriel Sovereign Digital Flagship — Homepage Architecture.
 *
 * Narrative Flow:
 * 01. Hero — The sovereign thesis & attention mandate.
 * 02. Chapters 01–04 — Layered physical sheet-over-sheet storytelling.
 * 03. Command Terminal — Pinned executive console replacing forced slide zooms.
 * 04. Solar Radar — Live dual-continent 24/5 handoff timeline (Addis Ababa + Skopje).
 * 05. Proof Ledger — Concrete comparative audit (Conventional BPO failure vs. Sovereign Bench).
 * 06. Build Your Future — Full-width architectural command atrium and consultation booking.
 * 07. Delivery Process, Credentials & Direct Engagement.
 */
export default function Home() {
  return (
    <>
      <ChapterRail />
      <main id="main">
        <Hero />

        <ChapterStakes />
        <ChapterProblem />
        <ChapterMechanism />
        <ChapterAnswer />

        <CommandTerminal />
        <SolarRadar />
        <ProofLedger />
        <BuildFutureCta />
        <Process />
        <Recognition />
        <ContactCta />
      </main>
    </>
  );
}
