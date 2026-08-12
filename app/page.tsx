import Grain from "@/components/ui/grain";
import ChapterRail from "@/components/motion/chapter-rail";
import Hero from "@/components/sections/hero";
import {
  ChapterStakes,
  ChapterProblem,
  ChapterMechanism,
  ChapterAnswer,
} from "@/components/sections/chapters";
import ServiceIndex from "@/components/sections/service-index";
import Capabilities from "@/components/sections/capabilities";
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
      <Grain />
      <ChapterRail />
      <main id="main">
        <Hero />

        <ChapterStakes />
        <ChapterProblem />
        <ChapterMechanism />
        <ChapterAnswer />

        <ServiceIndex />
        <Capabilities />
        <Process />
        <Recognition />
        <ContactCta />
      </main>
    </>
  );
}
