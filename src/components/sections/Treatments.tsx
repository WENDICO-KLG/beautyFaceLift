import Link from "next/link";
import { TREATMENTS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TreatmentCard } from "./TreatmentCard";

// Bento placement per treatment (desktop). Mobile: horizontal snap row.
const LAYOUT = [
  { variant: "feature", tone: "deep", cls: "lg:col-span-5 lg:row-span-2" },
  { variant: "compact", tone: "base", cls: "lg:col-span-7" },
  { variant: "compact", tone: "light", cls: "lg:col-span-4" },
  { variant: "compact", tone: "base", cls: "lg:col-span-3" },
] as const;

/** Bento grid of all treatments (used on the home page and on /behandlungen). */
export function TreatmentGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`no-scrollbar flex snap-x snap-mandatory scroll-px-[var(--spacing-gutter)] gap-4 overflow-x-auto px-[var(--spacing-gutter)] pb-2 lg:container-site lg:grid lg:auto-rows-[21rem] lg:grid-cols-12 lg:gap-4 lg:overflow-visible ${className}`}
    >
      {TREATMENTS.map((t, i) => (
        <TreatmentCard
          key={t.slug}
          t={t}
          variant={LAYOUT[i].variant}
          tone={LAYOUT[i].tone}
          delay={i * 90}
          className={`h-[30rem] w-[84vw] max-w-sm shrink-0 snap-start sm:w-[22rem] lg:h-auto lg:w-auto lg:max-w-none ${LAYOUT[i].cls}`}
        />
      ))}
    </div>
  );
}

const linkCls =
  "text-small font-medium text-espresso underline decoration-champagne underline-offset-[6px] hover:decoration-espresso";

/** Home page teaser: heading, bento grid, links to the overview and prices. */
export function Treatments() {
  return (
    <section className="py-section" aria-labelledby="behandlungen-title">
      <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading id="behandlungen-title" title="Behandlungen, die Ihre Haut sichtbar verändern." />
        <div className="flex shrink-0 gap-6" data-reveal="fade">
          <Link href="/behandlungen" className={linkCls}>
            Alle Behandlungen
          </Link>
          <Link href="/preise" className={linkCls}>
            Preise
          </Link>
        </div>
      </div>
      <TreatmentGrid className="mt-12 lg:mt-16" />
    </section>
  );
}
