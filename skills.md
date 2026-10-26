# skills.md – Regeln für Beauty Face Lift

Kurze, verbindliche Regeln für alle (Menschen und Agents), die an dieser Website arbeiten. Hintergrund siehe `CLAUDE.md`.

## Entscheidungsregeln
- Mehr Elemente oder mehr Whitespace? **Whitespace.**
- Mehr Animation oder subtilere Animation? **Subtiler.**
- Mehr Text oder klarere Information? **Klarere Information.**
- Schön oder conversion-optimiert? **Beides.** „Termin buchen“ darf nie verschwinden.

## Design
- Farben nur über Tokens (`bg-ivory`, `text-espresso`, `text-taupe`, `border-line` …). Keine Hex-Werte in Komponenten.
- Kein Pink, kein Rosé, keine Gradients (ausser dem funktionalen Lesbarkeits-Scrim im Hero), kein Neon.
- Champagne #C8A982 nie als Textfarbe auf hellem Grund. Für Text und Buttons `champagne-deep` verwenden.
- **Keine kursiven Akzentwörter** in Headlines. Betonung nur über zweifarbige Zeilen (Espresso / Espresso 40 %), und nur in Hero und Über Teresa.
- Section-Aufbau: `SectionHeading` (H2 + optional Lead). Eyebrow nur in max. 1 von 3 Sections, keine Goldlinie.
- Jede Section nutzt eine eigene Layout-Familie (Bento, Typo-Komposition, Tabs, Karussell, Accordion …). Nie dasselbe Layout zweimal.
- Radius: `rounded-card` (24 px), `rounded-media` (28 px), `rounded-panel` (32 px), `rounded-full` für Buttons und Chips. Keine freien Werte.
- **Jede Karte** über `ShapedCard` (ausgestufte Ecke oben rechts, optional unten links). Keine schlichten Rechteck-Karten.
- Schrift: Headlines `font-display` (Outfit, light), Text Manrope. Keine Serifenschrift, kein Kursiv.
- Borders statt Schatten. `shadow-soft` nur für schwebende Elemente (Hero-Rating-Card, Mobile-Bar).
- Section-Abstände über `py-section` (fluid, 72-120 px). Flächige Sections als gerahmte Panels mit `--spacing-frame`.

## Komponenten
- Neue UI-Bausteine zuerst in `components/ui` prüfen bzw. ergänzen. Section-Komponenten setzen sich daraus zusammen.
- Inhalte in `lib/content.ts`, Firmendaten in `lib/site.ts`. Keine Duplikate von Adresse, Telefon oder Preisen.
- Buttons immer über `<Button>`:
  - Varianten: `primary`, `secondary`, `ghost`
  - Primär-Label ist immer „Termin buchen“ oder „Diese Behandlung buchen“
- Server Component by default. Bei `"use client"` im PR begründen.

## Motion
- Nur über `data-reveal="up|image|fade"` plus optional `style={{"--reveal-delay": "120ms"}}`.
- Dauer 600–1200 ms, Easing `var(--ease-luxe)`. Hover-Scale ≤ 1.03.
- Alles muss mit `prefers-reduced-motion: reduce` sofort sichtbar und statisch sein.

## SEO / GEO
- Genau eine `<h1>` pro Seite. Die Heading-Hierarchie nicht überspringen.
- Neue Seiten:
  - `metadata` mit Title, Description und Canonical
  - Eintrag in `sitemap.ts` (automatisch für Treatments)
  - passendes JSON-LD über `lib/schema.ts`
- Neue Treatments nur in `lib/content.ts` ergänzen. Landingpage, Sitemap, Schema und Finder ziehen automatisch nach.
- Fakten (Name, Adresse, Jahre, Inhaberin) wortgleich und konsistent halten.

## Performance
- Keine neuen Dependencies ohne klaren Grund. Keine Third-Party-Scripts im Initial Load.
- Bilder: `next/image`, korrektes `sizes`, `priority` nur für das LCP-Bild.
- Jedes Medium hat ein festes Seitenverhältnis (kein CLS).

## Anti-AI-Slop (Pre-Flight vor jeder Abgabe)
- `grep -rn "[–—]" src` muss für sichtbaren Text leer sein.
- Eyebrows zählen: `grep -rn 'className="eyebrow' src/components/sections` ≤ ceil(Sections / 3).
- Keine Nummerierungen, Mittelpunkt-Ketten, dekorative Punkte, Wasserzeichen, Glow-Verläufe.
- Copy laut vorlesen: Klingt ein Satz nach Slogan-Generator oder Werbeprosa, durch einen sachlichen Satz ersetzen.
- Kein Scroll-Listener, keine erfundenen Zitate, keine Fake-Kennzahlen.
- Vollständige Liste: Abschnitt „Kein AI-Slop“ in `CLAUDE.md` und Skill `design-taste-frontend`.

## Content
- Sprache: Deutsch (Schweiz). Kein ß, sondern „ss“. Anrede „Sie“.
- Kein Lorem ipsum. Fehlende Infos mit `PLACEHOLDER`-Kommentar im Code markieren.
- Keine Heilversprechen. Formulierungen wie „sichtbar verfeinert“ oder „unterstützt“; bei Ergebnissen Disclaimer.
