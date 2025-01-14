import { Player } from "./player";
import { PlayerID } from "./player-id";
import { PlayerQuery } from "./player-query";

export interface PlayerGateway {
  create(player: Player): Player;
  update(player: Player): Player;
  delete(playerId: PlayerID): void;
  findById(playerId: PlayerID): Player | undefined;
  findAll(aQuery: PlayerQuery): Player[];
}
