/**
 * Editorial content for the website.
 * Lines marked PLACEHOLDER must be confirmed by Beauty Face Lift before launch.
 */

export type TreatmentSlug = "hydra4face" | "microneedling" | "fruchtsaeurepeeling" | "coldplasma";

export type Treatment = {
  slug: TreatmentSlug;
  name: string;
  kicker: string;
  short: string;
  intro: string;
  durationMin: number; // PLACEHOLDER
  priceFrom: number; // PLACEHOLDER (CHF)
  benefits: string[];
  idealFor: string[];
  process: { title: string; text: string }[];
  imageLabel: string;
  seo: { title: string; description: string };
  related: TreatmentSlug[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "hydra4face",
    name: "Hydra4Face",
    kicker: "Tiefenreinigung & Glow",
    short: "Reinigt, peelt und versorgt die Haut in einem Schritt mit Feuchtigkeit. Die Frische ist sofort sichtbar.",
    intro:
      "Hydra4Face ist unsere Aquafacial-Behandlung: Die Haut wird mit Wasserstrahl-Technologie sanft gereinigt, porentief geklärt und anschliessend mit Wirkstoffseren intensiv durchfeuchtet. Das Ergebnis ist ein ebenmässiger, praller Teint ohne Ausfallzeit.",
    durationMin: 75,
    priceFrom: 190,
    benefits: ["Sofortiger Glow", "Porentiefe Reinigung", "Intensive Feuchtigkeit", "Keine Ausfallzeit"],
    idealFor: ["Fahle, müde Haut", "Trockene Haut", "Vor besonderen Anlässen"],
    process: [
      { title: "Hautanalyse", text: "Wir besprechen Ihre Hautziele und wählen die passenden Seren." },
      { title: "Cleanse & Peel", text: "Sanfte Reinigung und Exfoliation mit Wasserstrahl-Technologie." },
      { title: "Extraktion", text: "Schmerzarme Absaugung von Unreinheiten." },
      { title: "Infusion", text: "Einschleusen von Hyaluron, Antioxidantien und Peptiden." },
    ],
    imageLabel: "Hydra4Face: Behandlung mit Handstück, Detailaufnahme",
    seo: {
      title: "Hydra4Face Zürich: Aquafacial an der Bahnhofstrasse",
      description:
        "Hydra4Face (Aquafacial/HydraFacial-Prinzip) in Zürich: Tiefenreinigung, Peeling und Feuchtigkeit in einer Behandlung. Persönlich bei Beauty Face Lift, Bahnhofstrasse 94.",
    },
    related: ["fruchtsaeurepeeling", "microneedling"],
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    kicker: "Hautverjüngung",
    short: "Regt die körpereigene Kollagenbildung an und verfeinert Hautbild, Poren und feine Linien.",
    intro:
      "Beim Microneedling setzen feinste Nadeln kontrollierte Mikroimpulse in der Haut. Diese aktivieren die natürliche Regeneration und Kollagenbildung. Über eine Behandlungsserie werden Hautstruktur, Poren, feine Linien und Aknenarben sichtbar verfeinert.",
    durationMin: 60,
    priceFrom: 220,
    benefits: ["Verfeinerte Poren", "Festere Haut", "Glattere Struktur", "Mildert Narben"],
    idealFor: ["Feine Linien", "Grobe Poren", "Aknenarben", "Erschlaffte Haut"],
    process: [
      { title: "Beratung", text: "Hautanalyse und Festlegen der Nadeltiefe." },
      { title: "Vorbereitung", text: "Gründliche Reinigung und Desinfektion." },
      { title: "Needling", text: "Präzise Behandlung mit sterilen Einweg-Modulen." },
      { title: "Beruhigung", text: "Kühlende Maske und Pflege für die Regeneration." },
    ],
    imageLabel: "Microneedling: Nahaufnahme Hautstruktur",
    seo: {
      title: "Microneedling Zürich: Kollagen-Behandlung an der Bahnhofstrasse",
      description:
        "Microneedling in Zürich bei Beauty Face Lift: verfeinerte Poren, glattere Hautstruktur und mehr Festigkeit. Persönliche Beratung und Behandlung durch Teresa Stimac.",
    },
    related: ["coldplasma", "hydra4face"],
  },
  {
    slug: "fruchtsaeurepeeling",
    name: "Fruchtsäurepeeling",
    kicker: "Klares Hautbild",
    short: "Löst abgestorbene Hautschüppchen, mildert Pigmentflecken und schenkt einen ebenmässigen Teint.",
    intro:
      "Das Fruchtsäurepeeling (AHA) löst verhornte Hautzellen und regt die Zellerneuerung an. Unreinheiten, Pigmentierungen und erste Linien werden gemildert, die Haut wirkt klarer, glatter und strahlender. Die Konzentration wird individuell auf Ihre Haut abgestimmt.",
    durationMin: 45,
    priceFrom: 140,
    benefits: ["Ebenmässiger Teint", "Weniger Unreinheiten", "Mildert Pigmentflecken", "Glattere Haut"],
    idealFor: ["Unreine Haut", "Pigmentflecken", "Grobe Hautstruktur"],
    process: [
      { title: "Hautanalyse", text: "Bestimmung der passenden Säure und Konzentration." },
      { title: "Vorbereitung", text: "Reinigung und Entfettung der Haut." },
      { title: "Peeling", text: "Kontrollierte Einwirkzeit unter Beobachtung." },
      { title: "Neutralisation", text: "Beruhigende Pflege und Sonnenschutz." },
    ],
    imageLabel: "Fruchtsäurepeeling: Auftragen mit Pinsel",
    seo: {
      title: "Fruchtsäurepeeling Zürich: AHA-Peeling für klare Haut",
      description:
        "Fruchtsäurepeeling in Zürich bei Beauty Face Lift: mildert Unreinheiten und Pigmentflecken für einen ebenmässigen Teint. Individuell abgestimmt, Bahnhofstrasse 94.",
    },
    related: ["hydra4face", "microneedling"],
  },
  {
    slug: "coldplasma",
    name: "ColdPLASMA",
    kicker: "Regeneration & Anti-Aging",
    short: "Kaltes Plasma wirkt antibakteriell, stärkt die Regeneration und unterstützt eine straffere Haut.",
    intro:
      "ColdPLASMA nutzt ionisiertes, kaltes Plasma. Es wirkt antibakteriell, verbessert die Aufnahme von Wirkstoffen und unterstützt die Regeneration der Haut. Ideal bei Unreinheiten, empfindlicher Haut und als Anti-Aging-Booster. Sanft und ohne Ausfallzeit.",
    durationMin: 60,
    priceFrom: 260,
    benefits: ["Antibakteriell", "Stärkt die Regeneration", "Bessere Wirkstoffaufnahme", "Sanft & schmerzfrei"],
    idealFor: ["Akne & Entzündungen", "Empfindliche Haut", "Anti-Aging"],
    process: [
      { title: "Beratung", text: "Hautanalyse und individuelle Behandlungsplanung." },
      { title: "Reinigung", text: "Sanfte Vorbereitung der Haut." },
      { title: "Plasma", text: "Behandlung mit kaltem Plasma, kaum spürbar." },
      { title: "Wirkstoffe", text: "Einschleusen passender Seren und Abschlusspflege." },
    ],
    imageLabel: "ColdPLASMA: Gerät im Studio, ruhige Lichtstimmung",
    seo: {
      title: "ColdPLASMA Zürich: Kaltplasma-Behandlung fürs Gesicht",
      description:
        "ColdPLASMA in Zürich bei Beauty Face Lift: antibakteriell, regenerierend und ideal bei Unreinheiten oder als Anti-Aging-Booster. Persönlich an der Bahnhofstrasse 94.",
    },
    related: ["microneedling", "fruchtsaeurepeeling"],
  },
];

export const getTreatment = (slug: string) => TREATMENTS.find((t) => t.slug === slug);

/* ------------------------------------------------------------------------ */
/* Additional price list items (menu)                                        */
/* ------------------------------------------------------------------------ */
// PLACEHOLDER: full price list to be confirmed
export const PRICE_EXTRAS = [
  { name: "Hautanalyse", durationMin: 30, price: 0 },
  { name: "Klassische Gesichtsbehandlung", durationMin: 75, price: 160 },
  { name: "Microneedling-Kur (3x)", durationMin: 180, price: 590, note: "3 × 60 Min" },
];

/* ------------------------------------------------------------------------ */
/* Treatment Finder                                                         */
/* ------------------------------------------------------------------------ */
export type Concern = {
  id: string;
  label: string;
  icon: IconName;
  recommendation: TreatmentSlug | null; // null = personal consultation
  alternative?: TreatmentSlug;
  reason: string;
};

export type IconName =
  | "drop" | "sparkle" | "sun" | "leaf" | "circle-dots" | "moon" | "question"
  | "star" | "calendar" | "pin" | "heart" | "clock" | "arrow" | "phone" | "mail";

export const CONCERNS: Concern[] = [
  {
    id: "akne",
    label: "Akne & Unreinheiten",
    icon: "circle-dots",
    recommendation: "fruchtsaeurepeeling",
    alternative: "coldplasma",
    reason: "Fruchtsäure klärt verstopfte Poren und reguliert die Verhornung. ColdPLASMA wirkt zusätzlich antibakteriell.",
  },
  {
    id: "falten",
    label: "Falten & Anti-Aging",
    icon: "moon",
    recommendation: "microneedling",
    alternative: "coldplasma",
    reason: "Microneedling aktiviert die körpereigene Kollagenbildung. Die Haut wird über die Kur sichtbar fester und glatter.",
  },
  {
    id: "pigment",
    label: "Pigmentierung",
    icon: "sun",
    recommendation: "fruchtsaeurepeeling",
    alternative: "microneedling",
    reason: "Das Fruchtsäurepeeling beschleunigt die Zellerneuerung und hellt Pigmentflecken schrittweise auf.",
  },
  {
    id: "trocken",
    label: "Trockene Haut",
    icon: "drop",
    recommendation: "hydra4face",
    reason: "Hydra4Face schleust Hyaluron und Feuchtigkeit tief in die Haut. Sie fühlt sich spürbar weicher und praller an, schon ab der ersten Behandlung.",
  },
  {
    id: "poren",
    label: "Poren & Hautstruktur",
    icon: "leaf",
    recommendation: "microneedling",
    alternative: "hydra4face",
    reason: "Microneedling verfeinert grobe Poren und glättet die Hautstruktur nachhaltig.",
  },
  {
    id: "glow",
    label: "Glow",
    icon: "sparkle",
    recommendation: "hydra4face",
    alternative: "fruchtsaeurepeeling",
    reason: "Für sofortige Frische ohne Ausfallzeit: Reinigen, Peelen und Versorgen in einer Behandlung.",
  },
  {
    id: "unsicher",
    label: "Ich bin unsicher",
    icon: "question",
    recommendation: null,
    reason: "In einer persönlichen Hautanalyse finden wir gemeinsam die Behandlung, die wirklich zu Ihrer Haut passt.",
  },
];

/* ------------------------------------------------------------------------ */
/* About Teresa                                                             */
/* ------------------------------------------------------------------------ */
export const TERESA_PILLARS = [
  {
    title: "Erfahrung",
    text: "Seit über 20 Jahren widmet sich Teresa der Gesichts- und Hautpflege und bildet sich laufend in neuen Methoden weiter.",
  },
  {
    title: "Philosophie",
    text: "Natürliche Ergebnisse statt Trends. Ihre Haut soll gesund, gepflegt und wie die beste Version ihrer selbst aussehen.",
  },
  {
    title: "Beratung",
    text: "Jede Behandlung beginnt mit einer ehrlichen Hautanalyse. Sie erhalten nur, was Ihre Haut wirklich braucht.",
  },
];

/* ------------------------------------------------------------------------ */
/* Results (Before/After)                                                   */
/* ------------------------------------------------------------------------ */
// PLACEHOLDER: replace with real, consented client cases
export const RESULTS: { treatment: TreatmentSlug; title: string; text: string; outcome: string; sessions: string }[] = [
  {
    treatment: "microneedling",
    title: "Verfeinerte Hautstruktur",
    text: "Grobe Poren und leichte Aknenarben im Wangenbereich.",
    outcome: "Sichtbar glatteres, ebenmässigeres Hautbild.",
    sessions: "3 Behandlungen",
  },
  {
    treatment: "fruchtsaeurepeeling",
    title: "Ebenmässiger Teint",
    text: "Pigmentflecken und fahler Teint nach dem Sommer.",
    outcome: "Hellere, gleichmässigere Haut mit mehr Leuchtkraft.",
    sessions: "4 Behandlungen",
  },
  {
    treatment: "hydra4face",
    title: "Frische & Feuchtigkeit",
    text: "Trockene, müde wirkende Haut mit feinen Trockenheitslinien.",
    outcome: "Praller, strahlender Teint direkt nach der Behandlung.",
    sessions: "1 Behandlung",
  },
];

/* ------------------------------------------------------------------------ */
/* Reviews                                                                  */
/* ------------------------------------------------------------------------ */
// PLACEHOLDER: example texts, replace with real Treatwell reviews (with permission)
export const REVIEWS = [
  {
    quote: "Wie immer eine wunderbare Verwöhnzeit. Teresa nimmt sich Zeit, erklärt alles und meine Haut sieht danach jedes Mal fantastisch aus.",
    name: "Sandra M.",
    treatment: "Hydra4Face",
  },
  {
    quote: "Nach drei Microneedling-Sitzungen ist meine Haut so glatt wie seit Jahren nicht mehr. Sehr professionell und herzlich.",
    name: "Claudia R.",
    treatment: "Microneedling",
  },
  {
    quote: "Ein ruhiger, eleganter Ort mitten an der Bahnhofstrasse. Die Beratung war ehrlich und genau richtig für meine Haut.",
    name: "Nadine K.",
    treatment: "Hautanalyse",
  },
  {
    quote: "Das Fruchtsäurepeeling hat meine Pigmentflecken deutlich gemildert. Ich fühle mich bei Teresa bestens aufgehoben.",
    name: "Elena V.",
    treatment: "Fruchtsäurepeeling",
  },
  {
    quote: "Seit Jahren meine Kosmetikerin in Zürich. Persönlich, kompetent und immer mit einem feinen Gespür für meine Haut.",
    name: "Monika B.",
    treatment: "Gesichtsbehandlung",
  },
];

/* ------------------------------------------------------------------------ */
/* FAQ                                                                      */
/* ------------------------------------------------------------------------ */
export const FAQS = [
  {
    q: "Wie lange dauert eine Behandlung?",
    a: "Je nach Behandlung zwischen 45 und 75 Minuten. Beim ersten Termin planen wir zusätzlich etwa 15 Minuten für die persönliche Hautanalyse ein.",
  },
  {
    q: "Ist die Behandlung schmerzhaft?",
    a: "Die meisten Behandlungen sind sehr angenehm und entspannend. Beim Microneedling spüren Sie ein leichtes Kribbeln. Auf Wunsch arbeiten wir mit einer betäubenden Creme.",
  },
  {
    q: "Wie oft sollte man Microneedling machen?",
    a: "Für ein optimales Ergebnis empfehlen wir eine Kur von drei bis vier Behandlungen im Abstand von vier bis sechs Wochen. Danach genügt eine Auffrischung alle paar Monate.",
  },
  {
    q: "Was kostet eine Behandlung?",
    a: "Unsere Behandlungen beginnen ab CHF 140. Alle Preise finden Sie transparent in unserer Preisliste, ohne versteckte Kosten.",
  },
  {
    q: "Welche Behandlung ist für meine Haut geeignet?",
    a: "Das hängt von Hauttyp und Zielen ab. Nutzen Sie unseren Treatment Finder für eine erste Empfehlung oder vereinbaren Sie eine persönliche Hautanalyse mit Teresa.",
  },
  {
    q: "Wie sollte ich mich auf die Behandlung vorbereiten?",
    a: "Verzichten Sie 3 bis 5 Tage vorher auf Retinol, starke Peelings und intensive Sonne. Kommen Sie wenn möglich ungeschminkt. Alles Weitere besprechen wir vor Ort.",
  },
  {
    q: "Kann ich direkt nach der Behandlung arbeiten?",
    a: "Nach Hydra4Face, Fruchtsäurepeeling und ColdPLASMA ja. Nach dem Microneedling kann die Haut 24 bis 48 Stunden leicht gerötet sein. Planen Sie wichtige Termine am besten nicht direkt danach.",
  },
  {
    q: "Muss ich vorher einen Beratungstermin vereinbaren?",
    a: "Nicht zwingend. Sie können direkt eine Behandlung buchen, die Hautanalyse ist immer Teil Ihres ersten Termins. Bei Unsicherheit beraten wir Sie gerne vorab.",
  },
];
