import React from "react";
import { GameState } from "../Constants/GameState";

export default function Reset({ gameState,handleReset }) {
  if (gameState === GameState.inprogress) {
    return;
  }
  return (
    <button onClick={handleReset} className="mt-[50px] p-5 bg-[#00004d] text-slate-50 w-full text-2xl">
      Reset
    </button>
  );
}
