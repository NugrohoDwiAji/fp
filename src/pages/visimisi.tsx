import React,{useState, useEffect} from "react";
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
  const [content, setContent] = useState<ContentType[] | null>([])
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
    setContent(result.data);
  } catch (error) {}
};

useEffect(() => {
  handleGetIdentitas();
  handleGetContent();
}, []);


  return (
    <div className="">
      {/* jumbotron */}
      <div className="relative h-80 md:h-96 lg:h-[35rem] ">
        <img src="/img/banner-1.png" alt="" className="w-full bg-cover h-full" />
      </div>
      <div className="m-auto text-center mt-10">
          <h1 className="text-purple-900 text-3xl md:text-5xl lg:text-6xl font-bold">
            Visi Dan Misi
          </h1>
          <h2 className="text-purple-900 mt-3">
            Visi dan Misi Fakultas Ekonomi dan Bisnis Universitas Bumigora
          </h2>
      </div>
      {/* main */}
      <main className="px-5 text-justify my-10 md:my-12 md:max-w-xl lg:max-w-4xl m-auto ">
        <div>
          <h1 className="font-bold text-xl md:text-2xl mb-2 text-purple-900">Visi</h1>
          <p className="text-lg">
            {content?.find((item) => item.title === "Visi")
                ?.value}
          </p>
        </div>
        <div>
          <h1 className="font-bold mt-10 text-xl md:text-2xl mb-2 text-purple-900">Misi</h1>
          <p className="text-lg">
           {content?.find((item) => item.title === "Misi")
                ?.value}
          </p>
        </div>
      </main>
    </div>
  );
}
