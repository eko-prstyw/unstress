import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import TeamSection from "@/components/page-tentang-kami/TeamSection";

import icon from "@/images/tentang-kami-img/icon.svg";
import person1 from "@/images/tentang-kami-img/person-1.svg";
import person2 from "@/images/tentang-kami-img/person-2.svg";
import person3 from "@/images/tentang-kami-img/person-3.svg";
import person4 from "@/images/tentang-kami-img/person-4.svg";
import person5 from "@/images/tentang-kami-img/person-5.svg";

export default function index() {
  return (
    <Layout>
      <TeamSection />
      <div className="text-[40px] font-bold text-center text-[#323539] font-robotoSlab leading-[48px] mb-16 mt-16">
        TIM KAMI
      </div>
      <div className="cols-2">
        <div className="flex px-[100px] justify-center">
          <Image
            src={person1}
            alt="person1"
            className="mr-6 w-[225px] h-[225px]"
          ></Image>
          <div>
            <div className="text-2xl font-bold font-robotoSlab">Eko</div>
            <div className="text-primary-500 font-roboto text-base">Coder</div>
            <div className="font-roboto text-justify text-[#858C95] mt-4 w-[260px]">
              Seorang yang ambisius, merelakan MBKM nya demi menamatkan Brida
              School
            </div>
            <Image src={icon} alt="icon" className="mt-8"></Image>
          </div>
          <Image
            src={person2}
            alt="person1"
            className="ml-16 mr-6 w-[225px] h-[225px]"
          ></Image>
          <div>
            <div className="text-2xl font-bold font-robotoSlab">Zy</div>
            <div className="text-primary-500 font-roboto text-base">Coder</div>
            <div className="font-roboto text-justify text-[#858C95] mt-4 w-[260px]">
              Dengan skill codingnya yang berada, di atas rata-rata, Zy mampu
              menumpaskan seluruh penjahat di muka bumi ini
            </div>
            <Image src={icon} alt="icon" className="mt-8"></Image>
          </div>
        </div>
      </div>
      <div className="cols-2 mt-16">
        <div className="flex mx-[100px]">
          <Image
            src={person3}
            alt="person1"
            className="mr-6 w-[225px] h-[225px]"
          ></Image>
          <div>
            <div className="text-2xl font-bold font-robotoSlab">Iki</div>
            <div className="text-primary-500 font-roboto text-base">
              UI/UX Designer
            </div>
            <div className="font-roboto text-justify text-[#858C95] mt-4 w-[260px]">
              Seorang designer yang ceria , setiap saat, mampu membuat lawannya
              tertawa terbahak- bahak
            </div>
            <Image src={icon} alt="icon" className="mt-8"></Image>
          </div>
          <Image
            src={person4}
            alt="person1"
            className="ml-16 mr-6 w-[225px] h-[225px]"
          ></Image>
          <div>
            <div className="text-2xl font-bold font-robotoSlab">Golang</div>
            <div className="text-primary-500 font-roboto text-base">
              UI/UX Designer
            </div>
            <div className="font-roboto text-justify text-[#858C95] mt-4 w-[260px]">
              Seorang pecinta kuliner yang memakan segala jenis hewan,
              kalajengkingmu dimakan satu piring tanpa sisa.
            </div>
            <Image src={icon} alt="icon" className="mt-8"></Image>
          </div>
        </div>
      </div>
      <div className="cols-1 mt-16 mb-48">
        <div className="flex justify-center">
          <Image
            src={person5}
            alt="person1"
            className="ml-16 mr-6 w-[225px] h-[225px]"
          ></Image>
          <div>
            <div className="text-2xl font-bold font-robotoSlab">Aluh</div>
            <div className="text-primary-500 font-roboto text-base">
              UI/UX Designer
            </div>
            <div className="font-roboto text-justify text-[#858C95] mt-4 w-[260px]">
              Seorang pendatang baru yang menyukai tantangan dan ingin menambah
              stres.
            </div>
            <Image src={icon} alt="icon" className="mt-8"></Image>
          </div>
        </div>
      </div>
    </Layout>
  );
}
