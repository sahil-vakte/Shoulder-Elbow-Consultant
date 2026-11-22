import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import EnquiryForm from "@/components/EnquiryForm";
import RegionMap from "@/components/RegionMap";
import Reveal from "@/components/Reveal";
import { site, clinics } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Book a Consultation — Shoulder & Elbow Specialist",
  description: "Book a private shoulder or elbow consultation in Leicester, Nuneaton & Hinckley or Warwickshire. Call the secretary or send an enquiry online.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Contact", path: "/contact" }]} eyebrow="Book an appointment" title="Book a consultation" lead={<p>Send an enquiry and the secretary will contact you within one working day — or call us directly.</p>} />
      <section className="container-x grid gap-10 section lg:grid-cols-[1.4fr_1fr]">
        <EnquiryForm />
        <div className="space-y-5">
          <Reveal className="rounded-3xl bg-navy-800 p-7 text-white shadow-lift">
            <p className="font-display text-xl font-semibold">Speak to the secretary</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li><a href={site.contact.phoneHref} className="flex items-center gap-3 text-lg font-semibold"><Phone className="size-5 text-sky-400" /> {site.contact.phone}</a></li>
              <li><a href={`mailto:${site.contact.email}`} className="flex items-center gap-3"><Mail className="size-5 text-sky-400" /> {site.contact.email}</a></li>
              <li className="flex items-center gap-3"><Clock className="size-5 text-sky-400" /> {site.contact.hours}</li>
            </ul>
          </Reveal>
          {clinics.map((c) => (
            <Reveal key={c.id} className="card flex gap-4 p-5">
              <MapPin className="size-6 shrink-0 text-royal-600" />
              <div>
                <p className="font-display font-semibold text-navy-800">{c.name}</p>
                <p className="text-sm text-muted">{c.address}, {c.town} {c.postcode}</p>
                <p className="mt-1 text-xs text-muted">{c.days}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="rounded-3xl border border-ice-200 p-3"><RegionMap className="w-full" /></Reveal>
        </div>
      </section>
    </>
  );
}
