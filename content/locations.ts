import type { FAQ } from "./conditions";

export type Location = {
  slug: "leicester" | "nuneaton" | "warwickshire";
  name: string;
  h1: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  county: string;
  towns: string[];
  postcodes: string[];
  intro: string[];
  travel: string;
  why: { title: string; text: string }[];
  faqs: FAQ[];
  geo: { lat: number; lng: number };
};

export const locations: Location[] = [
  {
    slug: "leicester",
    name: "Leicester",
    h1: "Shoulder & Elbow Specialist in Leicester",
    keyword: "shoulder specialist Leicester",
    metaTitle: "Shoulder & Elbow Specialist Leicester | Private Consultant",
    metaDescription:
      "Private consultant shoulder and elbow specialist in Leicester. Rotator cuff, frozen shoulder, tennis elbow, keyhole surgery and joint replacement. Book a consultation.",
    county: "Leicestershire",
    towns: ["Leicester", "Oadby", "Wigston", "Blaby", "Glenfield", "Syston", "Birstall", "Market Harborough", "Loughborough", "Lutterworth", "Melton Mowbray", "Coalville"],
    postcodes: ["LE1", "LE2", "LE3", "LE4", "LE5", "LE7", "LE8", "LE9", "LE11", "LE16", "LE17", "LE18"],
    intro: [
      "If shoulder or elbow pain is stopping you working, sleeping or playing sport, you can see a consultant shoulder and elbow specialist in Leicester without a long wait. Our private clinic offers prompt appointments for patients across Leicester and Leicestershire, with same-visit X-ray and, where available, ultrasound so you leave with a clear diagnosis and plan.",
      "We see everything from rotator cuff tears and frozen shoulder to tennis elbow, sports injuries and arthritis — and provide the full pathway: image-guided injections, keyhole (arthroscopic) surgery, joint replacement and specialist rehabilitation, coordinated with physiotherapists close to home.",
    ],
    travel:
      "Easily reached from the A6, A47 and the outer ring road (A563), with on-site parking. Patients travel from Oadby, Wigston, Blaby, Loughborough, Market Harborough and across the county.",
    why: [
      { title: "Fast access", text: "Appointments typically available within days, not months — including evening clinics on request." },
      { title: "One-stop diagnosis", text: "Examination, X-ray and ultrasound assessment, often in a single visit." },
      { title: "Upper-limb specialist", text: "A practice dedicated to the shoulder and elbow, not general orthopaedics." },
    ],
    faqs: [
      {
        q: "Do I need a GP referral to see a shoulder specialist in Leicester?",
        a: "Not if you are self-funding. If you are using private medical insurance, most insurers require a GP or physiotherapist referral and a pre-authorisation number.",
      },
      {
        q: "How quickly can I be seen in Leicester?",
        a: "Most new patients are offered an appointment within one to two weeks, often sooner. Please call the secretary for the next available clinic.",
      },
      {
        q: "Can I have an MRI scan arranged locally?",
        a: "Yes. When needed, MRI, ultrasound and CT scans can usually be arranged locally within a few days of your consultation.",
      },
    ],
    geo: { lat: 52.6369, lng: -1.1398 },
  },
  {
    slug: "nuneaton",
    name: "Nuneaton & Hinckley",
    h1: "Shoulder & Elbow Specialist serving Nuneaton & Hinckley",
    keyword: "shoulder specialist Nuneaton",
    metaTitle: "Shoulder & Elbow Specialist Nuneaton & Hinckley | Private Clinic",
    metaDescription:
      "Private shoulder and elbow consultant for Nuneaton, Hinckley, Bedworth and Atherstone. Fast diagnosis, injections and keyhole surgery for shoulder & elbow pain.",
    county: "North Warwickshire & Hinckley",
    towns: ["Nuneaton", "Hinckley", "Bedworth", "Atherstone", "Burbage", "Earl Shilton", "Barwell", "Market Bosworth", "Polesworth", "Bulkington"],
    postcodes: ["CV10", "CV11", "CV12", "CV9", "LE10", "LE9"],
    intro: [
      "For patients in Nuneaton, Hinckley, Bedworth and Atherstone, specialist shoulder and elbow care no longer means a long trip or a long wait. We provide private consultant appointments for the full range of shoulder and elbow problems, with diagnosis, treatment and follow-up arranged around you.",
      "Whether you have a painful shoulder that has not improved with physiotherapy, numb fingers from ulnar nerve compression, or a sports injury that needs an urgent opinion, you will be seen by a consultant who specialises exclusively in the upper limb.",
    ],
    travel:
      "Convenient for the A5, A444 and M6/M69 corridor, serving Nuneaton, Hinckley, Bedworth, Atherstone and surrounding villages.",
    why: [
      { title: "Close to home", text: "Avoid travelling into the city for every appointment — follow-up can often be by video." },
      { title: "Joined-up care", text: "Diagnosis, injections, surgery and rehabilitation coordinated by one consultant." },
      { title: "Self-pay or insured", text: "Clear fixed-price packages for self-funding patients; all major insurers." },
    ],
    faqs: [
      {
        q: "Is there a shoulder specialist near Nuneaton?",
        a: "Yes. We see patients from Nuneaton, Bedworth and Hinckley at our local clinic, with surgery performed at a nearby private hospital.",
      },
      {
        q: "Can I be seen privately while on an NHS waiting list?",
        a: "Yes. Many patients choose a private consultation for a faster diagnosis and treatment plan. You can move between NHS and private care, and we will write to your GP.",
      },
      {
        q: "Do you offer video consultations?",
        a: "Follow-up appointments and scan results can often be discussed by secure video call. A first appointment is usually face-to-face so you can be examined.",
      },
    ],
    geo: { lat: 52.5235, lng: -1.4653 },
  },
  {
    slug: "warwickshire",
    name: "Warwickshire",
    h1: "Shoulder & Elbow Specialist in Warwickshire",
    keyword: "shoulder surgeon Warwickshire",
    metaTitle: "Shoulder & Elbow Surgeon Warwickshire | Rugby, Coventry, Leamington",
    metaDescription:
      "Consultant shoulder and elbow surgeon for Warwickshire — Rugby, Coventry, Leamington Spa, Warwick & Kenilworth. Private diagnosis, injections and keyhole surgery.",
    county: "Warwickshire",
    towns: ["Rugby", "Coventry", "Leamington Spa", "Warwick", "Kenilworth", "Stratford-upon-Avon", "Southam", "Lutterworth", "Daventry"],
    postcodes: ["CV21", "CV22", "CV23", "CV31", "CV32", "CV34", "CV8", "CV37", "CV47"],
    intro: [
      "We provide consultant-led shoulder and elbow care for patients across Warwickshire — from Rugby and Coventry to Leamington Spa, Warwick and Kenilworth. Our focus is on accurate diagnosis, honest advice about whether you need surgery, and a smooth recovery.",
      "Common reasons patients visit include rotator cuff tears, frozen shoulder, shoulder dislocations in sport, arthritis, tennis elbow and biceps tendon ruptures. Where surgery is needed, it is performed using the latest arthroscopic and joint replacement techniques at a local private hospital.",
    ],
    travel:
      "Well connected via the M6, M45, A45 and A46, with patients travelling from Rugby, Coventry, Leamington Spa, Warwick and Kenilworth.",
    why: [
      { title: "Sports injury expertise", text: "Rapid assessment for dislocations, AC joint injuries and biceps ruptures — where timing matters." },
      { title: "Evidence-based", text: "Surgery only when it is the right option; non-surgical care first wherever appropriate." },
      { title: "Clear costs", text: "Transparent self-pay packages covering surgeon, anaesthetist and hospital fees." },
    ],
    faqs: [
      {
        q: "Which towns in Warwickshire do you cover?",
        a: "We regularly see patients from Rugby, Coventry, Leamington Spa, Warwick, Kenilworth, Stratford-upon-Avon and the surrounding area.",
      },
      {
        q: "How soon should a dislocated shoulder be seen?",
        a: "After it has been relocated at A&E, a specialist review within one to two weeks is ideal — particularly for younger, active patients, who have a higher risk of further dislocation.",
      },
      {
        q: "Do you see children?",
        a: "Please contact us to discuss. Younger patients may be referred to a specialist paediatric service where appropriate.",
      },
    ],
    geo: { lat: 52.3707, lng: -1.2649 },
  },
];

export const locationBySlug = (s: string) => locations.find((l) => l.slug === s);
