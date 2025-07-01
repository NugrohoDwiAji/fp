import CardBerkas from "@/components/cards/CardBerkas";
import React,{useEffect, useState} from "react";
import axios from "axios";

type Berkas = {
  id : string,
  title : string,
  filepath : string,
  uploadat : string
}

export default function Unduhan() {
  const [berkas, setberkas] = useState<Berkas[]>([]);


const handleBerkas = async() => {
  try {
    const response = await axios.get('/api/berkas');
    setberkas(response.data);
  } catch (error) {
    console.log(error);
  }
}


useEffect(() => {
 handleBerkas();
}, [])

  return (
    <div className="min-h-screen">
      <div className="relative h-80 md:h-96 lg:h-[35rem]">
        <img
          src="/img/banner-1.png"
          alt=""
          className="w-full bg-cover h-full"
        />
      </div>
        <div className="text-purple-900 text-center mt-10">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold">
            Unduhan
          </h1>
          <h2 className=" mt-3">
            Berkas-Berkas penting yang dapat di unduh
          </h2>
        </div>

      {/* Main */}
      <main className="flex flex-col items-center min-h-64">
        <div className="flex gap-5 flex-wrap justify-center">
         {
          berkas.map((item) => (
            <CardBerkas key={item.id} title={item.title} link={item.filepath} />
          ))
         }
        </div>
      </main>
    </div>
  );
}
