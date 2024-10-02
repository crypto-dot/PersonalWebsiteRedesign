'use client';
import Head from "next/head";
import { Playfair_Display, Roboto} from "next/font/google";
import "./globals.css";
import Navigation from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";
import {useState } from "react";
import ClassNames from "classnames";
const playfair = Playfair_Display({ weight: ["900"], subsets: ["latin"], fallback: ['serif']});
const roboto = Roboto({ weight: ["400"], subsets: ["latin"], fallback: ['sans-serif']});

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
        <title>Carlos's Portfolio Site</title>
        <meta name="description" content={"Portfolio site of Fullstack Developer"} />
      </Head>
      <html lang="en">
        <body className={bodyClass} >
          <Navigation setNavOpen={setNavOpen}  navOpen={navOpen}/>
          <main className="px-10 pt-[3.375rem]">
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    </>
  );
}
