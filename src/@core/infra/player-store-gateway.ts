import { Player } from "@/@core/domain/player";
import { PlayerGateway } from "@/@core/domain/player-gateway";
import { PlayerID } from "@/@core/domain/player-id";
import { PlayerStore, PlayerZustand } from "./player-store-zustand";
import { PlayerQuery } from "../domain/player-query";

export class PlayerStoreGateway implements PlayerGateway {
  constructor(private playerStore: PlayerStore) {}

  create(player: Player): Player {
    this.playerStore.create(PlayerZustand.from(player));
    return player;
  }

  update(player: Player): Player {
    this.playerStore.update(PlayerZustand.from(player));
    return player;
  }

  delete(playerId: PlayerID): void {
    this.playerStore.delete(playerId.getValue());
  }

  findById(playerId: PlayerID): Player | undefined {
    const result = this.playerStore.findById(playerId.getValue());

    if (result) {
      return result.toAggregate();
    }
  }

  findAll(aQuery: PlayerQuery): Player[] {
    const result = this.playerStore.findAll(aQuery.name);

    if (result) {
      return result.map((player) => player.toAggregate());
    }

    return [];
  }
}
