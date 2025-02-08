"use client";

import { findAllPlayerUseCase } from "@/@core/infra/player-container";
import { CardRoot } from "./Card";

export function List() {
  const players = findAllPlayerUseCase.execute({});

  return (
    <>
      {players.map((player) => (
        <CardRoot key={player.id} {...player} />
      ))}
    </>
  );
}
