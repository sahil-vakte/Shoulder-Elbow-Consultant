import Link from "next/link";
import { ArrowUpRight, Clock, Hospital, Syringe, Activity, Bone, Scissors } from "lucide-react";
import type { Condition } from "@/content/conditions";
import type { Treatment } from "@/content/treatments";
import JointIllustration from "./JointIllustration";

export function ConditionCard({ c }: { c: Condition }) {
  return (
    <Link href={`/conditions/${c.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-ice-100 to-white">
        <JointIllustration region={c.region} spot={c.spot} className="absolute -bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 transition-transform duration-700 group-hover:scale-110" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-royal-600 shadow-soft">{c.region}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold group-hover:text-royal-600">{c.name}</h3>
        {c.aka && <p className="text-xs font-medium text-muted">{c.aka}</p>}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600">
          Learn more <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

const catIcon = {
  "Keyhole surgery": Activity,
  "Joint replacement": Bone,
  Reconstruction: Scissors,
  "Non-surgical": Syringe,
  "Nerve & tendon": Activity,
} as const;

export function TreatmentCard({ t }: { t: Treatment }) {
  const Icon = catIcon[t.category];
  return (
    <Link href={`/treatments/${t.slug}`} className="card card-hover group relative flex h-full flex-col overflow-hidden p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-ice-100 transition-all duration-700 group-hover:scale-150 group-hover:bg-royal-200/40" />
      <div className="relative flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-navy-800 text-white shadow-soft transition group-hover:bg-royal-600">
          <Icon className="size-5" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">{t.category}</span>
      </div>
      <h3 className="relative mt-6 font-display text-lg font-semibold group-hover:text-royal-600">{t.name}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">{t.short}</p>
      <div className="relative mt-5 flex flex-wrap gap-2 text-xs text-muted">
        <span className="inline-flex items-center gap-1 rounded-full bg-ice-50 px-2.5 py-1"><Hospital className="size-3.5" /> {t.facts.stay}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-ice-50 px-2.5 py-1"><Clock className="size-3.5" /> {t.facts.duration}</span>
      </div>
    </Link>
  );
}
