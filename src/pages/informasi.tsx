import React, { useEffect, useState } from "react";
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

const Informasi = () => {
const [dataContent, setdataContent] = useState<ContentType[]>([])
const [identitas, setIdentitas] = useState<IdentitasType[] | null>([])


  const handleGetIdentitas = async () => {
    try {
      const result = await axios.get("/api/identitas");
      setIdentitas(result.data);
    } catch (error) {
      console.log(error)
    }
  };

  const handleGetContent = async () => {
    try {
      const result = await axios.get("/api/content");
      setdataContent(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    handleGetContent();
    handleGetIdentitas();
  }, []);


  return (
    <div className="min-h-screen">
      <div className="relative h-80 md:h-96 lg:h-[43rem]">
        <img
          src="/img/banner-fp.png"
          alt=""
          className="w-full bg-cover h-full"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-10 -mt-9 md:-mt-20 lg:-mt-36">
          <h1 className="text-white text-shadow-lg/20  w-fit text-3xl md:text-5xl lg:text-6xl font-bold">
            Informasi
          </h1>
          <h2 className="text-white text-shadow-lg mt-3">
            Informasi {identitas?.find((item) => item.name === "Nama Fakultas")?.value} Universitas Bumigora
          </h2>
        </div>
      </div>
      <div className="text-yellow-400 text-shadow-lg/20 text-center mt-10 ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Informasi
        </h1>
    
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
