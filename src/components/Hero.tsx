import React from "react";
import Image from "next/image";
import HeroImage from "../images/hero.svg";

export default function Hero() {
  return (
    <div className="flex gap-5 grid-cols-2 mt-[66px] mb-[110px] mx-auto max-w-[1240px] h-[420px]">
      <div className="w-full h-full grid grid-cols-1 content-evenly">
        <div className="font-bold text-6xl font-robotoSlab">
          Bersama Unstress,
          <br />
          Hilangkan Stres
        </div>
        <div className="mt-6 mb-8 font-roboto">
          Selamat datang di tempat yang tepat untuk meraih keseimbangan emosional dan mental dalam hidup Anda, kami akan membantu Anda menemukan kedamaian dan kebahagiaan di tengah tantangan dan tekanan yang mungkin Anda hadapi.
        </div>
        <div className="flex gap-6">
          <button className="w-56 h-11 bg-blue-500 rounded-xl text-white">Mulai Jelajahi UnStress</button>
          <button className="w-[105px] h-11 border border-blue-500 rounded-xl text-blue-500">Mulai</button>
        </div>
      </div>
      <div className="w-full text-center leading-[420px]">
        <Image src={HeroImage} alt="Gambar Hero" className="w-full h-full"></Image>
      </div>
    </div>
  );
}
