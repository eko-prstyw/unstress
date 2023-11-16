import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full flex grid-cols-4 justify-between items-stretch py-5 bg-[#091117] px-[100px]">
        <div className="self-center">
          <h1 className="text-6xl font-extrabold text-white font-robotoSlab">UnStress</h1>
        </div>
        <div className="w-64">
          <h1 className="text-3xl mb-2 font-bold text-white font-roboto">Tentang Kami</h1>
          <p className="text-md font-light text-white font-robotoSlab">Kami di Unstress bertekad membantu Anda mengatasi stres dan masalah kesehatan mental dengan menyediakan alat dan dukungan yang Anda butuhkan...</p>
          <a href="#" className="underline text-tertiary-700 text-base">
            Baca Selengkapnya
          </a>
        </div>
        <div className="w-56">
          <h1 className="text-3xl mb-2 font-bold text-white font-roboto">Tautan Website</h1>
          <div>
            <a href="#" className="text-tertiary-700 font-robotoSlab">
              Beranda
            </a>
          </div>
          <div>
            <a href="#" className="text-tertiary-700 font-robotoSlab">
              Artikel
            </a>
          </div>
          <div>
            <a href="#" className="text-tertiary-700 font-robotoSlab">
              Chat Anonim
            </a>
          </div>
          <div>
            <a href="#" className="text-tertiary-700 font-robotoSlab">
              Audio Relaksasi
            </a>
          </div>
          <div>
            <a href="#" className="text-tertiary-700 font-robotoSlab">
              Apa Kata Mereka
            </a>
          </div>
          <div>
            <a href="#" className="text-tertiary-700 font-robotoSlab">
              Tentang Kami
            </a>
          </div>
        </div>
        <div className="">
          <div className="mb-11">
            <h1 className="text-2xl font-bold text-white font-roboto">Hubungi Kami</h1>
            <div className="text-white text-xl flex gap-1 items-center">
              <FaEnvelope />
              <div className="text-quaternary-700 text-base font-robotoSlab">
                <a href="#">unstress2023@gmail.com</a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white font-roboto">Sosial Media</h1>
            <div className="text-white text-xl flex gap-1 items-center">
              <FaInstagram />
              <div className="text-quaternary-700 text-base font-robotoSlab">
                <a href="#">unstress.id</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#091117]">
        <p className="text-center opacity-50 text-white">{"\u00A9"} UnStress, All Rights Reserved</p>
      </div>
    </>
  );
}
