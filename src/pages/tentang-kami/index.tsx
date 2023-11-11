import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import aboutus from "@/images/tentang-kami-img/about-us.svg";
import icon from "@/images/tentang-kami-img/icon.svg";
import person1 from "@/images/tentang-kami-img/person-1.svg";
import person2 from "@/images/tentang-kami-img/person-2.svg";
import person3 from "@/images/tentang-kami-img/person-3.svg";
import person4 from "@/images/tentang-kami-img/person-4.svg";
import person5 from "@/images/tentang-kami-img/person-5.svg";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className="max-w-full bg-white mt-8">
        <div className="flex justify-between px-[100px] pt-20">
          <Image src={aboutus} alt="About Us" width={400}></Image>
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
            <button className="text-white bg-primary py-2 px-6 rounded-xl font-roboto justify-self-start">
              Lihat Semua
            </button>
          </div>
        </div>
      </div>
      <div className="text-[40px] font-bold text-center text-[#323539] font-robotoSlab leading-[48px] mb-16 mt-16">
        TIM KAMI
      </div>
      <div className="cols-2">
        <div className="flex justify-center">
          <Image
            src={person1}
            alt="person1"
            className="mr-6 w-[225px] h-[225px]"
          ></Image>
          <div>
            <div className="text-2xl font-bold font-robotoSlab">Eko</div>
            <div className="text-primary-500 font-roboto text-base">Coder</div>
            <div className="font-roboto text-[#858C95] mt-4">
              Seorang yang ambisius, <br />
              merelakan MBKM nya demi <br />
              menamatkan Brida School <br />
              Academic 2023
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
            <div className="font-roboto text-[#858C95] mt-4">
              Dengan skill codingnya yang berada, <br />
              di atas rata-rata, Zy mampu <br />
              menumpaskan seluruh penjahat di <br />
              muka bumi ini
            </div>
            <Image src={icon} alt="icon" className="mt-8"></Image>
          </div>
        </div>
      </div>
      <div className="cols-2 mt-16">
        <div className="flex justify-center">
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
            <div className="font-roboto text-[#858C95] mt-4">
              Seorang designer yang ceria , <br />
              setiap saat, mampu membuat <br />
              lawannya tertawa terbahak- <br />
              bahak
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
            <div className="font-roboto text-[#858C95] mt-4">
              Seorang pecinta kuliner yang <br />
              memakan segala jenis hewan, <br />
              kalajengkingmu dimakan satu piring <br />
              tanpa sisa.
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
            <div className="font-roboto text-[#858C95] mt-4">
              Seorang pendatang baru <br />
              yang menyukai tantangan <br />
              dan ingin menambah stres.
            </div>
            <Image src={icon} alt="icon" className="mt-8"></Image>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
