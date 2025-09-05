import React, { useState, useEffect } from "react";
import axios from "axios";

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

export default function Visimisi() {
  const [content, setContent] = useState<ContentType[] | null>([]);
  const [identitas, setIdentitas] = useState<IdentitasType[] | null>([]);

  const handleGetIdentitas = async () => {
    try {
      const result = await axios.get("/api/identitas");
      setIdentitas(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetContent = async () => {
    try {
      const result = await axios.get("/api/content");
      setContent(result.data);
    } catch (error) {}
  };

  const misiContent =
    content?.find((item: ContentType) => item.title === "Misi")?.value || "";

  const formattedContent = misiContent
      .split(/(?=\d+\.)/) // Pisahkan sebelum angka
  .map(item => item.replace(/^\d+\.\s*/, '').trim()) // Hapus nomor dan spasi setelahnya
  .filter(item => item.length > 0); // Hapus item kosong jika ada

  useEffect(() => {
    handleGetIdentitas();
    handleGetContent();
  }, []);

  return (
    <div className="">
      {/* jumbotron */}
      <div className="relative h-44 md:h-96 lg:h-[43rem] ">
        <img
          src="/img/banner-fp.png"
          alt=""
          className="w-full bg-cover h-full"
        />
        <div className="absolute top-16 md:top-32 lg:top-72 left-0 right-0 flex flex-col justify-center p-5 md:p-10 -mt-9 md:-mt-20 lg:-mt-36 leading-2 md:leading-3 lg:leading-4">
          <h1 className="text-white text-shadow-lg/30 w-fit text-3xl md:text-5xl lg:text-6xl font-bold">
            Visi Dan Misi
          </h1>
          <h2 className="text-white text-shadow-lg/10 font-semibold mt-3">
            Visi dan Misi{" "}
            {identitas?.find((item) => item.name === "Nama Fakultas")?.value}{" "}
            Universitas Bumigora
          </h2>
        </div>
      </div>
      <div className="text-yellow-400 text-shadow-lg/20 text-center mt-10 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Visi dan Misi
        </h1>
      </div>

      {/* main */}
      <main className="px-5 text-justify my-10 md:my-12 md:max-w-xl lg:max-w-4xl m-auto ">
        <div>
          <h1 className="font-bold text-xl md:text-2xl mb-2 text-yellow-400 text-shadow-lg">
            Visi
          </h1>
          <p className="text-lg">
            {content?.find((item) => item.title === "Visi")?.value}
          </p>
        </div>
        <div>
          <h1 className="font-bold mt-10 text-xl md:text-2xl mb-2 text-yellow-400 text-shadow-lg whitespace-pre-line">
            Misi
          </h1>
          <ul className="space-y-2 text-lg text-justify list-decimal ml-5 ">
            {formattedContent.map((item, index) => (
               <li key={index}>{item}</li> 
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
