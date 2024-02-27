import React from "react";

export default function Strike({strikeClass}) {
  return (
    <div
      className={`absolute bg-gray-400 ${strikeClass}`}
    ></div>
  );
}
