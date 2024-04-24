'use client';
import Head from "next/head";
import type { Metadata } from "next";
import { BioRhyme } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";
import { useRef } from "react";
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
  const bodyRef = useRef<HTMLElement>(null);
  return (
    <>
      <Head>
        <title>Carlos Arbizu's Portfolio Site</title>
        <meta name="description" content={"Fullstack Developer"} />
      </Head>
      <html lang="en">
        <body className="px-4 max-w-5xl ml-auto mr-auto" >
          <Navigation ref={bodyRef} />
          <main>
            {children}
          </main>
          <Footer/>
          </body>
      </html>
    </>
  );
}
