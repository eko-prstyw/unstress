import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Comments from "@/components/page-chat-anonim/Comments";

import icon1 from "@/images/chat-anonim-img/icon-1.svg";
import icon2 from "@/images/chat-anonim-img/icon-2.svg";
import profil from "@/images/chat-anonim-img/profile.svg";
import profil1 from "@/images/chat-anonim-img/profile-1.svg";
import profil2 from "@/images/chat-anonim-img/profile-2.svg";
import profil3 from "@/images/chat-anonim-img/profile-3.svg";
import profil4 from "@/images/chat-anonim-img/profile-4.svg";
import button from "@/images/chat-anonim-img/button.svg";

interface YourComponentProps {}

const YourComponent: React.FC<YourComponentProps> = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    // Check if the button is already clicked
    if (clickedIndex === index) {
      // Reset the background color on double-click
      setClickedIndex(null);
    } else {
      // Single-click, set the index
      setClickedIndex(index);
      // Add any other logic you want to perform on button click
    }
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
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
            <Comments />

            <div className="absolute left-[80px] top-[460px] flex flex-col">
              <button
                className={`flex items-center border shadow border-marina-300 rounded py-2 pl-2 justify-start w-[250px] h-[65px] ${
                  clickedIndex === 0 ? "bg-marina-200" : ""
                }`}
                onClick={() => handleClick(0)}
              >
                <Image
                  src={profil1}
                  alt="profil1"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="ml-4 font-roboto text-[18px]">Eko</div>
              </button>
              <button
                className={`flex items-center border shadow border-marina-300 rounded py-2 pl-2 justify-start w-[250px] h-[65px] mt-8 ${
                  clickedIndex === 1 ? "bg-marina-200" : ""
                }`}
                onClick={() => handleClick(1)}
              >
                <Image
                  src={profil2}
                  alt="profil2"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="ml-4 font-roboto text-[18px]">Zy</div>
              </button>
              <button
                className={`flex items-center border shadow border-marina-300 rounded py-2 pl-2 justify-start w-[250px] h-[65px] mt-8 ${
                  clickedIndex === 2 ? "bg-marina-200" : ""
                }`}
                onClick={() => handleClick(2)}
              >
                <Image
                  src={profil3}
                  alt="profil3"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="ml-4 font-roboto text-[18px]">Iki</div>
              </button>
              <button
                className={`flex items-center border shadow border-marina-300 rounded py-2 pl-2 justify-start w-[250px] h-[65px] mt-8 ${
                  clickedIndex === 3 ? "bg-marina-200" : ""
                }`}
                onClick={() => handleClick(3)}
              >
                <Image
                  src={profil4}
                  alt="profil4"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="ml-4 font-roboto text-[18px]">Galang</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default YourComponent;
