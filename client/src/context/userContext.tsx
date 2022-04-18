import { createContext, useCallback, useState } from "react";

type Rating = {
  id: number;
  valuidate: number;
};

type UserContextType = {
  name: string;
  ratings: Rating[];
  onNewRantings: (id: number, valuidate: number) => void;
  onNewName: (name: string) => void;
};

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: any) {
  const [name, setName] = useState<string>("");
  const [ratings, setRatings] = useState<Rating[]>([]);

  const onNewRantings = useCallback((id: number, valuidate: number) => {
    const rating = {
      id,
      valuidate,
    };
    setRatings((state) => [...state, rating]);
  }, []);
  const onNewName = useCallback((name: string) => {
    setName(name);
  }, []);
  return (
    <UserContext.Provider
      value={{
        name,
        ratings,
        onNewRantings,
        onNewName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
