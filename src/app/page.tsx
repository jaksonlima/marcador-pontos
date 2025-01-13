import { Counter } from "@/components/Players/Counter";
import { Create } from "@/components/Players/Create";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <>
        <ThemeSwitcher />
      </>
      <>
        <Counter />
      </>
      <>
        <Create />
      </>
    </>
  );
}
