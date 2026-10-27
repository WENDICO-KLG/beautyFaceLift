import type { Metadata } from "next";
import { FAQS } from "@/lib/content";
import { faqSchema, pageGraph } from "@/lib/schema";
import { JsonLd } from "@/components/ui/misc";
import { PageHeader } from "@/components/layout/PageHeader";
import { PriceList } from "@/components/sections/PriceList";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

const PRICE_FAQS = FAQS.filter((f) => /kostet|lange dauert|wie oft|Beratungstermin/i.test(f.q));

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Preise und Dauer aller Behandlungen bei Beauty Face Lift Zürich: Hydra4Face, Microneedling, Fruchtsäurepeeling, ColdPLASMA und Kuren. Hautanalyse beim ersten Termin inklusive.",
  alternates: { canonical: "/preise" },
};

export default function PreisePage() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/preise", name: "Preise", extra: [faqSchema(PRICE_FAQS)] })} />
      <PageHeader
        crumbs={[{ name: "Preise", href: "/preise" }]}
        title="Preise"
        lead="Transparente Preise ohne versteckte Kosten. Jede Behandlung beginnt mit einer kurzen Analyse Ihrer Haut."
        image={{ src: "/images/lux-produkte.jpg", label: "Pflegeprodukte auf Travertin in warmem Tageslicht" }}
      />
      <PriceList />
      <FAQ items={PRICE_FAQS} title="Fragen zu Kosten und Ablauf" showAllLink />
      <CTASection />
    </>
  );
}
