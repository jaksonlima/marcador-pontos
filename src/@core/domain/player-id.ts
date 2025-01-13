import { v4 as uuidv4 } from "uuid";

export class PlayerID {
  constructor(private readonly value: string) {
    if (!value || !this.isValidUUID(value)) {
      throw new Error("UUID inválido");
    }
  }

  static create(): PlayerID {
    return new PlayerID(uuidv4().toString());
  }

  static with(value: string) {
    return new PlayerID(value);
  }

  getValue(): string {
    return this.value;
  }

  private isValidUUID(uuid: string): boolean {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

  equals(id: PlayerID) {
    return this.getValue() === id.getValue();
  }
}
