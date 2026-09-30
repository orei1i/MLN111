import { clamp } from "@/lib/game";

const EASE = "0.6s cubic-bezier(.3,.7,.3,1)";

function Pan({ x, y, fill, label }: { x: number; y: number; fill: string; label: string }) {
  return (
    <g style={{ transform: `translate(${x}px, ${y}px)`, transition: `transform ${EASE}` }}>
      <path d="M0 0 L-22 30 M0 0 L22 30" stroke="#948673" strokeWidth="1" fill="none" />
      <path d="M-28 30 Q0 50 28 30 Z" fill={fill} />
      <text y="66" textAnchor="middle" fontSize="11" fill="#cbbfa8">
        {label}
      </text>
    </g>
  );
}

/** Cán cân mâu thuẫn: mặt nào "nặng" hơn thì đĩa cân bên đó hạ xuống. */
export default function Scale({ gpa, exp }: { gpa: number; exp: number }) {
  const skew = clamp(exp / 100 - gpa / 4, -1, 1); // > 0: Cầu nặng hơn
  const rad = (skew * 16 * Math.PI) / 180;
  const cx = 160;
  const cy = 24;
  const half = 108;
  const lx = cx - Math.cos(rad) * half;
  const ly = cy - Math.sin(rad) * half;
  const rx = cx + Math.cos(rad) * half;
  const ry = cy + Math.sin(rad) * half;

  let msg = "Hai mặt đối lập đang thống nhất và cân bằng";
  let tone = "text-jade-400";
  if (skew <= -0.15) {
    msg = "“Cung” lấn át “Cầu”: lý thuyết chưa được thực tiễn kiểm nghiệm";
    tone = "text-gold-300";
  } else if (skew >= 0.15) {
    msg = "“Cầu” lệch khỏi “Cung”: thực tiễn thiếu nền tảng lý luận";
    tone = "text-crimson-400";
  }

  return (
    <div className="tile flex flex-col items-center gap-1 px-4 py-3 md:flex-row md:gap-6">
      <svg viewBox="0 0 320 128" className="h-[128px] w-full max-w-[320px] shrink-0" role="img" aria-label="Cán cân giữa GPA và EXP">
        <path d="M160 24 L149 118 L171 118 Z" fill="#4a382e" />
        <rect x="128" y="118" width="64" height="4" fill="#4a382e" />
        <line
          x1={lx}
          y1={ly}
          x2={rx}
          y2={ry}
          stroke="#e3b957"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ transition: `all ${EASE}` }}
        />
        <circle cx={cx} cy={cy} r="5" fill="#f2d58c" />
        <Pan x={lx} y={ly} fill="#e3b957" label="Cung · Lý thuyết" />
        <Pan x={rx} y={ry} fill="#c8322f" label="Cầu · Thực chiến" />
      </svg>
      <div className="text-center md:text-left">
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted">Cán cân mâu thuẫn</div>
        <div className={`mt-1 text-sm leading-snug ${tone}`}>{msg}</div>
      </div>
    </div>
  );
}
