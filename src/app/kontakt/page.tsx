import type { Metadata } from "next";
import { SITE, fullAddress } from "@/lib/site";
import { businessSchema, pageGraph } from "@/lib/schema";
import { JsonLd } from "@/components/ui/misc";
import { PageHeader } from "@/components/layout/PageHeader";
import { Studio } from "@/components/sections/Studio";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kontakt und Anfahrt",
  description: `${SITE.name}, ${fullAddress}. Öffnungszeiten, Anfahrt ab Zürich HB und Kontakt für Ihre persönliche Beratung.`,
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/kontakt", name: "Kontakt", type: "ContactPage", extra: [businessSchema()] })} />
      <PageHeader
        crumbs={[{ name: "Kontakt", href: "/kontakt" }]}
        title="Kontakt und Anfahrt"
        lead={`Sie finden uns an der ${fullAddress}, wenige Gehminuten vom Hauptbahnhof.`}
        image={{ src: "/images/lux-behandlungsraum.jpg", label: "Heller Behandlungsraum mit hohen Fenstern und Leinenvorhängen", position: "50% 50%" }}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={SITE.bookingUrl}>Termin buchen</Button>
          <Button href={`tel:${SITE.phone.replace(/\s/g, "")}`} variant="secondary" arrow={false} external={false}>
            {SITE.phoneDisplay}
          </Button>
        </div>
      </PageHeader>
      <div className="pt-[var(--spacing-section)]" />
      <Studio />
      <div className="h-[var(--spacing-section)]" aria-hidden="true" />
      <CTASection />
    </>
  );
}
