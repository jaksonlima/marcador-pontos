import { PropsWithChildren, useCallback, useState } from "react";
import { Card as CardUI, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import debounce from "lodash.debounce";

import { updatePlayerUseCase } from "@/@core/infra/player-container";

type CardProps = {
  id: string;
  name: string;
  points: number;
};

type CardFromProps = {
  points: number;
};

export function Card(player: CardProps) {
  const [focus, set] = useState(false);

  const { register, setFocus, watch, getValues } = useForm<CardFromProps>({
    values: { points: player.points },
    defaultValues: { points: 0 },
  });

  const points = watch("points");

  const focusStyle = `text-3xl font-bold text-white cursor-pointer ${
    focus && "text-glow-blue"
  }`;

  function updatePlayer() {
    try {
      const name = player.name;

      updatePlayerUseCase.execute({
        id: player.id,
        name: name,
        points: getValues("points"),
      });
      toast(`${name}: Pontos atualizados`);
    } catch (error) {
      const errorType = error as Error;
      toast(`Erro: ${errorType.message}`, { type: "error" });
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce(() => {
      updatePlayer();
    }, 600),
    []
  );

  const handleBlur = () => {
    set(false);
  };

  return (
    <div
      tabIndex={0}
      onClick={() => {
        setFocus("points");
        set(true);
      }}
    >
      <div className="relative">
        <input
          {...register("points", {
            onChange: handleChange,
            onBlur: handleBlur,
          })}
          type="text"
          className="opacity-0 inset-0 absolute"
        />
      </div>

      <CardUI
        className={`max-w-[14rem] max-h-[20rem] w-56 h-80 
            bg-[url('/background-playing.webp')] bg-cover bg-center !bg-black bg-opacity-50`}
      >
        <CardHeader>
          <span className={focusStyle}>{points}</span>
        </CardHeader>
        <CardBody className="text-center justify-center">
          <span className="text-4xl font-extrabold text-white">
            {player.name}
          </span>
        </CardBody>
        <CardFooter className="flex flex-col items-end rotate-180 scale-x-[-1]">
          <span className={focusStyle}>{points}</span>
        </CardFooter>
      </CardUI>
    </div>
  );
}

function CardBorder({ children }: PropsWithChildren) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [shadow, setShadow] = useState("0 0 20px rgba(0, 0, 0, 0.2)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 30;
    const y = ((clientY - top) / height - 0.5) * -30;

    const shadowX = ((clientX - left) / width - 0.5) * 20;
    const shadowY = ((clientY - top) / height - 0.5) * 20;
    setShadow(`${shadowX}px ${shadowY}px 15px rgba(255, 215, 0, 0.7)`);

    setRotate({ x, y });
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
    setShadow("0 0 20px rgba(0, 0, 0, 0.2)");
  };

  return (
    <div
      className="rounded-2xl cursor-pointer"
      style={{
        transform: `perspective(800px) rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
        boxShadow: shadow,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
    >
      <div className="border-1 border-yellow-500 rounded-2xl shadow-[0_0_5px_#FFD700]">
        {children}
      </div>
    </div>
  );
}

export function CardRoot(player: CardProps) {
  return (
    <CardBorder>
      <Card {...player} />
    </CardBorder>
  );
}
