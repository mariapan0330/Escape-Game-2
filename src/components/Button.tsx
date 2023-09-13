import React from "react";
import { ButtonProps } from "../types/types";

export const Button: React.FC<ButtonProps> = ({ game, text, color, x, y }) => {
  return (
    <div
      className={`
      absolute transform -translate-x-1/2 -translate-y-1/2`}
      style={{ top: `${y}%`, left: `${x}%` }}
    >
      <div
        className={`px-[20px] py-[10px] text-white text-md rounded-sm cursor-pointer border-4 border-transparent hover:border-white`}
        style={{ backgroundColor: color }}
      >
        {text}
      </div>
    </div>
  );
};
