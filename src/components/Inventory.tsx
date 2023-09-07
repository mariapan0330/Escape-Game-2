import React from "react";
import { InventoryProps, Item } from "../types/types";

export const Inventory: React.FC<InventoryProps> = ({ game, updateGame }) => {
  const handleItemClick = (item: Item) => {
    updateGame("commentary", item.description);
  };

  return (
    <div className="absolute right-0 h-screen w-[10rem] bg-gray-700 text-white">
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
