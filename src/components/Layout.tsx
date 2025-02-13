import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return <div className="container mx-auto px-4">{children}</div>;
}
