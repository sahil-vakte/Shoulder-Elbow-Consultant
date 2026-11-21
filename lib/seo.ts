import type { Metadata } from "next";
import { SITE_URL, site, clinics, CONTENT_REVIEWED } from "./site";

export const abs = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const url = abs(opts.path);
  return {
    title: { absolute: opts.title.includes(site.brand) || opts.title.length + site.brand.length + 3 > 65 ? opts.title : `${opts.title} | ${site.brand}` },
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.brand,
      locale: "en_GB",
      type: opts.type ?? "website",
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
    robots: opts.noindex ? { index: false, follow: true } : undefined,
  };
}

/* ───────────── Schema.org JSON-LD builders ───────────── */

const ORG_ID = `${SITE_URL}/#organization`;
const DOC_ID = `${SITE_URL}/#physician`;

export const areaServed = [
  { "@type": "City", name: "Leicester" },
  { "@type": "AdministrativeArea", name: "Leicestershire" },
  { "@type": "City", name: "Nuneaton" },
  { "@type": "City", name: "Hinckley" },
  { "@type": "City", name: "Bedworth" },
  { "@type": "AdministrativeArea", name: "Warwickshire" },
  { "@type": "City", name: "Rugby" },
  { "@type": "City", name: "Coventry" },
  { "@type": "City", name: "Leamington Spa" },
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "MedicalClinic"],
        "@id": ORG_ID,
        name: site.brand,
        url: SITE_URL,
        logo: abs("/brand/logo-stacked.svg"),
        image: abs("/opengraph-image.jpg"),
        description: site.description,
        telephone: site.contact.phone,
        email: site.contact.email,
        medicalSpecialty: ["Orthopedic", "SportsMedicine"],
        areaServed,
        priceRange: "££",
        availableService: [
          { "@type": "MedicalProcedure", name: "Shoulder arthroscopy" },
          { "@type": "MedicalProcedure", name: "Rotator cuff repair" },
          { "@type": "MedicalProcedure", name: "Shoulder replacement" },
          { "@type": "MedicalProcedure", name: "Elbow arthroscopy" },
          { "@type": "MedicalProcedure", name: "Ultrasound-guided injection" },
        ],
        location: clinics.map((c) => ({
          "@type": "MedicalClinic",
          name: c.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: c.address,
            addressLocality: c.town,
            postalCode: c.postcode,
            addressCountry: "GB",
          },
          geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lng },
        })),
        sameAs: Object.values(site.social).filter(Boolean),
        employee: { "@id": DOC_ID },
      },
      {
        "@type": "Physician",
        "@id": DOC_ID,
        name: site.consultant.name,
        jobTitle: site.consultant.title,
        medicalSpecialty: "Orthopedic",
        worksFor: { "@id": ORG_ID },
        memberOf: site.consultant.memberships.map((m) => ({ "@type": "Organization", name: m })),
        identifier: { "@type": "PropertyValue", propertyID: "GMC", value: site.consultant.gmcNumber },
        url: abs("/about"),
        image: abs(site.consultant.photo),
        areaServed,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: site.brand,
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function medicalWebPage(opts: { path: string; name: string; description: string; about: object }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    lastReviewed: CONTENT_REVIEWED,
    reviewedBy: { "@id": DOC_ID },
    audience: { "@type": "PeopleAudience", audienceType: "Patient" },
    about: opts.about,
  };
}
