import ChapterRail from "@/components/motion/chapter-rail";
import Hero from "@/components/sections/hero";
import {
  ChapterStakes,
  ChapterProblem,
  ChapterMechanism,
  ChapterAnswer,
} from "@/components/sections/chapters";
import GlobalFootprint from "@/components/sections/global-footprint";
import ServiceIndex from "@/components/sections/service-index";
import SolutionsHolder from "@/components/sections/solutions-holder";
import Process from "@/components/sections/process";
import Recognition from "@/components/sections/recognition";
import ContactCta from "@/components/sections/contact-cta";

/**
 * Narrative order. Chapters 01–04 are load-bearing: 03 only lands because 02
 * set up the question, and 04 is only an answer because 03 named the variable.
 * Everything after 04 is evidence for the claim 04 makes.
 *
 * Statement and Bench were cut — Statement said what Chapter 02 now says
 * better, and Bench listed the same seven disciplines ServiceIndex already
 * shows.
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

        <ServiceIndex />
        <SolutionsHolder />
        <Process />
        <Recognition />
        <ContactCta />
      </main>
    </>
  );
}
