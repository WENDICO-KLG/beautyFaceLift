import { SITE } from "@/lib/site";
import { TERESA_PILLARS } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";

export function AboutTeresa() {
  return (
    <section id="teresa" className="py-section" aria-labelledby="teresa-title">
      <div className="container-site grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="relative lg:sticky lg:top-28">
          <ImagePlaceholder label={`Portrait ${SITE.owner.name} im Studio, natürliches Licht`} ratio="4 / 5" tone="deep" />
          <p className="mt-4 text-[0.8125rem] text-taupe">
            {SITE.owner.name} · {SITE.owner.jobTitle}
          </p>
        </div>

        <div>
          <div data-reveal="up">
            <p className="eyebrow">Über Teresa</p>
            <span className="gold-rule mt-5" aria-hidden="true" />
            <h2 id="teresa-title" className="mt-6 text-h2 text-espresso">
              20+ Jahre Erfahrung. <em className="text-champagne-deep">Persönlich</em> für Ihre Haut.
            </h2>
          </div>

          <div className="mt-8 max-w-xl space-y-5 text-lead text-taupe" data-reveal="up">
            <p>
              {SITE.owner.name} führt {SITE.name} an der Bahnhofstrasse in Zürich seit über {SITE.owner.yearsExperience}{" "}
              Jahren. Was als Leidenschaft für gesunde Haut begann, ist heute ein ruhiger Ort für Frauen, die sich
              Zeit für sich nehmen möchten.
            </p>
            <p>
              Bei Teresa gibt es keine wechselnden Therapeutinnen und keine Behandlung von der Stange. Sie lernt Ihre
              Haut kennen, begleitet Sie über Jahre – und empfiehlt nur, was Ihnen wirklich guttut.
            </p>
          </div>

          <blockquote className="mt-12 border-l border-champagne pl-6 sm:pl-8" data-reveal="up">
            <p className="font-serif text-[1.5rem] italic leading-snug text-espresso sm:text-[1.75rem]">
              „Schöne Haut ist kein Zufall – sondern das Ergebnis von Zeit, Wissen und echter Zuwendung.“
            </p>
            <footer className="mt-4 text-small text-taupe">— {SITE.owner.name}</footer>
          </blockquote>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
            {TERESA_PILLARS.map((p, i) => (
              <li
                key={p.title}
                className="bg-ivory p-6 sm:p-7"
                data-reveal="up"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <span className="grid size-8 place-items-center rounded-full bg-espresso text-[0.6875rem] tracking-wider text-ivory">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-serif text-[1.25rem] text-espresso">{p.title}</h3>
                <p className="mt-2 text-small text-taupe">{p.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row" data-reveal="up">
            <Button href={SITE.consultUrl}>Beratung anfragen</Button>
            <Button href={SITE.bookingUrl} variant="secondary" arrow={false}>
              Termin buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
