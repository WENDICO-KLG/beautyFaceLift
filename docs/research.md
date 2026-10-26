# Research & Referenzanalyse – Beauty Face Lift Relaunch

Stand: 26.10.2026

## 1. Analyse der Referenzbilder (Moodboard + Brand Sheet)

**Brand Sheet (Logo auf Seide + Palette)**
- Logo: goldenes, ineinander verschachteltes Serifen-Monogramm „BFL“ + geometrische Grotesk-Wortmarke in Espresso/Schwarz. Gold = Material (Folienprägung), nicht Fläche.
- Hintergrund: Warm Ivory, weich, seidig. Die Seide zeigt die gewünschte Bildsprache: Licht, Textur, Ruhe, keine harten Kontraste.
- Swatches mit grossem Radius (~12 px), darunter Hex in gesperrten Versalien, kurze Champagne-Linie (≈ 40 px) als Trenner, Beschreibung in Taupe. → Muster „Label – Goldlinie – Text“ zieht sich durch das ganze System.

**Moodboard (Website-Aufbau)**
- Typografie: Playfair Display (Serif, Headlines), Inter (Text). Labels in Versalien mit weiter Laufweite (~0.2em).
- Cards: weiss auf Ivory, feine Beige-Border, Radius ~14 px, quasi kein Schatten. Nummern in dunklen Espresso-Kreisen („01“…).
- Icons: dünne Line-Icons (≈1.5 px) in Champagne, auf sehr hellem Kreis.
- CTAs: Pillenform. Primär goldgefüllt mit weissem Text + Pfeil „→“, sekundär Outline in Espresso. Immer als Paar „Termin buchen“ / „Beratung anfragen“.
- Treatments als kompakte Liste mit Name + Untertitel + Pfeil → im Mockup weiterentwickelt zu grossen editorialen Cards + Preisliste.
- Hautprobleme als Pill-Liste mit Icon → Treatment Finder.
- Ergebnisse als Vorher/Nachher-Slider mit rundem Griff.
- Reviews als zentrierte Karte mit Serif-Zitat, Sternen und „4.8/5 aus 260+ Bewertungen auf Treatwell“, Pfeile links/rechts.
- FAQ als schlanke Liste mit Chevron.
- Final CTA: grosse Serif-Headline links, zwei CTAs.
- Informationsarchitektur: Hero → Vertrauen → Behandlungen → Hautprobleme → Über Teresa → Ergebnisse → Studio → FAQ → Ratgeber/Blog → Final CTA.
- Gesamteindruck: sehr hell, Text-/Bildverhältnis eher textlastig (Mockup), Hierarchie über Serif-Grösse statt Farbe.

**Bewusste Abweichung:** Weisse Schrift auf #C8A982 hat nur ~2.2:1 Kontrast (WCAG-Fail). Primärbutton nutzt daher `champagne-deep` (#8B6B45, ~5:1 mit Weiss). #C8A982 bleibt für Linien, Icons, Ornamente.

## 2. Externe Recherche – Erkenntnisse

Ausgewertet: Awwwards (Kategorie Beauty, Beauty in STEM, Koba Skincare), Cosmetic Skin Clinic, 111SKIN, Create-Today-Galerie (Beauty-Salon-Statistiken), Colorlib Esthetician-Beispiele.
Nicht abrufbar (Bot-Schutz): Pinterest, Aesop, Dr. Barbara Sturm, Sisley, La Prairie, Joanna Czech, Dr. Sebagh, Augustinus Bader. Für diese gilt nur allgemeines Wissen.

**Patterns, die wir übernehmen**
1. Split-Hero (Text links, hochformatiges Bild rechts). Rund 94 % der Beauty-Seiten haben einen Foto-Hero, 42 % davon als Split.
2. Serif-Headline mit Sans-Body (häufigstes Pairing). Ein Wort pro Headline kursiv als editorialer Akzent.
3. Helle, gedämpfte Flächen. Rhythmus durch abwechselnd Ivory und Beige statt durch Farbe.
4. Reduzierte Palette mit einem tiefen Erdton (Espresso) und einem Akzent.
5. Die Gründerin als Trust-Anker, mit Porträt, Jahren an Erfahrung und Signatur (vgl. Cosmetic Skin Clinic: „Experience matters“).
6. Einstieg über Hautanliegen statt nur über Treatments, umgesetzt als Treatment Finder.
7. Menüartige Preisliste: Name links, Dauer und Preis rechtsbündig, Punktlinie.
8. Trust-Leiste mit Bewertungsquelle (Treatwell).
9. Zurückhaltende Motion: Fade-up, Bild-Reveal, leichtes Parallax. `prefers-reduced-motion` wird respektiert.
10. Navigation mit maximal 5–6 Punkten und einem dauerhaften Primär-CTA.

**Anti-Patterns**
- Shop- und Promo-Kacheln auf der Startseite (111SKIN).
- Durchgestrichene Rabattpreise.
- Pampas-Gras- und Stock-Ästhetik.
- Neon, 3D, Partikel.
- Mehrere gleichrangige CTAs nebeneinander.
- Vage Primär-CTAs wie „Mehr erfahren“.

**Booking und Conversion**
- Ein konsistenter Primär-CTA „Termin buchen“ in Navigation, Hero, nach den Treatments, nach den Reviews, am Ende und als Sticky-Bar auf Mobile.
- Preis und Dauer transparent an jeder Behandlung.
- Bewertungen immer mit Quelle.
- Der Treatment Finder endet in einer Empfehlung plus Buchung.
- Später: echtes Online-Booking (Treatwell-Widget oder Deep-Link) direkt mit vorausgewählter Behandlung.

**Mobile**
- 60–75 % des Traffics kommen mobil.
- Sticky-Booking-Bar im Daumenbereich.
- Hero-Bild im Format 4:5.
- Headline maximal 3 Zeilen.
- Tap-Targets mindestens 44 px.
- Cards als horizontale Scroll-Snap-Reihen statt langer Stapel.

## 3. Zweite Runde: Komponenten-Referenzen (Stand 26.10.2026)

Pinterest blockiert weiterhin automatisierte Abrufe. Grundlage sind deshalb:
- das vom Kunden gelieferte Pinterest-Moodboard („Luméra Skincare“)
- Awwwards: Beauty in Stem 2026, Koba Skincare, Aesthetics Clinic
- Figma-Community-Hero-Sections für Skincare
- Colorlib-Roundups 2026

Analysiert wurden nur Komponenten, nicht Farben.

**Übernommene Komponenten**
- **Gerahmter Full-Bleed-Hero.** Das Bild sitzt in einem abgerundeten Rahmen mit wenigen Pixeln Abstand zum Viewport. Die grosse Headline liegt direkt auf dem Bild, mit zweifarbigem Gewicht statt Effekt.
- **Schwebende Info-Karten im Hero.** Im Moodboard sind das Produkt- und „25K+ Kunden“-Karten. Bei uns sind es Rating und Teresa mit Adresse.
- **Split-Navigation** mit zentriertem Logo und rundem Menü-Button.
- **Cut-out-Corner-Cards.** Die konkave Ecke, in der Text oder Button sitzt, ist ein aktueller Pinterest-Trend für Produkt- und Service-Karten.
- **Typografie um ein Bild komponiert.** Im Moodboard: „Skilled Skin Experts“ links und „Results-Driven“ rechts eines Portraits.
- **Runde Pfeil-Controls** für Karussells und Cards.

**Bewusst nicht übernommen**
- Dunkle Bildwelt (Farbe ist nicht Teil der Analyse)
- Avatar-Reihen mit erfundenen Gesichtern
- schräg gestellte Bildkarten
- „98 %“-Fake-Kennzahlen
