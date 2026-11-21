import { useId } from "react";

/**
 * Original, stylised anatomical illustrations (SVG, no external assets).
 * `spot` highlights the relevant structure with an animated marker.
 */
type Props = { region: "shoulder" | "elbow"; spot?: string; className?: string; title?: string; dark?: boolean };

const SHOULDER_SPOTS: Record<string, { x: number; y: number; label: string }> = {
  cuff: { x: 238, y: 150, label: "Rotator cuff" },
  capsule: { x: 214, y: 232, label: "Joint capsule" },
  subacromial: { x: 214, y: 128, label: "Subacromial space" },
  joint: { x: 190, y: 196, label: "Ball & socket" },
  labrum: { x: 168, y: 214, label: "Labrum" },
  acj: { x: 182, y: 98, label: "AC joint" },
  clavicle: { x: 112, y: 92, label: "Collarbone" },
};
const ELBOW_SPOTS: Record<string, { x: number; y: number; label: string }> = {
  lateral: { x: 128, y: 196, label: "Lateral epicondyle" },
  medial: { x: 274, y: 196, label: "Medial epicondyle" },
  biceps: { x: 176, y: 262, label: "Biceps insertion" },
  elbowjoint: { x: 202, y: 222, label: "Elbow joint" },
  ulnar: { x: 290, y: 232, label: "Ulnar nerve" },
  olecranon: { x: 232, y: 250, label: "Olecranon bursa" },
};

export default function JointIllustration({ region, spot, className, title, dark }: Props) {
  const spots = region === "shoulder" ? SHOULDER_SPOTS : ELBOW_SPOTS;
  const s = spot ? spots[spot] : undefined;
  const stroke = dark ? "#c9d2f1" : "#142942";
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label={title ?? `${region} anatomy illustration${s ? ` highlighting the ${s.label}` : ""}`}>
      <defs>
        <linearGradient id={`bone-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset="1" stopColor="#d8cbb3" />
        </linearGradient>
        <linearGradient id={`tissue-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c68e80" stopOpacity=".8" />
          <stop offset="1" stopColor="#a86659" stopOpacity=".6" />
        </linearGradient>
        <radialGradient id={`glow-${id}`}>
          <stop offset="0" stopColor="#3cc6c9" stopOpacity=".55" />
          <stop offset="1" stopColor="#3cc6c9" stopOpacity="0" />
        </radialGradient>
      </defs>

      {region === "shoulder" ? (
        <g strokeLinejoin="round" strokeLinecap="round">
          {/* scapula */}
          <path d="M60 120 C 110 110, 160 118, 175 150 L 168 255 C 150 300, 110 330, 70 340 C 62 270, 56 190, 60 120Z" fill={`url(#bone-${id})`} stroke={stroke} strokeOpacity=".35" strokeWidth="2" />
          {/* clavicle */}
          <path d="M30 70 C 80 96, 130 84, 186 92" fill="none" stroke={stroke} strokeOpacity=".55" strokeWidth="16" />
          <path d="M30 70 C 80 96, 130 84, 186 92" fill="none" stroke="#fff" strokeWidth="11" />
          {/* acromion */}
          <path d="M150 112 C 170 92, 220 86, 262 104 C 268 116, 254 124, 236 122 C 212 118, 184 122, 160 130Z" fill={`url(#bone-${id})`} stroke={stroke} strokeOpacity=".55" strokeWidth="2" />
          {/* capsule */}
          <ellipse cx="200" cy="202" rx="78" ry="80" fill="none" stroke="#b17c70" strokeOpacity=".5" strokeWidth="3" strokeDasharray="6 7" />
          {/* glenoid */}
          <path d="M166 160 C 156 190, 156 222, 168 250" fill="none" stroke={stroke} strokeOpacity=".7" strokeWidth="8" />
          {/* humerus head + shaft */}
          <path d="M210 140 C 262 134, 290 176, 280 222 C 274 252, 256 268, 252 300 L 250 392 L 196 392 L 200 300 C 196 270, 176 254, 172 226 C 166 182, 178 144, 210 140Z" fill={`url(#bone-${id})`} stroke={stroke} strokeOpacity=".45" strokeWidth="1.4" />
          {/* rotator cuff band */}
          <path d="M168 150 C 196 124, 250 124, 284 168 C 290 180, 290 194, 286 206" fill="none" stroke={`url(#tissue-${id})`} strokeWidth="18" />
          {/* biceps tendon */}
          <path d="M214 160 C 222 210, 226 260, 224 392" fill="none" stroke="#b17c70" strokeOpacity=".45" strokeWidth="5" />
          <text x="40" y="380" fontSize="12" fontFamily="Inter, sans-serif" fill={stroke} opacity=".45">Right shoulder · front view</text>
        </g>
      ) : (
        <g strokeLinejoin="round" strokeLinecap="round">
          {/* humerus */}
          <path d="M173 10 C174 56 178 96 166 132 C157 151 140 157 130 176 C117 188 116 203 126 212 C137 224 149 209 159 206 C168 203 171 221 184 222 C195 224 202 210 211 210 C224 210 230 221 242 219 C257 217 265 225 278 213 C292 200 279 182 268 173 C248 157 237 145 232 125 C226 85 229 47 231 10Z" fill={`url(#bone-${id})`} stroke={stroke} strokeOpacity=".45" strokeWidth="1.4" />
          {/* joint line */}
          <path d="M148 222 C 180 236, 226 236, 258 222" fill="none" stroke="#b17c70" strokeOpacity=".45" strokeWidth="3" strokeDasharray="5 6" />
          {/* radius (lateral, left) */}
          <path d="M146 234 C155 225 178 225 187 233 C193 241 184 250 177 254 C176 268 177 279 173 299 C169 329 155 365 153 392 L128 392 C132 358 144 326 147 295 C150 276 151 265 150 253 C140 249 139 240 146 234Z" fill={`url(#bone-${id})`} stroke={stroke} strokeOpacity=".45" strokeWidth="1.4" />
          {/* ulna (medial, right) */}
          <path d="M210 230 C218 238 237 240 245 227 C251 216 264 223 267 239 C271 254 258 266 252 279 C241 311 247 356 253 392 L230 392 C226 350 221 310 214 281 C211 267 198 258 199 247 C199 237 202 230 210 230Z" fill={`url(#bone-${id})`} stroke={stroke} strokeOpacity=".45" strokeWidth="1.4" />
          {/* extensor / flexor origins */}
          <path d="M120 196 C 100 240, 96 300, 104 392" fill="none" stroke={`url(#tissue-${id})`} strokeWidth="16" />
          <path d="M282 196 C 304 240, 306 300, 300 392" fill="none" stroke={`url(#tissue-${id})`} strokeWidth="16" />
          {/* biceps tendon */}
          <path d="M196 60 C 196 150, 190 220, 178 262" fill="none" stroke="#b17c70" strokeOpacity=".55" strokeWidth="7" />
          {/* ulnar nerve */}
          <path d="M262 40 C 266 140, 300 200, 290 240 C 284 290, 280 340, 284 392" fill="none" stroke="#e2b23a" strokeOpacity=".8" strokeWidth="3" strokeDasharray="2 6" />
          <text x="40" y="380" fontSize="12" fontFamily="Inter, sans-serif" fill={stroke} opacity=".45">Right elbow · front view</text>
        </g>
      )}

      {s && (
        <g>
          <circle cx={s.x} cy={s.y} r="46" fill={`url(#glow-${id})`} />
          <circle cx={s.x} cy={s.y} r="10" fill="#1fa9ad" opacity=".35" className="origin-center" style={{ transformBox: "fill-box" }} />
          <circle cx={s.x} cy={s.y} r="7" fill="#1fa9ad" stroke="#fff" strokeWidth="3" />
          <g transform={`translate(${Math.min(s.x + 16, 390 - (s.label.length * 7 + 22))} ${s.y - 34})`}>
            <rect width={s.label.length * 7 + 22} height="26" rx="13" fill={dark ? "#ffffff" : "#142942"} />
            <text x="11" y="17" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" fill={dark ? "#142942" : "#fff"}>
              {s.label}
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}
