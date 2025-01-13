import { Player } from "@/@core/domain/player";
import { createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface PlayerStore {
  create: (player: Player) => void;
}

interface Store {
  players: Player[];
}

export const playerStore = createStore<Store & PlayerStore>()(
  persist(
    (set) => ({
      players: [],
      create: (player: Player) =>
        set((state) => {
          const players = state.players;
          players.push(player);

          return { players: players };
        }),
    }),
    {
      name: "players",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
