import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { data } from 'framer-motion/client';
import CardFaq from '@/components/cards/CardFaq';


type IdentitasType = {
  id: string;
  name: string;
  value: string;
};

type QuestionAnswer = {
  id: string;
  question: string;
  answer: string;
  created_at: string;
};

const Faq = () => {
  const [identitas, setIdentitas] = useState<IdentitasType[] | null>([]);
   const [dataFaq, setDataFaq] = useState<QuestionAnswer[]>([]);

  const handleGetIdentitas = async () => {
    try {
      const result = await axios.get("/api/identitas");
      setIdentitas(result.data);
    } catch (error) {
      console.log(error);
    }
  };

    const handleGetFaq = async () => {
    try {
      const result = await axios.get("/api/faq");
      setDataFaq(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetIdentitas();
    handleGetFaq();
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
              Berkas Unduhan
            </h1>
            <h2 className="text-white mt-3">
              Berkas Penting{" "}
              {identitas?.find((item) => item.name === "Nama Fakultas")?.value}{" "}
              Universitas Bumigora
            </h2>
          </div>
        </div>
  
        <div className="text-purple-900 text-center mt-10 ">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Berkas</h1>
        </div>
        {/* Main */}
        <main className="flex flex-col items-center min-h-64">
          <div className="flex gap-5 flex-wrap justify-center lg:p-10 p-5">
            {dataFaq.map((item) => (
              <CardFaq key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        </main>
      </div>
    );
}

export default Faq