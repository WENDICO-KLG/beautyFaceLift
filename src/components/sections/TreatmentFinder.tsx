"use client";

import { useRef, useState } from "react";
import { CONCERNS, getTreatment } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ShapedCard } from "@/components/ui/ShapedCard";

export function TreatmentFinder() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const select = (id: string) => {
    setSelectedId(id);
    // On small screens the result sits below the options, bring it into view
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  };
  const concern = CONCERNS.find((c) => c.id === selectedId);
  const treatment = concern?.recommendation ? getTreatment(concern.recommendation) : undefined;
  const alternative = concern?.alternative ? getTreatment(concern.alternative) : undefined;

  return (
    <section id="finder" className="px-[var(--spacing-frame)]" aria-labelledby="finder-title">
      <div className="rounded-panel bg-beige-soft py-section">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div data-reveal="up">
            <p className="eyebrow">Treatment Finder</p>
            <h2 id="finder-title" className="mt-5 text-h2 text-espresso">
              Was möchten Sie verbessern?
            </h2>
            <p className="mt-6 max-w-prose-narrow text-lead text-taupe">
              Wählen Sie Ihr wichtigstes Hautanliegen. Wir zeigen Ihnen die passende Behandlung.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2" role="list" data-reveal="up">
            {CONCERNS.map((c) => {
              const active = c.id === selectedId;
              return (
                <li key={c.id} className={c.id === "unsicher" ? "sm:col-span-2" : ""}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => select(c.id)}
                    className={`flex min-h-14 w-full items-center gap-4 rounded-full border px-5 text-left text-[0.9375rem] transition-[background-color,border-color,color] duration-[var(--duration-base)] ease-[var(--ease-luxe)] ${
                      active
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-line bg-white text-espresso hover:border-champagne"
                    }`}
                  >
                    <Icon name={c.icon} className={`size-5 shrink-0 ${active ? "text-champagne" : "text-champagne-deep"}`} />
                    <span className="flex-1">{c.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Result */}
        <div ref={resultRef} aria-live="polite" className="scroll-mt-24 lg:pt-6" data-reveal="up" style={{ "--reveal-delay": "150ms" } as React.CSSProperties}>
          {!concern && (
            <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-card border border-dashed border-champagne/60 p-10 text-center">
              <p className="max-w-xs text-small text-taupe">
                Ihre persönliche Empfehlung erscheint hier, sobald Sie ein Hautanliegen gewählt haben.
              </p>
            </div>
          )}

          {concern && (
            <ShapedCard
              as="article"
              key={concern.id}
              surface="var(--color-beige-soft)"
              className="animate-fade-up bg-white"
              topRight={{
                className: "pb-2 pl-3 pt-1",
                children: <span className="block rounded-full bg-espresso px-4 py-2 text-[0.75rem] text-ivory">Unsere Empfehlung</span>,
              }}
            >
              <ImagePlaceholder
                label={treatment ? treatment.imageLabel : "Persönliche Hautanalyse mit Teresa"}
                ratio="16 / 9"
                rounded="rounded-none"
                reveal={false}
              />
              <div className="p-7 sm:p-10">
                <h3 className="text-h3 text-espresso">{treatment ? treatment.name : "Persönliche Hautanalyse"}</h3>
                <p className="mt-4 text-body text-taupe">{concern.reason}</p>

                {treatment && (
                  <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-small text-espresso">
                    <span className="inline-flex items-center gap-2">
                      <Icon name="clock" className="size-4 text-champagne-deep" /> {treatment.durationMin} Min
                    </span>
                    <span>ab CHF {treatment.priceFrom}</span>
                    {alternative && <span className="text-taupe">Alternative: {alternative.name}</span>}
                  </p>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {treatment ? (
                    <>
                      <Button href={SITE.bookingUrl}>Diese Behandlung buchen</Button>
                      <Button href={`/behandlungen/${treatment.slug}`} variant="secondary" arrow={false}>
                        Mehr erfahren
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button href={SITE.consultUrl}>Beratung anfragen</Button>
                      <Button href={SITE.bookingUrl} variant="secondary" arrow={false}>
                        Hautanalyse buchen
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </ShapedCard>
          )}
        </div>
      </div>
    </div>
    </section>
  );
}
