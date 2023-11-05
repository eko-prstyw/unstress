import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Card1 from "../images/card-img/card1.jpeg";

export default function Article() {
  return (
    <div className="w-[1240px] h-[420px] mx-auto mb-44">
      <div className="flex justify-between">
        <h1 className="font-robotoSlab font-bold text-4xl">Artikel</h1>
        <button className="border border-blue-300 text-blue-300 py-[9px] px-[16px] rounded-xl">Lihat Semua</button>
      </div>
      <div>
        <p>Artikel yang dapat membantu anda dalam mengatasi stress.</p>
      </div>
      <div className="w-full mt-5 gap-6 grid grid-cols-3">
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="w-auto h-80 overflow-hidden">
            <Image src={Card1} alt="Gambar Card1"></Image>
          </div>
          <p>10 Oktober 2023</p>
          <h2>Mengatasi Stress: Tips Ampuh Untuk Hidup Lebih Bahagia</h2>
          <a href="#" className="flex gap-1 text-blue-400 hover:text-sm transition-all hover:text-blue-500">
            Baca Selengkapnya
            <div className="self-center">
              <BsArrowRight />
            </div>
          </a>
        </div>
        <div className="shadow-lg">
          <div className="w-auto h-80 overflow-hidden">
            <Image src={Card1} alt="Gambar Card1"></Image>
          </div>
          <p>10 Oktober 2023</p>
          <h2>Mengatasi Stress: Tips Ampuh Untuk Hidup Lebih Bahagia</h2>
          <a href="#" className="flex gap-1 text-blue-400 hover:text-sm transition-all hover:text-blue-500">
            Baca Selengkapnya
            <div className="self-center">
              <BsArrowRight />
            </div>
          </a>
        </div>
        <div className="shadow-lg">
          <div className="w-auto h-80 overflow-hidden">
            <Image src={Card1} alt="Gambar Card1"></Image>
          </div>
          <p>10 Oktober 2023</p>
          <h2>Mengatasi Stress: Tips Ampuh Untuk Hidup Lebih Bahagia</h2>
          <a href="#" className="flex gap-1 text-blue-400 hover:text-sm transition-all hover:text-blue-500">
            Baca Selengkapnya
            <div className="self-center">
              <BsArrowRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
