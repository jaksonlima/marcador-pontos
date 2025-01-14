import { PlayerGateway } from "../../domain/player-gateway";
import { PlayerID } from "../../domain/player-id";
import { UseCase } from "../use-case";

export class FindByIdPlayerUseCase implements UseCase<string, Output> {
  constructor(private readonly playerGateway: PlayerGateway) {}

  execute(anId: string): Output {
    const result = this.playerGateway.findById(PlayerID.with(anId));

    if (result) {
      return {
        id: result.getId().getValue(),
        name: result.getName(),
        points: result.getPoints(),
      };
    }

    throw new Error(`Not found player id: ${anId}`);
  }
}

class Output {
  constructor(public id: string, public name: string, public points: number) {}
}
