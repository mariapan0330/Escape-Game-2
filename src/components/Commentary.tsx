import React, { useState, useEffect } from "react";
import { useGame } from "../hooks/useGame";
import { GameOnlyProp } from "../types/types";

export const Commentary: React.FC<GameOnlyProp> = ({ game }) => {
  const { commentary } = game;

  return (
    <div
      className="
    absolute bottom-0
    w-screen h-[10rem]
    p-4 px-20
    bg-gray-900 text-white 
    text-3xl text-left
    "
    >
      {commentary}
    </div>
  );
};
