import { PropsWithChildren } from "react";

import { PlayerProvider } from "./player-use-case";

export function UseCaseProvider({ children }: PropsWithChildren) {
  return (
    <>
      <PlayerProvider>{children}</PlayerProvider>
    </>
  );
}
