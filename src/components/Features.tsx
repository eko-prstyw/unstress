import React from "react";

export default function Features() {
  return (
    <>
      <h1 className="mb-11 text-7xl text-center font-bold font-robotoSlab">Fitur UnStress</h1>
      <div className="w-[1240px] h-[355px] mx-auto py-20 bg-gray-400 mb-16">
        <div className="w-[1080px] flex justify-between mx-auto bg-gray-200">
          <div className="grid grid-cols-1 content-between">
            <h2 className="text-2xl font-robotoSlab">Fitur</h2>
            <h2 className="text-7xl font-bold font-robotoSlab">
              Chat
              <br />
              Anonim
            </h2>
          </div>
          <div className="w-[625px]">
            <p className="text-justify text-2xl mb-6">Fitur Chat Anonim adalah salah satu aspek penting dari layanan kami yang dirancang untuk memberikan dukungan dan konsultasi yang aman bagi individu yang mengalami stres.</p>
            <div className="w-full grid justify-items-stretch">
              <button className="bg-blue-400 h-14 text-white rounded-xl shadow-lg py-2 px-4 justify-self-end">Coba Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1240px] h-[355px] mx-auto py-20 bg-gray-400">
        <div className="w-[1080px] flex justify-between mx-auto bg-gray-200">
          <div className="grid grid-cols-1 content-between">
            <h2 className="text-2xl font-robotoSlab">Fitur</h2>
            <h2 className="text-7xl font-bold font-robotoSlab">
              Chat
              <br />
              Anonim
            </h2>
          </div>
          <div className="w-[625px]">
            <p className="text-justify text-2xl mb-6">Fitur Chat Anonim adalah salah satu aspek penting dari layanan kami yang dirancang untuk memberikan dukungan dan konsultasi yang aman bagi individu yang mengalami stres.</p>
            <div className="w-full grid justify-items-stretch">
              <button className="bg-blue-400 h-14 text-white rounded-xl shadow-lg py-2 px-4 justify-self-end">Coba Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
