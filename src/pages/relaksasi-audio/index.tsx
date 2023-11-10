import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import bgaudio from "@/images/audio-img/audio.jpg";

export default function index() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgaudio.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "200vh",
  };
  return (
    <div className="bg-black">
      <Navbar />
      <main
        style={backgroundImageStyle}
        className="relative h-screen flex flex-col items-center justify-center"
      >
        <div className="mb-[33px] font-robotoSlab font-semibold text-6xl text-white text-center">
          Relaksasi Audio UnStress
        </div>
        <div className="flex w-[1100px] h-[570px] bg-[#F2F8FD69] bg-opacity-40 rounded-[90px] shadow border-4 border-white"></div>
      </main>
      <Footer />
    </div>
  );
}
