export type UserContextType = {
  currentUser: UserType | null,
  setCurrentUser: (currentUser: UserType) => void;
  hasPlayerName: () => boolean;
}

export interface UserType {
  playerName: string,
}
