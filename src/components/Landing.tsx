import React from "react";
import { GameOnlyProp } from "../types/types";

export const Landing: React.FC<GameOnlyProp> = ({
  game,
  updateGame: updateGameData,
}) => {
  const handleNewGame = () => {
    updateGameData("location", "Front Gate");
  };

  return (
    <div className="bg-gray-950 relative text-white h-screen">
      <div
        className="
    absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-5xl"
      >
        {game.location}?
        <div
          className="
      absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      bg-purple-700 py-5 px-10 text-2xl
      hover:bg-amber-600 cursor-pointer
      "
          onClick={handleNewGame}
        >
          New Game
        </div>
      </div>
    </div>
  );
};
