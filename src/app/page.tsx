import { homeGraph } from "@/lib/schema";
import { JsonLd } from "@/components/ui/misc";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Treatments } from "@/components/sections/Treatments";
import { TreatmentFinder } from "@/components/sections/TreatmentFinder";
import { AboutTeresa } from "@/components/sections/AboutTeresa";
import { Results } from "@/components/sections/Results";
import { Reviews } from "@/components/sections/Reviews";
import { Studio } from "@/components/sections/Studio";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeGraph()} />
      <Hero />
      <TrustBar />
      <Treatments />
      <TreatmentFinder />
      <AboutTeresa />
      <Results />
      <Reviews />
      <Studio />
      <FAQ />
      <CTASection />
    </>
  );
}
