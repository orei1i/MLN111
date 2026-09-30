"use client";

import { useEffect, useRef } from "react";
import { ENDINGS, GOAL } from "@/lib/data";
import { computeEnding, TOTAL_SEMESTERS } from "@/lib/game";
import type { GameState } from "@/lib/types";
import Chip from "./Chip";
import Radar from "./Radar";
import { KEY_STYLE, ROMAN } from "./ui";

const TONE = {
  win: { stamp: "border-gold-400 text-gold-300", panel: "from-gold-400/15", kind: "text-gold-300" },
  fail: { stamp: "border-crimson-500 text-crimson-400", panel: "from-crimson-500/20", kind: "text-crimson-400" },
  meh: { stamp: "border-paper-dim text-paper-dim", panel: "from-paper-dim/10", kind: "text-paper-dim" },
} as const;

export default function EndModal({ state: s, onRestart }: { state: GameState; onRestart: () => void }) {
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    btn.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const id = computeEnding(s);
  const E = ENDINGS[id];
  const tone = TONE[E.tone];
  const g = s.gpa / 4;
  const e = s.exp / 100;
  const balance = 1 - Math.abs(g - e);
  const okG = s.gpa >= GOAL.gpa;
  const okE = s.exp >= GOAL.exp;
  const done = s.burnout ? s.semester - 1 : s.semester;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-ink-950/90 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="end-title">
      <div className="flex min-h-full items-start justify-center p-4 md:items-center">
        <div className="panel fade-in my-4 w-full max-w-3xl p-5 md:p-8">
          <div className={`flex flex-col items-center gap-4 bg-gradient-to-b ${tone.panel} to-transparent p-5 text-center md:flex-row md:text-left`}>
            <div
              className={`stamp-in flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-2 ${tone.stamp}`}
              style={{ boxShadow: "inset 0 0 0 4px #19120f, inset 0 0 0 5px currentColor" }}
              aria-hidden
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">Kết cục</span>
              <span className="font-display text-4xl font-black leading-none">{ROMAN[id]}</span>
            </div>
            <div>
              <div className={`text-xs font-semibold uppercase tracking-[0.2em] ${tone.kind}`}>{E.kind}</div>
              <h2 id="end-title" className="mt-1 font-display text-2xl font-black text-paper md:text-4xl">
                {E.name}
              </h2>
              <p className="mt-2 leading-relaxed text-paper-dim">
                {id === 3 ? (
                  <>
                    Năng lượng cạn về 0 ngay <b className="text-paper">Kì {s.semester}</b>. Bạn nhập viện vì burnout và phải lưu ban 1 năm.
                  </>
                ) : (
                  E.summary
                )}
              </p>
            </div>
          </div>

          <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
            <Radar
              axes={[
                { label: "Học thuật", sub: `${s.gpa.toFixed(2)} GPA`, v: g },
                { label: "Thực chiến", sub: `${s.exp} EXP`, v: e },
                { label: "Năng lượng", sub: `${s.energy}/100`, v: s.energy / 100 },
                { label: "Cân bằng", sub: `${Math.round(balance * 100)}%`, v: balance },
                { label: "Chuyển hóa", sub: `${s.counts.C} lần chọn C`, v: s.counts.C / TOTAL_SEMESTERS },
              ]}
            />
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="tile p-2">
                  <div className="text-[11px] uppercase tracking-wider text-muted">GPA</div>
                  <div className={`font-display text-2xl font-bold ${okG ? "text-jade-400" : "text-crimson-400"}`}>{s.gpa.toFixed(2)}</div>
                </div>
                <div className="tile p-2">
                  <div className="text-[11px] uppercase tracking-wider text-muted">EXP</div>
                  <div className={`font-display text-2xl font-bold ${okE ? "text-jade-400" : "text-crimson-400"}`}>{s.exp}</div>
                </div>
                <div className="tile p-2">
                  <div className="text-[11px] uppercase tracking-wider text-muted">Năng lượng</div>
                  <div className="font-display text-2xl font-bold text-paper">{s.energy}</div>
                </div>
              </div>
              <div className="tile p-3 text-xs leading-relaxed text-paper-dim">
                Điều kiện chuyển hóa: GPA ≥ {GOAL.gpa}{" "}
                <b className={okG ? "text-jade-400" : "text-crimson-400"}>{okG ? "✓" : "✗"}</b> · EXP ≥ {GOAL.exp}{" "}
                <b className={okE ? "text-jade-400" : "text-crimson-400"}>{okE ? "✓" : "✗"}</b>
                <br />
                Đã chọn: A×{s.counts.A} · B×{s.counts.B} · C×{s.counts.C} · Hoàn thành {done}/{TOTAL_SEMESTERS} kỳ
              </div>
            </div>
          </div>

          <div className="mt-6 border-l-2 border-gold-400 bg-ink-800/70 p-4 md:p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Kết luận triết học</div>
            <p className="mt-2 font-display text-base italic leading-relaxed text-paper md:text-lg">“{E.quote}”</p>
          </div>

          <details className="mt-6 border border-gold-400/20 bg-ink-950/40 p-4" open>
            <summary className="cursor-pointer font-display text-base font-bold text-paper">
              Nhật ký quyết định ({s.history.length} kỳ)
            </summary>
            <ol className="mt-2">
              {s.history.map((h) => (
                <li key={h.sem} className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-ink-700 py-2 last:border-0">
                  <span className="w-10 text-xs text-muted">Kì {h.sem}</span>
                  <span className={`flex h-6 w-6 items-center justify-center border font-display text-xs font-bold ${KEY_STYLE[h.key].badge}`}>
                    {h.key}
                  </span>
                  <span className="min-w-[160px] flex-1 text-sm text-paper-dim">{h.title}</span>
                  <span className="flex gap-1">
                    <Chip label="GPA" value={h.d.gpa} dp={2} />
                    <Chip label="EXP" value={h.d.exp} />
                    <Chip label="NL" value={h.d.energy} />
                  </span>
                </li>
              ))}
            </ol>
          </details>

          <button
            ref={btn}
            onClick={onRestart}
            className="mt-6 w-full bg-gradient-to-r from-crimson-600 to-crimson-500 py-3 font-semibold text-paper shadow-lg shadow-crimson-600/30 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
          >
            Chơi lại
          </button>
        </div>
      </div>
    </div>
  );
}
