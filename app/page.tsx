import Hero from "@/components/sections/hero";
import ArcServices from "@/components/sections/arc-services";
import GlobalFootprint from "@/components/sections/global-footprint";
import SolutionsHolder from "@/components/sections/solutions-holder";
import BuildFutureCta from "@/components/sections/build-future-cta";
import Process from "@/components/sections/process";
import Recognition from "@/components/sections/recognition";
import ContactCta from "@/components/sections/contact-cta";

/**
 * Tazriel Sovereign Digital Flagship — Homepage Architecture.
 *
 * Narrative Flow (TRIONN Kinetic Storytelling & Swiss Editorial Luxury):
 * 01. Hero — Sovereign thesis & non-fungible attention mandate.
 * 02. ArcServices — TRIONN-inspired sculptural disciplines showcase:
 *     - Phase 1: Massive Stacked Typographic Gate (A.I. / SOFTWARE / OPERATIONS / GOVERNANCE).
 *     - Phase 2: Letter dispersion & 3D shatter around the carved Basalt Monolith.
 *     - Phase 3: Counter-orbital curved arc trajectories (Left: Bottom -> Top, Right: Top -> Bottom).
 *     - Phase 4: Smooth Breaking Transition: Horizontal paper bands slicing across into the network ledger.
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
    <main id="main">
      <Hero />
      <ArcServices />
      <GlobalFootprint />
      <SolutionsHolder />
      <BuildFutureCta />
      <Process />
      <Recognition />
      <ContactCta />
    </main>
  );
}
