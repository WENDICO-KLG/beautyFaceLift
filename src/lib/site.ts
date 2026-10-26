/**
 * Single source of truth for business facts (NAP), URLs and booking links.
 * Everything that appears in text, JSON-LD and metadata must come from here.
 */

export const SITE = {
  name: "Beauty Face Lift",
  legalName: "Beauty Face Lift",
  tagline: "Kosmetikstudio Zürich",
  // PLACEHOLDER: confirm production domain
  url: "https://www.beautyfacelift.ch",
  locale: "de_CH",
  description:
    "Beauty Face Lift ist ein Kosmetikstudio an der Bahnhofstrasse in Zürich. Gesichtsbehandlungen, Hydra4Face, Microneedling, Fruchtsäurepeeling und ColdPLASMA, persönlich durchgeführt von Teresa Stimac mit über 20 Jahren Erfahrung.",

  owner: {
    name: "Teresa Stimac",
    firstName: "Teresa",
    jobTitle: "Kosmetikerin & Inhaberin",
    yearsExperience: 20,
  },

  address: {
    street: "Bahnhofstrasse 94",
    postalCode: "8001",
    city: "Zürich",
    region: "ZH",
    country: "CH",
  },
  // Approximate coordinates of Bahnhofstrasse 94, verify before launch
  geo: { lat: 47.3763, lng: 8.5393 },

  // PLACEHOLDER: real contact data
  phone: "+41 44 000 00 00",
  phoneDisplay: "044 000 00 00",
  email: "info@beautyfacelift.ch",

  rating: { value: 4.8, count: 260, source: "Treatwell" },

  // PLACEHOLDER: real Treatwell venue URL (deep link per treatment later)
  bookingUrl: "https://www.treatwell.ch/",
  consultUrl: "/#kontakt",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Beauty+Face+Lift+Bahnhofstrasse+94+8001+Z%C3%BCrich",

  // PLACEHOLDER: real opening hours
  openingHours: [
    { label: "Montag bis Freitag", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { label: "Samstag", days: ["Saturday"], opens: "09:00", closes: "16:00" },
    { label: "Sonntag", days: [], opens: "", closes: "" },
  ],

  // PLACEHOLDER: social / listing profiles for sameAs
  sameAs: [] as string[],
} as const;

export const NAV_LINKS = [
  { label: "Behandlungen", href: "/#behandlungen" },
  { label: "Preise", href: "/#preise" },
  { label: "Über Teresa", href: "/#teresa" },
  { label: "Ergebnisse", href: "/#ergebnisse" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const fullAddress = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`;
