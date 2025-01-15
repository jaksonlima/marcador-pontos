import { PlayerID } from "./player-id";

export class Player {
  private constructor(
    private readonly id: PlayerID,
    private name: string,
    private points: number
  ) {
    this.isValid();
  }

  static create(name: string): Player {
    const id = PlayerID.create();
    const startPoint = 0;

    return new Player(id, name, startPoint);
  }

  static with(id: PlayerID, name: string, points: number): Player {
    return new Player(id, name, points);
  }

  updatePoints(points: number): Player {
    this.points += points;

    this.isValid();

    return this;
  }

  updateName(name: string): Player {
    this.name = name;

    this.isValid();

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
