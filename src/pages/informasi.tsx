import React, { useEffect, useState } from "react";
import axios from "axios";

type ContentType = {
  id: string;
  title: string;
  value: string;
};

const Informasi = () => {
const [dataContent, setdataContent] = useState<ContentType[]>([])

  const handleGetContent = async () => {
    try {
      const result = await axios.get("/api/content");
      setdataContent(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetContent();
  }, []);


  return (
    <div className="min-h-screen">
      <div className="relative h-80 md:h-96 lg:h-[35rem]">
        <img
          src="/img/banner-1.png"
          alt=""
          className="w-full bg-cover h-full"
        />
      </div>
      <div className="text-purple-900 text-center mt-10 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Informasi
        </h1>
        <h2 className="mt-3">Informasi Fakultas</h2>
      </div>

      {/* Main */}
      <main className="lg:w-[800px] m-auto">
        <p className="indent-10 text-gray-900 mt-5 mb-10 text-justify lg:text-lg">
           {

                dataContent?.find((item) => item.title === "Tentang Fakultas")
                  ?.value
              }
        </p>
      </main>
    </div>
  );
};

export default Informasi;
