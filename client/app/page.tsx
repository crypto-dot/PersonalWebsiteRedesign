'use client'
import Image from "next/image";
import { ReactHTMLElement, useRef } from "react";

const Home = () => {
  const bodyRef = useRef<HTMLElement>(null);
  return (
    <main className="" ref={bodyRef}>
      <div>Test</div>
    </main>
  );
}
export default Home;