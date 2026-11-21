import RegionHub from "@/components/RegionHub";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Elbow Specialist Leicester, Nuneaton & Warwickshire",
  description: "Private consultant elbow specialist for Leicester, Nuneaton, Hinckley & Warwickshire. Tennis elbow, golfer's elbow, biceps rupture, cubital tunnel and arthritis.",
  path: "/elbow",
});

export default function Page() {
  return <RegionHub region="elbow" />;
}
