"use client";
import { RadioApp } from "@/components/Radio";
import { List } from "@/feature/Game/List";

export default function Home() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {/* <List /> */}
      <RadioApp />
    </div>
  );
}
