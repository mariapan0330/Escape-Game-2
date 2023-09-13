import React from "react";
import { GameOnlyProp } from "../types/types";
import { Button } from "./Button";

type ButtonInfo = {
  text: string;
  color: string;
  x: number;
  y: number;
};

export const FrontGate: React.FC<GameOnlyProp> = ({ game, objectsData }) => {
  return (
    <div className="text-3xl text-white bg-gradient-to-t from-sky-500 to-sky-200 h-screen">
      <div
        className={`
      absolute top-20 left-40
      transform -translate-x-1/2 -translate-y-1/2`}
      onClick={() => console.log(objectsData)}
      >
        Front Gate
      </div>
      {Object.values(objectsData)
        .filter((item: any) => (item.room === "Front Gate" && item.contains.length === 0))
        .map((item: any) => (
          <Button text={item.title} color={item.color} x={item.x} y={item.y} />
        ))}
    </div>
  );
};
