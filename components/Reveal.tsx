import type { ReactNode } from "react";

/** Shared section wrapper. Content stays visible without scroll-triggered effects. */
export default function Reveal({ children, className, as: Tag = "div" }: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  return <Tag className={className}>{children}</Tag>;
}
