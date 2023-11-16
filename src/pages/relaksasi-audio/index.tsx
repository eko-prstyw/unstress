import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ToggleSwitch from "@/components/page-relaksasi-audio/ToggleSwitch";
import bgaudio from "@/images/audio-img/audio.jpg";
import vector from "@/images/audio-img/vector.svg";
import icon1 from "@/images/audio-img/icon-1.svg";
import icon2 from "@/images/audio-img/icon-2.svg";
import icon3 from "@/images/audio-img/icon-3.svg";
import icon4 from "@/images/audio-img/icon-4.svg";
import icon5 from "@/images/audio-img/icon-5.svg";

export default function index() {
  // Catatan: Styling untuk background image
  const backgroundImageStyle = {
    backgroundImage: `url(${bgaudio.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "180vh",
  };

  return (
    <div>
      <Navbar />
      {/* Section: Container Audio */}
      <div
        style={backgroundImageStyle}
        className="relative h-screen flex flex-col items-center justify-center"
      >
        {/* Section: Title */}
        <div className="mb-8 font-robotoSlab font-semibold text-6xl text-white text-center">
          Relaksasi Audio UnStress
        </div>
        {/* Section: Container Icon */}
        <div className="w-[1100px] h-[570px] bg-sky-50 bg-opacity-40 rounded-[90px] shadow border-4 border-white flex items-center justify-center">
          {/* Section: Icon Toggle */}
          <div className="flex absolute items-center -mt-60">
            {/* Subsection: Rain */}
            <div className="flex flex-col items-center">
              <Image src={icon1} alt="icon awan" className="mx-12" />
              <div className="my-3 text-2xl font-medium font-robotoSlab text-white">
                Rain
              </div>
              <ToggleSwitch />
            </div>
            {/* Subsection: Thunder */}
            <div className="flex flex-col items-center">
              <Image src={icon2} alt="icon petir" className="mx-12" />
              <div className="my-3 text-2xl font-medium font-robotoSlab text-white">
                Thunder
              </div>
              <ToggleSwitch />
            </div>
            {/* Subsection: Wave */}
            <div className="flex flex-col items-center">
              <Image src={icon3} alt="icon ombak" className="mx-12" />
              <div className="my-3 text-2xl font-medium font-robotoSlab text-white">
                Wave
              </div>
              <ToggleSwitch />
            </div>
            {/* Subsection: Wind */}
            <div className="flex flex-col items-center">
              <Image src={icon4} alt="icon angin" className="mx-12" />
              <div className="my-3 text-2xl font-medium font-robotoSlab text-white">
                Wind
              </div>
              <ToggleSwitch />
            </div>
            {/* Subsection: Bird */}
            <div className="flex flex-col items-center">
              <Image src={icon5} alt="icon burung" className="mx-12" />
              <div className="my-3 text-2xl font-medium font-robotoSlab text-white">
                Bird
              </div>
              <ToggleSwitch />
            </div>
          </div>
          {/* Section: Vector Image */}
          <div className="absolute z-10 mt-[200px]">
            <Image src={vector} alt="Gambar Vector"></Image>
          </div>
          {/* Section: Vector */}
          <div className="w-[815px] h-[0px] border-2 border-white mt-[200px]"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
