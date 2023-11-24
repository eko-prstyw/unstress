import React from "react";
import { useRouter } from "next/router";

import ShowAndHidePassword from "@/components/page-login/ShowAndHidePassword";
import CheckAndUncheck from "@/components/page-login/CheckAndUncheck";

import Image from "next/image";
import login from "@/images/login-img/login.svg";
import icon1 from "@/images/login-img/icon-1.svg";
import icon2 from "@/images/login-img/icon-2.svg";

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex grid-cols-2">
      <div className="w-1/2 bg-[#F2F2F2]">
        <div>
          <Image
            src={login}
            alt="Gambar Login"
            className="h-screen justify-center"
          ></Image>
        </div>
      </div>
      <div className="w-1/2 bg-white">
        <div className="font-semibold font-robotoSlab text-[40px] ml-[65px] mt-12">
          Selamat Datang
        </div>
        <div className="font-roboto text-[18px] ml-[65px]">di UnStress</div>
        <div className="font-roboto text-[16px] ml-[65px] mt-[39px]">Email</div>
        <input
          type="text"
          placeholder="Masukan Email"
          className="ml-[65px] mr-[65px] w-[503px] h-10 px-3 py-[9px] bg-[#F8F9FB] text-[#858C95] text-[14px] font-roboto rounded-lg border border-[#E5E5E7] justify-start items-center gap-2 inline-flex"
        />
        <div className="font-roboto text-[16px] ml-[65px] mt-5">Password</div>
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Masukkan Password"
            className="ml-[65px] mr-[65px] w-[503px] h-10 px-3 py-[9px] bg-[#F8F9FB] text-[#858C95] text-[14px] font-roboto rounded-lg border border-[#E5E5E7] items-center gap-2 inline-flex justify-between"
          />
          <Image
            src={icon1}
            alt="icon-1"
            className="absolute right-20 top-2.5"
          />
        </div> */}
        <ShowAndHidePassword />

        <div className="ml-[65px] flex">
          <CheckAndUncheck />
          <div className="font-roboto text-black mt-[38px] ml-[8px]">
            Ingat saya
          </div>
          <div className="mt-[38px] ml-[284px] text-[#1D49D8]">
            Lupa Password?
          </div>
        </div>
        <button
          type="button"
          className="ml-[65px] mt-5 w-[505px] h-10 py-3 px-4 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-[#135589] font-semibold font-roboto text-white text-[16px]"
        >
          Masuk
        </button>
        <div className="flex justify-center mt-10">
          <div className="font-roboto text-[14px] mr-1 text-[#A09A9A]">
            Belum punya akun?
          </div>
          <button
            onClick={() => router.push("/register")}
            className="font-roboto text-[14px] text-[#007BD4]"
          >
            Buat Akun
          </button>
        </div>
      </div>
    </div>
  );
}
