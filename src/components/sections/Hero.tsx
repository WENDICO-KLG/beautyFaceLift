import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Icon } from "@/components/ui/Icon";
import { Stars } from "@/components/ui/misc";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

/** Floating info card on the hero media (frosted surface, near-solid fallback via bg alpha). */
function FloatCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      className="rounded-card border border-white/70 bg-white/80 p-4 shadow-soft backdrop-blur-md sm:p-5"
      data-reveal="up"
      style={style}
    >
      {children}
    </div>
  );
}

/**
 * Framed full-bleed hero: the media sits in a rounded frame inset from the
 * viewport, copy is set on top of it (bottom-left), facts float on the right.
 */
export function Hero() {
  return (
    <section data-hero className="px-[var(--spacing-frame)] pt-[var(--spacing-frame)]" aria-labelledby="hero-title">
      <div className="relative isolate flex min-h-[calc(100dvh-1rem)] flex-col overflow-hidden rounded-panel sm:min-h-[calc(100dvh-1.5rem)] lg:max-h-[60rem]">
        <div className="absolute inset-0 -z-10">
          <ImagePlaceholder
            label="Teresa bei einer Gesichtsbehandlung im Studio, warmes Tageslicht"
            tone="deep"
            rounded="rounded-none"
            className="h-full"
            showTag={false}
            reveal={false}
            parallax
          />
        </div>
        {/* Legibility scrim for the future photo */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ivory/50 via-ivory/10 to-transparent" />
        {/* PLACEHOLDER caption, remove with real photo */}
        <p className="absolute bottom-5 right-6 hidden text-[0.6875rem] text-espresso/45 lg:block">
          Bildplatzhalter: Teresa bei einer Gesichtsbehandlung
        </p>

        <div className="container-site mt-auto grid gap-10 pb-8 pt-32 sm:pb-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-16">
          <div>
            <h1 id="hero-title">
              <span className="eyebrow block" data-reveal="fade">
                Kosmetikstudio in Zürich
              </span>
              <span className="mt-6 block text-display text-espresso" data-reveal="up" style={delay(100)}>
                Ihre Haut.
                <br />
                <span className="text-espresso/45">Ihre Schönheit.</span>
                <br />
                Ihre Zeit.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-lead text-espresso/75" data-reveal="up" style={delay(220)}>
              Professionelle Gesichts- und Hautbehandlungen im Herzen von Zürich, persönlich durchgeführt mit über{" "}
              {SITE.owner.yearsExperience} Jahren Erfahrung.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal="up" style={delay(320)}>
              <Button href={SITE.bookingUrl}>Termin buchen</Button>
              <Button href={SITE.consultUrl} variant="secondary" arrow={false}>
                Beratung anfragen
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:w-72 lg:grid-cols-1">
            <FloatCard style={delay(450)}>
              <p className="flex items-baseline gap-2">
                <span className="font-display text-[2rem] leading-none text-espresso sm:text-[2.5rem]">{SITE.rating.value}</span>
                <span className="text-small text-taupe">/ 5</span>
              </p>
              <Stars className="mt-2 size-3.5" />
              <p className="mt-2 text-[0.75rem] leading-snug text-taupe">
                {SITE.rating.count}+ Bewertungen auf {SITE.rating.source}
              </p>
            </FloatCard>

            <FloatCard style={delay(550)}>
              <div className="flex items-center gap-3">
                <ImagePlaceholder
                  label={`Portrait ${SITE.owner.name}`}
                  tone="light"
                  rounded="rounded-full"
                  className="size-11 shrink-0"
                  showTag={false}
                  reveal={false}
                />
                <div className="min-w-0 leading-tight">
                  <p className="font-display text-[1.0625rem] text-espresso">{SITE.owner.name}</p>
                  <p className="mt-0.5 text-[0.75rem] text-taupe">{SITE.owner.yearsExperience}+ Jahre Erfahrung</p>
                </div>
              </div>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener"
                className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-[0.75rem] text-espresso/80 hover:text-espresso"
              >
                <Icon name="pin" className="size-4 shrink-0 text-champagne-deep" />
                {SITE.address.street}, {SITE.address.city}
              </a>
            </FloatCard>
          </div>
        </div>
      </div>
    </section>
  );
}
