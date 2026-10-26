import Link from "next/link";
import { PRICE_EXTRAS, TREATMENTS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TreatmentCard } from "./TreatmentCard";

// Bento placement per treatment (desktop). Mobile: horizontal snap row.
const LAYOUT = [
  { variant: "feature", tone: "deep", cls: "lg:col-span-5 lg:row-span-2" },
  { variant: "compact", tone: "base", cls: "lg:col-span-7" },
  { variant: "compact", tone: "light", cls: "lg:col-span-4" },
  { variant: "compact", tone: "base", cls: "lg:col-span-3" },
] as const;

function PriceRow({ name, meta, price, href }: { name: string; meta: string; price: string; href?: string }) {
  return (
    <li className="grid grid-cols-[1fr_auto_auto] items-baseline gap-x-4 py-3">
      <span className="font-display text-[1.1875rem] text-espresso">
        {href ? (
          <Link href={href} className="transition-colors hover:text-champagne-deep">
            {name}
          </Link>
        ) : (
          name
        )}
      </span>
      <span className="whitespace-nowrap text-small text-taupe">{meta}</span>
      <span className="min-w-14 whitespace-nowrap text-right text-small text-espresso">{price}</span>
    </li>
  );
}

export function Treatments() {
  return (
    <section id="behandlungen" className="py-section" aria-labelledby="behandlungen-title">
      <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading id="behandlungen-title" title="Behandlungen, die Ihre Haut sichtbar verändern." />
        <Link
          href="/#finder"
          className="shrink-0 text-small font-medium text-espresso underline decoration-champagne underline-offset-[6px] hover:decoration-espresso"
          data-reveal="fade"
        >
          Welche Behandlung passt zu mir?
        </Link>
      </div>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory scroll-px-[var(--spacing-gutter)] gap-4 overflow-x-auto px-[var(--spacing-gutter)] pb-2 lg:container-site lg:mt-16 lg:grid lg:auto-rows-[21rem] lg:grid-cols-12 lg:gap-4 lg:overflow-visible">
        {TREATMENTS.map((t, i) => (
          <TreatmentCard
            key={t.slug}
            t={t}
            variant={LAYOUT[i].variant}
            tone={LAYOUT[i].tone}
            delay={i * 90}
            className={`h-[30rem] w-[84vw] max-w-sm shrink-0 snap-start sm:w-[22rem] lg:h-auto lg:w-auto lg:max-w-none ${LAYOUT[i].cls}`}
          />
        ))}
      </div>

      {/* Price list, grouped in two columns */}
      <div id="preise" className="container-site mt-24 lg:mt-32">
        <div className="grid gap-12 rounded-panel bg-beige-soft px-6 py-10 sm:px-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16 lg:px-14 lg:py-14">
          <div data-reveal="up">
            <h3 className="text-h2 text-espresso">Preise</h3>
            <p className="mt-5 max-w-xs text-small text-taupe">
              Die Hautanalyse ist bei Ihrem ersten Termin inklusive. Alle Preise in CHF.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row lg:flex-col">
              <Button href={SITE.bookingUrl}>Termin buchen</Button>
              <Button href={SITE.consultUrl} variant="secondary" arrow={false}>
                Beratung anfragen
              </Button>
            </div>
          </div>

          {/* PLACEHOLDER: prices & durations */}
          <div className="grid gap-10 md:grid-cols-2 md:gap-10" data-reveal="up">
            <div>
              <p className="border-b border-line pb-3 text-small font-medium text-espresso">Behandlungen</p>
              <ul className="mt-2">
                {TREATMENTS.map((t) => (
                  <PriceRow
                    key={t.slug}
                    name={t.name}
                    href={`/behandlungen/${t.slug}`}
                    meta={`${t.durationMin} Min`}
                    price={`ab ${t.priceFrom}`}
                  />
                ))}
              </ul>
            </div>
            <div>
              <p className="border-b border-line pb-3 text-small font-medium text-espresso">Beratung und Kuren</p>
              <ul className="mt-2">
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
        </div>
      </div>
    </section>
  );
}
