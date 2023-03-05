import { createContext, useState } from "react";
import { UserContextType, UserType } from "../types";

export const UserContext = createContext<UserContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const UserProvider:React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserType | null>({ playerName: '' });

  const hasPlayerName = ():boolean => {
    return currentUser?.playerName !== "" && currentUser?.playerName !== null
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, hasPlayerName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
