import { TOTAL_SEMESTERS } from "@/lib/game";
import type { GameState } from "@/lib/types";
import Chip from "./Chip";
import { KEY_STYLE } from "./ui";

export default function ResultCard({ state: s, onNext }: { state: GameState; onNext: () => void }) {
  if (!s.last) return null;
  const { choice: c, d, burnout } = s.last;
  const st = KEY_STYLE[c.key];
  const isEnd = burnout || s.semester >= TOTAL_SEMESTERS;
  return (
    <section className="panel fade-in p-5 md:p-8">
      <div className="flex items-center gap-3 text-xs">
        <span className="bg-crimson-600 px-2 py-1 font-semibold uppercase tracking-wider text-paper">Kì {s.semester}</span>
        <span className="uppercase tracking-[0.2em] text-muted">Kết quả lựa chọn</span>
      </div>
      <div className="mt-4 flex items-start gap-3">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center border font-display text-xl font-bold ${st.badge}`}>
          {c.key}
        </span>
        <div>
          <div className={`text-[11px] font-medium uppercase tracking-[0.15em] ${st.caption}`}>{st.label}</div>
          <h2 className="font-display text-xl font-bold text-paper md:text-2xl">{c.title}</h2>
        </div>
      </div>
      <p className="mt-4 leading-relaxed text-paper-dim">{c.result}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <Chip label="GPA" value={d.gpa} dp={2} />
        <Chip label="EXP" value={d.exp} />
        <Chip label="Năng lượng" value={d.energy} />
      </div>
      <div className={`mt-5 border-l-2 bg-ink-800/70 p-3 text-sm italic leading-relaxed text-paper-dim ${st.noteBorder}`}>
        {st.note}
      </div>
      {burnout && (
        <div className="mt-4 border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          🚨 Năng lượng của bạn đã cạn kiệt. Cơ thể không thể tiếp tục được nữa...
        </div>
      )}
      <button
        onClick={onNext}
        autoFocus
        className="mt-7 bg-gradient-to-r from-crimson-600 to-crimson-500 px-7 py-3 font-semibold text-paper shadow-lg shadow-crimson-600/30 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
      >
        {burnout ? "Xem hậu quả →" : isEnd ? "Xem kết cục tốt nghiệp →" : `Sang Kì ${s.semester + 1} →`}
      </button>
    </section>
  );
}
