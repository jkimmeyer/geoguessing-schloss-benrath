import { createContext, useState } from "react";
import { GameContextType, GameType } from "../types";

export const GameContext = createContext<GameContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const GameProvider: React.FC<Props> = ({ children }) => {
  const [game, setGame] = useState<GameType>({score: 0, foundObjects: 0, duration: ''});

  return (
    <GameContext.Provider value={{ game, setGame}}>
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
