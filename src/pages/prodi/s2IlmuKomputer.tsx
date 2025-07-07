import React, { useState, useEffect } from "react";


export default function S2IlmuKomputer() {


 


  return (
    <div className="min-h-screen">
      <div className="relative h-80 md:h-96 lg:h-[35rem]">
        <img
          src="/img/banner-pasca.png"
          alt=""
          className="w-full bg-cover h-full"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-10 -mt-9 md:-mt-20 lg:-mt-36">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
            S2 Ilmu Komputer
          </h1>
          <h2 className="text-white mt-3">
            S2 Ilmun Komputer{" "}
            Universitas Bumigora
          </h2>
        </div>
      </div>

      <div className="text-purple-900 text-center mt-10 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Visi & Misi
        </h1>
      </div>
      {/* Main */}
      <main className="px-5 text-justify my-10 md:my-12 md:max-w-xl lg:max-w-4xl m-auto ">
        <div>
          <h1 className="font-bold text-xl md:text-2xl mb-2 text-purple-900">
            Visi
          </h1>
          <p className="text-lg indent-10">
            Program S2 Ilmu Komputer di Universitas Bumigora didirikan dengan
            tujuan untuk memberikan kontribusi signifikan dalam pengembangan
            teknologi dan ilmu komputer, khususnya di Kawasan Timur Indonesia.
            Berlandaskan pada visi universitas, program ini berkomitmen untuk
            mencapai keunggulan akademik dan inovasi teknologi melalui
            pendidikan, penelitian, dan pengabdian kepada masyarakat. Visi ini
            dirancang untuk mengarahkan fokus program studi pada upaya memenuhi
            kebutuhan nasional dan global dalam bidang ilmu komputer, terutama
            dalam pengembangan sistem cerdas dan rekayasa perangkat lunak,
            sekaligus mendukung pencapaian tujuan strategis universitas. Visi S2
            Ilmu Komputer "Menjadi program studi magister yang menghasilkan
            lulusan yang unggul, inovatif, dan berintegritas di bidang ilmu
            komputer, khususnya dalam pengembangan sistem cerdas dan rekayasa
            perangkat lunak, serta berperan aktif di tingkat nasional dan
            internasional pada tahun 2028." Visi program S2 Ilmu Komputer
            Universitas Bumigora ini selaras dengan visi universitas yang lebih
            luas, yaitu menjadi perguruan tinggi unggulan dalam pengembangan
            ilmu pengetahuan dan teknologi. Dalam konteks ini, visi program S2
            Ilmu Komputer menitikberatkan pada tiga pilar utama: pendidikan
            berkualitas, penelitian inovatif, dan pengabdian kepada masyarakat,
            dengan fokus pada menciptakan solusi cerdas dan teknologi perangkat
            lunak yang relevan di era digital.
          </p>
        </div>
        <div>
          <h1 className="font-bold mt-10 text-xl md:text-2xl mb-2 text-purple-900">
            Misi
          </h1>
          <p className="text-lg indent-10">
            Misi S2 Ilmu komputer di Universitas Bumigora dirancang untuk
            mewujudkan visi program yang unggul dalam linguistik, sastra, dan
            budaya dengan pendekatan yang komprehensif dan terintegrasi. Dalam
            upaya untuk mendukung pencapaian tujuan strategis universitas dan
            memberikan dampak positif bagi masyarakat di Kawasan Timur
            Indonesia, program ini menetapkan beberapa misi kunci. Misi-misi ini
            mencakup beberapa hal antara lain sebagai berikut
          </p>
          <ul className="text-lg list-decimal ml-5">
            <li>
              Melaksanakan pendidikan yang berkualitas untuk menghasilkan
              lulusan lulusan yang unggul dan memiliki keahlian yang mendalam,
              terutama dalam research pada bidang sistem cerdas dan rekayasa
              perangkat lunak, dengan fokus pada penguasaan pengetahuan dan
              keterampilan praktis yang relevan.
            </li>
            <li>
              Melaksanakan dan mengembangkan penelitian yang kompetitif dan
              bersifat kolaboratif di dalam bidang Ilmu Komputer, dengan
              penekanan pada relevansi hasil penelitian dengan kebutuhan
              masyarakat, sehingga dapat memberikan kontribusi pada pengembangan
              teknologi dan inovasi yang bermanfaat secara nasional dan
              internasional.
            </li>
            <li>
              Melaksanakan dan mengembangkan kegiatan pengabdian kepada
              masyarakat yang sesuai dengan kebutuhan nasional yang dapat
              memberikan solusi teknologi dan keahlian komputer untuk menjawab
              tantangan dan kebutuhan masyarakat, sehingga program studi dapat
              menjadi agen perubahan yang positif dalam pembangunan masyarakat.
            </li>
            <li>
              Melaksanakan kerjasama di bidang tri dharma berskala nasional dan
              internasional.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
