import React, { useState, useEffect } from "react";


export default function S2SastraInggris() {


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
            S2 Sastra Inggris
          </h1>
          <h2 className="text-white mt-3">
            S2 Sastra Inggris{" "}
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
            Program Magister Sastra Inggris di Universitas Bumigora didirikan
            dengan komitmen untuk memberikan kontribusi yang signifikan dalam
            pengembangan ilmu linguistik, sastra, dan budaya di Kawasan Timur
            Indonesia. Dengan mengacu pada visi universitas yang lebih luas,
            program ini bertujuan untuk mencapai keunggulan akademik dan sosial
            melalui pendekatan holistik dalam pendidikan, penelitian, dan
            pengabdian masyarakat. Visi ini dirancang untuk memfokuskan upaya
            program studi dalam memenuhi tuntutan global dan lokal di bidang
            sastra Inggris, serta mendukung pencapaian tujuan strategis
            universitas. Visi Program S2 Sastra Inggris "Menjadi program studi
            yang unggul dalam linguistik, sastra, dan budaya melalui pendidikan,
            penelitian, dan pengabdian kepada masyarakat pada tahun 2028 di
            Kawasan Timur Indonesia." Visi program S2 Sastra Inggris di
            Universitas Bumigora sejalan dengan visi universitas yang lebih
            luas, yakni menjadi perguruan tinggi unggulan yang berperan aktif
            dalam pengembangan ilmu pengetahuan dan teknologi serta ilmu sosial,
            seni budaya, dan kesehatan. Dalam konteks ini, visi program S2
            Sastra Inggris menekankan pada tiga pilar utama: pendidikan,
            penelitian, dan pengabdian masyarakat.
          </p>
        </div>
        <div>
          <h1 className="font-bold mt-10 text-xl md:text-2xl mb-2 text-purple-900">
            Misi
          </h1>
          <p className="text-lg indent-10">
            Misi Program S2 Sastra Inggris di Universitas Bumigora dirancang
            untuk mewujudkan visi program yang unggul dalam linguistik, sastra,
            dan budaya dengan pendekatan yang komprehensif dan terintegrasi.
            Dalam upaya untuk mendukung pencapaian tujuan strategis universitas
            dan memberikan dampak positif bagi masyarakat di Kawasan Timur
            Indonesia, program ini menetapkan beberapa misi kunci. Misi-misi ini
            mencakup beberapa hal antara lain sebagai berikut.
          </p>
          <ul className="text-lg list-decimal ml-5">
            <li>Melaksanakan pendidikan berbagai kegiatan akademik dan non-akademik yang membina lulusan magister Sastra Inggris agar memiliki pemahaman mendalam dalam konteks nasional dan global, sehingga mereka dapat bersaing secara efektif di Kawasan Timur Indonesia.</li>
            <li>Melaksanakan penelitian berkualitas tinggi dalam linguistik, sastra dan budaya yang inovatif sehingga hasil penelitian tersebut dapat menjadi hilirisasi penelitian di Kawasan Timur Indonesia. </li>
            <li>Melaksanakan kegiatan pengabdian kepada masyarakat yang relevan dengan bidang linguistik, sastra dan budaya yang dapat meningkatkan kualitas hidup masyarakat dan hilirisasi pengabdian kepada masyarakat di Kawasan Timur Indonesia.</li>
            <li> Melaksanakan kerjasama di bidang tri dharma.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
