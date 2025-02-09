import { createContext, useContext } from "react";

const PlayerUseCaseContext = createContext({});

export function PlayerProvider() {
  return (
    <PlayerUseCaseContext.Provider value={{}}></PlayerUseCaseContext.Provider>
  );
}

export function usePlayerUseCase() {
  return useContext(PlayerUseCaseContext);
}
