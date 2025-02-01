import { Pack } from "@/feature/Card/Pack";

export default function Home() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {Array.from({ length: 2 }, () => (
        <>
          <Pack />
        </>
      ))}
    </div>
  );
}
