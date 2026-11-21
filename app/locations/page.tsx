import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHero, CtaBand } from "@/components/ui";
import RegionMap from "@/components/RegionMap";
import Reveal from "@/components/Reveal";
import { locations } from "@/content/locations";
import { clinics } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Clinic Locations — Leicester, Nuneaton & Hinckley, Warwickshire",
  description: "Private shoulder and elbow clinics serving Leicester & Leicestershire, Nuneaton, Hinckley & Bedworth, and Warwickshire including Rugby, Coventry and Leamington Spa.",
  path: "/locations",
});

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ name: "Locations", path: "/locations" }]} eyebrow="Our clinics" title="Specialist care across Leicestershire & Warwickshire" lead={<p>Choose the clinic most convenient for you. Surgery is performed at a local private hospital, and many follow-ups can be done by video.</p>}
        aside={<div className="rounded-[2.5rem] border border-ice-200 bg-white p-4 shadow-lift"><RegionMap className="w-full" /></div>} />
      <section className="container-x grid gap-6 py-16 md:grid-cols-3">
        {locations.map((l, k) => {
          const c = clinics.find((x) => x.areaSlug === l.slug);
          return (
            <Reveal key={l.slug} delay={k * 0.08}>
              <Link href={`/locations/${l.slug}`} className="card card-hover group flex h-full flex-col p-7">
                <MapPin className="size-7 text-royal-600" />
                <h2 className="mt-4 font-display text-2xl font-bold">{l.name}</h2>
                {c && <p className="mt-1 text-sm font-medium text-navy-800">{c.name}</p>}
                <p className="mt-3 flex-1 text-sm text-muted">Serving {l.towns.slice(0, 6).join(", ")} and nearby.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal-600">View clinic <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          );
        })}
      </section>
      <CtaBand />
    </>
  );
}
