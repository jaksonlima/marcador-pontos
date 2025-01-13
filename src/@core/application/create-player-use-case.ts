import { Player } from "../domain/player";
import { PlayerGateway } from "../domain/player-gateway";
import { UseCase } from "./use-case";

export class CreatePlayerUseCase implements UseCase<Input, Output> {
  constructor(private playerGateway: PlayerGateway) {}

  execute(anIn: Input): Output {
    const inputName = anIn.name;

    const player = Player.create(inputName);

    this.playerGateway.create(player);

    return {
      id: player.getId().getValue(),
      name: player.getName(),
      points: player.getPoints(),
    };
  }
}

class Input {
  constructor(public name: string) {}
}

class Output {
  constructor(public id: string, public name: string, public points: number) {}
}
