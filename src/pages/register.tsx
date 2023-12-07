import React, { FormEvent } from "react";
import { useRouter } from "next/router";

import ShowAndHidePassword from "@/components/page-register/ShowAndHidePassword";
import CheckAndUncheck from "@/components/page-login/CheckAndUncheck";

import Image from "next/image";
import register from "@/images/register-img/register.svg";
import icon1 from "@/images/register-img/icon-1.svg";
import icon2 from "@/images/register-img/icon-2.svg";
import icon3 from "@/images/register-img/icon-3.svg";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());

    const response = await axios.post("http://localhost:3000/api/regist", formDataJSON);
    console.log(response.data);
  };
  return (
    <div className="flex grid-cols-2">
      <div className="w-1/2 bg-white">
        <div className="font-semibold font-robotoSlab text-[40px] ml-[65px] mt-8">Daftar</div>
        <div className="font-roboto text-[18px] ml-[65px]">Masukkan Email dan Password untuk Daftar</div>
        <button type="button" className="ml-[65px] mt-5 w-[505px] h-10 py-3 px-4 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-[#135589] font-semibold font-roboto text-white text-[16px]">
          <Image src={icon1} alt="icon-1"></Image>
          Sign up With Google
        </button>
        <div className="mx-[65px] py-3 flex items-center text-[#A09A9A] lowercase before:flex-[1_1_0%] before:border-t before:border-[#C8C8C8] before:me-6 after:flex-[1_1_0%] after:border-t after:border-[#C8C8C8] after:ms-6 dark:text-[#6b7280] dark:before:border-[#4b5563] dark:after:border-[#4b5563] text-[18px]">
          Or
        </div>
        <form onSubmit={handleRegister}>
          <div className="font-roboto text-[16px] ml-[65px]">Email</div>
          <input
            placeholder="Masukan Email"
            id="email"
            name="email"
            className="mx-[65px] w-[503px] h-10 px-3 py-[9px] bg-[#F8F9FB] text-[#858C95] text-[14px] font-roboto rounded-lg border border-[#E5E5E7] justify-start items-center gap-2 inline-flex"
          />
          <div className="font-roboto text-[16px] ml-[65px] mt-5">Password</div>
          {/* <form className="mx-[65px] w-[503px] h-10 px-3 py-[9px] bg-[#F8F9FB] text-[#858C95] text-[14px] font-roboto rounded-lg border border-[#E5E5E7] items-center gap-2 inline-flex justify-between">
          Masukan Password
          <Image src={icon2} alt="icon-2"></Image>
        </form> */}
          <ShowAndHidePassword />
          <div className="ml-[65px] flex">
            <CheckAndUncheck />
            <div className="font-roboto text-black mt-8 ml-[8px] text-[16px]">
              Dengan mengirimkan formulir, Anda menyetujui{"\n"}
              <span className="font-bold">
                Ketentuan <br /> Layanan kami
              </span>
            </div>
          </div>
          <button type="submit" className="ml-[65px] mt-5 w-[505px] h-10 py-3 px-4 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-[#2A93D5] font-semibold font-roboto text-white text-[16px]">
            Daftar
          </button>
          <div className="flex justify-center mt-5">
            <div className="font-roboto text-[14px] mr-1 text-[#A09A9A]">Sudah punya akun?</div>
            <button onClick={() => router.push("/login")} className="font-roboto text-[14px] text-[#007BD4]">
              Masuk
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 bg-[#FFFAF4]">
        <div>
          <Image src={register} alt="Gambar Register" className="h-screen justify-center"></Image>
        </div>
      </div>
    </div>
  );
}
