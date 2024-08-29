import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React e-Commerce",
  description: "Projeto foi desenvolvido em aula uzando as tecnologias: React; NextJS; TypeScript; tailwindcss",
  openGraph: {

    images: ['https://reactecommerce-seven.vercel.app/src/app/imagemMeta.jpg'],
    authors: ['João Bacalhau']
  }
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
