"use client";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { usePlayerUseCase } from "@/hooks/player-use-case";

type CreatePlayerUseForm = {
  name: string;
};

export function Create() {
  const { createPlayerUseCase } = usePlayerUseCase();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePlayerUseForm>();

  const onSubmit = (submitPlayer: CreatePlayerUseForm) => {
    try {
      const result = createPlayerUseCase.execute({ name: submitPlayer.name });

      toast(`Jogador adicionado a partida: ${result.name}`);
    } catch (error) {
      const errorType = error as Error;
      toast(`Erro: ${errorType.message}`, { type: "error" });
    }
  };

  return (
    <>
      <Form
        className="w-full"
        validationBehavior="native"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("name", { required: "Nome não pode ser vazio." })}
          type="text"
          label="Nome"
          placeholder="Digite nome do jogador"
          errorMessage={errors["name"]?.message as string}
          isRequired
        />
        <Button color="primary" size="md" variant="shadow" type="submit">
          CRIAR
        </Button>
      </Form>
    </>
  );
}
