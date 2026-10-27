import type { Metadata } from "next";
import { pageGraph } from "@/lib/schema";
import { JsonLd } from "@/components/ui/misc";
import { PageHeader } from "@/components/layout/PageHeader";
import { Results } from "@/components/sections/Results";
import { Reviews } from "@/components/sections/Reviews";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ergebnisse und Bewertungen",
  description:
    "Vorher und Nachher: Ergebnisse von Microneedling, Fruchtsäurepeeling und Hydra4Face bei Beauty Face Lift Zürich, dazu Bewertungen unserer Kundinnen.",
  alternates: { canonical: "/ergebnisse" },
};

export default function ErgebnissePage() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/ergebnisse", name: "Ergebnisse" })} />
      <PageHeader
        crumbs={[{ name: "Ergebnisse", href: "/ergebnisse" }]}
        title="Ergebnisse"
        lead="Was regelmässige, gut abgestimmte Behandlungen bewirken können. Jede Haut reagiert anders, deshalb beginnt jede Behandlung mit einer Analyse."
        image={{ src: "/images/gesichtsmaske.jpg", label: "Entspannte Kundin mit Pflegemaske", position: "50% 35%" }}
      />
      <div className="pt-[var(--spacing-section)]" />
      <Results />
      <Reviews />
      <CTASection />
    </>
  );
}
