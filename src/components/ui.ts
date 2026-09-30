import type { ChoiceKey } from "@/lib/types";

/** Full literal class strings so Tailwind can detect them at build time. */
export const KEY_STYLE: Record<
  ChoiceKey,
  { label: string; caption: string; badge: string; card: string; note: string; noteBorder: string }
> = {
  A: {
    label: "Thiên về Lý thuyết",
    caption: "text-gold-300/80",
    badge: "border-gold-400/50 bg-gold-400/15 text-gold-300",
    card: "border border-gold-400/30 bg-ink-900 hover:border-gold-300 hover:bg-gold-400/5",
    noteBorder: "border-gold-400/60",
    note: "Mặt “Cung” được củng cố, nhưng mâu thuẫn chưa được giải quyết: “Cầu” bị bỏ lại phía sau.",
  },
  B: {
    label: "Thiên về Thực chiến",
    caption: "text-crimson-400/90",
    badge: "border-crimson-500/60 bg-crimson-500/15 text-crimson-400",
    card: "border border-crimson-500/35 bg-ink-900 hover:border-crimson-400 hover:bg-crimson-500/5",
    noteBorder: "border-crimson-500/60",
    note: "Mặt “Cầu” tăng mạnh nhưng nền tảng bị bào mòn. Mặt đối lập kia đang chờ bạn trả nợ.",
  },
  C: {
    label: "Chuyển hóa mâu thuẫn",
    caption: "bg-gradient-to-r from-gold-300 to-crimson-400 bg-clip-text text-transparent",
    badge: "border-transparent bg-gradient-to-br from-gold-400 to-crimson-500 text-ink-950",
    card: "choice-c",
    noteBorder: "border-jade-400/60",
    note: "Hai mặt đối lập cùng thúc đẩy nhau: học để làm, làm để hiểu sâu hơn. Đây là chuyển hóa, không phải dung hòa.",
  },
};

export const fmtDelta = (v: number, dp = 0) =>
  (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(v).toFixed(dp);

export const ROMAN = ["", "I", "II", "III", "IV", "V"];
