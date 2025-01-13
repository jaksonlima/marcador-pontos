import { createContainer, asValue, asClass } from "awilix";
import { playerStore } from "./player-store-zustand";
import { PlayerStoreGateway } from "./player-store-gateway";
import { CreatePlayerUseCase } from "../application/create-player-use-case";

export const containerPlayer = createContainer();

containerPlayer.register("playerStore", asValue(playerStore.getState()));

containerPlayer.register(
  "playerGateway",
  asClass(PlayerStoreGateway).classic().singleton()
);

containerPlayer.register(
  "createPlayerUseCase",
  asClass(CreatePlayerUseCase).classic().singleton()
);

export const createPlayerUseCase = containerPlayer.resolve<CreatePlayerUseCase>(
  "createPlayerUseCase"
);
