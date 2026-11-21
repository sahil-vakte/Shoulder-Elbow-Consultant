import RegionHub from "@/components/RegionHub";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Shoulder Specialist Leicester, Nuneaton & Warwickshire",
  description: "Private consultant shoulder specialist for Leicester, Nuneaton, Hinckley & Warwickshire. Rotator cuff tears, frozen shoulder, impingement, dislocation and arthritis.",
  path: "/shoulder",
});

export default function Page() {
  return <RegionHub region="shoulder" />;
}
