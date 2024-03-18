import type { Metadata } from "next";
import { Titan_One } from "next/font/google";
import "./globals.css";

const titan = Titan_One({
  weight:["400"],
  subsets:["latin"]
 });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Meu portfolio de desenvolvedor Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={titan.className}>{children}</body>
    </html>
  );
}
