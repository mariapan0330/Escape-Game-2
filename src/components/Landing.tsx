import React from "react";
import { GameOnlyProp } from "../types/types";

export const Landing: React.FC<GameOnlyProp> = ({ game, updateGame: updateGameData }) => {
  return (
  <div className="absolute text-white p-[10rem] text-5xl">
    {game.location}
  </div>);
};
