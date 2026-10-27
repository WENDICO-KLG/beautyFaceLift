import type { Metadata } from "next";
import { pageGraph } from "@/lib/schema";
import { JsonLd } from "@/components/ui/misc";
import { PageHeader } from "@/components/layout/PageHeader";
import { TreatmentGrid } from "@/components/sections/Treatments";
import { TreatmentFinder } from "@/components/sections/TreatmentFinder";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Gesichtsbehandlungen in Zürich",
  description:
    "Hydra4Face, Microneedling, Fruchtsäurepeeling und ColdPLASMA: alle Gesichtsbehandlungen von Beauty Face Lift an der Bahnhofstrasse in Zürich, mit Dauer und Preis.",
  alternates: { canonical: "/behandlungen" },
};

export default function BehandlungenPage() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/behandlungen", name: "Behandlungen", type: "CollectionPage" })} />
      <PageHeader
        crumbs={[{ name: "Behandlungen", href: "/behandlungen" }]}
        title="Behandlungen"
        lead="Vier Gesichtsbehandlungen, jede individuell auf Ihre Haut abgestimmt. Preise und Dauer sehen Sie direkt auf jeder Karte."
        image={{ src: "/images/peeling-pinsel.jpg", label: "Auftragen einer Pflegemaske mit dem Pinsel", position: "50% 35%" }}
      >
        <Button href="/preise" variant="secondary" arrow={false}>
          Zur Preisliste
        </Button>
      </PageHeader>
      <section className="py-section" aria-label="Alle Behandlungen">
        <TreatmentGrid />
      </section>
      <TreatmentFinder />
      <div className="h-[var(--spacing-section)]" aria-hidden="true" />
      <CTASection />
    </>
  );
}
