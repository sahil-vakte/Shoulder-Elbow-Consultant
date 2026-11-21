import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";
import { conditions } from "@/content/conditions";
import { treatments } from "@/content/treatments";
import { locations } from "@/content/locations";
import { posts } from "@/content/blog";
import { CONTENT_REVIEWED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const d = new Date(CONTENT_REVIEWED);
  const page = (path: string, priority: number, freq: "weekly" | "monthly" | "yearly" = "monthly") => ({ url: abs(path), lastModified: d, changeFrequency: freq, priority });
  return [
    page("/", 1, "weekly"),
    page("/shoulder", 0.9),
    page("/elbow", 0.9),
    ...locations.map((l) => page(`/locations/${l.slug}`, 0.9)),
    page("/conditions", 0.8),
    ...conditions.map((c) => page(`/conditions/${c.slug}`, 0.8)),
    page("/treatments", 0.8),
    ...treatments.map((t) => page(`/treatments/${t.slug}`, 0.7)),
    page("/locations", 0.7),
    page("/about", 0.7),
    page("/fees-and-insurance", 0.7),
    page("/contact", 0.7),
    page("/patient-information", 0.5),
    page("/faqs", 0.5),
    page("/blog", 0.6, "weekly"),
    ...posts.map((p) => ({ url: abs(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.5 })),
    page("/privacy", 0.1, "yearly"),
    page("/cookies", 0.1, "yearly"),
    page("/terms", 0.1, "yearly"),
  ];
}
