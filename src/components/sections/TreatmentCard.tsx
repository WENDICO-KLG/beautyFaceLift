import Link from "next/link";
import type { Treatment } from "@/lib/content";
import { SITE } from "@/lib/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Icon } from "@/components/ui/Icon";
import { CornerButton, ShapedCard } from "@/components/ui/ShapedCard";

type Props = {
  t: Treatment;
  variant?: "feature" | "compact";
  tone?: "light" | "base" | "deep";
  className?: string;
  /** Background of the surrounding section, used by the cut corners. */
  surface?: string;
  delay?: number;
};

/** Treatment card in the brand shape: arrow in the top-right step, caption in the bottom-left step. */
export function TreatmentCard({ t, variant = "compact", tone = "base", className = "", surface, delay = 0 }: Props) {
  const feature = variant === "feature";
  return (
    <ShapedCard
      as="article"
      surface={surface}
      reveal
      className={`group ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      topRight={{
        children: (
          <CornerButton href={SITE.bookingUrl} label={`${t.name}: Termin buchen`} external>
            <Icon name="arrow" className="size-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0" strokeWidth={1.5} />
          </CornerButton>
        ),
      }}
      bottomLeft={{
        className: `w-[88%] pr-4 pt-4 sm:pr-5 sm:pt-5 ${feature ? "max-w-[24rem]" : "max-w-[19rem]"}`,
        children: (
          <>
            <p className="text-small text-taupe">{t.kicker}</p>
            <h3 className={`mt-1 text-espresso ${feature ? "text-[2rem] font-light tracking-[-0.03em]" : "text-h3"}`}>
              <Link href={`/behandlungen/${t.slug}`} className="hover:text-champagne-deep">
                {t.name}
              </Link>
            </h3>
            {feature && <p className="mt-2 hidden text-small text-taupe sm:block">{t.short}</p>}
            <p className="mt-2 text-small text-espresso">
              {t.durationMin} Min, ab CHF {t.priceFrom}
            </p>
          </>
        ),
      }}
    >
      <div className="absolute inset-0 transition-transform duration-[var(--duration-reveal)] ease-[var(--ease-luxe)] group-hover:scale-[1.03]">
        <ImagePlaceholder label={t.imageLabel} src={t.image} position={t.imagePosition} sizes="(min-width: 1024px) 40vw, 85vw" tone={tone} rounded="rounded-none" className="h-full w-full" reveal={false} />
      </div>
      <Link href={`/behandlungen/${t.slug}`} className="absolute inset-0" tabIndex={-1} aria-hidden="true" />
    </ShapedCard>
  );
}
