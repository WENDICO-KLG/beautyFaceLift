import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

type Props = {
  title?: React.ReactNode;
  text?: string;
};

export function CTASection({
  title = (
    <>
      Bereit für Ihre <em className="text-champagne-deep">persönliche</em> Beauty-Behandlung?
    </>
  ),
  text = "Entdecken Sie die passende Behandlung für Ihre Haut und vereinbaren Sie Ihren persönlichen Termin in Zürich.",
}: Props) {
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4" aria-labelledby="cta-title">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-beige px-[var(--spacing-gutter)] py-[clamp(5rem,4rem+6vw,10rem)] text-center">
        {/* Oversized monogram watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 font-serif text-[clamp(14rem,30vw,28rem)] leading-none text-white/35"
        >
          BF
        </span>
        <div className="relative mx-auto max-w-3xl" data-reveal="up">
          <p className="eyebrow">Ihr Termin</p>
          <span className="gold-rule mx-auto mt-5" aria-hidden="true" />
          <h2 id="cta-title" className="mt-7 text-h1 text-espresso">
            {title}
          </h2>
          <p className="mx-auto mt-7 max-w-prose-narrow text-lead text-taupe">{text}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={SITE.bookingUrl}>Termin buchen</Button>
            <Button href={SITE.consultUrl} variant="secondary">
              Beratung anfragen
            </Button>
          </div>
          <p className="mt-8 text-[0.8125rem] text-taupe">
            ★ {SITE.rating.value}/5 · {SITE.rating.count}+ Bewertungen · {SITE.address.street}, {SITE.address.city}
          </p>
        </div>
      </div>
    </section>
  );
}
