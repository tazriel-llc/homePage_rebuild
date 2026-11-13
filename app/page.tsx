import ChapterRail from "@/components/motion/chapter-rail";
import Hero from "@/components/sections/hero";
import {
  ChapterStakes,
  ChapterProblem,
  ChapterMechanism,
  ChapterAnswer,
} from "@/components/sections/chapters";
import GlobalFootprint from "@/components/sections/global-footprint";
import SolutionsHolder from "@/components/sections/solutions-holder";
import BuildFutureCta from "@/components/sections/build-future-cta";
import Process from "@/components/sections/process";
import Recognition from "@/components/sections/recognition";
import ContactCta from "@/components/sections/contact-cta";

/**
 * Tazriel Sovereign Digital Flagship — Homepage Architecture.
 *
 * Narrative Flow (InterGest Canada & Swiss Editorial Luxury):
 * 01. Hero — Sovereign thesis & non-fungible attention mandate.
 * 02. Chapters 01–04 — Tactile sheet-over-sheet sticky parallax storytelling.
 * 03. GlobalFootprint — Architectural network ledger (Addis Ababa + Skopje + Springfield).
 * 04. SolutionsHolder — The cinematic zoom-in portal, 5 horizontal discipline slides,
 *     and the zoom-out reveal with "WE SOLVE WHAT STANDS IN YOUR WAY" in background.
 * 05. BuildFutureCta — Intergest Canada cta_wrap u-zindex-1: Pinned static sentence
 *     with architectural glass atrium globe plate zooming out on scroll.
 * 06. Process & Delivery Governance.
 * 07. Recognition & Institutional Credentials.
 * 08. Sovereign Engagement Contact.
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

        <GlobalFootprint />
        <SolutionsHolder />
        <BuildFutureCta />
        <Process />
        <Recognition />
        <ContactCta />
      </main>
    </>
  );
}
