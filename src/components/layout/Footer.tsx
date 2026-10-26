import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/content";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-line bg-beige-soft pb-28 pt-20 lg:pb-12">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image src="/brand/logo-gold.png" alt={`${SITE.name} Logo`} width={224} height={130} className="h-14 w-auto" />
            <p className="mt-6 max-w-xs text-small text-taupe">
              {SITE.tagline} an der Bahnhofstrasse – persönlich geführt von {SITE.owner.name}.
            </p>
          </div>

          <div>
            <p className="eyebrow">Behandlungen</p>
            <ul className="mt-5 space-y-2.5 text-small">
              {TREATMENTS.map((t) => (
                <li key={t.slug}>
                  <Link href={`/behandlungen/${t.slug}`} className="text-espresso/80 transition-colors hover:text-espresso">
                    {t.name} Zürich
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Studio</p>
            <address className="mt-5 space-y-1 text-small not-italic text-espresso/80">
              <p>{SITE.name}</p>
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.postalCode} {SITE.address.city}
              </p>
              <p className="pt-3">
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-espresso">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-espresso">
                  {SITE.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="eyebrow">Navigation</p>
            <ul className="mt-5 space-y-2.5 text-small">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-espresso/80 transition-colors hover:text-espresso">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={SITE.bookingUrl} target="_blank" rel="noopener" className="text-champagne-deep hover:text-espresso">
                  Termin buchen →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.8125rem] text-taupe sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name} · {SITE.tagline}
          </p>
          {/* PLACEHOLDER: legal pages */}
          <ul className="flex gap-6">
            <li>
              <Link href="/#kontakt" className="hover:text-espresso">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/#kontakt" className="hover:text-espresso">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
