import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Article from "@/components/Article";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Article />
      <Features />
    </>
  );
}
