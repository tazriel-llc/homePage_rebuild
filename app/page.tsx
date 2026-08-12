import Grain from "@/components/ui/grain";
import Hero from "@/components/sections/hero";
import Statement from "@/components/sections/statement";
import ServiceIndex from "@/components/sections/service-index";
import Capabilities from "@/components/sections/capabilities";
import Bench from "@/components/sections/bench";
import Process from "@/components/sections/process";
import Recognition from "@/components/sections/recognition";
import ContactCta from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Grain />
      <main id="main">
        <Hero />
        <Statement />
        <ServiceIndex />
        <Capabilities />
        <Bench />
        <Process />
        <Recognition />
        <ContactCta />
      </main>
    </>
  );
}
