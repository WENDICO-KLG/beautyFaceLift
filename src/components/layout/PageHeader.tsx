import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ShapedCard } from "@/components/ui/ShapedCard";

export type Crumb = { name: string; href: string };

type Props = {
  title: React.ReactNode;
  lead?: string;
  /** Breadcrumb trail after "Startseite" (the last entry is the current page) */
  crumbs: Crumb[];
  image?: { src?: string; label: string; position?: string };
  children?: React.ReactNode;
};

/**
 * Header for sub pages: a framed panel like the home hero, with breadcrumb,
 * H1, lead and an optional shaped image. Marked `data-hero` so the mobile
 * booking bar appears only after it.
 */
export function PageHeader({ title, lead, crumbs, image, children }: Props) {
  return (
    <section data-hero className="px-[var(--spacing-frame)] pt-[var(--spacing-frame)]" aria-labelledby="page-title">
      <div className="rounded-panel bg-beige-soft">
        <div className="container-site grid items-end gap-10 pb-12 pt-28 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-16 lg:pt-36">
          <div>
            <nav aria-label="Breadcrumb" className="text-small text-taupe" data-reveal="fade">
              <ol className="flex flex-wrap gap-2">
                <li>
                  <Link href="/" className="hover:text-espresso">
                    Startseite
                  </Link>
                </li>
                {crumbs.map((c, i) => (
                  <li key={c.href} className="flex gap-2">
                    <span aria-hidden="true">/</span>
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page" className="text-espresso">
                        {c.name}
                      </span>
                    ) : (
                      <Link href={c.href} className="hover:text-espresso">
                        {c.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <h1 id="page-title" className="mt-8 text-h1 text-espresso" data-reveal="up">
              {title}
            </h1>
            {lead && (
              <p className="mt-6 max-w-prose-narrow text-lead text-taupe" data-reveal="up">
                {lead}
              </p>
            )}
            {children && (
              <div className="mt-9" data-reveal="up">
                {children}
              </div>
            )}
          </div>

          {image && (
            <ShapedCard surface="var(--color-beige-soft)" reveal className="hidden lg:block" topRight={{ className: "h-12 w-[36%]" }}>
              <ImagePlaceholder
                label={image.label}
                src={image.src}
                position={image.position}
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
                ratio="4 / 3"
                rounded="rounded-none"
                reveal={false}
              />
            </ShapedCard>
          )}
        </div>
      </div>
    </section>
  );
}
