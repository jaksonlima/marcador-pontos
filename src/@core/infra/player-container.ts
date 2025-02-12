import { createContainer, asValue, asClass } from "awilix";

import { playerStore } from "./player-store-zustand";
import { PlayerStoreGateway } from "./player-store-gateway";
import { CreatePlayerUseCase } from "../application/player/create-player-use-case";
import { DeletePlayerUseCase } from "../application/player/delete-player-use-case";
import { UpdatePlayerUseCase } from "../application/player/update-player-use-case";
import { FindByIdPlayerUseCase } from "../application/player/find-by-id-player-use-case";
import { FindAllPlayerUseCase } from "../application/player/find-all-player-use-case";

const container = createContainer();

container.register({
  playerStore: asValue(playerStore.getState()),
  playerGateway: asClass(PlayerStoreGateway).singleton(),
  createPlayerUseCase: asClass(CreatePlayerUseCase).singleton(),
  updatePlayerUseCase: asClass(UpdatePlayerUseCase).singleton(),
  deletePlayerUseCase: asClass(DeletePlayerUseCase).singleton(),
  findByIdPlayerUseCase: asClass(FindByIdPlayerUseCase).singleton(),
  findAllPlayerUseCase: asClass(FindAllPlayerUseCase).singleton(),
});

export const createPlayerUseCase = container.resolve<CreatePlayerUseCase>(
  "createPlayerUseCase"
);

export const updatePlayerUseCase = container.resolve<UpdatePlayerUseCase>(
  "updatePlayerUseCase"
);

export const deletePlayerUseCase = container.resolve<DeletePlayerUseCase>(
  "deletePlayerUseCase"
);

export const findByIdPlayerUseCase = container.resolve<FindByIdPlayerUseCase>(
  "findByIdPlayerUseCase"
);

export const findAllPlayerUseCase = container.resolve<FindAllPlayerUseCase>(
  "findAllPlayerUseCase"
);
