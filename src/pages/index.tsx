import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import BlogArticle from "@/components/BlogArticle";
import Features from "@/components/Features";
import Qoutes from "@/components/Qoutes";
import Testimoni from "@/components/Testimoni";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <BlogArticle />
      <Qoutes />
      <Testimoni />
      <Footer />
    </>
  );
}
