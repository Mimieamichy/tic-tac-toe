import React, { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import { GameState } from "../Constants/GameState";

const playerX = "X";
const playerO = "O";
const crossRone = "w-full h-1 top-[15%]";
const crossRtwo = "w-full h-1 top-[48%]";
const crossRthree = "w-full h-1 top-[83%]";

const crossCone = "w-1 h-full left-[15%]";
const crossCtwo = "w-1 h-full left-[48%]";
const crossCthree = "w-1 h-full left-[83%]";

const crossDone = "w-[90%] h-1 top-[50%] left-[5%] skew-y-[45deg]";
const crossDtwo = "w-[90%] h-1 top-[50%] left-[5%] skew-y-[-45deg]";

const winningCombo = [
  //Rows winable combo
  { combo: [0, 1, 2], strikeClass: crossRone },
  { combo: [3, 4, 5], strikeClass: crossRtwo },
  { combo: [6, 7, 8], strikeClass: crossRthree },
  //Column winable combo
  { combo: [0, 3, 6], strikeClass: crossCone },
  { combo: [1, 4, 7], strikeClass: crossCtwo },
  { combo: [2, 5, 8], strikeClass: crossCthree },
  // Diagonal winable combo
  { combo: [0, 4, 8], strikeClass: crossDone },
  { combo: [2, 4, 6], strikeClass: crossDtwo },
];
function checkWinner(tile, setStrikeClass) {
  for (const { combo, strikeClass } of winningCombo) {
    const tileVal1 = tile[combo[0]];
    const tileVal2 = tile[combo[1]];
    const tileVal3 = tile[combo[2]];
    if (tileVal1 !== null && tileVal1 === tileVal2 && tileVal2 === tileVal3) {
      setStrikeClass(strikeClass);
    }
  }
}

export default function TicTac() {
  const [tile, setTile] = useState(Array(9).fill(null));
  const [turns, setTurns] = useState(playerX);
  const [strikeClass, setStrikeClass] = useState();
  cont[(gameState, setGameState)] = useState(GameState.inprogress);

  const handleTileClick = (index) => {
    if (tile[index] !== null) {
      return;
    }
    const newTiles = [...tile];
    newTiles[index] = turns;
    setTile(newTiles);
    turns === playerX ? setTurns(playerO) : setTurns(playerX);
  };
  useEffect(() => {
    checkWinner(tile, setStrikeClass);
  }, [tile]);

  return (
    <div>
      <h1 className="font-black text-3xl text-center md:m-4 m-2">
        Tic Tac Toe
      </h1>
      <Board
        strikeClass={strikeClass}
        tile={tile}
        handleTileClick={handleTileClick}
      />
      <GameOver />
    </div>
  );
}
