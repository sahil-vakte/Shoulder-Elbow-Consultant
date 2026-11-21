# Shoulder Elbow Consultant — Next.js website

A modern, SEO-optimised website for a private consultant shoulder & elbow practice serving **Leicester, Nuneaton & Hinckley and Warwickshire**.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · Motion (animations) · Lucide icons · self-hosted Inter + editorial serif typography.

## Quick start
```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL etc.
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```
Production deploys automatically from `main` through GitHub Actions to the Ubuntu server. See [DEPLOYMENT.md](DEPLOYMENT.md) for DNS, HTTPS, secrets and service operations.

## Where to edit things
| What | File |
|---|---|
| Practice details: consultant name, GMC number, phone, email, insurers, **clinic addresses** | `lib/site.ts` |
| Condition content (17 pages) | `content/conditions.ts` |
| Treatment content (15 pages) | `content/treatments.ts` |
| Location pages (Leicester, Nuneaton, Warwickshire) | `content/locations.ts` |
| Blog posts | `content/blog.ts` |
| FAQs | `content/faqs.ts` |
| Fees table | `app/fees-and-insurance/page.tsx` |
| Consultant biography | `app/about/page.tsx` |
| Colours & design system | `app/globals.css` (`@theme` block) |

Adding a condition, treatment or post means adding an object to the relevant array. Its page, sitemap entry, schema, menu and internal links are created automatically.

## Adding the doctor's photos
1. Save the portrait as `public/images/consultant.jpg` (about 1200×1500, portrait).
2. In `lib/site.ts`, set `consultant.photo: "/images/consultant.jpg"`.
3. Optional: add clinic or theatre photos to `public/images/` and use them with `next/image`.

The garden hero is original AI-generated illustrative imagery, not a real patient. Anatomy and regional maps are original simplified SVG illustrations.

## Features
- Original lifestyle hero imagery, quiet typography and a natural green palette
- **Accessible "Where does it hurt?" symptom selector**
- Mega menu, glass-effect sticky header, full-screen mobile menu, sticky Call/Book bar on mobile
- Condition explorer with live search and region filter
- Condition pages with a contents sidebar that tracks your scroll position, a highlighted anatomy diagram, and separate non-surgical and surgical options
- Treatment pages with a "facts at a glance" box, recovery timeline and risks
- Location pages with an illustrated catchment map and local FAQs
- Enquiry form → `/api/enquiry` (sends email via Resend and/or forwards to a webhook, e.g. the Django booking API)
- UK GDPR cookie consent: GA4 loads only after the visitor accepts
- Reading progress bar on articles, immediately visible page content, respects reduced-motion settings

## ⚠️ Pre-launch checklist (compliance — GMC, ASA/CAP, CQC, UK GDPR)
- [ ] Replace every `[placeholder]` in `lib/site.ts`: consultant name, post-nominals, GMC number, NHS role, phone, clinic names/addresses/days
- [ ] **List only hospitals and clinics where the consultant actually practises**, and only insurers who recognise them
- [ ] Confirm or soften service claims in `content/locations.ts` (e.g. "appointments within days", "same-visit X-ray/ultrasound", "evening clinics", "video follow-ups") and in the sidebar "Seen within days" box on condition pages
- [ ] Consultant to review all clinical content, then update `CONTENT_REVIEWED` in `lib/site.ts`
- [ ] Replace the About page biography with the consultant's real training and fellowships
- [ ] Fill in fees (`£[000]`) or switch them to "price on request"
- [ ] Privacy notice: add the ICO registration number and data controller details; get DPO sign-off
- [ ] Don't add testimonials unless they are verifiable (use a Doctify/Google review widget instead)
- [ ] Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, and the Resend/webhook variables in your hosting environment
- [ ] Submit `/sitemap.xml` in Google Search Console and set up a Google Business Profile for each clinic

See **SEO-KEYWORD-STRATEGY.md** for the keyword map, technical SEO notes and off-site plan.
