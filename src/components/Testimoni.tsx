import React from "react";
import Image from "next/image";
import Person1 from "@/images/profile-img/person-1.jpg";
import Person2 from "@/images/profile-img/person-2.jpg";
import Person3 from "@/images/profile-img/person-3.jpg";
import { BsStarFill } from "react-icons/bs";

export default function Testimoni() {
  return (
    <div className="w-full bg-[#f2f2f2] px-[100px] pt-16 pb-36  ">
      <h1 className="text-center text-7xl font-robotoSlab font-bold">Testimoni</h1>
      <p className="font-roboto text-lg text-center">Apa kata mereka tentang website kami</p>
      <div className="grid grid-cols-3 gap-4 mt-16">
        <div className="bg-white shadow-xl rounded-xl px-5 py-5">
          <div className="flex gap-4 mb-6">
            <Image src={Person1} alt="Profile Picture" width={70} height={70} className="rounded-full"></Image>
            <div className="grid grid-cols-1 content-evenly">
              <h1 className="text-lg font-bold font-roboto">Hoogan Gaylie</h1>
              <div className="flex gap-2 text-lg">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold font-roboto">Website Bagus</h2>
            <p className="font-robotoSlab text-base font-light">
              ""Saya merasa begitu terbantu oleh Fitur Chat Anonim di Unstress. Sebuah tempat yang aman untuk berbicara tentang stres saya tanpa perlu khawatir tentang privasi atau penilaian. hehehehehehe .”"
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl px-5 py-5">
          <div className="flex gap-4 mb-6">
            <Image src={Person2} alt="Profile Picture" width={70} height={70} className="rounded-full"></Image>
            <div className="grid grid-cols-1 content-evenly">
              <h1 className="text-lg font-bold font-roboto">Michelle Eve</h1>
              <div className="flex gap-2 text-lg">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold font-roboto">Website Bagus</h2>
            <p className="font-robotoSlab text-base font-light">
              ""Saya merasa begitu terbantu oleh Fitur Chat Anonim di Unstress. Sebuah tempat yang aman untuk berbicara tentang stres saya tanpa perlu khawatir tentang privasi atau penilaian. hehehehehehe .”"
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl px-5 py-5">
          <div className="flex gap-4 mb-6">
            <Image src={Person3} alt="Profile Picture" width={70} height={70} className="rounded-full"></Image>
            <div className="grid grid-cols-1 content-evenly">
              <h1 className="text-lg font-bold font-roboto">Victoria Munhogard</h1>
              <div className="flex gap-2 text-lg">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold font-roboto">Website Bagus</h2>
            <p className="font-robotoSlab text-base font-light">
              ""Saya merasa begitu terbantu oleh Fitur Chat Anonim di Unstress. Sebuah tempat yang aman untuk berbicara tentang stres saya tanpa perlu khawatir tentang privasi atau penilaian. hehehehehehe .”"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
