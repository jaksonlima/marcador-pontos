import { Card } from "@/feature/Game/Card";

export default function Home() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {Array.from({ length: 2 }, (_, i) => (
        <>
          <Card key={i} />
        </>
      ))}
    </div>
  );
}
