import { updatePlayerUseCase } from "@/@core/infra/player-container";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type UpdatePlayerUseForm = {
  name: string;
  points: number;
};

export function Update() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePlayerUseForm>();

  const onSubmit = (submitPlayer: UpdatePlayerUseForm) => {
    try {
      const result = updatePlayerUseCase.execute({
        id: router.query.id as string,
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
          <Input
            {...register("points", { required: "Pontos não pode ser vazio." })}
            type="text"
            label="Pontos"
            placeholder="Digite a quantidade"
            errorMessage={errors["points"]?.message as string}
            isRequired
          />
          <Button color="primary" size="md" variant="shadow" type="submit">
            Atualizar
          </Button>
        </div>
      </form>
    </>
  );
}
