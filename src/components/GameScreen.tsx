import React, { useState, useEffect } from "react";
import { GameOnlyProp } from "../types/types";
import { Landing } from "./Landing";
import { FrontGate } from "./FrontGate";

export const GameScreen: React.FC<GameOnlyProp> = ({ game, updateGame }) => {
  const [currentLocation, setCurrentLocation] =
    useState<React.ReactNode>(
      <Landing game={game} updateGame={updateGame} />
    );
  useEffect(() => {
    switch (game.location) {
      case "New Game":
        setCurrentLocation(<Landing game={game} updateGame={updateGame} />);
        break;
      case "Front Gate":
        setCurrentLocation(<FrontGate game={game} updateGame={updateGame} />);
        break;
    }
    console.log(game.location);
  }, [game.location]);

  return <div className="">{currentLocation}</div>;
};
