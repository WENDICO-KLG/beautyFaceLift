import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Icon } from "@/components/ui/Icon";
import { CornerButton, ShapedCard } from "@/components/ui/ShapedCard";

type Props = {
  title?: React.ReactNode;
  text?: string;
};

/** Closing booking block: framed like the hero, copy left, image right. */
export function CTASection({
  title = "Bereit für Ihre persönliche Beauty-Behandlung?",
  text = "Entdecken Sie die passende Behandlung für Ihre Haut und vereinbaren Sie Ihren persönlichen Termin in Zürich.",
}: Props) {
  return (
    <section data-final-cta className="px-[var(--spacing-frame)] pb-[var(--spacing-frame)]" aria-labelledby="cta-title">
      <div className="grid overflow-hidden rounded-panel bg-beige lg:grid-cols-[1.2fr_1fr]">
        <div className="px-[var(--spacing-gutter)] py-16 sm:py-20 lg:py-28 lg:pl-[max(var(--spacing-gutter),calc((100vw-var(--container-site))/2))]" data-reveal="up">
          <h2 id="cta-title" className="max-w-xl text-h2 text-espresso">
            {title}
          </h2>
          <p className="mt-7 max-w-prose-narrow text-lead text-taupe">{text}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={SITE.bookingUrl}>Termin buchen</Button>
            <Button href={SITE.consultUrl} variant="secondary" arrow={false}>
              Beratung anfragen
            </Button>
          </div>
        </div>
        <div className="relative min-h-72 p-3 lg:min-h-0 lg:pl-0">
          <ShapedCard
            surface="var(--color-beige)"
            className="h-full min-h-72"
            topRight={{
              children: (
                <CornerButton href={SITE.bookingUrl} label="Termin buchen" external>
                  <Icon name="arrow" className="size-4 -rotate-45" strokeWidth={1.5} />
                </CornerButton>
              ),
            }}
          >
            <ImagePlaceholder label="Gesichtsmassage mit warmen Händen" src="/images/gesichtsmassage-detail.jpg" position="50% 30%" sizes="(min-width: 1024px) 40vw, 100vw" tone="deep" rounded="rounded-none" className="absolute inset-0" reveal={false} />
          </ShapedCard>
        </div>
      </div>
    </section>
  );
}
