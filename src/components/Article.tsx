import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Card1 from "../images/card-img/card1.jpeg";

export default function Article() {
  return (
    <div className="max-w-full pt-28 px-[100px] bg-[#f2f2f2]">
      <div className="flex justify-between">
        <h1 className="font-roboto font-bold text-4xl">Artikel</h1>
        <button className="border border-primary text-primary py-[9px] px-[16px] rounded-xl hover:bg-primary hover:text-white hover:scale-95 transition-all">Lihat Semua</button>
      </div>
      <div>
        <p className="text-lg font-robotoSlab">Artikel yang dapat membantu anda dalam mengatasi stress.</p>
      </div>
      <div className="w-full mt-5 gap-2 grid grid-cols-3">
        <div className="bg-white p-2 rounded-xl shadow-xl group hover:scale-95 transition-transform">
          <div className="bg-[url('/images/card-img/card1.jpeg')] bg-[center_top_-5rem] bg-cover h-96 rounded-xl"></div>
          <p className="text-lg mt-2 font-medium font-robotoSlab text-primary">10 Oktober 2023</p>
          <h1 className="font-bold font-roboto text-2xl">Mengatasi Stres: Tips Ampuh Untuk Hidup Lebih Bahagia</h1>
          <a href="#" className="flex gap-2 items-center text-xl mt-3 group-hover:underline group-hover:text-primary transition-all">
            Baca Selengkapnya
            <div className="group-hover:translate-x-2 group-hover:scale-125 group-hover:animate-sideBounce transition-all">
              <BsArrowRight />
            </div>
          </a>
        </div>
        <div className="bg-white p-2 rounded-xl shadow-xl group hover:scale-95 transition-transform">
          <div className="bg-[url('/images/card-img/car2.jpeg')] bg-[center_left_-1.5rem] bg-cover h-96 rounded-xl"></div>
          <p className="text-lg mt-2 font-medium font-robotoSlab text-primary">25 September 2023</p>
          <h1 className="font-bold font-roboto text-2xl">Mengatasi Stres: Tips Ampuh Untuk Hidup Lebih Bahagia</h1>
          <a href="#" className="flex gap-2 items-center text-xl mt-3 group-hover:underline group-hover:text-primary transition-all">
            Baca Selengkapnya
            <div className="group-hover:translate-x-2 group-hover:scale-125 group-hover:animate-sideBounce transition-all">
              <BsArrowRight />
            </div>
          </a>
        </div>
        <div className="bg-white p-2 rounded-xl shadow-xl group hover:scale-95 transition-transform">
          <div className="bg-[url('/images/card-img/card3.jpeg')] bg-[center_left_-1.5rem] bg-cover h-96 rounded-xl"></div>
          <p className="text-lg mt-2 font-medium font-robotoSlab text-primary">20 September 2023</p>
          <h1 className="font-bold font-roboto text-2xl">Mengatasi Stres: Tips Ampuh Untuk Hidup Lebih Bahagia</h1>
          <a href="#" className="flex gap-2 items-center text-xl mt-3 group-hover:underline group-hover:text-primary transition-all">
            Baca Selengkapnya
            <div className="group-hover:translate-x-2 group-hover:scale-125 group-hover:animate-sideBounce transition-all">
              <BsArrowRight />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
