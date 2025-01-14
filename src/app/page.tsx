import { Create } from "@/feature/Players/Create";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <>
        <ThemeSwitcher />
      </>

      <>
        <Create />
      </>
    </>
  );
}
