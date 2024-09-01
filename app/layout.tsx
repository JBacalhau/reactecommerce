import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React e-Commerce",
  description: "Uma aplicação web para uma startup de e-commerce. O projeto inclui uma página principal com cards de produtos, carrinho de compras e área de login, todos responsivos para diversos dispositivos móveis. O carrinho de compras exibe a quantidade de itens e permite a visualização detalhada dos produtos ao ser clicado. A aplicação foi desenvolvida com React, Next.js, TypeScript e Tailwind CSS.  ",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>

    </html>

  );
}
