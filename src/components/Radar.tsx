import { clamp } from "@/lib/game";

export interface RadarAxis {
  label: string;
  sub: string;
  v: number; // 0..1
}

export default function Radar({ axes }: { axes: RadarAxis[] }) {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2 + 6;
  const R = 90;
  const n = axes.length;
  const pt = (i: number, r: number): [number, number] => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  };
  const ring = (f: number) => axes.map((_, i) => pt(i, R * f).join(",")).join(" ");
  const shape = axes.map((a, i) => pt(i, R * clamp(a.v, 0.03, 1)));

  return (
    <svg viewBox={`-60 0 ${size + 120} ${size + 16}`} className="mx-auto w-full max-w-[420px]" role="img" aria-label="Biểu đồ radar chỉ số">
      <defs>
        <linearGradient id="radar-fill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e3b957" stopOpacity="0.45" />
          <stop offset="1" stopColor="#c8322f" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((f) => (
        <polygon key={f} points={ring(f)} fill="none" stroke="#4a382e" strokeWidth="1" />
      ))}
      {axes.map((_, i) => (
        <line key={i} x1={cx} y1={cy} x2={pt(i, R)[0]} y2={pt(i, R)[1]} stroke="#33261f" />
      ))}
      <polygon points={shape.map((p) => p.join(",")).join(" ")} fill="url(#radar-fill)" stroke="#e3b957" strokeWidth="2" />
      {shape.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#f2d58c" />
      ))}
      {axes.map((a, i) => {
        const [x, y] = pt(i, R + 24);
        const anchor = Math.abs(x - cx) < 6 ? "middle" : x > cx ? "start" : "end";
        return (
          <text key={a.label} x={x} y={y} textAnchor={anchor} fontSize="11" fill="#f4ead6">
            <tspan x={x} dy="0">
              {a.label}
            </tspan>
            <tspan x={x} dy="13" fontSize="10" fill="#948673">
              {a.sub}
            </tspan>
          </text>
        );
      })}
    </svg>
  );
}
