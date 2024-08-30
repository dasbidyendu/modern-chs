import Image from "next/image";
import Navbar from "./components/navbar";
import MidSection from "./components/mid-section";
import Cards from "./components/cards";

export default function Home() {
  return (
    <div className="bg-[#DDDBFB] w-dvw h-dvh pt-[50px]">
      <Navbar />
      <MidSection />
      <Cards />
    </div>
  );
}
