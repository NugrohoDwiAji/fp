import React, { useEffect, useState } from "react";
import axios from "axios";
import CardDosen from "@/components/cards/CardDosen";

type IdentitasType = {
  id: string;
  name: string;
  value: string;
};

type Data = {
  id: string;
  nama: string;
  nik: string;
  foto: string;
  uploadat: string;
};

export default function Dosen() {
  const [identitas, setIdentitas] = useState<IdentitasType[] | null>([]);
  const [datas, setDatas] = useState<Data[]>([]);

  const handleGetIdentitas = async () => {
    try {
      const result = await axios.get("/api/identitas");
      setIdentitas(result.data);
    } catch (error) {
      console.log(error);
    }
  };
    const handleGet = async () => {
    try {
      const result = await axios.get("/api/dosen");
      setDatas(result.data);
    } catch (error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    handleGetIdentitas();
    handleGet();
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
            Daftar Dosen 
          </h1>
          <h2 className="text-white mt-3">
            Daftar Dosen
            {identitas?.find((item) => item.name === "Nama Fakultas")?.value}{" "}
            Universitas Bumigora
          </h2>
        </div>
      </div>

      <div className="text-purple-900 text-center mt-10 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Dosen</h1>
      </div>
      {/* Main */}
      <main className="flex  items-center min-h-64 py-10">
        <div className="flex gap-5 flex-wrap justify-center">
        {datas.map((item) => (
          <CardDosen
            key={item.id}
            nama={item.nama}
            nik={item.nik}
            foto={item.foto}
          />
        ))}
        </div>
      </main>
    </div>
  );
}
