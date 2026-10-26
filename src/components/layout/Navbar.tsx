"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        const nearEnd = window.innerHeight + y > document.documentElement.scrollHeight - 320;
        setShowBar(y > window.innerHeight * 0.7 && !nearEnd);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-[var(--duration-base)] ease-[var(--ease-luxe)] ${
          scrolled || open ? "border-line bg-ivory/85 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Hauptnavigation"
          className={`container-site flex items-center justify-between transition-[height] duration-[var(--duration-base)] ease-[var(--ease-luxe)] ${
            scrolled ? "h-16" : "h-20 lg:h-24"
          }`}
        >
          <Link href="/" aria-label={`${SITE.name} – Startseite`} className="relative z-10 shrink-0" onClick={close}>
            <Image
              src="/brand/logo-gold.png"
              alt={`${SITE.name} Logo`}
              width={224}
              height={130}
              priority
              className={`w-auto transition-[height] duration-[var(--duration-base)] ease-[var(--ease-luxe)] ${
                scrolled ? "h-9" : "h-11 lg:h-12"
              }`}
            />
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative text-[0.875rem] tracking-[0.02em] text-espresso/85 transition-colors hover:text-espresso after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-champagne after:transition-transform after:duration-500 after:ease-[var(--ease-luxe)] hover:after:scale-x-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href={SITE.bookingUrl} className="!min-h-11 !px-6">
                Termin buchen
              </Button>
            </div>
            <button
              type="button"
              className="relative z-10 grid size-11 place-items-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menü schliessen" : "Menü öffnen"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 top-0 h-px w-6 bg-espresso transition-transform duration-500 ease-[var(--ease-luxe)] ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-6 bg-espresso transition-transform duration-500 ease-[var(--ease-luxe)] ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-ivory px-[var(--spacing-gutter)] pb-10 pt-28 transition-[opacity,visibility] duration-[var(--duration-base)] ease-[var(--ease-luxe)] lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-1">
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
                className="flex items-baseline justify-between border-b border-line py-4 font-serif text-[2rem] leading-tight text-espresso"
              >
                {l.label}
                <span className="font-sans text-xs tracking-[0.2em] text-champagne-deep">0{i + 1}</span>
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
          showBar && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 rounded-full border border-line bg-white/90 p-1.5 pl-5 shadow-soft backdrop-blur-md">
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate font-serif text-[1.05rem] text-espresso">Ihr Termin</p>
            <p className="truncate text-[0.75rem] text-taupe">★ {SITE.rating.value} · {SITE.rating.count}+ Reviews</p>
          </div>
          <Button href={SITE.bookingUrl} className="!min-h-11 !px-5 !text-sm" tabIndex={showBar ? 0 : -1}>
            Termin buchen
          </Button>
        </div>
      </div>
    </>
  );
}
