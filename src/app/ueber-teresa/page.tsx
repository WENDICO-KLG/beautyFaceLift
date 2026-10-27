import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { pageGraph, personSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/misc";
import { PageHeader } from "@/components/layout/PageHeader";
import { AboutTeresa } from "@/components/sections/AboutTeresa";
import { Reviews } from "@/components/sections/Reviews";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: `Über ${SITE.owner.name}, Kosmetikerin in Zürich`,
  description: `${SITE.owner.name} führt ${SITE.name} an der Bahnhofstrasse in Zürich seit über ${SITE.owner.yearsExperience} Jahren. Persönliche Beratung und Behandlung, ohne wechselnde Therapeutinnen.`,
  alternates: { canonical: "/ueber-teresa" },
};

export default function UeberTeresaPage() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/ueber-teresa", name: `Über ${SITE.owner.name}`, type: "AboutPage", extra: [personSchema()] })} />
      <PageHeader
        crumbs={[{ name: "Über Teresa", href: "/ueber-teresa" }]}
        title={`Über ${SITE.owner.firstName}`}
        lead={`${SITE.owner.name} ist Kosmetikerin und Inhaberin von ${SITE.name}. Sie behandelt jede Kundin selbst.`}
        image={{ src: "/images/gesichtsmassage-detail.jpg", label: "Gesichtsmassage mit warmen Händen", position: "50% 30%" }}
      />
      <AboutTeresa />
      <Reviews />
      <CTASection />
    </>
  );
}
