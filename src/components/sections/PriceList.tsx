import Link from "next/link";
import { PRICE_EXTRAS, TREATMENTS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

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

/** Full price list, grouped in two columns. */
export function PriceList() {
  return (
    <section className="py-section" aria-labelledby="preise-title">
      <div className="container-site">
        <div className="grid gap-12 rounded-panel bg-white px-6 py-10 sm:px-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16 lg:px-14 lg:py-14">
          <div data-reveal="up">
            <h2 id="preise-title" className="text-h2 text-espresso">
              Preisliste
            </h2>
            <p className="mt-5 max-w-xs text-small text-taupe">
              Einstiegspreise in CHF. Kombinationen und Intensiv-Behandlungen sowie Brauen, Wimpern, Waxing, Massage, Make-up und Laser-Haarentfernung auf Anfrage.
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
              <h3 className="border-b border-line pb-3 font-sans text-small font-medium text-espresso">Behandlungen</h3>
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
              <h3 className="border-b border-line pb-3 font-sans text-small font-medium text-espresso">Weitere Gesichtsbehandlungen</h3>
              <ul className="mt-2">
                {PRICE_EXTRAS.map((p) => (
                  <PriceRow
                    key={p.name}
                    name={p.name}
                    meta={`${p.durationMin} Min`}
                    price={`${p.price}`}
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
