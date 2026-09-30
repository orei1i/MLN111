"use client";

import { useEffect, useReducer, useState } from "react";
import { advance, applyChoice, currentEvent, newGame, projected, startGame } from "@/lib/game";
import type { ChoiceKey, GameState } from "@/lib/types";
import EndModal from "./EndModal";
import EventCard from "./EventCard";
import Intro from "./Intro";
import ResultCard from "./ResultCard";
import Scale from "./Scale";
import Topbar from "./Topbar";

type Action = { type: "start" } | { type: "choose"; key: ChoiceKey } | { type: "next" };

function reducer(s: GameState, a: Action): GameState {
  switch (a.type) {
    case "start":
      return startGame();
    case "choose":
      return applyChoice(s, a.key);
    case "next":
      return advance(s);
  }
}

const KEYMAP: Record<string, ChoiceKey> = { a: "A", b: "B", c: "C", "1": "A", "2": "B", "3": "C" };

export default function Game() {
  const [s, dispatch] = useReducer(reducer, undefined, newGame);
  const [hover, setHover] = useState<ChoiceKey | null>(null);

  const playing = s.phase !== "intro";

  useEffect(() => {
    if (playing) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [s.semester, playing]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (s.phase !== "event" || e.ctrlKey || e.metaKey || e.altKey) return;
      const key = KEYMAP[e.key.toLowerCase()];
      if (key) {
        setHover(null);
        dispatch({ type: "choose", key });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [s.phase]);

  const choice = s.phase === "event" && hover ? currentEvent(s).choices.find((c) => c.key === hover) : undefined;
  const preview = choice ? projected(s, choice) : null;

  const restart = () => {
    setHover(null);
    dispatch({ type: "start" });
  };

  if (!playing) return <Intro onStart={restart} />;

  return (
    <div className="space-y-4">
      <Topbar state={s} preview={preview} />
      <Scale gpa={s.gpa} exp={s.exp} />
      {s.phase === "event" && <EventCard state={s} onChoose={(key) => { setHover(null); dispatch({ type: "choose", key }); }} onHover={setHover} />}
      {(s.phase === "result" || s.phase === "ended") && <ResultCard state={s} onNext={() => dispatch({ type: "next" })} />}
      <div className="pt-2 text-center">
        <button
          onClick={() => {
            if ((s.phase === "event" && s.semester === 1) || window.confirm("Bắt đầu lại từ Kì 1?")) restart();
          }}
          className="text-xs text-muted underline underline-offset-2 hover:text-paper-dim"
        >
          Bắt đầu lại từ đầu
        </button>
      </div>
      {s.phase === "ended" && <EndModal state={s} onRestart={restart} />}
    </div>
  );
}
