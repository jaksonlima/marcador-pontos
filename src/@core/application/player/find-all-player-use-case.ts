import { PlayerQuery } from "@/@core/domain/player-query";
import { PlayerGateway } from "../../domain/player-gateway";
import { UseCase } from "../use-case";

export class FindAllPlayerUseCase implements UseCase<PlayerQuery, Output[]> {
  constructor(private readonly playerGateway: PlayerGateway) {}

  execute(aQuery: PlayerQuery): Output[] {
    const result = this.playerGateway.findAll(aQuery);

    return result.map((player) => ({
      id: player.getId().getValue(),
      name: player.getName(),
      points: player.getPoints(),
    }));
  }
}

class Output {
  constructor(public id: string, public name: string, public points: number) {}
}
