import { Player } from "@/@core/domain/player";
import { PlayerGateway } from "@/@core/domain/player-gateway";
import { PlayerID } from "@/@core/domain/player-id";
import { PlayerStore } from "./player-store-zustand";

export class PlayerStoreGateway implements PlayerGateway {
  constructor(private playerStore: PlayerStore) {}

  create(player: Player): Player {
    this.playerStore.create(player);
    return player;
  }

  update(player: Player): Player {
    throw new Error("Method not implemented.");
  }
  delete(playerId: PlayerID): void {
    throw new Error("Method not implemented.");
  }
  find(playerId: PlayerID): Player {
    throw new Error("Method not implemented.");
  }
}
