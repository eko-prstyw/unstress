import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import icon1 from "@/images/chat-anonim-img/icon-1.svg";
import icon2 from "@/images/chat-anonim-img/icon-2.svg";
import profil from "@/images/chat-anonim-img/profile.svg";
import profil1 from "@/images/chat-anonim-img/profile-1.svg";
import profil2 from "@/images/chat-anonim-img/profile-2.svg";
import profil3 from "@/images/chat-anonim-img/profile-3.svg";
import profil4 from "@/images/chat-anonim-img/profile-4.svg";
import button from "@/images/chat-anonim-img/button.svg";

export default function index() {
  return (
    <main>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="mt-36 mb-16 mx-auto w-[1240px] h-[865px] bg-primary-50 rounded-[10px] shadow border border-[#90BED0] flex items-center justify-center">
          <div className="flex-grow flex items-center justify-center relative w-full h-full">
            <div className="absolute flex items-center top-[20px] left-[80px]">
              <Image
                src={icon1}
                alt="icon-1"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2 text-black text-[32px] font-medium font-robotoSlab">
                Chat Anonim
              </div>
            </div>

            <div className="w-[250px] h-[246px] bg-primary-200 rounded-[10px] shadow border border-primary-300 absolute items-center justify-center flex flex-col top-[88px] left-[80px]">
              <Image
                src={profil}
                alt="profile-1"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex mt-[17px]">
                <div className="mr-[12px] text-black font-normal text-[16px] font-roboto">
                  Your Profile Anonim
                </div>
                <Image src={icon2} alt="icon-2" />
              </div>
            </div>
            <div className="absolute text-black font-robotoSlab text-[24px] top-[382px] left-[80px]">
              Konsultasi
            </div>
            <div className="absolute w-[738px] h-[820px] bg-primary-200 rounded-[10px] shadow border border-primary-300 top-[25px] right-[80px] left-[420px] bottom-[20px] flex">
              <div className="flex absolute bottom-[40px] left-[25px] top-[725px]">
                <div className="w-[583px] h-[50px] px-4 py-3.5 bg-[#f8fafc] rounded-tl-[1px] rounded-bl-[1px] border border-[#e4e4e7] justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                    <div className="grow shrink basis-0 text-neutral-400 text-[15px] font-normal font-['Inter'] leading-snug">
                      Masukkan pesan Anda
                    </div>
                  </div>
                </div>
                <button>
                  <Image
                    src={button}
                    alt="button send"
                    className="mb-1"
                  ></Image>
                </button>
              </div>
            </div>
            <div className="absolute left-[80px] top-[460px] flex flex-col">
              <div className="flex items-center">
                <Image
                  src={profil1}
                  alt="profil1"
                  className="w-[50px] h-[50px] rounded-full"
                ></Image>
                <div className="ml-4 font-roboto text-[18px]">Eko</div>
              </div>
              <div className="flex items-center mt-8">
                <Image
                  src={profil2}
                  alt="profil2"
                  className="w-[50px] h-[50px] rounded-full"
                ></Image>
                <div className="ml-4 font-roboto text-[18px]">Zy</div>
              </div>
              <div className="flex items-center mt-8">
                <Image
                  src={profil3}
                  alt="profil3"
                  className="w-[50px] h-[50px] rounded-full"
                ></Image>
                <div className="ml-4 font-roboto text-[18px]">Iki</div>
              </div>
              <div className="flex items-center mt-8">
                <Image
                  src={profil4}
                  alt="profil4"
                  className="w-[50px] h-[50px] rounded-full"
                ></Image>
                <div className="ml-4 font-roboto text-[18px]">Galang</div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
