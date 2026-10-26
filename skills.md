# skills.md – Regeln für Beauty Face Lift

Kurze, verbindliche Regeln für alle (Menschen und Agents), die an dieser Website arbeiten. Hintergrund siehe `CLAUDE.md`.

## Entscheidungsregeln
- Mehr Elemente oder mehr Whitespace? **Whitespace.**
- Mehr Animation oder subtilere Animation? **Subtiler.**
- Mehr Text oder klarere Information? **Klarere Information.**
- Schön oder conversion-optimiert? **Beides.** „Termin buchen“ darf nie verschwinden.

## Design
- Farben nur über Tokens (`bg-ivory`, `text-espresso`, `text-taupe`, `border-line` …). Keine Hex-Werte in Komponenten.
- Kein Pink, kein Rosé, keine Gradients (ausser dem subtilen Placeholder-Shimmer), kein Neon.
- Champagne #C8A982 nie als Textfarbe auf hellem Grund. Für Text und Buttons `champagne-deep` verwenden.
- Pro Headline höchstens **ein** kursives Akzentwort (`<em>`).
- Section-Aufbau: `SectionHeading` (Eyebrow → Goldlinie → H2 → optional Lead).
- Radius:
  - `rounded-card` (16 px) für Cards
  - `rounded-media` (20 px) für Bilder
  - `rounded-full` für Buttons und Chips
- Borders statt Schatten. `shadow-soft` nur für schwebende Elemente (Hero-Rating-Card, Mobile-Bar).
- Section-Abstände über `py-section` (fluid). Nicht frei erfinden.

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

## Content
- Sprache: Deutsch (Schweiz). Kein ß, sondern „ss“. Anrede „Sie“.
- Kein Lorem ipsum. Fehlende Infos mit `PLACEHOLDER`-Kommentar im Code markieren.
- Keine Heilversprechen. Formulierungen wie „sichtbar verfeinert“ oder „unterstützt“; bei Ergebnissen Disclaimer.
