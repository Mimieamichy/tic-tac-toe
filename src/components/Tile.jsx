import React from "react";

export default function Tile({ className, onClick, value }) {
  return (
    <div
      onClick={onClick}
      className={`${className}   text-xl md:text-3xl  flex justify-center items-center`}
    >
      {value}
    </div>
  );
}
