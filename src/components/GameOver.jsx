import React from "react";
import { GameState } from "../Constants/GameState";

export default function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inprogress:
      return <></>;
    case GameState.playerXwin:
      return (
        <div className="text-center border-[8px] border-gray-400 border-dashed p-2 mt-[50px] text-2xl">
          X wins
        </div>
      );
    case GameState.playerOwin:
      return (
        <div className="text-center border-[8px] border-gray-400 border-dashed p-2 mt-[50px] text-2xl">
          O wins
        </div>
      );
    case GameState.draw:
      return (
        <div className="text-center border-[8px] border-gray-400 border-dashed p-2 mt-[50px] text-2xl">
          Draw
        </div>
      );

    default:
      return <></>;
  }
}
