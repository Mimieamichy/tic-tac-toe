import React from "react";
import Tile from "./Tile";
import Strike from "./Strike";

export default function Board({ tile, handleTileClick,strikeClass}) {
  return (
    <div className="grid grid-cols-[100px_100px_100px] cursor-pointer relative grid-rows-[100px_100px_100px]">
      <Tile
        onClick={() => handleTileClick(0)}
        value={tile[0]}
        className="border-b-4 border-t-4 border-l-4  border-r-4 border-[#00004d] border-solid"
      />
      <Tile
        onClick={() => handleTileClick(1)}
        value={tile[1]}
        className="border-b-4 border-t-4 border-r-4 border-[#00004d] border-solid"
      />
      <Tile
        onClick={() => handleTileClick(2)}
        value={tile[2]}
        className="border-b-4 border-t-4 border-r-4  border-[#00004d] border-solid"
      />
      <Tile
        onClick={() => handleTileClick(3)}
        value={tile[3]}
        className="border-b-4 border-l-4 border-r-4 border-[#00004d] border-solid"
      />
      <Tile
        onClick={() => handleTileClick(4)}
        value={tile[4]}
        className="border-b-4 border-r-4 border-[#00004d] border-solid"
      />
      <Tile
        onClick={() => handleTileClick(5)}
        value={tile[5]}
        className="border-b-4 border-r-4 border-[#00004d] border-solid"
      />
      <Tile
        onClick={() => handleTileClick(6)}
        value={tile[6]}
        className="border-r-4 border-b-4 border-l-4 border-[#00004d] border-solid"
      />
      <Tile
        onClick={() => handleTileClick(7)}
        value={tile[7]}
        className="border-r-4 border-b-4 border-[#00004d] border-solid"
      />
      <Tile
        onClick={() => handleTileClick(8)}
        value={tile[8]}
        className="border-r-4 border-b-4 border-[#00004d] border-solid"
      />
      <Strike  strikeClass={strikeClass}/>
    </div>
  );
}
