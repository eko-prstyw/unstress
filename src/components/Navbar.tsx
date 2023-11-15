import React from "react";

export default function Navbar() {
  return (
    <nav className="shadow-md px-[100px] bg-white top-0 fixed w-full z-50">
      <div className="flex h-[90px]">
        <div className="text-4xl leading-[90px] text-center font-bold text-primary">UnStress</div>
        <div className="w-3/5 grow text-lg">
          <li className="flex gap-16 justify-center items-center h-full">
            <ul className="hover:scale-110 transition-all">
              <a href="#" className="hover:underline hover:decoration-primary hover:underline-offset-8 transition-all">
                Berand
              </a>
            </ul>
            <ul className="hover:scale-110 transition-all">
              <a href="#" className="hover:underline hover:decoration-primary hover:underline-offset-8 transition-all">
                Artikel
              </a>
            </ul>
            <ul className="hover:scale-110 transition-all">
              <a href="#" className="hover:underline hover:decoration-primary hover:underline-offset-8 transition-all">
                Chat Anonim
              </a>
            </ul>
            <ul className="hover:scale-110 transition-all">
              <a href="#" className="hover:underline hover:decoration-primary hover:underline-offset-8 transition-all">
                Relaksasi Audio
              </a>
            </ul>
            <ul className="hover:scale-110 transition-all">
              <a href="#" className="hover:underline hover:decoration-primary hover:underline-offset-8 transition-all">
                Tentang Kami
              </a>
            </ul>
          </li>
        </div>
        <div className="flex h-full items-center">
          <button className="px-8 py-2 font-roboto bg-secondary text-white rounded-xl">Masuk</button>
        </div>
      </div>
    </nav>
  );
}
