export interface UseCase<IN, OUT> {
  execute(anIn: IN): OUT;
}
