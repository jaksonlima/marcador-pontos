export interface UnitUseCase<IN> {
  execute(anIn: IN): void;
}
