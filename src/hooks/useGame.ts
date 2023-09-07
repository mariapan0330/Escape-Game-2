import { useState, useEffect } from "react";

export const useGame = (): any => {
  const [gameData, setGameData] = useState<any>({
    hint: "",
    solved: [],
    location: "New Game",
    commentary: "...",
    inventory: [
      {}
    ],
  });

  const updateGame = (key: string, value: any) => {
    setGameData((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { gameData, updateGame };
};
