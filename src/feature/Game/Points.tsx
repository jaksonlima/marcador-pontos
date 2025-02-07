import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import debounce from "lodash.debounce";
import { toast } from "react-toastify";

import { CardFormProps } from "./Card";
import { updatePlayerUseCase } from "@/@core/infra/player-container";

export function Points() {
  const { register, getValues } = useFormContext<CardFormProps>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce(() => {
      updatePlayer();
    }, 600),
    []
  );

  function updatePlayer() {
    try {
      const name = getValues("name");

      updatePlayerUseCase.execute({
        id: getValues("id"),
        points: getValues("points"),
        name: name,
      });

      toast(`${name}: Pontos atualizados`);
    } catch (error) {
      const errorType = error as Error;
      toast(`Erro: ${errorType.message}`, { type: "error" });
    }
  }

  return (
    <div className="relative">
      <input
        {...register("points", {
          onChange: handleChange,
        })}
        type="text"
        className="opacity-0 inset-0 absolute"
      />
    </div>
  );
}
