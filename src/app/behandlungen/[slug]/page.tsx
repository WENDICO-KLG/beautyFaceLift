import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TREATMENTS, getTreatment } from "@/lib/content";
import { SITE } from "@/lib/site";
import { treatmentGraph } from "@/lib/schema";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { JsonLd } from "@/components/ui/misc";
import { TreatmentCard } from "@/components/sections/TreatmentCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const t = getTreatment((await params).slug);
  if (!t) return {};
  return {
    title: { absolute: t.seo.title },
    description: t.seo.description,
    alternates: { canonical: `/behandlungen/${t.slug}` },
    openGraph: { title: t.seo.title, description: t.seo.description, url: `/behandlungen/${t.slug}` },
  };
}

export default async function TreatmentPage({ params }: { params: Promise<Params> }) {
  const t = getTreatment((await params).slug);
  if (!t) notFound();
  const related = t.related.map((s) => getTreatment(s)!);

  return (
    <>
      <JsonLd data={treatmentGraph(t)} />

      <section className="pb-section pt-28 sm:pt-32 lg:pt-40" aria-labelledby="t-title">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-10 text-[0.8125rem] text-taupe">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-espresso">
                  Startseite
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/behandlungen" className="hover:text-espresso">
                  Behandlungen
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-espresso">
                {t.name}
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow" data-reveal="fade">
                {t.kicker}
              </p>
              <h1 id="t-title" className="mt-5 text-h1 text-espresso" data-reveal="up">
                {t.name} <span className="text-espresso/45">in Zürich</span>
              </h1>
              <p className="mt-7 max-w-prose-narrow text-lead text-taupe" data-reveal="up">
                {t.intro}
              </p>
              <p className="mt-8 text-small text-espresso" data-reveal="fade">
                {t.durationMin} Min, ab CHF {t.priceFrom}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal="up">
                <Button href={SITE.bookingUrl}>{t.name} buchen</Button>
                <Button href={SITE.consultUrl} variant="secondary">
                  Beratung anfragen
                </Button>
              </div>
            </div>
            <ImagePlaceholder label={t.imageLabel} src={t.image} position={t.imagePosition} sizes="(min-width: 1024px) 45vw, 100vw" priority ratio="4 / 5" parallax />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-section" aria-labelledby="benefits-title">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div data-reveal="up">
            <h2 id="benefits-title" className="text-h2 text-espresso">
              Was {t.name} für Ihre Haut tut.
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 border-b border-line pb-4 text-espresso">
                  <span className="size-1.5 rounded-full bg-champagne" aria-hidden="true" /> {b}
                </li>
              ))}
            </ul>
            <h3 className="mt-12 font-display text-[1.375rem] text-espresso">Ideal bei</h3>
            <p className="mt-3 text-taupe">{t.idealFor.join(", ")}</p>
          </div>

          <div data-reveal="up">
            <h2 className="text-h2 text-espresso">So läuft Ihre Behandlung ab.</h2>
            <ol className="mt-10 grid gap-6">
              {t.process.map((p) => (
                <li key={p.title} className="border-t border-line pt-5">
                  <h3 className="font-display text-[1.25rem] text-espresso">{p.title}</h3>
                  <p className="mt-1 text-small text-taupe">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-section" aria-labelledby="related-title">
        <div className="container-site">
          <h2 id="related-title" className="text-h2 text-espresso">
            Passende Behandlungen.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {related.map((r, i) => (
              <TreatmentCard key={r.slug} t={r} tone={i ? "light" : "base"} delay={i * 90} className="h-[26rem]" />
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
