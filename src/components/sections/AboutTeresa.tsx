import Link from "next/link";
import { SITE } from "@/lib/site";
import { TERESA_PILLARS } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { ShapedCard } from "@/components/ui/ShapedCard";

/**
 * Typographic composition: the headline is split around Teresa's portrait
 * (desktop). Screen readers get the headline once via the sr-only h2.
 */
export function AboutTeresa({ variant = "full" }: { variant?: "teaser" | "full" }) {
  const teaser = variant === "teaser";
  return (
    <section className="overflow-hidden py-section" aria-labelledby="teresa-title">
      <h2 id="teresa-title" className="sr-only">
        20+ Jahre Erfahrung. Persönlich für Ihre Haut.
      </h2>

      <div className="container-site">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10" aria-hidden="true">
          <p className="font-display text-h1 text-espresso lg:text-right" data-reveal="up">
            <span className="text-espresso/40">20+ Jahre</span>
            <br />
            Erfahrung.
          </p>

          <ShapedCard reveal className="mx-auto w-full max-w-[22rem] lg:w-[22rem]" topRight={{ className: "h-12 w-[38%]" }}>
            <ImagePlaceholder
              label={`${SITE.owner.name} in ihrem Studio an der Bahnhofstrasse`}
              src="/images/teresa-stimac.jpg"
              sizes="22rem"
              position="50% 25%"
              ratio="4 / 5"
              tone="deep"
              rounded="rounded-none"
              reveal={false}
            />
            <div className="absolute bottom-4 left-4 rounded-sm bg-espresso/70 px-4 py-2.5 text-ivory backdrop-blur-md">
              <p className="text-small font-medium">{SITE.owner.name}</p>
              <p className="text-[0.75rem] text-ivory/70">{SITE.owner.jobTitle}</p>
            </div>
          </ShapedCard>

          <p className="font-display text-h1 text-espresso" data-reveal="up" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <span className="text-espresso/40">Persönlich</span>
            <br />
            für Ihre Haut.
          </p>
        </div>

        {teaser ? (
          <div className="mx-auto mt-16 max-w-xl text-center lg:mt-20" data-reveal="up">
            <p className="text-lead text-taupe">
              {SITE.owner.name} behandelt jede Kundin selbst, seit über {SITE.owner.yearsExperience} Jahren an der
              Bahnhofstrasse in Zürich.
            </p>
            <Link
              href="/ueber-teresa"
              className="mt-6 inline-flex text-small font-medium text-espresso underline decoration-champagne underline-offset-[6px] hover:decoration-espresso"
            >
              Mehr über Teresa
            </Link>
          </div>
        ) : (
        <div className="mx-auto mt-20 grid max-w-5xl gap-12 lg:mt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="space-y-5 text-lead text-taupe" data-reveal="up">
            <p>
              {SITE.owner.name} führt {SITE.name} an der Bahnhofstrasse in Zürich und arbeitet seit über{" "}
              {SITE.owner.yearsExperience} Jahren als Kosmetikerin.
            </p>
            <p>
              Sie behandelt jede Kundin selbst. Es gibt keine wechselnden Therapeutinnen und keine Behandlung nach Schema. Teresa
              lernt Ihre Haut kennen, begleitet Sie über Jahre und empfiehlt nur, was Ihnen wirklich guttut.
            </p>
            <div className="flex flex-col gap-3 pt-5 sm:flex-row">
              <Button href={SITE.consultUrl}>Beratung anfragen</Button>
            </div>
          </div>

          <dl className="grid gap-8" data-reveal="up">
            {TERESA_PILLARS.map((p) => (
              <div key={p.title} className="border-t border-line pt-5">
                <dt className="font-display text-[1.375rem] text-espresso">{p.title}</dt>
                <dd className="mt-2 text-small text-taupe">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        )}
      </div>
    </section>
  );
}
