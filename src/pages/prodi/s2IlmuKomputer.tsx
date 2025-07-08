import React, { useState, useEffect } from "react";
import axios from "axios";

interface Prodi {
  id: string;
  nama: string;
  link: string;
  visi: string;
  misi: string;
}

export default function S2IlmuKomputer() {
  const [prodi, setProdi] = useState<Prodi[]>([]);
  const handleGetProdi = async () => {
    try {
      const result = await axios.get("/api/prodi");
      setProdi(result.data);
    } catch (error) {
      console.log(error, "eror");
    }
  };

  const misiContent =
    prodi?.find((item: Prodi) => item.nama === "S2 Ilmu Komputer")?.misi || "";

  const formattedContent = misiContent
    .split(/(?=\d+\.)/) // Pisahkan sebelum angka
    .map((item) => item.replace(/^\d+\.\s*/, "").trim()) // Hapus nomor dan spasi setelahnya
    .filter((item) => item.length > 0); // Hapus item kosong jika ada

  const dataMap = formattedContent.slice(1);

  useEffect(() => {
    handleGetProdi();
  }, []);

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
            S2 Ilmu Komputer Universitas Bumigora
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
            {prodi.find((item) => item.nama === "S2 Ilmu Komputer")?.visi}
          </p>
        </div>
        <div>
          <h1 className="font-bold mt-10 text-xl md:text-2xl mb-2 text-purple-900">
            Misi
          </h1>
          <p className="space-y-2 text-lg text-justify indent-10 mb-5">
            {formattedContent[0]}
          </p>
          <ul className="space-y-2 text-lg text-justify list-decimal ml-5 ">
            {dataMap.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
