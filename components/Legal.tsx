import type { ReactNode } from "react";
import { PageHero } from "./ui";

export default function Legal({ title, path, children }: { title: string; path: string; children: ReactNode }) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} title={title} lead={<p>Last updated: 21 November 2026</p>} />
      <section className="container-x max-w-3xl py-14">
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-navy-800 prose-p:text-muted">{children}</div>
      </section>
    </>
  );
}
