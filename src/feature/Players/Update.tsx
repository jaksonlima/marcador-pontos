"use client";
import { Button, Form, Input } from "@heroui/react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  updatePlayerUseCase,
  findByIdPlayerUseCase,
} from "@/@core/infra/player-container";

type UpdatePlayerUseForm = {
  name: string;
  points: number;
};

export function Update() {
  const params = useParams();
  const playerId = params.id as string;

  const player = findByIdPlayerUseCase.execute(playerId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePlayerUseForm>({
    values: { name: player.name, points: player.points },
  });

  const onSubmit = (submitPlayer: UpdatePlayerUseForm) => {
    try {
      const result = updatePlayerUseCase.execute({
        id: params.id as string,
        name: submitPlayer.name,
        points: submitPlayer.points,
      });

      toast(`Jogador atualizado: ${result.name}`);
    } catch (error) {
      const errorType = error as Error;
      toast(`Erro: ${errorType.message}`, { type: "error" });
    }
  };

  return (
    <>
      <Form validationBehavior="native" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", { required: "Nome não pode ser vazio." })}
          type="text"
          label="Nome"
          placeholder="Digite nome do jogador"
          errorMessage={errors["name"]?.message as string}
          isRequired
        />
        <Input
          {...register("points", { required: "Pontos não pode ser vazio." })}
          type="number"
          label="Pontos"
          placeholder="Digite a quantidade"
          errorMessage={errors["points"]?.message as string}
          isRequired
        />
        <Button color="primary" size="md" variant="shadow" type="submit">
          ATUALIZAR
        </Button>
      </Form>
    </>
  );
}
