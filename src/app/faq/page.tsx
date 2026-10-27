import type { Metadata } from "next";
import { faqSchema, pageGraph } from "@/lib/schema";
import { JsonLd } from "@/components/ui/misc";
import { PageHeader } from "@/components/layout/PageHeader";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Häufige Fragen",
  description:
    "Antworten zu Dauer, Schmerzen, Vorbereitung, Kosten und Ablauf der Gesichtsbehandlungen bei Beauty Face Lift Zürich.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/faq", name: "Häufige Fragen", type: "FAQPage", extra: [faqSchema()] })} />
      <PageHeader
        crumbs={[{ name: "FAQ", href: "/faq" }]}
        title="Häufige Fragen"
        lead="Alles Wichtige zu Ablauf, Vorbereitung und Kosten. Ihre Frage ist nicht dabei? Teresa berät Sie gerne persönlich."
      />
      <FAQ title="Ablauf, Vorbereitung und Kosten" />
      <CTASection />
    </>
  );
}
