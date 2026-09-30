export type ChoiceKey = "A" | "B" | "C";
export type EndingId = 1 | 2 | 3 | 4 | 5;

export interface Choice {
  key: ChoiceKey;
  title: string;
  desc: string;
  gpa: number;
  exp: number;
  /** Energy spent by picking this choice. */
  cost: number;
  /** Minimum energy needed to pick it (choice C only). */
  req?: number;
  result: string;
}

export interface Course {
  code: string;
  name: string;
}

export interface SemesterEvent {
  title: string;
  tag: string;
  /** Môn học của kỳ theo khung chương trình SE. */
  courses: Course[];
  story: string;
  choices: Choice[];
}

export interface Ending {
  tone: "win" | "fail" | "meh";
  kind: string;
  name: string;
  summary: string;
  quote: string;
}

export interface Deltas {
  gpa: number;
  exp: number;
  energy: number;
}

export interface HistoryItem {
  sem: number;
  event: string;
  key: ChoiceKey;
  title: string;
  d: Deltas;
}

export interface GameState {
  phase: "intro" | "event" | "result" | "ended";
  semester: number;
  gpa: number;
  exp: number;
  energy: number;
  history: HistoryItem[];
  last: { choice: Choice; d: Deltas; burnout: boolean } | null;
  /** Energy regained when the current semester began. */
  recovered: number;
  burnout: boolean;
  counts: Record<ChoiceKey, number>;
}
