import "@/styles/globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { AppNavbar } from "@/components/Navbar";
import { AppNextUIProvider } from "@/configuration/NextUIProvider";
import { AppToastContainer } from "@/configuration/ToastContainer";

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
          <AppToastContainer />
          {children}
        </AppNextUIProvider>
      </body>
    </html>
  );
}
