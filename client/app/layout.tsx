import type { Metadata } from "next";
import { BioRhyme } from "next/font/google";
import "./globals.css";

const bioRhyme = BioRhyme({ weight: ["800"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Carlos Arbizu's Portfolio Site",
  description: "Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
