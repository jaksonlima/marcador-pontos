"use client";

import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { createPlayerUseCase } from "@/@core/infra/player-container";

type CreatePlayerUseForm = {
  name: string;
};

export function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePlayerUseForm>();

  const onSubmit = (submitPlayer: CreatePlayerUseForm) => {
    const result = createPlayerUseCase.execute({ name: submitPlayer.name });

    toast(`Jogador adicionado a partida: ${result.name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button onClick={() => {}}>delete</button>
        <div className="flex flex-col">
          <Input
            {...register("name", { required: "Nome não pode ser vazio." })}
            type="text"
            label="Nome"
            placeholder="Digite nome do jogador"
            errorMessage={errors["name"]?.message as string}
            isRequired
          />
          <Button color="primary" size="md" variant="shadow" type="submit">
            Criar
          </Button>
        </div>
      </form>
    </>
  );
}
