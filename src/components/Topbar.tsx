import { GOAL } from "@/lib/data";
import { TOTAL_SEMESTERS } from "@/lib/game";
import type { GameState } from "@/lib/types";
import { fmtDelta } from "./ui";

export interface Preview {
  gpa: number;
  exp: number;
  energy: number;
}

function gpaLevel(g: number) {
  if (g < 2.0) return { text: "Báo động", cls: "text-red-400", dot: "bg-red-500" };
  if (g < GOAL.gpa) return { text: "Dưới ngưỡng", cls: "text-orange-400", dot: "bg-orange-400" };
  if (g < 3.6) return { text: "Ổn định", cls: "text-jade-400", dot: "bg-jade-400" };
  return { text: "Xuất sắc", cls: "text-gold-300", dot: "bg-gold-300" };
}

function Meter({
  value,
  max,
  fill,
  preview,
  tick,
}: {
  value: number;
  max: number;
  fill: string;
  preview?: number;
  tick?: number;
}) {
  const pct = (value / max) * 100;
  const pv = preview === undefined ? pct : (preview / max) * 100;
  const gain = pv >= pct;
  return (
    <div className="relative mt-2 h-2 overflow-hidden rounded-full bg-ink-700">
      <div className={`bar-fill absolute inset-y-0 left-0 rounded-full ${fill}`} style={{ width: `${pct}%` }} />
      <div
        className={`seg absolute inset-y-0 ${gain ? "bg-paper/70" : "bg-red-500/90"}`}
        style={{ left: `${Math.min(pct, pv)}%`, width: `${Math.abs(pv - pct)}%`, opacity: pv === pct ? 0 : 1 }}
      />
      {tick !== undefined && (
        <div className="absolute inset-y-0 w-0.5 bg-paper/80" style={{ left: `${(tick / max) * 100}%` }} title="Ngưỡng mục tiêu" />
      )}
    </div>
  );
}

function Delta({ v, dp = 0 }: { v: number; dp?: number }) {
  if (v === 0) return null;
  return (
    <span className={`text-sm font-semibold tabular-nums ${v > 0 ? "text-jade-400" : "text-red-400"}`}>{fmtDelta(v, dp)}</span>
  );
}

const LABEL = "text-[11px] font-medium uppercase tracking-[0.18em] text-muted";

export default function Topbar({ state: s, preview }: { state: GameState; preview: Preview | null }) {
  const lv = gpaLevel(s.gpa);
  // Khung chương trình SE chia 3 giai đoạn chuyên ngành: Kì 1-3, 4-6, 7-9.
  const stage = Math.ceil(s.semester / 3);
  const energyFill = s.energy < 25 ? "bg-orange-500" : s.energy < 50 ? "bg-gold-500" : "bg-jade-400";
  const num = "font-display text-3xl font-bold tabular-nums leading-none";

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div className="tile p-3">
        <div className={LABEL}>Chuyên ngành {stage}</div>
        <div className="mt-1.5 font-display text-3xl font-bold leading-none text-paper">
          Kì {s.semester}
          <span className="text-base font-normal text-muted"> / {TOTAL_SEMESTERS}</span>
        </div>
        <div className="mt-3 flex gap-1" aria-label={`Học kỳ ${s.semester} trên ${TOTAL_SEMESTERS}`}>
          {Array.from({ length: TOTAL_SEMESTERS }, (_, i) => {
            const n = i + 1;
            const done = n < s.semester || (n === s.semester && s.phase !== "event");
            return (
              <span
                key={n}
                className={`h-1.5 flex-1 ${done ? "bg-gold-400" : n === s.semester ? "bg-paper" : "bg-ink-700"}`}
              />
            );
          })}
        </div>
      </div>

      <div className="tile p-3">
        <div className={`flex items-center justify-between ${LABEL}`}>
          <span>GPA · Cung</span>
          <span className={`flex items-center gap-1 normal-case tracking-normal ${lv.cls}`}>
            <i className={`inline-block h-2 w-2 rounded-full ${lv.dot}`} />
            {lv.text}
          </span>
        </div>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className={`${num} ${lv.cls}`}>{s.gpa.toFixed(2)}</span>
          <span className="text-sm text-muted">/ 4.00</span>
          {preview && <Delta v={Math.round((preview.gpa - s.gpa) * 100) / 100} dp={2} />}
        </div>
        <Meter value={s.gpa} max={4} fill="bg-gold-400" preview={preview?.gpa} tick={GOAL.gpa} />
      </div>

      <div className="tile p-3">
        <div className={LABEL}>EXP · Cầu</div>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className={`${num} text-crimson-400`}>{s.exp}</span>
          <span className="text-sm text-muted">/ 100</span>
          {preview && <Delta v={preview.exp - s.exp} />}
        </div>
        <Meter value={s.exp} max={100} fill="bg-crimson-500" preview={preview?.exp} tick={GOAL.exp} />
      </div>

      <div className="tile p-3">
        <div className={LABEL}>Năng lượng</div>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className={`${num} ${s.energy < 25 ? "text-orange-400" : "text-jade-400"}`}>{s.energy}</span>
          <span className="text-sm text-muted">/ 100</span>
          {preview && <Delta v={preview.energy - s.energy} />}
        </div>
        <Meter value={s.energy} max={100} fill={energyFill} preview={preview?.energy} />
      </div>
    </div>
  );
}
