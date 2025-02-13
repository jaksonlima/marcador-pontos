import "@/styles/globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { AppNavbar } from "@/components/Navbar";
import { AppNextUIProvider } from "@/configuration/NextUIProvider";
import { AppToastContainer } from "@/configuration/ToastContainer";
import { UseCaseProvider } from "@/hooks/provider-use-case";
import { Layout } from "@/components/Layout";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcador de Pontos - Game",
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
          <AppToastContainer />
          <UseCaseProvider>
            <Layout>{children}</Layout>
          </UseCaseProvider>
        </AppNextUIProvider>
      </body>
    </html>
  );
}
