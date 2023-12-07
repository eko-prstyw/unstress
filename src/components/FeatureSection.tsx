import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function FeatureSection() {
  const router = useRouter();
  return (
    <div className="max-w-full bg-[#f2f2f2] px-[100px] pt-20">
      <h1 className="mb-11 text-6xl text-center font-bold font-robotoSlab">
        Fitur UnStress
      </h1>
      <div className="mx-auto p-20 rounded-xl shadow-lg mb-16 bg-cover bg-[center_top_-15rem] bg-[url('/images/feature-img/pic-1.jpeg')] text-white">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-2xl font-robotoSlab mb-3">Fitur</h2>
            <h2 className="text-7xl font-bold font-robotoSlab">
              Chat
              <br />
              Anonim
            </h2>
          </div>
          <div className="grid justify-stretch">
            <p className="text-justify font-robotoSlab text-lg">
              Fitur Chat Anonim adalah salah satu aspek penting dari layanan
              kami yang dirancang untuk memberikan dukungan dan konsultasi yang
              aman bagi individu yang mengalami stres.
            </p>
            <button
              onClick={() => router.push("/chat-anonim")}
              className="bg-secondary font-roboto text-white rounded-xl shadow-lg py-3 px-4 self-end justify-self-end"
            >
              Coba Sekarang
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto p-20 rounded-xl shadow-lg bg-cover bg-[center_top_-15rem] bg-[url('/images/feature-img/pic-2.jpeg')] text-white">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-2xl font-robotoSlab mb-3">Fitur</h2>
            <h2 className="text-7xl font-bold font-robotoSlab">
              Relaksasi
              <br />
              Audio
            </h2>
          </div>
          <div className="grid justify-stretch">
            <p className="text-justify font-robotoSlab text-lg">
              Fitur Relaksasi Audio kami adalah alat terbaru kami untuk membantu
              Anda mencapai keadaan pikiran yang tenang dan rileks. Anda dapat
              memilih perjalanan relaksasi yang sesuai dengan kebutuhan Anda.
            </p>
            <button
              onClick={() => router.push("/relaksasi-audio")}
              className="bg-secondary font-roboto text-white rounded-xl shadow-lg py-3 px-4 self-end justify-self-end"
            >
              Coba Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
