import { useEffect } from "react";
import { useForm } from "react-hook-form";

type PointsProps = {
  isFocused?: boolean;
  onChange?: (v: number) => void;
};

export function Points({ isFocused, onChange }: PointsProps) {
  const { register, setFocus, watch } = useForm({
    defaultValues: { points: 0 },
  });

  useEffect(() => {
    onChange?.(watch("points"));
  }, [onChange, watch, watch("points")]);

  useEffect(() => {
    if (isFocused) {
      setFocus("points");
    }
  }, [isFocused, setFocus]);

  console.log(isFocused);

  return (
    <>
      <div className="relative">
        <input
          {...register("points")}
          type="text"
          className="opacity-0 inset-0 absolute"
        />
      </div>
    </>
  );
}
