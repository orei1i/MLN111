import { currentEvent, isLocked, isRisky } from "@/lib/game";
import type { Choice, ChoiceKey, GameState } from "@/lib/types";
import Chip from "./Chip";
import { KEY_STYLE } from "./ui";

function ChoiceButton({
  choice: c,
  state,
  onChoose,
  onHover,
}: {
  choice: Choice;
  state: GameState;
  onChoose: (k: ChoiceKey) => void;
  onHover: (k: ChoiceKey | null) => void;
}) {
  const st = KEY_STYLE[c.key];
  const locked = isLocked(state, c);
  const risky = isRisky(state, c);
  return (
    <button
      type="button"
      disabled={locked}
      onClick={() => onChoose(c.key)}
      onMouseEnter={() => !locked && onHover(c.key)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => !locked && onHover(c.key)}
      onBlur={() => onHover(null)}
      aria-label={`Lựa chọn ${c.key}: ${c.title}`}
      className={`choice p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 ${st.card} ${
        locked ? "cursor-not-allowed opacity-45" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center border font-display text-lg font-bold ${st.badge}`}>
          {c.key}
        </span>
        <div className="min-w-0">
          <div className={`text-[11px] font-medium uppercase tracking-[0.15em] ${st.caption}`}>{st.label}</div>
          <div className="mt-0.5 font-display text-base font-bold leading-snug text-paper">{c.title}</div>
          <p className="mt-1 text-sm leading-snug text-paper-dim">{c.desc}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Chip label="GPA" value={c.gpa} dp={2} />
            <Chip label="EXP" value={c.exp} />
            <Chip label="Năng lượng" value={-c.cost} />
          </div>
          {locked && (
            <div className="mt-2 text-xs text-crimson-400">
              🔒 Cần ≥ {c.req} năng lượng (hiện có {state.energy})
            </div>
          )}
          {risky && <div className="mt-2 text-xs text-crimson-400">⚠ Chọn cái này sẽ kiệt sức!</div>}
          {c.req !== undefined && !locked && <div className="mt-2 text-xs text-muted">Yêu cầu ≥ {c.req} năng lượng</div>}
        </div>
      </div>
    </button>
  );
}

export default function EventCard({
  state,
  onChoose,
  onHover,
}: {
  state: GameState;
  onChoose: (k: ChoiceKey) => void;
  onHover: (k: ChoiceKey | null) => void;
}) {
  const ev = currentEvent(state);
  return (
    <section className="panel fade-in p-5 md:p-8" key={state.semester}>
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <span className="bg-crimson-600 px-2 py-1 font-semibold uppercase tracking-wider text-paper">
          Kì {state.semester}
        </span>
        <span className="uppercase tracking-[0.2em] text-muted">{ev.tag}</span>
        {state.recovered > 0 && (
          <span className="ml-auto bg-jade-500/15 px-2 py-1 text-jade-400">
            Nghỉ ngơi giữa kỳ: +{state.recovered} năng lượng
          </span>
        )}
      </div>
      <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-paper md:text-3xl">{ev.title}</h2>
      <p className="mt-3 leading-relaxed text-paper-dim">{ev.story}</p>
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Môn học kỳ này</span>
        {ev.courses.map((c) => (
          <span
            key={c.code}
            title={c.name}
            className="border border-gold-400/25 bg-ink-800/80 px-2 py-0.5 font-mono text-xs text-gold-300"
          >
            {c.code}
          </span>
        ))}
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {ev.choices.map((c) => (
          <ChoiceButton key={c.key} choice={c} state={state} onChoose={onChoose} onHover={onHover} />
        ))}
      </div>
      <p className="mt-5 text-xs text-muted">
        Di chuột (hoặc focus) vào một lựa chọn để xem trước tác động lên thanh chỉ số · Phím tắt: A/B/C hoặc 1/2/3
      </p>
    </section>
  );
}
