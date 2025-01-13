import { PlayerID } from "./player-id";

export class Player {
  private constructor(
    private readonly id: PlayerID,
    private readonly name: string,
    private points: number
  ) {
    this.isValid();
  }

  static create(name: string): Player {
    const id = PlayerID.create();
    const startPoint = 0;

    return new Player(id, name, startPoint);
  }

  updatePoints(points: number): Player {
    this.points += points;

    return this;
  }

  getId(): PlayerID {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPoints(): number {
    return this.points;
  }

  private isValid() {
    if (!this.id) {
      throw new Error(`ID should not be null`);
    }

    if (!this.name) {
      throw new Error(`Name should not be null`);
    }

    if (this.points < 0) {
      throw new Error(`Points cannot be less than zero`);
    }
  }
}
