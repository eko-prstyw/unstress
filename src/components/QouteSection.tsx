import React from "react";

export default function QuoteSection() {
  return (
    <div className="pt-48 bg-[#f2f2f2] w-full">
      <div className="w-full h-[550px] bg-[url('/images/qoute-img/bg-qoutes.jpg')] bg-cover bg-[center_top_-14rem] flex justify-center items-center">
        <div className="text-primary-50 w-[60%] text-center">
          <p className="prose-stone font-robotoSlab text-4xl italic leading-relaxed">
            &quot;Stres adalah bagian alami dari kehidupan, tetapi bagaimana
            kita meresponnya adalah pilihan kita. Pilih untuk mengatasi stres
            dengan bijak dan membangun kehidupan yang lebih baik&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
