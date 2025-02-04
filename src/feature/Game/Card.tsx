"use client";
import { useState } from "react";
import { Pack } from "./Pack";
import { Points } from "./Points";
import { capitalize } from "@/utils/utils";

export function Card() {
  const [isFocused, setIsFocused] = useState(false);
  const [points, setPoints] = useState(0);

  console.log({ isFocused, points });

  return (
    <div onClick={() => setIsFocused(!isFocused)}>
      <Pack name={capitalize("Jack")} points={points} />
      <Points isFocused={isFocused} onChange={setPoints} />
    </div>
  );
}
