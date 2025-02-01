import { capitalize } from "@/utils/utils";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Heart, Star } from "lucide-react";

export function Pack() {
  const points = 90;

  return (
    <Card className="max-w-[14rem] max-h-[20rem] w-56 h-80">
      <CardHeader className="flex items-start text-2xl font-bold">
        <div className="flex flex-col items-center">
          {points}
          <Heart color="#ff0000" strokeWidth={3} />
        </div>
      </CardHeader>
      <CardBody className="text-center justify-center text-3xl font-extrabold ">
        {capitalize("jakson")}
      </CardBody>
      <CardFooter className="flex flex-col items-end text-2xl font-bold rotate-180 scale-x-[-1]">
        <div className="flex flex-col items-center">
          {points}
          <Star color="#ff0000" strokeWidth={3} />
        </div>
      </CardFooter>
    </Card>
  );
}
