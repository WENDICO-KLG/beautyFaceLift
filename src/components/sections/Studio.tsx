import { SITE } from "@/lib/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/misc";
import { Icon } from "@/components/ui/Icon";
import { CornerButton, ShapedCard } from "@/components/ui/ShapedCard";

export function Studio() {
  return (
    <section id="kontakt" className="px-[var(--spacing-frame)]" aria-labelledby="studio-title">
      <div className="rounded-panel bg-beige-soft py-section">
      <div className="container-site">
        <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr]">
          <ShapedCard
            surface="var(--color-beige-soft)"
            reveal
            className="sm:row-span-2"
            topRight={{
              children: (
                <CornerButton href={SITE.mapsUrl} label="Route in Google Maps planen" external>
                  <Icon name="pin" className="size-4" strokeWidth={1.5} />
                </CornerButton>
              ),
            }}
          >
            <ImagePlaceholder label="Behandlungsraum mit ruhiger, heller Atmosphäre" ratio="16 / 10" rounded="rounded-none" className="sm:h-full" reveal={false} />
          </ShapedCard>
          <ImagePlaceholder label="Studio-Details: Produkte & Materialien" ratio="16 / 10" tone="deep" className="hidden sm:block" />
          <ImagePlaceholder label="Eingang Bahnhofstrasse 94" ratio="16 / 10" className="hidden sm:block" />
        </div>

        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div data-reveal="up">
            <p className="eyebrow">Studio und Standort</p>
            <h2 id="studio-title" className="mt-5 text-h2 text-espresso">
              Ihr Studio an der Bahnhofstrasse
            </h2>
            <p className="mt-6 max-w-prose-narrow text-lead text-taupe">
              Ein ruhiger Behandlungsraum im Zentrum von Zürich, wenige Gehminuten vom Hauptbahnhof
              entfernt.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2" data-reveal="up">
            <div className="flex gap-4">
              <IconBadge name="pin" />
              <div>
                <h3 className="font-display text-[1.25rem] text-espresso">Adresse</h3>
                <address className="mt-2 text-small not-italic text-taupe">
                  {SITE.name}
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.city}
                </address>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-block text-small font-medium text-champagne-deep underline-offset-[6px] hover:underline"
                >
                  In Google Maps öffnen
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <IconBadge name="clock" />
              <div className="flex-1">
                <h3 className="font-display text-[1.25rem] text-espresso">Öffnungszeiten</h3>
                {/* PLACEHOLDER: opening hours */}
                <dl className="mt-2 space-y-1 text-small text-taupe">
                  {SITE.openingHours.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4">
                      <dt>{h.label}</dt>
                      <dd className="text-espresso">{h.opens ? `${h.opens}-${h.closes}` : "geschlossen"}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 text-[0.75rem] text-taupe">Termine nach Vereinbarung</p>
              </div>
            </div>

            <div className="flex gap-4">
              <IconBadge name="arrow" />
              <div>
                <h3 className="font-display text-[1.25rem] text-espresso">Anfahrt</h3>
                {/* PLACEHOLDER: verify walking time / tram stop */}
                <p className="mt-2 text-small text-taupe">
                  Ca. 3 Gehminuten ab Zürich HB. Die Tramhaltestelle Bahnhofstrasse/HB liegt direkt in der Nähe.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <IconBadge name="phone" />
              <div>
                <h3 className="font-display text-[1.25rem] text-espresso">Beratung anfragen</h3>
                <p className="mt-2 text-small text-taupe">
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-espresso">
                    {SITE.phoneDisplay}
                  </a>
                  <br />
                  <a href={`mailto:${SITE.email}`} className="hover:text-espresso">
                    {SITE.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
              <Button href={SITE.bookingUrl}>Termin buchen</Button>
              <Button href={SITE.mapsUrl} variant="secondary" arrow={false}>
                Route planen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
