import { GOAL, REC } from "@/lib/data";
import { TOTAL_SEMESTERS } from "@/lib/game";

export default function Intro({ onStart }: { onStart: () => void }) {
  return (
    <section className="panel fade-in p-6 md:p-9">
      <blockquote className="border-l-2 border-gold-400/60 pl-4 font-display text-lg italic leading-relaxed text-paper md:text-xl">
        Mâu thuẫn là nguồn gốc và động lực của sự phát triển: hai mặt đối lập vừa thống nhất, vừa đấu tranh với nhau.
      </blockquote>
      <p className="mt-5 leading-relaxed text-paper-dim">
        Bạn là sinh viên ngành <b className="text-paper">Kỹ thuật phần mềm (SE)</b> tại Đại học FPT, vừa hoàn thành Kì 0
        (OTP101 và Tiếng Anh chuẩn bị). Từ Kì 1 đến Kì {TOTAL_SEMESTERS}, bạn đi qua đúng lộ trình môn học của ngành:
        từ PRF192, OOP, Java web, SWP391, kỳ OJT202, cho tới đồ án tốt nghiệp. Ở mỗi kỳ, bạn đứng giữa hai mặt đối lập của đời sinh viên. Đẩy hẳn về một phía thì mâu thuẫn
        biến thành bế tắc; chỉ khi cả hai cùng được nâng lên, mâu thuẫn mới <i>chuyển hóa</i> thành một chất mới.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="border border-gold-400/35 bg-gold-400/5 p-4">
          <div className="font-display text-lg font-bold text-gold-300">GPA · “Cung”</div>
          <p className="mt-1 text-sm leading-relaxed text-paper-dim">
            Lý thuyết nhà trường: điểm các môn, nền tảng, bằng cấp, tư duy hệ thống.
          </p>
        </div>
        <div className="border border-crimson-500/40 bg-crimson-500/5 p-4">
          <div className="font-display text-lg font-bold text-crimson-400">EXP · “Cầu”</div>
          <p className="mt-1 text-sm leading-relaxed text-paper-dim">
            Kỹ năng thực chiến: CLB, hackathon, part-time, dự án, OJT, sản phẩm thật.
          </p>
        </div>
        <div className="border border-jade-500/40 bg-jade-500/5 p-4">
          <div className="font-display text-lg font-bold text-jade-400">Năng lượng</div>
          <p className="mt-1 text-sm leading-relaxed text-paper-dim">
            Điều kiện vật chất để giải quyết mâu thuẫn. Hồi +{REC} mỗi kỳ. Về 0 là kiệt sức.
          </p>
        </div>
      </div>

      <div className="mt-6 border border-gold-400/25 bg-ink-800/70 p-4 text-sm leading-relaxed text-paper-dim">
        <b className="font-display text-base text-gold-300">Mục tiêu:</b> qua {TOTAL_SEMESTERS} học kỳ, đạt{" "}
        <b className="text-paper">GPA ≥ {GOAL.gpa}</b> và <b className="text-paper">EXP ≥ {GOAL.exp}</b> để tốt nghiệp
        và nhận offer. Mỗi kỳ có 3 lựa chọn:{" "}
        <b className="text-gold-300">A</b> thiên về lý thuyết ·{" "}
        <b className="text-crimson-400">B</b> thiên về thực chiến ·{" "}
        <b className="bg-gradient-to-r from-gold-300 to-crimson-400 bg-clip-text text-transparent">C</b> chuyển hóa mâu
        thuẫn (tốn nhiều năng lượng, thiếu sức thì không chọn được).
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        Danh sách môn học từng kỳ theo khung chương trình SE (BIT_SE_K21C, QĐ 577/QĐ-ĐHFPT ngày 15/05/2026). Điểm GPA trong game
        quy về thang 4.0.
      </p>

      <button
        onClick={onStart}
        className="mt-6 bg-gradient-to-r from-crimson-600 to-crimson-500 px-8 py-3 font-semibold text-paper shadow-lg shadow-crimson-600/30 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
      >
        Bắt đầu Kì 1 →
      </button>
    </section>
  );
}
