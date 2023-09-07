import React, { useState, useEffect } from "react";
import "./App.css";
import { useGame } from "./hooks/useGame";
import { Landing } from "./components/Landing";
import { Inventory } from "./components/Inventory";
import { Commentary } from "./components/Commentary";

function App() {
  const { gameData: game, updateGame } = useGame();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (game != undefined) {
      setIsLoading(false);
    }
    console.log(game)
  }, [game]);

  return (
    <>
      {!isLoading && (
        <div className="App min-w-screen min-h-screen max-h-screen max-w-screen bg-purple-950">
          <Landing game={game} updateGame={updateGame} />
          <Inventory game={game} updateGame={updateGame} />
          <Commentary game={game} updateGame={updateGame} />
        </div>
      )}
    </>
  );
}

export default App;
