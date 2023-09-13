import React, { useState, useEffect } from "react";
import "./App.css";
import { useGame } from "./hooks/useGame";
import { Inventory } from "./components/Inventory";
import { Commentary } from "./components/Commentary";
import { GameScreen } from "./components/GameScreen";

function App() {
  const { gameData: game, updateGame, objectsData } = useGame();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (game !== undefined && objectsData) {
      setIsLoading(false);
    }
    console.log(game);
    console.log(objectsData);
  }, [game]);

  return (
    <>
      {!isLoading && (
        <div className="bg-gradient-to-t from-purple-950 to-orange-700">
          <div className="aspect-[16/9] left-1/2 -translate-x-1/2 App relative min-w-screen min-h-screen max-h-screen max-w-screen">
            <Commentary game={game} updateGame={updateGame} objectsData={objectsData} />
            <Inventory game={game} updateGame={updateGame} objectsData={objectsData} />
            <GameScreen game={game} updateGame={updateGame} objectsData={objectsData} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
