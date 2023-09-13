import { useState } from "react";
import { objectsData } from "../objectsData";

export const useGame = (): any => {
  const [gameData, setGameData] = useState<any>({
    hint: "",
    solved: [],
    location: "New Game",
    commentary: "...",
    inventory: [], // inventory will contain item keys only, which are compared against the objectData.ts
  });

  const updateGame = (key: string, value: any) => {
    setGameData((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { gameData, updateGame, objectsData };
};
