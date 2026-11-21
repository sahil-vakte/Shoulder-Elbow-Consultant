import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { site, clinics } from "@/lib/site";
import { conditionsByRegion } from "@/content/conditions";
import { locations } from "@/content/locations";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/70">
      <div className="pointer-events-none absolute inset-0 grid-bg-dark mask-fade-b opacity-60" />
      <div className="pointer-events-none absolute -top-40 right-0 size-[520px] rounded-full bg-royal-600/25 blur-3xl" />
      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src="/brand/logo-horizontal-reverse.svg" alt={site.brand} width={260} height={72} className="h-14 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{site.description}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><a className="flex items-center gap-3 hover:text-white" href={site.contact.phoneHref}><Phone className="size-4 text-aqua-400" /> {site.contact.phone}</a></li>
            <li><a className="flex items-center gap-3 hover:text-white" href={`mailto:${site.contact.email}`}><Mail className="size-4 text-aqua-400" /> {site.contact.email}</a></li>
            <li className="flex items-center gap-3"><Clock className="size-4 text-aqua-400" /> {site.contact.hours}</li>
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">Shoulder</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {conditionsByRegion("shoulder").slice(0, 7).map((c) => (
                <li key={c.slug}><Link className="hover:text-white" href={`/conditions/${c.slug}`}>{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">Elbow</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {conditionsByRegion("elbow").map((c) => (
                <li key={c.slug}><Link className="hover:text-white" href={`/conditions/${c.slug}`}>{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">Clinics</p>
            <ul className="mt-4 space-y-4 text-sm">
              {locations.map((l) => {
                const c = clinics.find((x) => x.areaSlug === l.slug);
                return (
                  <li key={l.slug}>
                    <Link className="flex gap-2 hover:text-white" href={`/locations/${l.slug}`}>
                      <MapPin className="mt-0.5 size-4 shrink-0 text-aqua-400" />
                      <span>
                        <span className="block font-semibold text-white">{l.name}</span>
                        {c && <span className="text-xs">{c.name}</span>}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.brand}. {site.consultant.name}, GMC {site.consultant.gmcNumber}. Information on this site is not a substitute for medical advice.
          </p>
          <ul className="flex flex-wrap gap-5">
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
