/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — the single place to edit practice details.
 *  Everything marked  ⚠️ TODO  must be confirmed by the practice before launch.
 *  These values feed the header, footer, contact page, schema markup (Google),
 *  and every location page, so keep them identical to your Google Business
 *  Profile (Name, Address, Phone must match exactly for local SEO).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://shoulderelbowconsultant.co.uk").replace(/\/$/, "");

export const site = {
  brand: "Shoulder Elbow Consultant",
  shortBrand: "SEC",
  tagline: "Specialist shoulder & elbow care in Leicester, Nuneaton & Warwickshire",
  description:
    "Consultant-led diagnosis and treatment of shoulder and elbow pain, sports injuries and arthritis — keyhole surgery, joint replacement, injections and rehabilitation. Private clinics serving Leicester, Nuneaton, Hinckley and Warwickshire.",

  consultant: {
    // ⚠️ TODO: replace with the consultant's real name and post-nominals
    name: "Mr [Consultant Name]",
    postNominals: "MBBS FRCS (Tr & Orth)",
    title: "Consultant Orthopaedic Shoulder & Elbow Surgeon",
    // ⚠️ TODO: GMC reference number (shown on About page + in schema)
    gmcNumber: "[GMC number]",
    // ⚠️ TODO: replace /public/images/consultant-portrait.svg with a real photo (e.g. consultant.jpg, 1200×1500)
    photo: "/images/consultant-portrait.svg",
    nhsRole: "[NHS trust / hospital appointment]", // ⚠️ TODO
    memberships: [
      "British Elbow & Shoulder Society (BESS)",
      "British Orthopaedic Association (BOA)",
      "Royal College of Surgeons",
    ], // ⚠️ TODO: confirm each membership is current
  },

  contact: {
    // ⚠️ TODO: confirm phone & email. Use the SAME number on Google Business Profile.
    phone: "0116 000 0000",
    phoneHref: "tel:+441160000000",
    email: "info@shoulderelbowconsultant.co.uk",
    secretary: "Private Secretary",
    hours: "Monday–Friday, 9:00am–5:00pm",
  },

  social: {
    linkedin: "", // e.g. https://www.linkedin.com/in/...
    x: "",
    facebook: "",
    doctify: "", // verified reviews profile, recommended
  },

  /** Insurers — ⚠️ TODO: keep only those the consultant is recognised by. */
  insurers: [
    "Bupa",
    "AXA Health",
    "Aviva",
    "Vitality",
    "WPA",
    "Cigna",
    "Simplyhealth",
    "Allianz Care",
    "Healix",
    "Benenden Health",
    "General & Medical",
    "Self-pay",
  ],
} as const;

/**
 * Clinic locations. ⚠️ TODO: confirm each hospital/clinic, address and days.
 * Remove any location the consultant does not actually practise from —
 * listing a hospital you do not work at breaches ASA/GMC advertising rules.
 */
export type Clinic = {
  id: string;
  name: string;
  address: string;
  town: string;
  postcode: string;
  lat: number;
  lng: number;
  days: string;
  areaSlug: "leicester" | "nuneaton" | "warwickshire";
  mapsQuery: string;
};

export const clinics: Clinic[] = [
  {
    id: "leicester",
    name: "[Private Hospital], Leicester",
    address: "[Street address]",
    town: "Leicester",
    postcode: "LE[x] [xxx]",
    lat: 52.6369,
    lng: -1.1398,
    days: "[Clinic day], weekly",
    areaSlug: "leicester",
    mapsQuery: "Leicester",
  },
  {
    id: "nuneaton",
    name: "[Clinic], Nuneaton",
    address: "[Street address]",
    town: "Nuneaton",
    postcode: "CV[x] [xxx]",
    lat: 52.5235,
    lng: -1.4653,
    days: "[Clinic day], fortnightly",
    areaSlug: "nuneaton",
    mapsQuery: "Nuneaton",
  },
  {
    id: "warwickshire",
    name: "[Private Hospital], Warwickshire",
    address: "[Street address]",
    town: "Rugby / Leamington Spa",
    postcode: "CV[x] [xxx]",
    lat: 52.3707,
    lng: -1.2649,
    days: "[Clinic day], weekly",
    areaSlug: "warwickshire",
    mapsQuery: "Rugby Warwickshire",
  },
];

/** Date the clinical content was last reviewed (E-E-A-T signal). ⚠️ TODO: update after consultant review. */
export const CONTENT_REVIEWED = "2026-11-21";

export const nav = [
  { label: "Shoulder", href: "/shoulder" },
  { label: "Elbow", href: "/elbow" },
  { label: "Treatments", href: "/treatments" },
  { label: "Locations", href: "/locations" },
  { label: "Fees & Insurance", href: "/fees-and-insurance" },
  { label: "About", href: "/about" },
] as const;
