import { SITE } from "./site";
import { FAQS, TREATMENTS, type Treatment } from "./content";

const BUSINESS_ID = `${SITE.url}/#business`;
const PERSON_ID = `${SITE.url}/#teresa`;

export const treatmentUrl = (slug: string) => `${SITE.url}/behandlungen/${slug}`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  postalCode: SITE.address.postalCode,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  addressCountry: SITE.address.country,
};

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.owner.name,
    jobTitle: SITE.owner.jobTitle,
    worksFor: { "@id": BUSINESS_ID },
    knowsAbout: ["Gesichtsbehandlungen", "Hautpflege", ...TREATMENTS.map((t) => t.name)],
    workLocation: { "@type": "Place", address: postalAddress },
  };
}

function serviceSchema(t: Treatment) {
  return {
    "@type": "Service",
    "@id": `${treatmentUrl(t.slug)}#service`,
    name: `${t.name} Zürich`,
    serviceType: t.name,
    description: t.intro,
    url: treatmentUrl(t.slug),
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: "Zürich" },
    offers: {
      "@type": "Offer",
      priceCurrency: "CHF",
      price: t.priceFrom,
      availability: "https://schema.org/InStock",
      url: SITE.bookingUrl,
    },
  };
}

export function businessSchema() {
  return {
    "@type": "BeautySalon",
    "@id": BUSINESS_ID,
    name: SITE.name,
    alternateName: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}/brand/logo-gold.png`,
    logo: `${SITE.url}/brand/logo-gold.png`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "CHF 140 – 260",
    currenciesAccepted: "CHF",
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.mapsUrl,
    areaServed: { "@type": "City", name: "Zürich" },
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    knowsAbout: ["Kosmetik", "Gesichtsbehandlung", "Aquafacial", "Hautpflege", ...TREATMENTS.map((t) => t.name)],
    openingHoursSpecification: SITE.openingHours
      .filter((h) => h.days.length)
      .map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Behandlungen",
      itemListElement: TREATMENTS.map((t) => ({
        "@type": "Offer",
        priceCurrency: "CHF",
        price: t.priceFrom,
        itemOffered: { "@id": `${treatmentUrl(t.slug)}#service` },
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: SITE.bookingUrl },
      name: "Termin buchen",
    },
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "de-CH",
        publisher: { "@id": BUSINESS_ID },
      },
      businessSchema(),
      personSchema(),
      ...TREATMENTS.map(serviceSchema),
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function treatmentGraph(t: Treatment) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      serviceSchema(t),
      businessSchema(),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Behandlungen", item: `${SITE.url}/#behandlungen` },
          { "@type": "ListItem", position: 3, name: t.name, item: treatmentUrl(t.slug) },
        ],
      },
    ],
  };
}
