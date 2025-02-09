"use client";
import { createContext, PropsWithChildren, useContext } from "react";

import {
  createPlayerUseCase,
  deletePlayerUseCase,
  findAllPlayerUseCase,
  findByIdPlayerUseCase,
  updatePlayerUseCase,
} from "@/@core/infra/player-container";

const useCases = {
  createPlayerUseCase,
  updatePlayerUseCase,
  deletePlayerUseCase,
  findByIdPlayerUseCase,
  findAllPlayerUseCase,
};

const PlayerUseCaseContext = createContext(useCases);

export function PlayerProvider({ children }: PropsWithChildren) {
  return (
    <PlayerUseCaseContext.Provider value={useCases}>
      {children}
    </PlayerUseCaseContext.Provider>
  );
}

export function usePlayerUseCase() {
  return useContext(PlayerUseCaseContext);
}
