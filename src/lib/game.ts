import { EVENTS, GOAL, REC } from "./data";
import type { Choice, ChoiceKey, EndingId, GameState } from "./types";

export const TOTAL_SEMESTERS = EVENTS.length;

export const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
export const round2 = (v: number) => Math.round(v * 100) / 100;

export function newGame(): GameState {
  return {
    phase: "intro",
    semester: 1,
    gpa: 3.0,
    exp: 10,
    energy: 100,
    history: [],
    last: null,
    recovered: 0,
    burnout: false,
    counts: { A: 0, B: 0, C: 0 },
  };
}

export const startGame = (): GameState => ({ ...newGame(), phase: "event" });

export const currentEvent = (s: GameState) => EVENTS[s.semester - 1];

export const isLocked = (s: GameState, c: Choice) => c.req !== undefined && s.energy < c.req;
/** A/B have no energy requirement, so picking them at low energy means burnout. */
export const isRisky = (s: GameState, c: Choice) => c.req === undefined && s.energy - c.cost <= 0;

export function projected(s: GameState, c: Choice) {
  return {
    gpa: round2(clamp(s.gpa + c.gpa, 0, 4)),
    exp: clamp(s.exp + c.exp, 0, 100),
    energy: clamp(s.energy - c.cost, 0, 100),
  };
}

export function applyChoice(s: GameState, key: ChoiceKey): GameState {
  if (s.phase !== "event") return s;
  const ev = currentEvent(s);
  const choice = ev.choices.find((c) => c.key === key);
  if (!choice || isLocked(s, choice)) return s;

  const burnout = s.energy - choice.cost <= 0;
  const next = projected(s, choice);
  const d = {
    gpa: round2(next.gpa - s.gpa),
    exp: next.exp - s.exp,
    energy: next.energy - s.energy,
  };
  return {
    ...s,
    ...next,
    burnout,
    phase: "result",
    last: { choice, d, burnout },
    counts: { ...s.counts, [key]: s.counts[key] + 1 },
    history: [...s.history, { sem: s.semester, event: ev.title, key, title: choice.title, d }],
  };
}

/** Leaves the result screen: next semester, or the ending after burnout / semester 8. */
export function advance(s: GameState): GameState {
  if (s.phase !== "result" || !s.last) return s;
  if (s.last.burnout || s.semester >= TOTAL_SEMESTERS) return { ...s, phase: "ended" };
  const energy = Math.min(100, s.energy + REC);
  return { ...s, phase: "event", semester: s.semester + 1, recovered: energy - s.energy, energy };
}

export function computeEnding(s: GameState): EndingId {
  if (s.burnout) return 3;
  if (s.exp >= 70 && s.gpa < 2.0) return 2;
  if (s.gpa >= 3.6 && s.exp < 40) return 1;
  if (s.gpa >= GOAL.gpa && s.exp >= GOAL.exp) return 4;
  return 5;
}
