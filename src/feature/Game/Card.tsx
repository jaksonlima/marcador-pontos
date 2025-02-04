"use client";
import { useState } from "react";
import { Pack } from "./Pack";
import { Points } from "./Points";
import { capitalize } from "@/utils/utils";

export function Card() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div onClick={() => setIsFocused(!isFocused)}>
      <Pack name={capitalize("Jack")}>
        <Points />
      </Pack>
    </div>
  );
}
