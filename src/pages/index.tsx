import React, { useState, useEffect } from "react";
import TenagaKerja from "../components/datas/TenagaKerja.json";
import CardBerita from "../components/cards/CardBerita";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import CardPrestasi from "@/components/cards/CardPrestasi";
import axios from "axios";
import CardPengumuman from "@/components/cards/CardPengumuman";
import { set } from "date-fns";

type ContentType = {
  id: string;
  title: string;
  value: string;
};

type IdentitasType = {
  id: string;
  name: string;
  value: string;
};

type PengumumanType = {
  id: string;
  title: string;
  file_path: string;
  uploadat: string;
};

export default function Home() {
  const [dataContent, setdataContent] = useState<ContentType[]>([]);
  const [identitas, setIdentitas] = useState<IdentitasType[]>([]);
  const [dataPengumuman, setDataPengumuman] = useState<PengumumanType[]>([]);

  const handleGetIdentitas = async () => {
    try {
      const result = await axios.get("/api/identitas");
      setIdentitas(result.data);
    } catch (error) {}
  };

  const handleGetContent = async () => {
    try {
      const result = await axios.get("/api/content");
      setdataContent(result.data);
    } catch (error) {}
  };

  const handleGetPengumuman = async () => {
    try {
      const result = await axios.get("/api/pengumuman");
      setDataPengumuman(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetIdentitas();
    handleGetContent();
    handleGetPengumuman();
    axios.get("/api/track", { params: { url: "/" } }).catch((err) => {
      console.log("Tracking error:", err);
    });
  }, []);

  console.log("ini title", dataContent);
  return (
    <div className="">
      {/* Banner */}
      <div className="bg-[url(/img/bg-kampus.jpg)] h-[18rem] md:h-[31rem] lg:h-[40rem] bg-cover bg-center ">
        <div className="h-full w-full bg-blue-950/80 flex px-5 md:px-12 lg:px-20 items-center md:justify-between ">
          <div className="w-[50%] flex flex-col gap-2 ">
            <h1 className=" font-bold text-white md:text-2xl lg:text-4xl uppercase">
              {identitas?.find((item) => item.name === "Nama Fakultas")?.value}
              <br /> UNIVERSITAS BUMIGORA
            </h1>
            <p className="text-[8px] md:text-sm lg:text-lg text-white hidden md:block lg:w-96">
              {dataContent?.find((item) => item.title === "Tagline")?.value}
            </p>
            <ButtonPrimary
              ClassName="mt-2 md:mt-5 border-2 border-white text-white "
              onClick={() => {}}
            >
              Daftar Sekarang
            </ButtonPrimary>
          </div>
          {/* <div className="lg:w-[40%] w-[50%] flex justify-center">
            <img
              src="/img/mahasiswa.png"
              alt=""
              className="h-[11rem] md:h-[24rem] lg:h-[28rem]"
            />
          </div> */}
        </div>
      </div>

      {/* Tentang Fakultas */}
      <div className="flex flex-col items-center p-5 gap-5 lg:h-[40rem]">
        <h1 className="text-xl lg:text-2xl font-bold lg:mt-10  text-blue-950">
          Tentang Fakultas
        </h1>
        <hr className="border-t-[3px] border-blue-950 w-[50%] md:w-[25%] lg:w-[14%] lg:mb-5 " />
        <div className="md:flex gap-5 justify-between lg:px-14 md:h-[28rem] pb-10">
          <div className="h-full flex items-center justify-center w-[40%] ">
            <img
              src="/img/mahasiswa.png"
              alt=""
              className="hidden md:block md:h-64 lg:h-96 w-1/2"
            />
          </div>
          <div className="md:w-[45%] h-full flex flex-col gap-5 justify-center">
            <p className="text-justify indent-10 max-h-[23rem] truncate text-wrap">
              {dataContent?.find((item) => item.title === "Tentang Fakultas")
                ?.value            }
            </p>
            <ButtonPrimary
              ClassName="bg-blue-950 text-white hover:text-blue-950 hover:bg-white hover:border-2 hover:border-blue-950 font-semibold ease-in-out duration-300 transition-all"
              onClick={() => {}}
            >
              Selengkapnya
            </ButtonPrimary>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="h-fit bg-[url(/img/bg-kampus.jpg)] bg-center bg-cover">
        <div className="bg-blue-950/95 h-full text-white font-bold flex justify-center items-center gap-6 md:gap-20 lg:gap-36 py-3 md:py-12 px-4 flex-wrap md:flex-row  ">
          <div className="flex gap-2 items-center md:gap-4">
            <h1 className="text-2xl md:text-5xl lg:text-6xl ">
              {
                identitas?.find((item) => item.name === "Banyak Program Studi")
                  ?.value
              }
            </h1>
            <h1 className="md:text-lg lg:text-2xl">Program Studi</h1>
          </div>
          <div className="flex gap-2 items-center md:gap-4">
            <h1 className="text-2xl md:text-5xl lg:text-6xl ">
              {identitas?.find((item) => item.name === "Banyak Dosen")?.value}
            </h1>
            <h1 className="md:text-lg lg:text-2xl">Lecturer</h1>
          </div>
          <div className="flex gap-2 items-center md:gap-4">
            <h1 className="text-2xl md:text-5xl lg:text-6xl ">
              {identitas?.find((item) => item.name === "Banyak Staf")?.value}
            </h1>
            <h1 className="md:text-lg lg:text-2xl">Staf</h1>
          </div>
        </div>
      </div>

      {/* Berita */}
      <div className="flex flex-col items-center py-5 lg:py-10 bg-white gap-5 h-fit">
        <h1 className="text-xl lg:text-2xl font-bold text-blue-950">Berita</h1>
        <hr className="border-t-[3px] border-blue-950 w-[20%] md:w-[15%] lg:w-[6%]  mb-5" />
        <div className="flex gap-10 flex-wrap justify-center">
          <CardBerita />
          <CardBerita />
        </div>
      </div>

      {/* Information */}
      <div className="h-fit bg-[url(/img/bg-kampus.jpg)] bg-center bg-cover">
        <div className="bg-blue-950/95 h-full flex justify-center items-center gap-6 md:gap-20 lg:gap-36 py-3 md:py-12 px-4 flex-wrap md:flex-row  ">
          <div className="flex flex-col items-center">
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              Pengumuman
            </h1>
            <hr className="border-t-[3px] border-white w-[50%] md:w-[30%]  mt-5" />
            <div className="flex flex-col gap-5 md:flex-row mt-10 flex-wrap justify-center">
              {dataPengumuman.map((item, index) => (
                <CardPengumuman key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Kenapa Kami */}
      <div className="flex justify-center items-center py-5 bg-white gap-5 h-fit">
        <img src="/img/ubg-full.jpg" alt="eror" className=" h-28 md:h-48" />
        <div className="h-32 w-[2px] bg-blue-950 mx-2"></div>
        <img src="/img/banpt.png" alt="eror" className="h-20 md:h-36" />
      </div>
    </div>
  );
}
