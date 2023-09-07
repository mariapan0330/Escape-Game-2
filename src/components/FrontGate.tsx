import React from "react";
import { GameOnlyProp } from "../types/types";

export const FrontGate: React.FC<GameOnlyProp> = () => {
  return (
    <div className="text-3xl text-white bg-gradient-to-t from-sky-500 to-sky-200 h-screen">
      <div className="
      absolute top-20 left-40
      transform -translate-x-1/2 -translate-y-1/2"
      >Front Gate</div>
    </div>
  );
};
