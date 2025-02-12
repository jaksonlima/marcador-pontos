import { PlayerGateway } from "../../domain/player-gateway";
import { PlayerID } from "../../domain/player-id";
import { UseCase } from "../use-case";

export class UpdatePlayerUseCase implements UseCase<Input, Output> {
  private readonly playerGateway: PlayerGateway;

  constructor({ playerGateway }: { playerGateway: PlayerGateway }) {
    this.playerGateway = playerGateway;
  }

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

    throw new Error(`Jogador não encontrado id: ${inputId}`);
  }
}

class Input {
  constructor(public id: string, public name: string, public points: number) {}
}

class Output {
  constructor(public id: string, public name: string) {}
}
