"use client";
import { Container } from "@/feature/Players/Container";
import { Create } from "@/feature/Players/Create";
import { List } from "@/feature/Players/List";

export default function Page() {
  return (
    <Container>
      <Create />
      <List />
    </Container>
  );
}
