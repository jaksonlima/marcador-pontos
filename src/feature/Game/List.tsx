"use client";

import { CardRoot } from "./Card";
import { usePlayerUseCase } from "@/hooks/player-use-case";

export function List() {
  const { findAllPlayerUseCase } = usePlayerUseCase();

  const players = findAllPlayerUseCase.execute({});

  return (
    <>
      {players.map((player) => (
        <CardRoot key={player.id} {...player} />
      ))}
    </>
  );
}
