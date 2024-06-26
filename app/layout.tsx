import "./globals.css";
import "./fonts.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./global/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Porfolio",
  description: "my work presented wtf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
