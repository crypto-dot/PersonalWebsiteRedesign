'use client'
import Image from "next/image";
import Navigation from "./Components/Navigation/Navigation";
import { ReactHTMLElement, useRef } from "react";

const Home = () => {
  const mainElmRef = useRef<HTMLElement>(null);
  return (
    <main className="" ref={mainElmRef}>
      <Navigation ref={mainElmRef} />
      <div>Test</div>
    </main>
  );
}
export default Home;