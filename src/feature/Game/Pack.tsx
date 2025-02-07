import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { useFormContext } from "react-hook-form";

import { CardFormProps } from "./Card";

export function PackRoot() {
  return (
    <Pack>
      <PackItem />
    </Pack>
  );
}

function Pack({ children }: PropsWithChildren) {
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

function PackItem() {
  const [focus, set] = useState(false);
  const { watch, setFocus } = useFormContext<CardFormProps>();

  const [name, points] = watch(["name", "points"]);

  const focusStyle = `text-3xl font-bold text-white cursor-pointer ${
    focus && "text-glow-blue"
  }`;

  const handleFocus = () => {
    console.log("A div ganhou o foco!", { name });
    set(true);
  };
  const handleBlur = () => {
    console.log("A div perdeu o foco!", { name });
    set(false);
  };

  return (
    <div tabIndex={0} onClick={handleFocus} onBlur={handleBlur}>
      <Card
        className={`
        max-w-[14rem] max-h-[20rem] w-56 h-80 
        bg-[url('/background-playing.webp')] bg-cover bg-center !bg-black bg-opacity-50
        `}
      >
        <CardHeader>
          <span className={focusStyle}>{points}</span>
        </CardHeader>
        <CardBody className="text-center justify-center">
          <span className="text-4xl font-extrabold text-white">{name}</span>
        </CardBody>
        <CardFooter className="flex flex-col items-end rotate-180 scale-x-[-1]">
          <span className={focusStyle}>{points}</span>
        </CardFooter>
      </Card>
    </div>
  );
}
