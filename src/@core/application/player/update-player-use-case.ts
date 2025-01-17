import { PlayerGateway } from "../../domain/player-gateway";
import { PlayerID } from "../../domain/player-id";
import { UseCase } from "../use-case";

export class UpdatePlayerUseCase implements UseCase<Input, Output> {
  constructor(private readonly playerGateway: PlayerGateway) {}

  execute(anIn: Input): Output {
    const inputId = anIn.id;
    const inputPoints = anIn.points;
    const inputName = anIn.name;

    const result = this.playerGateway.findById(PlayerID.with(inputId));

    if (result) {
      result.updatePoints(inputPoints);
      result.updateName(inputName);

      this.playerGateway.update(result);

      return { id: inputId, name: inputName };
    }

    throw new Error(`Not found player id: ${inputId}`);
  }
}

class Input {
  constructor(public id: string, public name: string, public points: number) {}
}

class Output {
  constructor(public id: string, public name: string) {}
}
