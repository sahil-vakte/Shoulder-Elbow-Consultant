# SEO & Keyword Strategy — Shoulder Elbow Consultant
**Target area:** Leicester & Leicestershire · Nuneaton, Hinckley & Bedworth · Warwickshire (Rugby, Coventry, Leamington Spa, Warwick, Kenilworth)
**Prepared:** November 2026

> **About the search volumes:** no paid keyword tool was used to build this document. The demand tiers below are *relative estimates*, based on a review of competitor sites and search results (Nuffield Health Leicester & Warwickshire, Spire Leicester, Circle/The Meriden Coventry, and the Top Doctors, Doctify and Bupa Finder directories). **Before launch, check the volumes in Google Keyword Planner** (location set to Leicestershire + Warwickshire) and update the tiers.

---

## 1. Competitive landscape (what you're up against)

| Competitor type | Examples | Their strength | Our opportunity |
|---|---|---|---|
| Private hospital groups | Nuffield Leicester / Warwickshire, Spire Leicester, Circle (The Meriden, Coventry) | Domain authority, many treatment pages | Generic hospital pages, not consultant-specific; thin on symptom content |
| Directories | Top Doctors, Doctify, Bupa Finder | Rank for "[specialty] + [town]" lists | They list many consultants side by side; one specialist with deep local content can outrank them on long-tail searches |
| Individual consultant sites | e.g. shoulderelbowsurgeon.co.uk (Coventry / Solihull) | Personal trust (E-E-A-T) | Usually small and dated; **Nuneaton/Hinckley is poorly served** by dedicated consultant sites |

**Biggest gap:** few specialist sites target **Nuneaton / Hinckley / Bedworth**. Patients there are split between Leicester and Coventry providers, which makes it the quickest local win.

---

## 2. Keyword map (one main keyword per page, so pages don't compete with each other)

Demand tier key: **H** = high · **M** = medium · **L** = low-volume / high-intent long tail

### Money pages: local + service

| Page (URL) | Primary keyword | Secondary / variants | Tier | Intent |
|---|---|---|---|---|
| `/` | shoulder and elbow specialist Leicester | shoulder specialist near me, orthopaedic shoulder surgeon Leicester, private shoulder consultant | H | Commercial |
| `/shoulder` | shoulder specialist Leicester | shoulder surgeon Leicester, shoulder pain specialist, private shoulder doctor | H | Commercial |
| `/elbow` | elbow specialist Leicester | elbow surgeon Leicester, elbow pain specialist | M | Commercial |
| `/locations/leicester` | private shoulder surgeon Leicester | shoulder consultant Leicestershire, shoulder clinic Oadby / Wigston / Loughborough | H | Local |
| `/locations/nuneaton` | shoulder specialist Nuneaton | shoulder surgeon Hinckley, elbow specialist Nuneaton, orthopaedic consultant Bedworth | M | Local |
| `/locations/warwickshire` | shoulder surgeon Warwickshire | shoulder specialist Rugby / Coventry / Leamington Spa | M | Local |
| `/fees-and-insurance` | private shoulder consultation cost | self-pay shoulder surgery cost UK, Bupa shoulder specialist Leicester | M | Transactional |
| `/contact` | book shoulder specialist appointment | private orthopaedic appointment Leicester | L | Transactional |

### Condition pages: research-stage patients (largest traffic opportunity)

| URL | Primary keyword | Variants worth including | Tier |
|---|---|---|---|
| `/conditions/rotator-cuff-tear` | rotator cuff tear treatment | torn rotator cuff symptoms, rotator cuff tear Leicester | H |
| `/conditions/frozen-shoulder` | frozen shoulder treatment | frozen shoulder hydrodilatation, adhesive capsulitis, frozen shoulder Leicester | H |
| `/conditions/shoulder-impingement` | shoulder impingement treatment | subacromial bursitis, painful arc | H |
| `/conditions/calcific-tendonitis` | calcific tendonitis shoulder | barbotage shoulder | M |
| `/conditions/shoulder-arthritis` | shoulder arthritis treatment | shoulder osteoarthritis | M |
| `/conditions/shoulder-dislocation-instability` | dislocated shoulder treatment | recurrent shoulder dislocation, unstable shoulder | M |
| `/conditions/ac-joint-injury` | AC joint injury | shoulder separation, AC joint sprain | M |
| `/conditions/ac-joint-arthritis` | AC joint arthritis | pain on top of shoulder | L |
| `/conditions/slap-tear-labral-tear` | SLAP tear | labral tear shoulder | L |
| `/conditions/shoulder-fractures` | broken collarbone treatment | proximal humerus fracture | M |
| `/conditions/tennis-elbow` | tennis elbow treatment | tennis elbow injection, PRP tennis elbow, tennis elbow Leicester | H |
| `/conditions/golfers-elbow` | golfer's elbow treatment | inner elbow pain | M |
| `/conditions/distal-biceps-rupture` | distal biceps rupture | biceps tendon tear elbow, popeye sign | L–M |
| `/conditions/elbow-arthritis` | elbow arthritis | stiff elbow, locking elbow | L |
| `/conditions/cubital-tunnel-syndrome` | cubital tunnel syndrome | ulnar nerve compression, tingling little finger | M |
| `/conditions/olecranon-bursitis` | elbow bursitis | swollen elbow | M |
| `/conditions/elbow-fractures-dislocation` | elbow fracture | dislocated elbow | L |

### Treatment pages

| URL | Primary keyword | Tier |
|---|---|---|
| `/treatments/shoulder-arthroscopy` | shoulder arthroscopy | M |
| `/treatments/rotator-cuff-repair` | rotator cuff repair surgery / recovery | M |
| `/treatments/subacromial-decompression` | subacromial decompression | L–M |
| `/treatments/shoulder-stabilisation` | shoulder stabilisation surgery / Latarjet | L |
| `/treatments/shoulder-replacement` | shoulder replacement Leicester | M |
| `/treatments/reverse-shoulder-replacement` | reverse shoulder replacement | L–M |
| `/treatments/capsular-release` | frozen shoulder surgery / hydrodilatation | M |
| `/treatments/image-guided-injections` | shoulder injection Leicester / ultrasound guided injection | M |
| `/treatments/elbow-arthroscopy` | elbow arthroscopy | L |
| `/treatments/tennis-elbow-surgery` | tennis elbow surgery | L–M |
| `/treatments/distal-biceps-repair` | distal biceps repair | L |
| `/treatments/cubital-tunnel-release` | cubital tunnel release | L |
| `/treatments/elbow-replacement` | elbow replacement | L |
| `/treatments/ac-joint-reconstruction` | AC joint reconstruction | L |
| `/treatments/fracture-fixation` | shoulder fracture surgery | L |

### Blog: question-style searches (4 articles written, 12 more planned below)

| Live article | Target query |
|---|---|
| Shoulder pain at night | "why does my shoulder hurt at night" |
| Frozen shoulder stages | "frozen shoulder stages" |
| Tennis elbow: what works | "tennis elbow treatment" / "how long does tennis elbow last" |
| Rotator cuff recovery timeline | "rotator cuff surgery recovery time" |

**Next 12 articles** (publish one or two a month): steroid injection for shoulder (how long it lasts) · MRI vs ultrasound for the shoulder · when can I drive after shoulder surgery · sleeping after shoulder surgery · frozen shoulder and diabetes · golfer's elbow exercises · cubital tunnel vs carpal tunnel · dislocated shoulder: what next · PRP injections: do they work? · shoulder pain vs neck pain · shoulder replacement lifespan · gym injuries to the shoulder (bench press).

---

## 3. Technical SEO built into the site

| Item | How it's done |
|---|---|
| Page rendering | Every page is generated in advance as static HTML (fast to load and easy for Google to read) |
| Titles & descriptions | Written for each page; the brand name is added to the title only when it fits within about 65 characters |
| Canonical tags | Absolute canonical URL on every page, built from `NEXT_PUBLIC_SITE_URL` |
| XML sitemap | `/sitemap.xml`, generated automatically with priorities |
| robots.txt | Allows everything except `/api/`, and points to the sitemap |
| Structured data (schema) | `MedicalBusiness`/`MedicalClinic` and `Physician` in a site-wide @graph · `MedicalWebPage` + `MedicalCondition` on condition pages (symptoms, possible treatments) · `SurgicalProcedure`/`TherapeuticProcedure` on treatment pages · `MedicalClinic` on each location (address, geo, area served) · `FAQPage` · `BreadcrumbList` · `Article` on blog posts · `ItemList` on the shoulder and elbow hub pages |
| Trust signals (E-E-A-T) | "Medically reviewed by…" box with review date on every clinical page · GMC number · link to the GMC register · named author on articles |
| Internal linking | Condition ↔ treatment ↔ location cross-links, breadcrumbs, mega menu, footer link groups, related-content blocks |
| Local signals | Three location pages with their own copy (towns, postcodes, travel notes, local FAQs) · `areaServed` in schema · geo meta tags |
| Speed (Core Web Vitals) | Fonts self-hosted (no Google Fonts request) · SVG illustrations (very small files) · animations run only when scrolled into view · images served as AVIF/WebP |
| Accessibility | Semantic HTML, skip link, ARIA labels, visible focus outlines, respects reduced-motion settings, native `<details>` FAQs (readable even without JavaScript) |
| Social sharing | Open Graph and Twitter cards using the 1200×630 image from the logo pack |
| Security headers | HSTS, nosniff, frame options, referrer and permissions policies |
| Redirects | Old template URLs (`/team`, `/dr-cv`, `/book`, `/index.html`) send visitors to the right new page |

---

## 4. Off-site actions (needed to rank in the local map results)

1. **Google Business Profile**: create or verify one profile per real clinic address. Category: *Orthopedic surgeon*, plus secondary categories *Sports medicine physician* and *Medical clinic*. The name, address and phone number must match `lib/site.ts` exactly.
2. **Reviews**: set up **Doctify** and/or Google reviews and ask patients after each follow-up. *Do not publish testimonials on the site that you can't verify* (ASA/GMC rules).
3. **Citations**: Bupa Finder, AXA, Aviva and Vitality consultant directories, Top Doctors, Doctify, NHS/hospital consultant profile pages, BESS membership listing, Yell, Thomson Local and Bing Places. Each should link back to the site.
4. **Links from relevant local sites**: physiotherapy clinics, sports clubs (Leicester Tigers community clubs, Nuneaton RFC, running clubs), gyms, and GP practice newsletters.
5. **Search Console**: verify the site, submit the sitemap, and review the queries report monthly. Expand pages that rank in positions 5–20.

---

## 5. Measuring results (GA4 + Search Console)

- **Conversions:** the enquiry form fires a GA4 `generate_lead` event. Also track clicks on `tel:` links in Tag Manager.
- **Key reports:** organic sessions by landing page · enquiries per location page · keywords ranking in the top 3 or top 10 · Google Business Profile calls and direction requests.
- **Realistic timeline:** long-tail condition pages tend to start ranking in 2–4 months; competitive terms such as "shoulder specialist Leicester" usually take 6–12 months and need reviews and links from other sites.
