import { PlayerGateway } from "../../domain/player-gateway";
import { PlayerID } from "../../domain/player-id";
import { UnitUseCase } from "../unit-use-case";

export class DeletePlayerUseCase implements UnitUseCase<string> {
  private readonly playerGateway: PlayerGateway;

  constructor({ playerGateway }: { playerGateway: PlayerGateway }) {
    this.playerGateway = playerGateway;
  }

  execute(anId: string): void {
    const playerId = PlayerID.with(anId);

    this.playerGateway.delete(playerId);
  }
}
