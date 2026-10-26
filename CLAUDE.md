# Beauty Face Lift – Website

Relaunch der Website von **Beauty Face Lift**, Kosmetikstudio an der Bahnhofstrasse 94, 8001 Zürich. Inhaberin: Teresa Stimac, über 20 Jahre Erfahrung.
Stack: **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4**. Keine weiteren Runtime-Dependencies.

```bash
npm run dev     # http://localhost:3000
npm run build   # Production-Build (statisch prerendert)
```

Weitere Doku:
- `docs/research.md`: Referenzbild-Analyse und Marktrecherche
- `skills.md`: verbindliche Design- und Code-Regeln für alle künftigen Änderungen

## Projektziel
Die Website soll wirken wie eine **internationale Luxury-Beauty-Boutique**, nicht wie ein lokales Kosmetikstudio. Gewünschter Eindruck: elegant, ruhig, persönlich und vertrauenswürdig.

Messbare Ziele:
1. Mehr Online-Terminbuchungen.
2. Top-Rankings für „Kosmetik Zürich“, „Gesichtsbehandlung Zürich“, „Microneedling Zürich“ usw.
3. Eindeutige Repräsentation in AI-Suchen (GEO).

## Design Direction
- Hell, warm und ruhig. **Whitespace vor Elementen.** Hierarchie entsteht über die Grösse der Serif-Schrift, nicht über Farbe.
- Gold bzw. Champagne ist **Akzent, nie Fläche**: Linien, Icons, Ornamente, ein Wort pro Headline.
- Editoriale Bildsprache, später echte Fotos von Teresa, dem Studio und Haut-Details. Formate: Hero und Portraits 4:5, Studio 16:10, Cards 4:5. Keine Stockgesichter.
- Wiederkehrendes Muster aus dem Brand Sheet: **Eyebrow-Label (Versalien, weit gesperrt) → kurze Goldlinie → Serif-Headline**.

## Farbpalette (Tokens in `src/app/globals.css`)
| Token | Hex | Verwendung |
|---|---|---|
| `ivory` | #F7F4EF | Haupt-Hintergrund (dominant) |
| `beige` | #E8DED3 | Sektionsflächen, Placeholder, Borders |
| `champagne` | #C8A982 | Linien, Icons, Ornamente (nicht für Text auf hell) |
| `champagne-deep` | #8B6B45 | Primärbutton-Fläche, Eyebrows, Akzentwörter (AA-konform) |
| `taupe` | #76685D | Sekundärtext |
| `espresso` | #211C19 | Headlines, Navigation, wichtiger Text |
| `white` | #FFFFFF | Cards, Kontrastflächen |

Warum `champagne-deep`: Weiss auf #C8A982 erreicht nur ~2.2:1 Kontrast. Der tiefere Ton hält das Gold-Gefühl und erreicht ~5:1.

## Typography
- **Playfair Display** für Headlines (400, kursiv als Akzent). **Inter** für Text (400/500).
- Eingebunden via `next/font`: self-hosted, `display: swap`, keine Requests zu Google.
- Fluid Type Scale (`clamp`): `display`, `h1`, `h2`, `h3`, `lead`, `body`, `small`, `eyebrow`.
- Headlines mit `text-wrap: balance`, Fliesstext höchstens ~60 Zeichen breit (`max-w-prose-narrow`).

## UX-Prinzipien
1. Eine Aussage pro Section, ein Primär-CTA pro Viewport.
2. Klarere Information vor mehr Text. Preise und Dauer sind immer sichtbar.
3. Mobile ist eigenständig gestaltet: Cards als Scroll-Snap-Reihen, eigene Abstände und Grössen, Sticky-Booking-Bar.
4. Barrierefreiheit:
   - semantische Landmarks
   - sichtbarer Fokus (Champagne-Outline)
   - Tap-Targets ≥ 44 px
   - FAQ als `<details>`
   - Slider über `input[type=range]`
   - `prefers-reduced-motion` wird respektiert

## Seitenstruktur (`src/app/page.tsx`)
| Nr. | Section | id | Inhalt |
|---|---|---|---|
| 01 | Hero | – | H1, Subline, 2 CTAs, Fakten, Bild |
| 02 | TrustBar | – | 4.8/5 · 20+ · Zürich · Persönlich |
| 03 | Treatments | `#behandlungen` | 4 Cards, Preisliste `#preise`, CTA |
| 04 | TreatmentFinder | `#finder` | Hautanliegen → Empfehlung → Buchung |
| 05 | AboutTeresa | `#teresa` | |
| 06 | Results | `#ergebnisse` | Vorher/Nachher-Slider |
| 07 | Reviews | `#bewertungen` | inkl. CTA |
| 08 | Studio | `#kontakt` | Adresse, Öffnungszeiten, Maps, Anfahrt |
| 09 | FAQ | `#faq` | |
| 10 | FinalCTA | – | |
| – | Footer | – | |

Treatment-Landingpages unter `/behandlungen/[slug]` (Hydra4Face, Microneedling, Fruchtsäurepeeling, ColdPLASMA): statisch generiert, eigenes Metadata und Service-Schema.

## Komponentenstruktur
```
src/
  app/            layout.tsx, page.tsx, globals.css, sitemap.ts, robots.ts, behandlungen/[slug]/page.tsx
  lib/
    site.ts       Single Source of Truth für NAP, URLs, Booking-Links, Öffnungszeiten
    content.ts    Treatments, Finder-Mapping, Reviews, Ergebnisse, FAQ
    schema.ts     JSON-LD-Builder (BeautySalon, Person, Service, FAQPage, Breadcrumb)
  components/
    ui/           Button, SectionHeading, ImagePlaceholder, Icon, Stars, JsonLd, Reveal
    layout/       Navbar (inkl. Mobile-Menü und Mobile-Booking-Bar), Footer
    sections/     Hero, TrustBar, TrustItem, Treatments, TreatmentCard, PriceList,
                  TreatmentFinder, AboutTeresa, Results, BeforeAfter, Reviews,
                  ReviewCard, Studio, FAQ, FAQItem, CTASection
```
Regeln:
- **Server Components by default.** `"use client"` nur dort, wo es nötig ist: Navbar, TreatmentFinder, BeforeAfter, ReviewsCarousel, RevealObserver.
- Inhalte gehören in `lib/content.ts`, nie hardcoded in Komponenten.

## Animation Principles
Luxury = restraint.

**Erlaubt**
- Fade-up (24 px, 900 ms)
- Image Reveal (clip-path, 1200 ms)
- Leichtes Parallax nur im Hero-Bild, umgesetzt per CSS `animation-timeline: view()` ohne JS
- Hover: Bild-Scale ≤ 1.03, Pfeil-Shift 4 px
- Sticky-Nav-Transition

**Easing und Steuerung**
- Easing: `--ease-luxe: cubic-bezier(.22,1,.36,1)`
- Reveals laufen über **einen** IntersectionObserver (`RevealObserver`) und Attribute `data-reveal`
- Ohne JS bleibt alles sichtbar: die Klasse `js` wird erst nach Hydration gesetzt

**Verboten**
- Bounce
- aggressive Zooms
- Partikel
- 3D
- Scroll-Jacking
- Animationsbibliotheken (GSAP/Motion), solange CSS reicht

## Conversion & Booking Strategy
- Primär-CTA ist überall **„Termin buchen“**. Er führt auf `SITE.bookingUrl`: Treatwell, später Deep-Link pro Treatment über `treatment.bookingUrl`.
- Sekundär-CTA ist **„Beratung anfragen“**. Er führt auf `SITE.consultUrl` (Kontakt-Section mit Telefon und E-Mail).
- CTA-Positionen:
  - Navigation (sticky)
  - Hero
  - nach den Treatments
  - Ergebnis des Treatment Finders
  - nach den Reviews
  - Final CTA
  - Mobile-Sticky-Bar (erscheint nach dem Hero)
- Treatment Finder: Hautanliegen → empfohlene Behandlung (mit Begründung, Dauer, Preis) → „Diese Behandlung buchen“ oder „Mehr erfahren“.

## SEO Strategy
- Eine H1 pro Seite. Die Startseite kombiniert Keyword-Eyebrow und Claim: „Kosmetikstudio in Zürich – Ihre Haut. Ihre Schönheit. Ihre Zeit.“
- Danach H2 pro Section, H3 für Cards.
- Pro Seite: Metadata (Title-Template, Description, Canonical, Open Graph, Twitter), dazu `sitemap.ts` und `robots.ts`.
- Keyword-Cluster:
  - Kosmetik(studio) Zürich, Kosmetikerin Zürich, Kosmetikstudio Bahnhofstrasse: Startseite
  - Gesichtsbehandlung, Aquafacial, HydraFacial Zürich: `/behandlungen/hydra4face`
  - Microneedling Zürich: `/behandlungen/microneedling`
  - Fruchtsäurepeeling Zürich: `/behandlungen/fruchtsaeurepeeling`
  - ColdPLASMA Zürich: `/behandlungen/coldplasma`
- Interne Verlinkung: Cards, Preisliste, Finder und Footer verlinken auf die Landingpages; diese verlinken auf verwandte Treatments.
- Alt-Texte beschreiben das spätere Motiv. Die Placeholder haben `role="img"` und ein `aria-label`.

## GEO Strategy (AI Search)
- Konsistente Entität „Beauty Face Lift – Kosmetikstudio Zürich, Inhaberin Teresa Stimac, Bahnhofstrasse 94, 8001 Zürich“. NAP ausschliesslich aus `lib/site.ts`.
- JSON-LD:
  - `BeautySalon` (eine LocalBusiness-Unterart) mit `founder`/`employee`, `knowsAbout`, `hasOfferCatalog`, `geo`, `openingHoursSpecification` und `sameAs`
  - `Person` (Teresa)
  - `Service` pro Treatment
  - `FAQPage`
  - `BreadcrumbList`
- Faktische, zitierfähige Sätze im Text, z. B. „Teresa Stimac führt Beauty Face Lift seit über 20 Jahren …“.
- **Kein** `aggregateRating` im Schema: Google wertet selbst eingebettete Bewertungen bei LocalBusiness als „self-serving“. Die Treatwell-Bewertung steht nur im sichtbaren Text.

## Performance Strategy
- Fast alles ist Server-gerendert und statisch. Client-JS beschränkt sich auf kleine Inseln.
- Fonts via `next/font` (self-hosted, Subset latin, `swap`, Fallback-Metriken) → kein CLS.
- Bilder später via `next/image`:
  - AVIF/WebP ist in `next.config.ts` aktiviert
  - `sizes` immer setzen
  - Hero-Bild mit `priority`, Rest lazy
- Placeholder haben feste `aspect-ratio` → kein CLS.
- Keine Third-Party-Scripts. Google Maps nur als Link, nicht als iframe. Treatwell später nur als Link oder Klick-to-load.
- Ziel: Lighthouse > 90, LCP < 2.5 s, CLS < 0.1, INP < 200 ms.

## Wichtige Design Decisions
1. Next.js statt eines statischen HTML-Mockups: gleicher Stack wie die anderen Wendico-Projekte und Landingpages pro Treatment.
2. `champagne-deep` für Buttons (Kontrast, siehe oben).
3. Preisliste als „Menü“ unter den Cards, damit der Nav-Punkt „Preise“ ein echtes Ziel hat.
4. Reviews als Scroll-Snap-Karussell statt Plugin. Ein grosses Rating-Statement steht daneben.
5. FAQ mit nativem `<details>`: kein JS, SEO-freundlich.
6. Alle Bildflächen sind `ImagePlaceholder` mit Seitenverhältnis und Motivbeschreibung. Sie werden später 1:1 durch `next/image` ersetzt.

## Platzhalter (vor Livegang ersetzen)
Alle Stellen sind im Code mit `PLACEHOLDER` markiert, Suche: `grep -rn PLACEHOLDER src`.
- Preise und Dauer der Treatments
- Öffnungszeiten, Telefon, E-Mail
- Domain (`SITE.url`)
- Treatwell-Booking-URL
- Review-Texte: Beispieltexte, durch echte Treatwell-Zitate mit Erlaubnis ersetzen
- Vorher/Nachher-Fälle
- Impressum und Datenschutz
- Alle Bilder
