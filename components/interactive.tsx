"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Search } from "lucide-react";
import type { Condition, Region } from "@/content/conditions";
import { ConditionCard } from "./cards";

/* ---------- Filterable conditions explorer ---------- */
export function ConditionsExplorer({ items, initial = "all" }: { items: Condition[]; initial?: Region | "all" }) {
  const [region, setRegion] = useState<Region | "all">(initial);
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return items.filter(
      (c) =>
        (region === "all" || c.region === region) &&
        (!s || [c.name, c.aka, c.short, ...c.symptoms].join(" ").toLowerCase().includes(s)),
    );
  }, [items, region, q]);
  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="inline-flex rounded-full bg-ice-100 p-1">
          {(["all", "shoulder", "elbow"] as const).map((r) => (
            <button key={r} onClick={() => setRegion(r)} className={`relative rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${region === r ? "text-white" : "text-navy-800 hover:text-royal-600"}`}>
              {region === r && <motion.span layoutId="seg" className="absolute inset-0 rounded-full bg-navy-800" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
              <span className="relative">{r === "all" ? "All conditions" : r}</span>
            </button>
          ))}
        </div>
        <label className="relative block md:w-80">
          <span className="sr-only">Search symptoms or conditions</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a symptom, e.g. night pain" className="w-full rounded-full border border-ice-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-royal-400 focus:ring-4 focus:ring-royal-200/50" />
        </label>
      </div>
      <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <motion.li layout key={c.slug} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <ConditionCard c={c} />
          </motion.li>
        ))}
      </motion.ul>
      {list.length === 0 && (
        <p className="mt-10 rounded-2xl bg-ice-50 p-8 text-center text-muted">
          No matches. Try another word, or <Link href="/contact" className="font-semibold text-royal-600">ask our team</Link>.
        </p>
      )}
    </div>
  );
}

/* ---------- Table of contents with scroll-spy ---------- */
export function Toc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);
  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">On this page</p>
      <ul className="space-y-1 border-l border-ice-200">
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className={`-ml-px block border-l-2 py-1.5 pl-4 transition ${active === i.id ? "border-royal-600 font-semibold text-royal-600" : "border-transparent text-muted hover:text-navy-800"}`}>
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- Reading progress bar ---------- */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-royal-600 to-aqua-400" />;
}
