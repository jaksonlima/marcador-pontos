import { Player } from "./player";
import { PlayerID } from "./player-id";

export class PlayerFinished {
  constructor(readonly players: Player[], readonly maxPoint: number) {}

  finished(player: Player): boolean {
    return player.getPoints() >= this.maxPoint;
  }

  addPoints(id: PlayerID, point: number): boolean {
    const player = this.players.find((player) => player.getId().equals(id));

    if (player) {
      return this.finished(player.updatePoints(point));
    }

    return false;
  }
}
