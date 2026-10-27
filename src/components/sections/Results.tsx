"use client";

import Link from "next/link";
import { useState } from "react";
import { RESULTS, getTreatment } from "@/lib/content";
import { BeforeAfter } from "./BeforeAfter";
import { ShapedCard } from "@/components/ui/ShapedCard";

/** One large before/after comparison with the cases as selectable tabs beside it. */
export function Results() {
  const [active, setActive] = useState(0);
  const r = RESULTS[active];
  const t = getTreatment(r.treatment)!;

  return (
    <section id="ergebnisse" className="px-[var(--spacing-frame)]" aria-labelledby="ergebnisse-title">
      <div className="rounded-panel bg-white py-section">
      <div className="container-site grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div className="order-2 lg:order-1" data-reveal="up">
          {/* PLACEHOLDER: real, consented cases */}
          <ShapedCard
            surface="var(--color-white)"
            topRight={{
              className: "pb-2 pl-3 pr-1.5 pt-1.5",
              children: <span className="block rounded-full border border-line px-4 py-2 text-[0.75rem] text-espresso">{t.name}, {r.sessions}</span>,
            }}
          >
            <BeforeAfter key={active} label={`${t.name}: ${r.title}`} className="rounded-none" />
          </ShapedCard>
        </div>

        <div className="order-1 flex flex-col lg:order-2">
          <div data-reveal="up">
            <h2 id="ergebnisse-title" className="text-h2 text-espresso">
              Ergebnisse unserer Kundinnen
            </h2>
            <p className="mt-6 max-w-prose-narrow text-lead text-taupe">
              Verschieben Sie den Regler, um Vorher und Nachher zu vergleichen.
            </p>
          </div>

          <div role="tablist" aria-label="Fallbeispiele" className="mt-10 grid gap-2" data-reveal="up">
            {RESULTS.map((c, i) => {
              const ct = getTreatment(c.treatment)!;
              const selected = i === active;
              return (
                <button
                  key={c.title}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls="result-panel"
                  onClick={() => setActive(i)}
                  className={`flex items-center justify-between gap-4 rounded-card border px-5 py-4 text-left transition-[background-color,border-color] duration-[var(--duration-base)] ease-[var(--ease-luxe)] ${
                    selected ? "border-espresso bg-espresso text-ivory" : "border-line bg-ivory text-espresso hover:border-champagne"
                  }`}
                >
                  <span>
                    <span className="block font-display text-[1.1875rem]">{c.title}</span>
                    <span className={`text-small ${selected ? "text-ivory/70" : "text-taupe"}`}>
                      {ct.name}, {c.sessions}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div id="result-panel" role="tabpanel" className="mt-8 animate-fade-up" key={active}>
            <dl className="grid gap-5 text-small sm:grid-cols-2">
              <div>
                <dt className="text-taupe">Ausgangslage</dt>
                <dd className="mt-1 text-espresso">{r.text}</dd>
              </div>
              <div>
                <dt className="text-taupe">Ergebnis</dt>
                <dd className="mt-1 text-espresso">{r.outcome}</dd>
              </div>
            </dl>
            <Link
              href={`/behandlungen/${t.slug}`}
              className="mt-6 inline-flex text-small font-medium text-espresso underline decoration-champagne underline-offset-[6px] hover:decoration-espresso"
            >
              Mehr über {t.name}
            </Link>
          </div>

          <p className="mt-auto pt-10 text-[0.75rem] text-taupe">
            Ergebnisse können individuell variieren. Abbildungen mit Einverständnis der Kundinnen.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
