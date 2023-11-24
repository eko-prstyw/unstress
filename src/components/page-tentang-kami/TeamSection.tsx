import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import aboutUs from "@/images/tentang-kami-img/about-us.svg";

export default function TeamSection() {
  const router = useRouter();
  return (
    <div>
      {/* container */}
      <div className="max-w-full bg-white mt-8">
        <div className="flex justify-between mx-[100px] pt-20">
          <Image src={aboutUs} alt="About Us" width={400}></Image>
          <div className="grid content-center w-[550px]">
            <p className="font-roboto text-[#A09A9A] mb-3">
              Home | Tentang Kami
            </p>
            <div className="font-bold text-6xl font-roboto mb-3">UnStress</div>
            <div className="font-robotoSlab text-justify mb-6">
              Selamat datang di situs &quot;Mengatasi Stres.&quot; Kami adalah
              platform online yang didedikasikan untuk membantu Anda memahami,
              mengelola, dan mengatasi stres dalam kehidupan sehari-hari. Kami
              percaya bahwa stres adalah tantangan universal yang...
            </div>
            <button
              onClick={() => router.push("/")}
              className="text-white bg-primary py-2 px-6 rounded-xl font-roboto justify-self-start"
            >
              Lihat Semua
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
