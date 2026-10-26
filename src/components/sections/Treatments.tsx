import Link from "next/link";
import { PRICE_EXTRAS, TREATMENTS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TreatmentCard } from "./TreatmentCard";

function PriceRow({ name, meta, price, href }: { name: string; meta: string; price: string; href?: string }) {
  const label = href ? (
    <Link href={href} className="hover:text-champagne-deep">
      {name}
    </Link>
  ) : (
    name
  );
  return (
    <li className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 sm:flex-nowrap">
      <span className="w-full font-serif text-[1.1875rem] text-espresso sm:w-auto">{label}</span>
      <span aria-hidden="true" className="mb-1 hidden min-w-8 flex-1 border-b border-dotted border-champagne/70 sm:block" />
      <span className="flex w-full justify-between text-small text-taupe sm:w-auto sm:shrink-0 sm:justify-end">
        {meta}
        <span className="ml-4 inline-block text-right text-espresso sm:min-w-20">{price}</span>
      </span>
    </li>
  );
}

export function Treatments() {
  return (
    <section id="behandlungen" className="py-section" aria-labelledby="behandlungen-title">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="behandlungen-title"
            eyebrow="Behandlungen"
            title={
              <>
                Behandlungen, die Ihre Haut <em>sichtbar</em> verändern.
              </>
            }
            lead="Vier Signature-Treatments – jedes individuell auf Ihre Haut abgestimmt und mit modernster Technologie durchgeführt."
          />
          <Link href="/#finder" className="eyebrow shrink-0 underline-offset-8 hover:underline" data-reveal="fade">
            Welche passt zu mir? →
          </Link>
        </div>
      </div>

      {/* Mobile: horizontal snap row · Desktop: 4-column grid */}
      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--spacing-gutter)] pb-2 sm:container-site sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 sm:overflow-visible lg:mt-20 lg:grid-cols-4">
        {TREATMENTS.map((t, i) => (
          <TreatmentCard key={t.slug} t={t} index={i} />
        ))}
      </div>

      {/* Price list */}
      <div id="preise" className="container-site mt-24 lg:mt-32">
        <div className="grid gap-10 rounded-card border border-line bg-white px-6 py-10 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16 lg:py-16">
          <div data-reveal="up">
            <p className="eyebrow">Preise</p>
            <span className="gold-rule mt-5" aria-hidden="true" />
            <h3 className="mt-6 text-h2 text-espresso">
              Transparent. <em className="text-champagne-deep">Ohne</em> Überraschungen.
            </h3>
            <p className="mt-5 text-small text-taupe">
              Die Hautanalyse ist bei Ihrem ersten Termin immer inklusive. Alle Preise in CHF.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={SITE.bookingUrl}>Termin buchen</Button>
              <Button href={SITE.consultUrl} variant="secondary">
                Beratung anfragen
              </Button>
            </div>
          </div>
          {/* PLACEHOLDER: prices & durations */}
          <ul className="divide-y divide-line" data-reveal="up">
            {TREATMENTS.map((t) => (
              <PriceRow
                key={t.slug}
                name={t.name}
                href={`/behandlungen/${t.slug}`}
                meta={`${t.durationMin} Min`}
                price={`ab ${t.priceFrom}`}
              />
            ))}
            {PRICE_EXTRAS.map((p) => (
              <PriceRow
                key={p.name}
                name={p.name}
                meta={p.note ?? `${p.durationMin} Min`}
                price={p.price === 0 ? "inkl." : `${p.price}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
