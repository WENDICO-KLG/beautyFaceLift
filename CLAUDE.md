# Beauty Face Lift – Website

Relaunch der Website von **Beauty Face Lift**, Kosmetikstudio an der Bahnhofstrasse 94, 8001 Zürich. Inhaberin: Teresa Stimac, über 20 Jahre Erfahrung.
Stack: **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4**. Einzige weitere Runtime-Dependency: `lenis` (Smooth Scrolling).

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
- Hell, warm und ruhig. **Whitespace vor Elementen.** Hierarchie entsteht über die Grösse der leichten Display-Schrift, nicht über Effekte.
- Gold bzw. Champagne ist **Akzent, nie Fläche**: Primärbutton, Icons, feine Linien.
- Editoriale Bildsprache, später echte Fotos von Teresa, dem Studio und Haut-Details. Formate: Hero und Portraits 4:5, Studio 16:10, Cards 4:5. Keine Stockgesichter.
- Komponenten-Sprache (Referenz: Pinterest-Moodboard „Luméra“, Awwwards Beauty in Stem/Koba):
  - **Fullscreen-Hero**: Querformat-Foto Kante zu Kante (100svh), weicher Lichtverlauf von links (Desktop) bzw. unten (Mobile), Text unten links, Fakten als ruhige Zeile unter den CTAs.
  - **Split-Navigation**: Links links, Logo zentriert, „Termin buchen“ rechts. Unter `xl` runder Menü-Button.
  - **Cut-out-Cards** (`.notch`): Info-Panel sitzt in der Ecke des Bildes und teilt den Seitenhintergrund, runder Pfeil-Button darin.
  - **Bento statt gleicher Karten**: Behandlungen in einem 12er-Raster mit unterschiedlichen Grössen und Tönen.
  - **Typografische Komposition**: Headline um ein Portrait herum gesetzt (Über Teresa), zweifarbig (Espresso + Espresso/40) statt kursivem Gold-Akzent.
  - **Rahmen-Klammer**: Hero und Final CTA sind beide gerahmte Flächen und klammern die Seite.

## Kein AI-Slop (verbindlich)
Die Seite darf an keiner Stelle nach „von einer KI generiert“ aussehen. Grundlage ist der Skill `design-taste-frontend` (Pre-Flight-Check vor jeder Abgabe). Konkret verboten:
- **Gedankenstriche** (– und —) in sichtbarem Text, Alt-Texten und Meta-Daten. Stattdessen Punkt, Komma oder Doppelpunkt. Bereiche mit Bindestrich (`09:00-19:00`).
- **Eyebrow über jeder Section.** Max. 1 Versalien-Label pro 3 Sections (aktuell: Hero, Treatment Finder, Studio).
- **Goldlinie unter Labels**, **kursives Gold-Akzentwort** in Headlines, `01/02`-Nummerierungen, dekorative Punkte, Mittelpunkt-Ketten (`a · b · c`).
- **Slogan-Fragmente** im Dreierrhythmus („Echte Haut. Echte Veränderung.“), erfundene Zitate, Füllwörter (einzigartig, exklusiv, ganzheitlich, Reise, entdecken Sie die Welt …). Headlines sagen sachlich, was die Section zeigt.
- **Drei gleiche Karten nebeneinander**, gleiches Layout in zwei Sections, mehr als zwei Bild-Text-Zickzacks hintereinander.
- **Wasserzeichen, Glow-Verläufe, Platzhalter-Monogramme**, Pills auf Bildern (Ausnahme: funktionale Labels wie „Vorher/Nachher“).
- **Mehrere Labels für dieselbe Absicht.** Buchen heisst immer „Termin buchen“, Kontakt immer „Beratung anfragen“.
- `window.addEventListener("scroll")`. Scroll-Zustände nur über IntersectionObserver oder CSS `animation-timeline`.
- Zitate länger als 3 Zeilen, Attribution mit Gedankenstrich.

Erlaubte Ausnahmen (bewusst, vom Briefing vorgegeben): warme Ivory/Champagne-Palette (Brand Sheet), Fakten im Hero (Kundenwunsch, als schwebende Karten gelöst).

## Echte Daten (Quelle: beautyfacelift.ch, Okt. 2026)
Telefon 079 214 34 62, Öffnungszeiten Mo bis Fr 10:00-20:00 und Sa 9:00-16:00, Buchung über Treatwell (`buchung.treatwell.ch/ort/beauty-face-lift/`), Instagram `@beautyfacelift.zh`, Facebook `BeautyFaceLiftZuerich`. Preise der Hauptbehandlungen aus der dortigen Preisliste. Das vollständige Angebot umfasst zusätzlich Carbon Peeling, Brauen/Wimpern, Massage, Waxing, Make-up und Laser-Haarentfernung.

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
- **Outfit** (200/300/400) für Headlines: leichte, geometrische Display-Schrift, gross, eng gesperrt (-0.035 bis -0.045em), kompakter Zeilenabstand (0.94 bis 1.02). Wirkt edel durch Leichtigkeit, modern durch die Sans-Form.
- **Manrope** (Variable 200-800) für Fliesstext und UI.
- Bewusst **keine Serifenschrift** mehr: Playfair wirkte klassisch und ist ein typischer AI-Default. Die Serif lebt nur noch im Logo-Monogramm.
- Self-hosted via `next/font/local` (Dateien in `src/fonts`, SIL OFL), `display: swap`, metrisch angepasste Fallbacks, kein CLS.
- Betonung über **Farbe derselben Schrift** (Espresso / Espresso 40 %), nie über Kursiv oder Schriftmix.
- Fluid Type Scale (`clamp`): `display`, `h1`, `h2`, `h3`, `lead`, `body` (15 px), `small` (13 px), `eyebrow`.
- Headlines mit `text-wrap: balance`, Fliesstext höchstens ~60 Zeichen breit (`max-w-prose-narrow`).

## Karten-Form (verbindlich)
Jede Karte nutzt `ui/ShapedCard`: abgerundete Karte mit **ausgestufter Ecke oben rechts** (wie ein Register-Tab), optional zusätzlich **unten links** für die Bildunterschrift. Vorbild ist das Pinterest-Moodboard.
- Die Stufe oben rechts trägt etwas Sinnvolles: runden Pfeil-Button (`CornerButton`), ein Label (Behandlung, „Unsere Empfehlung“) oder bleibt als reine Form leer.
- `surface` muss die Farbe hinter der Karte sein (`--color-ivory`, `--color-beige-soft`, `--color-white`, `--color-beige`).
- Ausnahme: kleine Info-Karten, die direkt auf einem Foto liegen (Hero), da dort keine Fläche für die Stufe existiert.

## Spacing & Rahmen
- Sections mit eigener Fläche (Hero, Treatment Finder, Ergebnisse, Studio, Final CTA) sind **gerahmte Panels**: `rounded-panel` (32 px), Abstand zum Viewport `--spacing-frame` (8-14 px).
- Section-Abstand `py-section` = 72-120 px (vorher bis 160 px, wirkte leer und generisch).
- Radius-Skala: `rounded-sm` 12 px (kleine Labels), `rounded-card` 24 px, `rounded-media` 28 px, `rounded-panel` 32 px, Buttons und Chips `rounded-full`.

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

## Seitenstruktur (Multi-Page)
Keine Onepager-Seite: jede Hauptnavigation führt auf eine eigene URL mit eigener H1, eigenem Metadata und eigenem Schema.

| Route | Inhalt | Schema |
|---|---|---|
| `/` | Hero, TrustBar, Behandlungen (Bento + Links), Treatment Finder, Teresa-Teaser, Bewertungen, Final CTA | WebSite, BeautySalon, Person, Service |
| `/behandlungen` | PageHeader, alle Behandlungen (Bento), Treatment Finder, CTA | CollectionPage, Breadcrumb |
| `/behandlungen/[slug]` | Landingpage pro Behandlung | Service, BeautySalon, Breadcrumb |
| `/preise` | PageHeader, Preisliste, FAQ-Auszug Kosten, CTA | WebPage, FAQPage, Breadcrumb |
| `/ueber-teresa` | PageHeader, Typo-Komposition + Geschichte + Werte, Bewertungen, CTA | AboutPage, Person, Breadcrumb |
| `/ergebnisse` | PageHeader, Vorher/Nachher, Bewertungen, CTA | WebPage, Breadcrumb |
| `/faq` | PageHeader, alle Fragen, CTA | FAQPage, Breadcrumb |
| `/kontakt` | PageHeader, Studio, Adresse, Öffnungszeiten, Anfahrt, CTA | ContactPage, BeautySalon, Breadcrumb |

- Unterseiten starten mit `layout/PageHeader` (gerahmtes Panel, Breadcrumb, H1, Lead, optional Bild in `ShapedCard`).
- Sections sind wiederverwendbar und kennen keine Seiten-Anker mehr. Interne Links zeigen auf Routen, nicht auf `#ids`.
- Navigation: Behandlungen, Preise, Über Teresa, Ergebnisse, FAQ, Kontakt (aktiver Punkt unterstrichen).

## Komponentenstruktur
```
src/
  app/            layout.tsx, page.tsx, globals.css, sitemap.ts, robots.ts, behandlungen/[slug]/page.tsx
  lib/
    site.ts       Single Source of Truth für NAP, URLs, Booking-Links, Öffnungszeiten
    content.ts    Treatments, Finder-Mapping, Reviews, Ergebnisse, FAQ
    schema.ts     JSON-LD-Builder (BeautySalon, Person, Service, FAQPage, Breadcrumb)
  components/
    ui/           Button, SectionHeading, ShapedCard (+ CornerButton), ImagePlaceholder, Icon, Stars, JsonLd, RevealObserver
    layout/       Navbar (Split-Nav, Mobile-Menü, Mobile-Booking-Bar), Footer
    sections/     Hero (gerahmt, FloatCards), TrustBar, Treatments (Bento + Preisliste),
                  TreatmentCard (Cut-out-Corner), TreatmentFinder, AboutTeresa (Typo-Komposition),
                  Results (Tabs + BeforeAfter), Reviews, Studio, FAQ, CTASection (gerahmt)
```
Regeln:
- **Server Components by default.** `"use client"` nur dort, wo es nötig ist: Navbar, TreatmentFinder, Results, BeforeAfter, Reviews, RevealObserver.
- Inhalte gehören in `lib/content.ts`, nie hardcoded in Komponenten.

## Animation Principles
Luxury = restraint.

**Erlaubt**
- Fade-up (16 px, 1000 ms) und Bild-Einblendung (Opacity + Scale 1.015). Kein clip-path und kein Blur: beides ist beim Scrollen teuer und ruckelt.
- **Smooth Scrolling mit Lenis** (`ui/SmoothScroll`, ~3 KB): Trägheit für Mausrad und Trackpad, Touch bleibt nativ, aus bei `prefers-reduced-motion`, pausiert bei offenem Mobile-Menü (Event `bfl:menu`).
- Leichtes Parallax nur im Hero-Bild, umgesetzt per CSS `animation-timeline: view()` ohne JS
- Hover: Bild-Scale ≤ 1.03, Pfeil-Shift 4 px
- Sticky-Nav-Transition (Zustand via IntersectionObserver auf `#top-sentinel`, `[data-hero]`, `[data-final-cta]`)

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
- Animationsbibliotheken (GSAP/Motion), solange CSS reicht. Einzige Ausnahme: Lenis für das Scrollgefühl.
- `backdrop-filter`/Blur auf grossen oder sticky Flächen (Navigation, Leisten)

## Conversion & Booking Strategy
- Primär-CTA ist überall **„Termin buchen“**. Er führt auf `SITE.bookingUrl`: Treatwell, später Deep-Link pro Treatment über `treatment.bookingUrl`.
- Sekundär-CTA ist **„Beratung anfragen“**. Er führt auf `SITE.consultUrl` (`/kontakt`).
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
- Eine H1 pro Seite. Die Startseite kombiniert Keyword-Eyebrow und Claim: „Kosmetikstudio in Zürich. Ihre Haut. Ihre Schönheit. Ihre Zeit.“
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
  - Nur WebP in `next.config.ts`: AVIF braucht beim ersten Aufruf mehrere Sekunden pro Bild (schlechtes LCP bei kaltem Cache)
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

## Offene technische Punkte
- **Icons**: noch eigene Inline-SVGs (`ui/Icon.tsx`). Laut Anti-Slop-Regel durch `@phosphor-icons/react` (Light, stroke 1.5) ersetzen, sobald `npm install` möglich ist.
- **Dark Mode**: bewusst nicht umgesetzt. Die Marke ist laut Brand Sheet hell (Warm Ivory dominant).

## Platzhalter (vor Livegang ersetzen)
Alle Stellen sind im Code mit `PLACEHOLDER` markiert, Suche: `grep -rn PLACEHOLDER src`.
- Preise und Dauer der Treatments
- Öffnungszeiten, Telefon, E-Mail
- Domain (`SITE.url`)
- Treatwell-Booking-URL
- Review-Texte: Beispieltexte, durch echte Treatwell-Zitate mit Erlaubnis ersetzen
- Vorher/Nachher-Fälle
- Impressum und Datenschutz
- Bilder: Mischung aus lizenzfreien Pexels-Fotos und ChatGPT-Kampagnenbildern (siehe `docs/image-credits.md`), vor Livegang durch eigenes Shooting ersetzen. Teresa-Portrait und Vorher/Nachher sind noch Platzhalter.
