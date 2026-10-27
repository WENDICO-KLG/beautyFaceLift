import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

const FACTS = [
  { value: `${SITE.rating.value}/5`, label: `${SITE.rating.count}+ Bewertungen auf ${SITE.rating.source}` },
  { value: `${SITE.owner.yearsExperience}+ Jahre`, label: "Erfahrung" },
  { value: SITE.address.street, label: `${SITE.address.postalCode} ${SITE.address.city}` },
];

/**
 * Full-screen hero: edge-to-edge photograph (100svh), copy set on the calm
 * part of the image (bottom-left), facts as a quiet row below the CTAs.
 */
export function Hero() {
  return (
    <section data-hero className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-beige" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-10">
        <ImagePlaceholder
          label="Entspannende Gesichtsmassage im warmen Morgenlicht, die Kundin mit geschlossenen Augen"
          src="/images/hero-kampagne.jpg"
          sizes="100vw"
          priority
          position="72% 50%"
          rounded="rounded-none"
          className="h-full"
          showTag={false}
          reveal={false}
          parallax
        />
      </div>
      {/* Legibility: soft light from the left (desktop) / from the bottom (mobile) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgb(247_244_239)_0%,rgb(247_244_239/0.92)_42%,rgb(247_244_239/0)_68%)] lg:bg-[linear-gradient(90deg,rgb(247_244_239/0.85)_0%,rgb(247_244_239/0.6)_32%,rgb(247_244_239/0)_55%)]"
      />

      <div className="container-site mt-auto pb-10 pt-40 sm:pb-14 lg:pb-20">
        <h1 id="hero-title" className="max-w-3xl">
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

        <p className="mt-7 max-w-md text-lead text-espresso/80" data-reveal="up" style={delay(220)}>
          Professionelle Gesichts- und Hautbehandlungen im Herzen von Zürich, persönlich durchgeführt mit über{" "}
          {SITE.owner.yearsExperience} Jahren Erfahrung.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal="up" style={delay(320)}>
          <Button href={SITE.bookingUrl}>Termin buchen</Button>
          <Button href={SITE.consultUrl} variant="secondary" arrow={false}>
            Beratung anfragen
          </Button>
        </div>

        <dl
          className="mt-12 hidden max-w-2xl grid-cols-3 gap-8 border-t border-espresso/15 pt-6 sm:grid"
          data-reveal="fade"
          style={delay(450)}
        >
          {FACTS.map((f) => (
            <div key={f.value} className="flex flex-col-reverse">
              <dt className="text-[0.75rem] text-espresso/65">{f.label}</dt>
              <dd className="font-display text-[1.25rem] text-espresso">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
