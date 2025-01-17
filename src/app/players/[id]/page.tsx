import { Container } from "@/feature/Players/Container";
import { List } from "@/feature/Players/List";
import { Update } from "@/feature/Players/Update";

export default function Page() {
  return (
    <>
      <Container>
        <Update />
        <List />
      </Container>
    </>
  );
}
