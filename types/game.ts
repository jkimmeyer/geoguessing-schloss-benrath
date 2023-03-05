export type GameContextType = {
  game: GameType,
  setGame: (game: GameType) => void;
}

export interface GameType {
  score: number,
  foundObjects: number,
  duration: string,
}
