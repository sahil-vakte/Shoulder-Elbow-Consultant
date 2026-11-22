"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Phone, X, ArrowRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { conditionsByRegion } from "@/content/conditions";

const mega = {
  "/shoulder": conditionsByRegion("shoulder"),
  "/elbow": conditionsByRegion("elbow"),
} as Record<string, ReturnType<typeof conditionsByRegion>>;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    setOpen(false);
    setHover(null);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-navy-900 text-[12px] text-white/75 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p>Private consultations in Leicester · Nuneaton &amp; Hinckley · Warwickshire</p>
          <div className="flex items-center gap-5">
            <span>Self-pay &amp; all major insurers</span>
            <a href={site.contact.phoneHref} className="flex items-center gap-1.5 font-semibold text-white hover:text-sky-400">
              <Phone className="size-3.5" /> {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
      <div className={`transition-all duration-500 ${scrolled ? "py-2" : "py-3 md:py-4"}`}>
        <div className="container-x">
          <nav
            aria-label="Main"
            onMouseLeave={() => setHover(null)}
            className={`relative flex items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6 ${
              scrolled ? "glass h-16 shadow-lift" : "h-[72px] bg-white/80 shadow-soft backdrop-blur-md"
            }`}
          >
            <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.brand} – home`}>
              <Image src="/brand/logo-horizontal.svg" alt={site.brand} width={232} height={64} priority className="h-12 w-auto sm:h-14" />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {nav.map((n) => {
                const active = pathname === n.href || pathname.startsWith(n.href + "/");
                const hasMega = n.href in mega;
                return (
                  <li key={n.href} onMouseEnter={() => setHover(hasMega ? n.href : null)}>
                    <Link
                      href={n.href}
                      className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                        active ? "bg-ice-100 text-royal-600" : "text-navy-800 hover:text-royal-600"
                      }`}
                    >
                      {n.label}
                      {hasMega && <ChevronDown className={`size-3.5 transition-transform ${hover === n.href ? "rotate-180" : ""}`} />}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <Link href="/contact" className="btn-primary hidden py-2.5 sm:inline-flex">
                Book a consultation <ArrowRight className="size-4" />
              </Link>
              <button
                className="grid size-11 place-items-center rounded-full bg-navy-800 text-white lg:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>

            <AnimatePresence>
              {hover && mega[hover] && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-x-0 top-full hidden pt-3 lg:block"
                >
                  <div className="glass grid grid-cols-[1fr_260px] gap-6 rounded-3xl p-6 shadow-lift">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                        {hover === "/shoulder" ? "Shoulder conditions" : "Elbow conditions"}
                      </p>
                      <ul className="grid grid-cols-2 gap-1">
                        {mega[hover].map((c) => (
                          <li key={c.slug}>
                            <Link href={`/conditions/${c.slug}`} className="group block rounded-xl px-3 py-2.5 hover:bg-white">
                              <span className="block text-sm font-semibold text-navy-800 group-hover:text-royal-600">{c.name}</span>
                              <span className="line-clamp-1 text-xs text-muted">{c.short}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-between rounded-2xl bg-navy-800 p-5 text-white">
                      <div>
                        <p className="font-display text-lg font-semibold">Not sure what's wrong?</p>
                        <p className="mt-2 text-sm text-white/70">Use our interactive symptom map or speak to the secretary.</p>
                      </div>
                      <Link href={hover} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-400">
                        Explore the {hover === "/shoulder" ? "shoulder" : "elbow"} <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-[-1] bg-navy-950/95 pt-28 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-x space-y-1">
              {[{ label: "Home", href: "/" }, ...nav, { label: "Patient information", href: "/patient-information" }, { label: "FAQs", href: "/faqs" }, { label: "Blog", href: "/blog" }, { label: "Contact", href: "/contact" }].map((n, i) => (
                <motion.li key={n.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.03 * i }}>
                  <Link href={n.href} className="flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold text-white">
                    {n.label} <ArrowRight className="size-5 text-sky-400" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="container-x mt-8 flex gap-3">
              <a href={site.contact.phoneHref} className="btn-light flex-1"><Phone className="size-4" /> Call</a>
              <Link href="/contact" className="btn-primary flex-1">Book</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
