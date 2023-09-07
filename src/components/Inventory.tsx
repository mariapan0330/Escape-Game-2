import React from "react";
import { GameOnlyProp, Item } from "../types/types";

export const Inventory: React.FC<GameOnlyProp> = ({ game, updateGame }) => {
  const handleItemClick = (item: Item) => {
    updateGame("commentary", item.description);
  };

  return (
    <div className="absolute right-0 h-screen w-[10vw] bg-gray-700 text-white z-20">
      {game.inventory.map((item: Item, i: number) => (
        <div
          key={`inventory=${i}`}
          className="h-20 hover:bg-gray-500 cursor-pointer"
          onClick={() => handleItemClick(item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
