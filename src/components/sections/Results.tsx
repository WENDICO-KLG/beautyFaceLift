import Link from "next/link";
import { RESULTS, getTreatment } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfter } from "./BeforeAfter";

export function Results() {
  return (
    <section id="ergebnisse" className="bg-white py-section" aria-labelledby="ergebnisse-title">
      <div className="container-site">
        <SectionHeading
          id="ergebnisse-title"
          eyebrow="Ergebnisse"
          title={
            <>
              Echte Haut. <em>Echte</em> Veränderung.
            </>
          }
          lead="Ausgewählte Ergebnisse unserer Kundinnen – verschieben Sie den Regler, um Vorher und Nachher zu vergleichen."
        />

        {/* PLACEHOLDER: real, consented cases */}
        <div className="no-scrollbar -mx-[var(--spacing-gutter)] mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--spacing-gutter)] md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 lg:mt-20">
          {RESULTS.map((r, i) => {
            const t = getTreatment(r.treatment)!;
            return (
              <article
                key={r.title}
                className="w-[82vw] max-w-sm shrink-0 snap-start md:w-auto md:max-w-none"
                data-reveal="up"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <BeforeAfter label={`${t.name}: ${r.title}`} />
                <div className="pt-6">
                  <p className="eyebrow">
                    <Link href={`/behandlungen/${t.slug}`} className="hover:underline underline-offset-4">
                      {t.name}
                    </Link>
                    <span className="mx-2 text-champagne">·</span>
                    <span className="text-taupe">{r.sessions}</span>
                  </p>
                  <h3 className="mt-3 font-serif text-[1.5rem] text-espresso">{r.title}</h3>
                  <dl className="mt-4 space-y-3 text-small">
                    <div>
                      <dt className="text-taupe">Ausgangslage</dt>
                      <dd className="text-espresso">{r.text}</dd>
                    </div>
                    <div>
                      <dt className="text-taupe">Ergebnis</dt>
                      <dd className="text-espresso">{r.outcome}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-10 text-[0.75rem] text-taupe">Ergebnisse können individuell variieren. Abbildungen mit Einverständnis der Kundinnen.</p>
      </div>
    </section>
  );
}
