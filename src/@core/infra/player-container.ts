import { createContainer, asValue, asClass } from "awilix";
import { playerStore } from "./player-store-zustand";
import { PlayerStoreGateway } from "./player-store-gateway";
import { CreatePlayerUseCase } from "../application/create-player-use-case";

export const containerPlayer = createContainer();

containerPlayer.register({
  playerStore: asValue(playerStore),
  playerGateway: asClass(PlayerStoreGateway).singleton(),
  createPlayerUseCase: asClass(CreatePlayerUseCase).singleton(),
});

export const createPlayerUseCase = containerPlayer.resolve<CreatePlayerUseCase>(
  "createPlayerUseCase"
);
