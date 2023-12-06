import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";

export default function DetailArticle() {
  const router = useRouter();
  return (
    <div>
      <div className="w-full mt-[90px]">
        <div className="bg-[url('/images/hero-img/woman-exercise.jpg')] bg-cover bg-[center_top_-15rem] h-[557px]"></div>
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-chill p-7">
          <h1 className="font-robotoSlab font-semibold text-3xl">
            Table of Contents
          </h1>
          <ol className="font-roboto text-primary">
            <li>
              <a href="#">1. Pengertian Yoga</a>
            </li>
            <li>
              <a href="#">2. Manfaat Yoga</a>
            </li>
            <li>
              <a href="#">3. Tips Yoga yang Baik</a>
            </li>
            <li>
              <a href="#">4. Kesimpulan</a>
            </li>
          </ol>
        </div>
        <div className="col-span-2 p-7 text-justify">
          <h1 className="font-robotoSlab font-semibold text-3xl">
            Redakan Stress Anda Dengan Yoga
          </h1>
          <h2 className="prose">
            <i>by</i> Puan Mahabanteng | 30 Agustus Tahun Gajah
          </h2>
          <p>
            Yoga telah menjadi lebih dari sekadar tren kesehatan dan kebugaran,
            tetapi merupakan suatu gaya hidup yang sangat dipuja. Berasal dari
            India kuno, yoga adalah latihan yang menggabungkan gerakan tubuh,
            pernapasan, dan meditasi untuk mencapai keseimbangan fisik dan
            mental. Selain itu, yoga telah terbukti memberikan sejumlah manfaat
            kesehatan yang luar biasa. Dalam artikel ini, kita akan membahas
            beberapa manfaat utama yoga dan memberikan beberapa tips untuk
            memulai dan menjalani latihan yoga yang baik.
          </p>
          <br />
          <p>
            Manfaat Yoga: Meningkatkan Fleksibilitas dan Kekuatan: Latihan yoga
            terdiri dari serangkaian gerakan dan posisi yang dirancang untuk
            merenggangkan dan menguatkan otot-otot tubuh. Ini membantu
            meningkatkan fleksibilitas dan kekuatan tubuh secara keseluruhan.
            Mengurangi Stres: Salah satu manfaat paling terkenal dari yoga
            adalah kemampuannya untuk mengurangi stres. Praktik yoga yang fokus
            pada pernapasan dan meditasi dapat membantu meredakan ketegangan dan
            meningkatkan perasaan kesejahteraan. Meningkatkan Postur Tubuh: Yoga
            membantu Anda menjadi lebih sadar akan postur tubuh Anda. Dengan
            melatih postur yang baik, Anda dapat mencegah masalah postur dan
            nyeri punggung. Meningkatkan Konsentrasi dan Kepemahaman Diri: Yoga
            juga merupakan bentuk meditasi gerak. Ini membantu meningkatkan
            konsentrasi, fokus, dan pemahaman diri. Anda akan lebih terhubung
            dengan tubuh dan pikiran Anda. Meningkatkan Kesehatan Jantung:
            Beberapa jenis yoga yang lebih dinamis dapat membantu meningkatkan
            kesehatan jantung dengan meningkatkan sirkulasi darah, menurunkan
            tekanan darah, dan mengurangi risiko penyakit kardiovaskular.
            Meningkatkan Kualitas Tidur: Yoga dapat membantu mengatasi masalah
            tidur. Latihan pernapasan dan meditasi yang dilakukan dalam yoga
            dapat membantu Anda tidur lebih nyenyak.
          </p>
          <br />
          <p>
            Tips Yoga yang Baik: Konsultasikan dengan Dokter: Sebelum memulai
            latihan yoga, sangat penting untuk berkonsultasi dengan dokter
            terutama jika Anda memiliki masalah kesehatan yang mendasar seperti
            cedera atau kondisi medis tertentu. Temukan Instruktur yang
            Berpengalaman: Jika Anda seorang pemula, disarankan untuk belajar
            yoga dengan seorang instruktur berpengalaman. Mereka dapat
            memastikan Anda melakukan gerakan dengan benar dan aman. Mulai
            dengan Yang Sederhana: Jangan terlalu terburu-buru untuk mencoba
            gerakan yoga yang paling sulit. Mulailah dengan pose dasar dan
            perlahan-lahan tingkatkan kesulitan seiring berjalannya waktu.
            Pusatkan pada Pernapasan: Pernapasan adalah aspek penting dari yoga.
            Selalu berfokus pada pernapasan Anda saat melakukan gerakan. Ini
            akan membantu mengurangi stres dan meningkatkan konsentrasi. Jangan
            Terlalu Keras pada Diri Sendiri: Jangan memaksakan diri untuk
            mencapai posisi yang sulit. Setiap orang memiliki batas fisiknya
            sendiri. Terimalah diri Anda apa adanya dan berlatih dengan sabar.
            Konsistensi adalah Kunci: Manfaat yoga akan terasa lebih nyata jika
            Anda melakukannya secara teratur. Cobalah untuk membuat jadwal yang
            konsisten untuk latihan yoga Anda. Beristirahat dan Minum Air:
            Jangan lupakan istirahat antara gerakan dan pastikan untuk minum air
            yang cukup selama latihan untuk menjaga tubuh tetap terhidrasi.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full px-[100px]">
        <div className="flex justify-between">
          <h1 className="font-robotoSlab font-semibold text-4xl">
            Rekomendasi Untuk Anda
          </h1>
          <button
            onClick={() => router.push("/artikel")}
            className="border border-primary text-primary py-[9px] px-[16px] rounded-xl hover:bg-primary hover:text-white hover:scale-95 transition-all"
          >
            Lihat Semua
          </button>
        </div>
        <div className="w-full mt-5 gap-2 grid grid-cols-3">
          <div className="bg-white p-2 rounded-xl shadow-xl group hover:scale-95 transition-transform">
            <div className="bg-[url('/images/card-img/card1.jpeg')] bg-[center_top_-5rem] bg-cover h-96 rounded-xl"></div>
            <p className="text-lg mt-2 font-medium font-robotoSlab text-primary">
              10 Oktober 2023
            </p>
            <h1 className="font-bold font-roboto text-2xl">
              Mengatasi Stres: Tips Ampuh Untuk Hidup Lebih Bahagia
            </h1>
            <a
              href="#"
              className="flex gap-2 items-center text-xl mt-3 group-hover:underline group-hover:text-primary transition-all"
            >
              Baca Selengkapnya
              <div className="group-hover:translate-x-2 group-hover:scale-125 group-hover:animate-sideBounce transition-all">
                <BsArrowRight />
              </div>
            </a>
          </div>
          <div className="bg-white p-2 rounded-xl shadow-xl group hover:scale-95 transition-transform">
            <div className="bg-[url('/images/card-img/car2.jpeg')] bg-[center_left_-1.5rem] bg-cover h-96 rounded-xl"></div>
            <p className="text-lg mt-2 font-medium font-robotoSlab text-primary">
              25 September 2023
            </p>
            <h1 className="font-bold font-roboto text-2xl">
              Mengatasi Stres: Tips Ampuh Untuk Hidup Lebih Bahagia
            </h1>
            <a
              href="#"
              className="flex gap-2 items-center text-xl mt-3 group-hover:underline group-hover:text-primary transition-all"
            >
              Baca Selengkapnya
              <div className="group-hover:translate-x-2 group-hover:scale-125 group-hover:animate-sideBounce transition-all">
                <BsArrowRight />
              </div>
            </a>
          </div>
          <div className="bg-white p-2 rounded-xl shadow-xl group hover:scale-95 transition-transform">
            <div className="bg-[url('/images/card-img/card3.jpeg')] bg-[center_left_-1.5rem] bg-cover h-96 rounded-xl"></div>
            <p className="text-lg mt-2 font-medium font-robotoSlab text-primary">
              20 September 2023
            </p>
            <h1 className="font-bold font-roboto text-2xl">
              Mengatasi Stres: Tips Ampuh Untuk Hidup Lebih Bahagia
            </h1>
            <a
              href="#"
              className="flex gap-2 items-center text-xl mt-3 group-hover:underline group-hover:text-primary transition-all"
            >
              Baca Selengkapnya
              <div className="group-hover:translate-x-2 group-hover:scale-125 group-hover:animate-sideBounce transition-all">
                <BsArrowRight />
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
