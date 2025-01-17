import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="place-items-center">
      <div className="flex flex-col gap-4 w-full max-w-xl">{children}</div>
    </div>
  );
}
