import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Stars } from "@/components/ui/misc";

const FACTS = [
  { value: `${SITE.rating.value}/5`, label: `auf ${SITE.rating.source}` },
  { value: `${SITE.rating.count}+`, label: "Bewertungen" },
  { value: `${SITE.owner.yearsExperience}+`, label: "Jahre Erfahrung" },
  { value: SITE.address.street, label: SITE.address.city },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40" aria-labelledby="hero-title">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <h1 id="hero-title">
            <span className="eyebrow block" data-reveal="fade">
              Kosmetikstudio in Zürich
            </span>
            <span className="gold-rule mt-5" aria-hidden="true" data-reveal="fade" />
            <span
              className="mt-7 block text-display text-espresso [&_em]:text-champagne-deep"
              data-reveal="up"
              style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            >
              Ihre Haut.
              <br />
              Ihre Schönheit.
              <br />
              <em>Ihre Zeit.</em>
            </span>
          </h1>

          <p
            className="mt-8 max-w-prose-narrow text-lead text-taupe"
            data-reveal="up"
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            Professionelle Gesichts- und Hautbehandlungen im Herzen von Zürich – persönlich durchgeführt mit über{" "}
            {SITE.owner.yearsExperience} Jahren Erfahrung.
          </p>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            data-reveal="up"
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          >
            <Button href={SITE.bookingUrl}>Termin buchen</Button>
            <Button href={SITE.consultUrl} variant="secondary">
              Beratung anfragen
            </Button>
          </div>

          <dl
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
            data-reveal="fade"
            style={{ "--reveal-delay": "450ms" } as React.CSSProperties}
          >
            {FACTS.map((f, i) => (
              <div key={i} className="flex flex-col-reverse">
                <dt className="text-[0.75rem] tracking-[0.04em] text-taupe">{f.label}</dt>
                <dd className="whitespace-nowrap font-serif text-[1.125rem] leading-snug text-espresso">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <ImagePlaceholder
            label="Teresa bei einer Gesichtsbehandlung im Studio, warmes Tageslicht"
            ratio="4 / 5"
            parallax
            className="w-full"
          />
          {/* Floating rating card */}
          <div
            className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-card border border-line bg-white/95 px-5 py-4 shadow-soft backdrop-blur sm:-left-8 lg:bottom-10 lg:-left-12"
            data-reveal="up"
            style={{ "--reveal-delay": "600ms" } as React.CSSProperties}
          >
            <span className="font-serif text-[2rem] leading-none text-espresso">{SITE.rating.value}</span>
            <span className="leading-tight">
              <Stars className="size-3.5" />
              <span className="mt-1 block text-[0.75rem] text-taupe">
                {SITE.rating.count}+ Bewertungen auf {SITE.rating.source}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
