import { useForm } from "react-hook-form";

type Points = {
  isFocused: boolean;
  onValue: (v: number) => void;
};

export function Points() {
  const { register, setFocus, watch } = useForm({
    defaultValues: { points: 0 },
  });

  return (
    <div onClick={() => setFocus("points")}>
      <span
        className={`text-2xl font-bold cursor-pointer ${
          true && "text-green-500"
        }`}
      >
        {watch("points")}
      </span>
      <div className="relative">
        <input
          {...register("points")}
          type="text"
          className="opacity-0 inset-0 absolute"
        />
      </div>
    </div>
  );
}
