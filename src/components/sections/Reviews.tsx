"use client";

import { useRef } from "react";
import { REVIEWS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Stars } from "@/components/ui/misc";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type Review = (typeof REVIEWS)[number];

export function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-line bg-white p-8 sm:p-10">
      <Stars />
      <blockquote className="mt-6 flex-1 font-serif text-[1.25rem] leading-[1.5] text-espresso sm:text-[1.375rem]">
        „{r.quote}“
      </blockquote>
      <figcaption className="mt-8 flex items-center justify-between border-t border-line pt-5 text-small">
        <span className="text-espresso">{r.name}</span>
        <span className="text-taupe">{r.treatment}</span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const track = useRef<HTMLUListElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 360) + 24), behavior: "smooth" });
  };

  return (
    <section id="bewertungen" className="overflow-hidden py-section" aria-labelledby="reviews-title">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div data-reveal="up">
            <p className="eyebrow">Bewertungen</p>
            <span className="gold-rule mt-5" aria-hidden="true" />
            <h2 id="reviews-title" className="mt-6 text-h2 text-espresso">
              Von Kundinnen <em className="text-champagne-deep">empfohlen.</em>
            </h2>
          </div>
          <div className="flex items-center gap-6" data-reveal="up">
            <p className="font-serif text-[4.5rem] leading-none text-espresso sm:text-[5.5rem]">{SITE.rating.value}</p>
            <div>
              <Stars className="size-4" />
              <p className="mt-2 text-small text-taupe">
                {SITE.rating.value}/5 aus {SITE.rating.count}+ Bewertungen
                <br />
                auf {SITE.rating.source}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PLACEHOLDER: example review texts */}
      <ul
        ref={track}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-[max(var(--spacing-gutter),calc((100vw-var(--container-site))/2))] pb-2 lg:mt-16"
        aria-label="Kundenbewertungen"
      >
        {REVIEWS.map((r) => (
          <li key={r.name} className="w-[85vw] max-w-md shrink-0 snap-center sm:w-[26rem] sm:snap-start">
            <ReviewCard r={r} />
          </li>
        ))}
      </ul>

      <div className="container-site mt-10 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Button href={SITE.bookingUrl}>Termin buchen</Button>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Vorherige Bewertung"
            className="grid size-12 place-items-center rounded-full border border-line text-espresso transition-colors hover:border-espresso"
          >
            <Icon name="arrow" className="size-4 rotate-180" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Nächste Bewertung"
            className="grid size-12 place-items-center rounded-full border border-line text-espresso transition-colors hover:border-espresso"
          >
            <Icon name="arrow" className="size-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
