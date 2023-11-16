import React from "react";
import Layout from "./Layout";
import { BsSearch } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Router from "next/router";

export default function HomeArticle() {
  return (
    <Layout>
      <div className="w-full h-[500px] px-[100px] mx-auto mt-36">
        <div className="flex gap-3 justify-end">
          <div className="relative">
            <input type="text" className="border cursor-pointer border-neutral rounded-xl outline-none h-8 w-40 focus:border-neutral focus:cursor-text pl-9" placeholder="Seacrh" />
            <div className="absolute w-8 h-8 flex items-center justify-center top-0 text-neutral">
              <BsSearch />
            </div>
          </div>
          <div className="relative">
            <input type="text" className="border cursor-pointer border-neutral rounded-xl outline-none h-8 w-24 focus:border-neutral focus:cursor-text px-2" placeholder="Sort" />
            <div className="absolute text-neutral w-8 h-8 flex items-center align-middle justify-center top-0 right-0">
              <BsSortDown />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-roboto text-neutral">Home | Artikel</h1>
        </div>
        <div className="w-full h-[444px] bg-[url('/images/hero-img/woman-edited.jpeg')] bg-cover bg-[center_top_-15rem] grid grid-cols-2 p-14 content-end items-center">
          <div>
            <h1 className="font-robotoSlab text-3xl font-bold text-white self-center">Redakan Stres Dengan Yoga</h1>
          </div>
          <div className="flex justify-end">
            <button className="bg-primary px-4 py-4 rounded-xl text-white">Baca Selengkapnya</button>
          </div>
        </div>
      </div>
      <br />
      <div className="mx-[100px] border-b-2 border-black"></div>
      <br />
      <div className="w-full px-[100px]">
        <div className="flex justify-between">
          <h1 className="font-robotoSlab font-semibold text-4xl">Rekomendasi Untuk Anda</h1>
          <button onClick={() => Router.push("/artikel")} className="border border-primary text-primary py-[9px] px-[16px] rounded-xl hover:bg-primary hover:text-white hover:scale-95 transition-all">
            Lihat Semua
          </button>
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
      <br />
      <div className="mx-[100px] border-b-2 border-black"></div>
      <br />
      <div className="w-full px-[100px]">
        <div className="flex justify-between">
          <h1 className="font-robotoSlab font-semibold text-4xl">Tips-tips Menarik Buat Anda</h1>
          <div className="flex gap-3">
            <div className="relative">
              <input type="text" className="border cursor-pointer border-neutral rounded-xl outline-none h-8 w-40 focus:border-neutral focus:cursor-text pl-9" placeholder="Seacrh" />
              <div className="absolute w-8 h-8 flex items-center justify-center top-0 text-neutral">
                <BsSearch />
              </div>
            </div>
            <div className="relative">
              <input type="text" className="border cursor-pointer border-neutral rounded-xl outline-none h-8 w-24 focus:border-neutral focus:cursor-text px-2" placeholder="Sort" />
              <div className="absolute text-neutral w-8 h-8 flex items-center align-middle justify-center top-0 right-0">
                <BsSortDown />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 gap-2 grid grid-cols-3">
          <div className="bg-white p-2 rounded-xl shadow-xl group hover:scale-95 transition-transform mb-4">
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
          <div className="bg-white p-2 rounded-xl shadow-xl group hover:scale-95 transition-transform mb-4">
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
          <div className="bg-white p-2 rounded-xl shadow-xl group hover:scale-95 transition-transform mb-4">
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
      <br />
      <br />
      <br />
    </Layout>
  );
}
