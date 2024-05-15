'use client';
import Head from "next/head";
import { BioRhyme } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";
import {useState } from "react";
import ClassNames from "classnames";
const bioRhyme = BioRhyme({ weight: ["800"], subsets: ["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navOpen, setNavOpen] = useState(false);
  const bodyClass = 
    ClassNames({
      "max-w-5xl": true,
      'overflow-hidden': navOpen,
    });
  return (
    <>
      <Head>
        <title>Carlos Arbizu's Portfolio Site</title>
        <meta name="description" content={"Fullstack Developer"} />
      </Head>
      <html lang="en">
        <body className={bodyClass} >
          <Navigation setNavOpen={setNavOpen}  navOpen={navOpen}/>
          <main className="px-4">
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    </>
  );
}
