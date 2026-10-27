"use client";

import { useRef } from "react";
import { REVIEWS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Stars } from "@/components/ui/misc";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ShapedCard } from "@/components/ui/ShapedCard";

type Review = (typeof REVIEWS)[number];

export function ReviewCard({ r }: { r: Review }) {
  return (
    <ShapedCard
      as="figure"
      className="flex h-full flex-col bg-white p-7 sm:p-9"
      topRight={{
        className: "pb-2 pl-3 pr-1.5 pt-1.5",
        children: <span className="block rounded-full border border-line px-4 py-2 text-[0.75rem] text-espresso">{r.treatment}</span>,
      }}
    >
      <Stars />
      <blockquote className="mt-8 flex-1 font-display text-[1.1875rem] font-light leading-[1.45] tracking-[-0.01em] text-espresso sm:text-[1.3125rem]">
        „{r.quote}“
      </blockquote>
      <figcaption className="mt-8 text-small text-taupe">{r.name}</figcaption>
    </ShapedCard>
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
            <h2 id="reviews-title" className="text-h2 text-espresso">
              Von Kundinnen empfohlen.
            </h2>
          </div>
          <div className="flex items-center gap-6" data-reveal="up">
            <p className="font-display text-[4.5rem] leading-none text-espresso sm:text-[5.5rem]">{SITE.rating.value}</p>
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
        className="no-scrollbar mt-14 flex snap-x snap-mandatory scroll-px-[max(var(--spacing-gutter),calc((100vw-var(--container-site))/2))] gap-6 overflow-x-auto scroll-smooth px-[max(var(--spacing-gutter),calc((100vw-var(--container-site))/2))] pb-2 lg:mt-16"
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
