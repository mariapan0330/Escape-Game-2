import React from "react";
import { GameOnlyProp, Item } from "../types/types";

export const Inventory: React.FC<GameOnlyProp> = ({ game, updateGame, objectsData }) => {
  const {location} = game
  const handleItemClick = (item: string) => {
    updateGame("commentary", objectsData[item]['description']);
  };

  return (
    <div className="absolute right-0 h-screen w-[10vw] bg-gray-700 text-white z-20">
      {game.inventory.map((item: string, i: number) => (
        <div
          key={`inventory=${i}`}
          className="flex justify-center items-center h-20 hover:bg-gray-500 cursor-pointer text-white text-lg"
          title={objectsData[item]['title']}
          onClick={() => handleItemClick(item)}
        >
          {objectsData[item]['title']}
        </div>
      ))}
    </div>
  );
};
