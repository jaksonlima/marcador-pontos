import { PlayerGateway } from "../../domain/player-gateway";
import { PlayerID } from "../../domain/player-id";
import { UseCase } from "../use-case";

export class UpdatePlayerUseCase implements UseCase<Input, Output> {
  constructor(private readonly playerGateway: PlayerGateway) {}

  execute(anIn: Input): Output {
    const inputId = anIn.id;
    const inputPoints = anIn.points;

    const result = this.playerGateway.findById(PlayerID.with(inputId));

    if (result) {
      result.updatePoints(inputPoints);

      return { id: result.getId().getValue() };
    }

    throw new Error(`Not found player id: ${inputId}`);
  }
}

class Input {
  constructor(public id: string, public points: number) {}
}

class Output {
  constructor(public id: string) {}
}
