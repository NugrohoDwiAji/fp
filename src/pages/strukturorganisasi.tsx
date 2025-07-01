
import React,{useEffect, useState} from "react";
import Image from "next/image";
import axios from 'axios';

type IdentitasType = {
  id: string;
  name: string;
  value: string;
};
export default function StrukturOrganisasi() {
   const [identitas, setIdentitas] = useState<IdentitasType[] | null>([])

  const handleGetIdentitas = async () => {
    try {
      const result = await axios.get("/api/identitas");
      setIdentitas(result.data);
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    handleGetIdentitas();
  }, [])
  
  return (
    <div>
      {/* jumbotron */}
      <div className="relative h-80 md:h-96 lg:h-[35rem]">
        <img src="/img/banner-1.png" alt="" className="w-full bg-cover h-full" />
       
      </div>

      {/* Main */}
      <main className="flex flex-col items-center pb-10 min-h-64 mt-10">
       <div className="text-center text-purple-900 ">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold">
            Struktur Organisasi
          </h1>
          <h2 className=" mt-3">
            Struktur Organisasi Fakultas Ekonomi dan Bisnis Universitas Bumigora
          </h2>
        </div>
      <Image src={identitas?.find((item) => item.name === "Struktur Organisasi")?.value || ""} alt="Struktur Organisasi" width={1000} height={1000} />
      </main>
    </div>
  );
}
