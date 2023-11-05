import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="mx-[100px]">
        <div className="flex justify-between h-[90px]">
          <div className="w-40 h-full text-4xl leading-[90px] text-center font-bold text-blue-300">UnStress</div>
          <div className="w-3/5">
            <li className="flex gap-16 justify-center items-center h-full">
              <ul className="hover:scale-105 hover:border-b-2 hover:border-black hover:pb-1 transition-all">
                <a href="#">Beranda</a>
              </ul>
              <ul className="hover:scale-105 hover:border-b-2 hover:border-black hover:pb-1 transition-all">
                <a href="#">Artikel</a>
              </ul>
              <ul className="hover:scale-105 hover:border-b-2 hover:border-black hover:pb-1 transition-all">
                <a href="#">Chat Anonim</a>
              </ul>
              <ul className="hover:scale-105 hover:border-b-2 hover:border-black hover:pb-1 transition-all">
                <a href="#">Relaksasi Audio</a>
              </ul>
              <ul className="hover:scale-105 hover:border-b-2 hover:border-black hover:pb-1 transition-all">
                <a href="#">Tentang Kami</a>
              </ul>
            </li>
          </div>
          <div className="flex w-56 h-full justify-center items-center">
            <button className="px-8 py-3 bg-blue-400 text-white rounded-xl w-[113px]">Masuk</button>
          </div>
        </div>
      </nav>
      <hr className="border-b-[3px] border-gray-200 shadow-xl" />
    </div>
  );
}
