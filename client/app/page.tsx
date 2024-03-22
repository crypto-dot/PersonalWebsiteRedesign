import Image from "next/image";
import Navigation from "./Components/Navigation/Navigation";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Navigation />
    </main>
  );
}
