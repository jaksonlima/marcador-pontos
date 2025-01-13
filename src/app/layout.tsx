import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppNextUIProvider } from "@/configuration/NextUIProvider";

import "./globals.css";
import { AppNavbar } from "@/components/Navbar";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oito Louco V2",
  description: "Created By Jakson Lima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="pt-br">
      <body className={`${roboto.className} antialiased`}>
        <AppNextUIProvider>
          <AppNavbar />
          {children}
        </AppNextUIProvider>
      </body>
    </html>
  );
}
