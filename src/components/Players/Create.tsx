"use client";

import { Player } from "@/@core/domain/player";
import useStore from "@/hooks/useStore";
import { PlayerStoreGateway } from "@/@core/infra/player-store-gateway";
import { playerStore } from "@/@core/infra/player-store-zustand";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import {
  containerPlayer,
  createPlayerUseCase,
  playerGateway,
} from "@/@core/infra/player-container";
import { PlayerGateway } from "@/@core/domain/player-gateway";

type PlayerUseForm = {
  name: string;
};

export function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlayerUseForm>();

  // const data = useStore(usePlayerStore, (state) => state);

  // console.log({ data });

  // const playerGateway = new PlayerStoreGateway(data);

  const onSubmit = (submitPlayer: PlayerUseForm) => {
    // const player = Player.create(submitPlayer.name);
    const output = createPlayerUseCase.execute({ name: "test" });

    console.log({ output });
    // playerGateway.create(player);
    // containerPlayer.resolve<PlayerGateway>("playerGateway").create(player);
    // playerGateway.create(player);
    // data?.addABear();
    // data?.a
    // data?.addPlayer();
    // playerGateway.create(player);
    // console.log(playerStore.getState().age);
    // console.log(playerStore.getState().create(player));
    // console.log(playerStore.getState().age);
  };

  // console.log(playerStore.getState().players);

  // console.log(containerPlayer.resolve("playerStore"));

  // console.log(containerPlayer.resolve<PlayerGateway>("playerGateway").create());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
  );
}
