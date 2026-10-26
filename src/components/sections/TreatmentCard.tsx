import Link from "next/link";
import type { Treatment } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/site";

export function TreatmentCard({ t, index }: { t: Treatment; index: number }) {
  return (
    <article
      className="group relative flex w-[82vw] max-w-sm shrink-0 snap-start flex-col sm:w-auto sm:max-w-none"
      data-reveal="up"
      style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
    >
      <div className="overflow-hidden rounded-media">
        <div className="transition-transform duration-[var(--duration-reveal)] ease-[var(--ease-luxe)] group-hover:scale-[1.03]">
          <ImagePlaceholder label={t.imageLabel} ratio="4 / 5" reveal={false} />
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow">{t.kicker}</p>
          <span className="text-[0.75rem] tracking-[0.18em] text-taupe">0{index + 1}</span>
        </div>
        <h3 className="mt-3 text-h3 text-espresso">
          <Link href={`/behandlungen/${t.slug}`} className="after:absolute after:inset-0">
            {t.name}
          </Link>
        </h3>
        <p className="mb-6 mt-3 text-small text-taupe">{t.short}</p>

        <div className="mt-auto flex items-center justify-between border-t border-line pt-5">
          <p className="text-small text-espresso">
            {t.durationMin} Min <span className="mx-2 text-champagne">·</span> ab CHF {t.priceFrom}
          </p>
          <span className="grid size-10 place-items-center rounded-full border border-line text-espresso transition-[background-color,border-color,color] duration-[var(--duration-base)] ease-[var(--ease-luxe)] group-hover:border-champagne-deep group-hover:bg-champagne-deep group-hover:text-white">
            <Icon name="arrow" className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </span>
        </div>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener"
          className="relative z-10 mt-4 inline-flex w-fit text-small font-medium text-champagne-deep underline-offset-[6px] hover:underline"
          aria-label={`${t.name} – Termin buchen`}
        >
          Termin buchen
        </a>
      </div>
    </article>
  );
}
