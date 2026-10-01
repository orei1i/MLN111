import Game from "@/components/Game";

export default function Home() {
  return (
    <div className="scene relative z-10 min-h-screen">
      <main className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <header className="mb-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold-400/80">
            Triết học Mác – Lênin · Quy luật mâu thuẫn
          </p>
          <h1 className="mt-3 font-display text-4xl font-black leading-tight text-paper md:text-6xl">
            <span className="text-gold-400">Cung</span> <span className="text-paper-dim">–</span>{" "}
            <span className="text-crimson-400">Cầu</span>
          </h1>
          <div className="mx-auto mt-4 flex max-w-xs items-center gap-3 text-gold-400/70" aria-hidden>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400/60" />
            <span className="text-xs">✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-crimson-400/60" />
          </div>
          <p className="mx-auto mt-3 max-w-xl font-display text-base italic leading-snug text-paper-dim md:text-lg">
            Mâu thuẫn trong giáo dục đào tạo và việc làm ở Việt Nam
          </p>
        </header>
        <Game />
      </main>
    </div>
  );
}
