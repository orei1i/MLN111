# Cung – Cầu: Mâu thuẫn trong giáo dục đào tạo và việc làm ở Việt Nam

Game mô phỏng 9 học kỳ (Kì 1–9) của sinh viên ngành Kỹ thuật phần mềm, Đại học FPT theo khung chương trình BIT_SE_K21C, minh họa **quy luật thống nhất và đấu tranh của các mặt đối lập** (triết học Mác – Lênin):
cân bằng **GPA** (“Cung” – lý thuyết) và **EXP** (“Cầu” – thực tiễn) để đạt kết cục *chuyển hóa*.

Next.js (App Router) + TypeScript + Tailwind CSS v4. Không cần backend, không cần biến môi trường.

## Chạy local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build production
```

## Deploy lên Vercel

1. Đẩy thư mục này lên một repo GitHub/GitLab/Bitbucket.
2. Vào [vercel.com/new](https://vercel.com/new), import repo. Vercel tự nhận Next.js, giữ nguyên cài đặt mặc định.
3. Bấm **Deploy**.

Hoặc dùng CLI: `npx vercel` (xem trước) / `npx vercel --prod`.

## Cấu trúc

```
src/
  app/            layout, trang chủ, style toàn cục (bảng màu, khung "văn bản")
  components/     Game (state), Topbar, Scale (cán cân), EventCard, ResultCard, EndModal, Radar
  lib/
    data.ts       9 sự kiện (đúng môn học từng kỳ SE), 3 lựa chọn mỗi kỳ, 5 kết cục  ← chỉnh nội dung/cân bằng ở đây
    game.ts       logic thuần: applyChoice, advance, computeEnding
legacy/index.html bản đơn file ban đầu (không dùng khi build)
```

Muốn game dễ/khó hơn: chỉnh `gpa`, `exp`, `cost`, `req` của từng lựa chọn trong `src/lib/data.ts`
và ngưỡng `GOAL` / `REC` (năng lượng hồi mỗi kỳ).
