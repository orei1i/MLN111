import { fmtDelta } from "./ui";

export default function Chip({ label, value, dp = 0 }: { label: string; value: number; dp?: number }) {
  const tone =
    value === 0
      ? "bg-ink-700 text-muted"
      : value > 0
        ? "bg-jade-500/15 text-jade-400"
        : "bg-crimson-500/15 text-crimson-400";
  return (
    <span className={`rounded-sm px-2 py-0.5 text-xs font-semibold tabular-nums ${tone}`}>
      {label} {value === 0 ? "±0" : fmtDelta(value, dp)}
    </span>
  );
}
