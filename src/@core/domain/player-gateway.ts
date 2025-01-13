import { Player } from "./player";
import { PlayerID } from "./player-id";

export interface PlayerGateway {
  create(player: Player): Player;
  update(player: Player): Player;
  delete(playerId: PlayerID): void;
  find(playerId: PlayerID): Player;
}
