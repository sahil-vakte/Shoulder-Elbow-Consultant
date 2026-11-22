import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarCheck, Clock, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { locations, locationBySlug } from "@/content/locations";
import { conditionsByRegion } from "@/content/conditions";
import { treatments } from "@/content/treatments";
import { PageHero, Faqs, CtaBand, JsonLd, SectionHead } from "@/components/ui";
import RegionMap from "@/components/RegionMap";
import Reveal from "@/components/Reveal";
import { pageMeta, abs } from "@/lib/seo";
import { site, clinics, SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const l = locationBySlug((await params).slug);
  if (!l) return {};
  return pageMeta({ title: l.metaTitle, description: l.metaDescription, path: `/locations/${l.slug}` });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const l = locationBySlug((await params).slug);
  if (!l) notFound();
  const clinic = clinics.find((c) => c.areaSlug === l.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${abs(`/locations/${l.slug}`)}#clinic`,
    name: clinic?.name ?? `${site.brand} — ${l.name}`,
    url: abs(`/locations/${l.slug}`),
    telephone: site.contact.phone,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    medicalSpecialty: "Orthopedic",
    address: clinic && { "@type": "PostalAddress", streetAddress: clinic.address, addressLocality: clinic.town, postalCode: clinic.postcode, addressCountry: "GB" },
    geo: { "@type": "GeoCoordinates", latitude: l.geo.lat, longitude: l.geo.lng },
    areaServed: l.towns.map((t) => ({ "@type": "Place", name: t })),
  };
  const popular = [...conditionsByRegion("shoulder").slice(0, 4), ...conditionsByRegion("elbow").slice(0, 3)];

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        crumbs={[{ name: "Locations", path: "/locations" }, { name: l.name, path: `/locations/${l.slug}` }]}
        eyebrow={`Serving ${l.county}`}
        title={l.h1}
        lead={<p>{l.intro[0]}</p>}
        aside={<div className="rounded-[2.5rem] border border-ice-200 bg-white p-4 shadow-lift"><RegionMap highlight={l.slug} className="h-auto w-full" /></div>}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary"><CalendarCheck className="size-4" /> Book in {l.name.split(" ")[0]}</Link>
          <a href={site.contact.phoneHref} className="btn-ghost"><Phone className="size-4" /> {site.contact.phone}</a>
        </div>
      </PageHero>

      <section className="container-x grid gap-12 section lg:grid-cols-[1.3fr_1fr]">
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy-800 prose-p:text-muted">
          <h2>Private shoulder &amp; elbow care for {l.name}</h2>
          {l.intro.slice(1).map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <h3>Areas we cover</h3>
          <p>We regularly see patients from {l.towns.join(", ")} and surrounding areas ({l.postcodes.join(", ")} postcodes).</p>
          <h3>Getting here</h3>
          <p>{l.travel}</p>
        </div>
        <Reveal className="card h-fit p-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Clinic details</p>
          {clinic && (
            <>
              <p className="mt-3 font-display text-xl font-semibold text-navy-800">{clinic.name}</p>
              <ul className="mt-4 space-y-3 text-sm text-navy-800">
                <li className="flex gap-3"><MapPin className="size-5 shrink-0 text-royal-600" />{clinic.address}, {clinic.town} {clinic.postcode}</li>
                <li className="flex gap-3"><Clock className="size-5 shrink-0 text-royal-600" />{clinic.days}</li>
                <li className="flex gap-3"><Phone className="size-5 shrink-0 text-royal-600" /><a href={site.contact.phoneHref} className="font-semibold">{site.contact.phone}</a></li>
              </ul>
              <a className="btn-ghost mt-6 w-full" target="_blank" rel="noopener" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${clinic.name} ${clinic.mapsQuery}`)}`}>Get directions</a>
            </>
          )}
        </Reveal>
      </section>

      <section className="bg-ice-50 section">
        <div className="container-x">
          <SectionHead eyebrow={`Why patients in ${l.name} choose us`} title="Specialist care, close to home" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {l.why.map((w, k) => (
              <Reveal key={w.title} delay={k * 0.08} className="card p-7">
                <CheckCircle2 className="size-7 text-sky-500" />
                <h3 className="mt-4 font-display text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-muted">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section">
        <SectionHead eyebrow="Conditions" title={`Shoulder & elbow conditions we treat in ${l.name}`} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((c) => (
            <li key={c.slug}>
              <Link href={`/conditions/${c.slug}`} className="card card-hover flex items-center justify-between p-5">
                <span><span className="block font-display font-semibold">{c.name} {l.name.split(" ")[0]}</span><span className="text-xs capitalize text-muted">{c.region}</span></span>
                <span className="text-royal-600">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted">
          Treatments available include{" "}
          {treatments.slice(0, 8).map((t, i) => (
            <span key={t.slug}><Link className="font-semibold text-royal-600 hover:underline" href={`/treatments/${t.slug}`}>{t.name}</Link>{i < 7 ? ", " : "."}</span>
          ))}
        </p>
      </section>

      <section className="container-x grid gap-12 section lg:grid-cols-[1fr_1.4fr]">
        <SectionHead eyebrow="Local FAQs" title={`Seeing a specialist in ${l.name}`} />
        <Faqs items={l.faqs} />
        <p className="text-sm text-muted lg:col-span-2">
          Also serving:{" "}
          {locations.filter((x) => x.slug !== l.slug).map((x, i) => (
            <span key={x.slug}><Link href={`/locations/${x.slug}`} className="font-semibold text-royal-600 hover:underline">{x.name}</Link>{i === 0 ? " · " : ""}</span>
          ))}
        </p>
      </section>
      <CtaBand title={`Book a shoulder or elbow specialist in ${l.name}`} />
    </>
  );
}
