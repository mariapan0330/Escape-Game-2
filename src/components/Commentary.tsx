import React from "react";
import { GameOnlyProp } from "../types/types";

export const Commentary: React.FC<GameOnlyProp> = ({ game, objectsData }) => {
  const { commentary } = game;

  return (
    <div
      className="
    absolute bottom-0
    w-2/3 h-content
    p-4 px-20
    left-[10rem]
    my-10
    overflow-hidden
    bg-gray-900 text-white 
    text-3xl text-left
    z-10
    "
    >
      {commentary}
    </div>
  );
};
