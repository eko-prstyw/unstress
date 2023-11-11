import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import HeroImage1 from "../images/hero-img/pic-1.svg";
import HeroImage2 from "../images/hero-img/pic-2.svg";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <div className="mt-40 mx-auto max-w-full">
        <div className="flex justify-between mx-[100px] gap-10">
          <div className="w-[600px] h-[430px]">
            <div className="mb-6 font-bold text-6xl font-robotoSlab whitespace-nowrap">
              Bersama UnStress,
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
              <button
                onClick={() => router.push("/login")}
                className="w-56 h-11 font-roboto bg-primary rounded-xl text-white"
              >
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
          <Image src={HeroImage1} alt="Gambar Hero" height={430}></Image>
        </div>
      </div>
      <div className="max-w-full bg-[#F2F2F2]">
        <div className="flex justify-between mx-[100px] pt-20">
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
              Selamat datang di situs &ldquo;Mengatasi Stres&ldquo; Kami adalah
              platform online yang didedikasikan untuk membantu Anda memahami,
              mengelola, dan mengatasi stres dalam kehidupan sehari-hari. Kami
              percaya bahwa stres adalah tantangan universal yang...
            </div>
            <button
              onClick={() => router.push("/tentang-kami")}
              className="text-white bg-primary py-2 px-6 rounded-xl font-roboto justify-self-start"
            >
              Lihat Semua
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
