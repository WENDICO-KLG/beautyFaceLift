import { FAQS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  return (
    <details className="group border-b border-line" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-serif text-[1.1875rem] leading-snug text-espresso transition-colors hover:text-champagne-deep sm:text-[1.3125rem] [&::-webkit-details-marker]:hidden">
        {q}
        <span
          aria-hidden="true"
          className="relative grid size-9 shrink-0 place-items-center rounded-full border border-line transition-colors group-open:border-espresso"
        >
          <span className="absolute h-px w-3.5 bg-espresso" />
          <span className="absolute h-3.5 w-px bg-espresso transition-transform duration-500 ease-[var(--ease-luxe)] group-open:scale-y-0" />
        </span>
      </summary>
      <p className="max-w-2xl pb-7 pr-12 text-body text-taupe">{a}</p>
    </details>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-section" aria-labelledby="faq-title">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div data-reveal="up" className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">FAQ</p>
          <span className="gold-rule mt-5" aria-hidden="true" />
          <h2 id="faq-title" className="mt-6 text-h2 text-espresso">
            Häufige <em className="text-champagne-deep">Fragen.</em>
          </h2>
          <p className="mt-6 max-w-prose-narrow text-lead text-taupe">
            Ihre Frage ist nicht dabei? Teresa berät Sie gerne persönlich.
          </p>
          <div className="mt-8">
            <Button href={SITE.consultUrl} variant="secondary" arrow={false}>
              Beratung anfragen
            </Button>
          </div>
        </div>
        <div className="border-t border-line" data-reveal="up">
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
