import { FormProvider, useForm } from "react-hook-form";

import { PackRoot } from "./Pack";
import { Points } from "./Points";
import { capitalize } from "@/utils/utils";

export type CardFormProps = {
  id: string;
  name: string;
  points: number;
};

type CardProps = {
  id: string;
  name: string;
  points: number;
};

export function Card({ id, name, points }: CardProps) {
  const methods = useForm<CardFormProps>({
    values: { id: id, name: capitalize(name), points: points },
  });

  return (
    <FormProvider {...methods}>
      <div onFocus={() => methods.setFocus("points")}>
        <PackRoot />
        <Points />
      </div>
    </FormProvider>
  );
}
