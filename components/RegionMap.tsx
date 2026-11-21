/** Stylised map of the practice catchment (Leicestershire & Warwickshire), drawn from real coordinates. */
const towns: { n: string; lat: number; lng: number; area: "leicester" | "nuneaton" | "warwickshire"; major?: boolean }[] = [
  { n: "Leicester", lat: 52.636, lng: -1.133, area: "leicester", major: true },
  { n: "Loughborough", lat: 52.772, lng: -1.206, area: "leicester" },
  { n: "Market Harborough", lat: 52.478, lng: -0.921, area: "leicester" },
  { n: "Oadby & Wigston", lat: 52.59, lng: -1.09, area: "leicester" },
  { n: "Lutterworth", lat: 52.456, lng: -1.2, area: "leicester" },
  { n: "Hinckley", lat: 52.541, lng: -1.373, area: "nuneaton", major: true },
  { n: "Nuneaton", lat: 52.523, lng: -1.465, area: "nuneaton", major: true },
  { n: "Bedworth", lat: 52.479, lng: -1.474, area: "nuneaton" },
  { n: "Atherstone", lat: 52.578, lng: -1.551, area: "nuneaton" },
  { n: "Coventry", lat: 52.408, lng: -1.511, area: "warwickshire", major: true },
  { n: "Rugby", lat: 52.37, lng: -1.265, area: "warwickshire", major: true },
  { n: "Kenilworth", lat: 52.349, lng: -1.582, area: "warwickshire" },
  { n: "Leamington Spa", lat: 52.292, lng: -1.536, area: "warwickshire", major: true },
  { n: "Warwick", lat: 52.282, lng: -1.585, area: "warwickshire" },
];
const B = { minLat: 52.24, maxLat: 52.84, minLng: -1.66, maxLng: -0.66 };
const W = 600, H = 520;
const px = (lng: number) => ((lng - B.minLng) / (B.maxLng - B.minLng)) * W;
const py = (lat: number) => H - ((lat - B.minLat) / (B.maxLat - B.minLat)) * H;

export default function RegionMap({ highlight, className }: { highlight?: "leicester" | "nuneaton" | "warwickshire"; className?: string }) {
  const hubs = { leicester: towns[0], nuneaton: towns[6], warwickshire: towns[10] };
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-label="Map of clinic catchment across Leicestershire and Warwickshire">
      <defs>
        <radialGradient id="rm-glow"><stop offset="0" stopColor="#3cc6c9" stopOpacity=".45" /><stop offset="1" stopColor="#3cc6c9" stopOpacity="0" /></radialGradient>
        <pattern id="rm-dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="#6b80cf" opacity=".22" /></pattern>
      </defs>
      <rect width={W} height={H} rx="28" fill="url(#rm-dots)" />
      {/* motorway-style connectors (illustrative) */}
      <path d={`M${px(-1.206)} ${py(52.772)} L${px(-1.133)} ${py(52.636)} L${px(-1.2)} ${py(52.456)} L${px(-1.265)} ${py(52.37)}`} stroke="#6b80cf" strokeOpacity=".35" strokeWidth="3" fill="none" strokeDasharray="1 7" strokeLinecap="round" />
      <path d={`M${px(-1.133)} ${py(52.636)} L${px(-1.373)} ${py(52.541)} L${px(-1.511)} ${py(52.408)} L${px(-1.536)} ${py(52.292)}`} stroke="#6b80cf" strokeOpacity=".35" strokeWidth="3" fill="none" strokeDasharray="1 7" strokeLinecap="round" />
      <path d={`M${px(-1.551)} ${py(52.578)} L${px(-1.465)} ${py(52.523)} L${px(-1.373)} ${py(52.541)} L${px(-1.265)} ${py(52.37)}`} stroke="#6b80cf" strokeOpacity=".25" strokeWidth="3" fill="none" strokeDasharray="1 7" strokeLinecap="round" />
      {(Object.keys(hubs) as (keyof typeof hubs)[]).map((k) => {
        const t = hubs[k];
        const on = !highlight || highlight === k;
        return <circle key={k} cx={px(t.lng)} cy={py(t.lat)} r={on ? 110 : 70} fill="url(#rm-glow)" opacity={on ? 1 : 0.35} />;
      })}
      {towns.map((t) => {
        const on = !highlight || highlight === t.area;
        return (
          <g key={t.n} opacity={on ? 1 : 0.4}>
            <circle cx={px(t.lng)} cy={py(t.lat)} r={t.major ? 7 : 4.5} fill={t.major ? "#314490" : "#142942"} stroke="#fff" strokeWidth="2.5" />
            <text x={px(t.lng) + 11} y={py(t.lat) + 4} fontSize={t.major ? 15 : 12} fontWeight={t.major ? 700 : 500} fontFamily="Inter, sans-serif" fill="#142942">{t.n}</text>
          </g>
        );
      })}
    </svg>
  );
}
