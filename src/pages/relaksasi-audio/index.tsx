import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import bgaudio from "@/images/audio-img/audio.jpg";
import vector from "@/images/audio-img/vector.svg";
import icon1 from "@/images/audio-img/icon-1.svg";
import icon2 from "@/images/audio-img/icon-2.svg";
import icon3 from "@/images/audio-img/icon-3.svg";
import icon4 from "@/images/audio-img/icon-4.svg";
import icon5 from "@/images/audio-img/icon-5.svg";

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
        <div className="flex z-10 absolute items-center -mt-40">
          <Image src={icon1} alt="icon awan" className="mx-12"></Image>
          <Image src={icon2} alt="icon petir" className="mx-12"></Image>
          <Image src={icon3} alt="icon ombak" className="mx-12"></Image>
          <Image src={icon4} alt="icon angin" className="mx-12"></Image>
          <Image src={icon5} alt="icon burung" className="mx-12"></Image>
        </div>
        <div className="w-[1100px] h-[570px] bg-[#F2F8FD69] bg-opacity-40 rounded-[90px] shadow border-4 border-white flex items-center justify-center">
          <div className="absolute z-10 mt-[200px]">
            <Image src={vector} alt="Gambar Vector"></Image>
          </div>
          <div className="w-[815px] h-[0px] border-2 border-primary-700 mt-[200px]"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
