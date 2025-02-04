import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

interface PackProps {
  name: string;
  points: number;
}

export function Pack({ name, points }: PackProps) {
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
    <>
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
          <Card className="max-w-[14rem] max-h-[20rem] w-56 h-80">
            <CardHeader className="flex flex-col items-start">
              <span className={`text-2xl font-bold cursor-pointer`}>
                {points}
              </span>
              <Heart color="#ff0000" strokeWidth={3} />
            </CardHeader>
            <CardBody className="text-center justify-center text-3xl font-extrabold ">
              {name}
            </CardBody>
            <CardFooter className="flex flex-col items-end rotate-180 scale-x-[-1]">
              <div className="flex flex-col items-center">
                <span className={`text-2xl font-bold cursor-pointer`}>
                  {points}
                </span>
                <Star color="#ff0000" strokeWidth={3} />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
