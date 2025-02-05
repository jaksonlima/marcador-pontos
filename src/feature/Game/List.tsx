"use client";

import { findAllPlayerUseCase } from "@/@core/infra/player-container";
import { Card } from "./Card";

export function List() {
  const players = findAllPlayerUseCase.execute({});

  return (
    <>
      {players.map((player) => (
        <Card
          key={player.id}
          id={player.id}
          name={player.name}
          points={player.points}
        />
      ))}
    </>
  );
}
