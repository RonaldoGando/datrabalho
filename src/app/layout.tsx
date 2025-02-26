import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
  
       <Header/>
      
        {children}
        <footer className="container py-8 text-gray-500">
          Dá Trabalho &copy; 2024 Todos os direitos reservados 
        </footer>
        </body>
    </html>
  );
}
