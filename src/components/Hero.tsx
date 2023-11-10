import React from "react";
import Image from "next/image";
import HeroImage1 from "../images/hero-img/pic-1.svg";
import HeroImage2 from "../images/hero-img/pic-2.svg";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Hero() {
  return (
    <>
      <div className="mt-36 mx-auto max-w-full">
        <div className="flex justify-between px-[100px]">
          <div className="w-[550px]">
            <div className="mb-8 font-bold text-6xl font-roboto">
              Bersama Unstress,
              <br />
              Hilangkan Stres
            </div>
            <div className="font-robotoSlab mb-8 text-justify text-neutral">
              Selamat datang di tempat yang tepat untuk meraih keseimbangan
              emosional dan mental dalam hidup Anda, kami akan membantu Anda
              menemukan kedamaian dan kebahagiaan di tengah tantangan dan
              tekanan yang mungkin Anda hadapi.
            </div>
            <div className="flex gap-6 mb-8">
              <button className="w-56 h-11 font-roboto bg-primary rounded-xl text-white">
                Mulai Jelajahi UnStress
              </button>
            </div>
            <div className="flex gap-6 mb-8 text-neutral">
              <div className="flex gap-1 items-center">
                <div className="text-3xl">
                  <BsInstagram />
                </div>
                <p className="font-roboto">BSA_Unstress</p>
              </div>
              <div className="flex gap-1 items-center">
                <div className="text-3xl">
                  <BsYoutube />
                </div>
                <p className="font-roboto">BRIDA_Unstress</p>
              </div>
            </div>
          </div>
          <Image
            src={HeroImage1}
            alt="Gambar Hero"
            width={600}
            height={500}
          ></Image>
        </div>
      </div>
      <div className="max-w-full bg-[#F2F2F2]">
        <div className="flex justify-between px-[100px] pt-20">
          <Image
            src={HeroImage2}
            alt="Gambar Hero"
            width={500}
            height={500}
          ></Image>
          <div className="grid content-center w-[550px]">
            <p className="font-roboto text-[#A09A9A] mb-3">
              Home | Tentang Kami
            </p>
            <div className="font-bold text-6xl font-roboto mb-3">UnStress</div>
            <div className="font-robotoSlab text-justify mb-6">
              Selamat datang di situs "Mengatasi Stres." Kami adalah platform
              online yang didedikasikan untuk membantu Anda memahami, mengelola,
              dan mengatasi stres dalam kehidupan sehari-hari. Kami percaya
              bahwa stres adalah tantangan universal yang...
            </div>
            <button className="text-white bg-primary py-2 px-6 rounded-xl font-roboto justify-self-start">
              Lihat Semua
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
