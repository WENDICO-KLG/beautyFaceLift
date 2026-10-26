"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

/**
 * Split navigation: links left, logo centred, booking CTA right.
 * Scroll state comes from IntersectionObservers (no scroll listener):
 *  - `#top-sentinel` (layout) → compact nav once it leaves the viewport
 *  - `[data-hero]` / `[data-final-cta]` → mobile booking bar between the two
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const watch = (selector: string, cb: (visible: boolean) => void) => {
      const el = document.querySelector(selector);
      if (!el) {
        cb(false);
        return undefined;
      }
      const io = new IntersectionObserver(([e]) => cb(e.isIntersecting));
      io.observe(el);
      return io;
    };
    const observers = [
      watch("#top-sentinel", (v) => setScrolled(!v)),
      watch("[data-hero]", setHeroVisible),
      watch("[data-final-cta]", setCtaVisible),
    ];
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const showBar = !heroVisible && !ctaVisible && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding] duration-[var(--duration-base)] ease-[var(--ease-luxe)] ${
          scrolled || open ? "border-line bg-ivory/85 backdrop-blur-md" : "border-transparent sm:pt-3"
        }`}
      >
        <nav
          aria-label="Hauptnavigation"
          className={`container-site grid grid-cols-[1fr_auto_1fr] items-center transition-[height] duration-[var(--duration-base)] ease-[var(--ease-luxe)] ${
            scrolled ? "h-16" : "h-[4.5rem]"
          }`}
        >
          <ul className="hidden items-center gap-7 xl:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[0.8125rem] text-espresso/80 transition-colors duration-300 hover:text-espresso">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="xl:hidden" aria-hidden="true" />

          <Link href="/" aria-label={`${SITE.name}, Startseite`} className="relative z-10 justify-self-center" onClick={close}>
            <Image
              src="/brand/logo-gold.png"
              alt={`${SITE.name} Logo`}
              width={224}
              height={130}
              priority
              className={`w-auto transition-[height] duration-[var(--duration-base)] ease-[var(--ease-luxe)] ${
                scrolled ? "h-9" : "h-11"
              }`}
            />
          </Link>

          <div className="flex items-center gap-2 justify-self-end">
            <div className="hidden sm:block">
              <Button href={SITE.bookingUrl} className="!min-h-11 !px-6">
                Termin buchen
              </Button>
            </div>
            <button
              type="button"
              className="relative z-10 grid size-11 place-items-center rounded-full border border-espresso/15 bg-ivory/60 transition-colors hover:border-espresso/40 xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menü schliessen" : "Menü öffnen"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-2.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-4 bg-espresso transition-transform duration-500 ease-[var(--ease-luxe)] ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-4 bg-espresso transition-transform duration-500 ease-[var(--ease-luxe)] ${
                    open ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-ivory px-[var(--spacing-gutter)] pb-10 pt-28 transition-[opacity,visibility] duration-[var(--duration-base)] ease-[var(--ease-luxe)] xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((l, i) => (
            <li
              key={l.href}
              className={`transition-[opacity,transform] duration-700 ease-[var(--ease-luxe)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
            >
              <Link
                href={l.href}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className="block py-3 font-display text-[2.25rem] leading-tight text-espresso"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-3">
          <Button href={SITE.bookingUrl} className="w-full" tabIndex={open ? 0 : -1}>
            Termin buchen
          </Button>
          <Button href={SITE.consultUrl} variant="secondary" className="w-full" onClick={close} tabIndex={open ? 0 : -1}>
            Beratung anfragen
          </Button>
          <p className="pt-3 text-center text-small text-taupe">
            {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
          </p>
        </div>
      </div>

      {/* Mobile sticky booking bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 transition-[transform,opacity] duration-[var(--duration-slow)] ease-[var(--ease-luxe)] lg:hidden ${
          showBar ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 rounded-full border border-line bg-white/90 p-1.5 pl-5 shadow-soft backdrop-blur-md">
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate font-display text-[1.05rem] text-espresso">Ihr Termin</p>
            <p className="truncate text-[0.75rem] text-taupe">
              {SITE.rating.value}/5 auf {SITE.rating.source}
            </p>
          </div>
          <Button href={SITE.bookingUrl} className="!min-h-11 !px-5 !text-sm" tabIndex={showBar ? 0 : -1}>
            Termin buchen
          </Button>
        </div>
      </div>
    </>
  );
}
