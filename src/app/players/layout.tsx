import { Bread } from "@/feature/Players/Bread";
import { Container } from "@/feature/Players/Container";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Bread />
      <main>{children}</main>
    </Container>
  );
}
