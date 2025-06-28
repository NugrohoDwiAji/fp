import React, { useEffect } from "react";
import { FileDown } from "lucide-react";
import Aos from "aos";

type Props = {
    title : string,
    link : string
};
export default function CardBerkas({title, link}: Props) {

    useEffect(() => {
    Aos.init({
      duration: 3000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya berjalan sekali
      easing: "ease-in-out", // Efek transisi animasi
    });
  }, []);
  return (
    <a
     data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      download={title}
      href={link}
      className="bg-gray-400 p-4 flex gap-2 items-center rounded-lg h-fit w-fit hover:scale-105 duration-300 hover:shadow-lg hover:bg-gray-300 ease-in-out transition-all"
    >
      <FileDown size={32}/>
      <div className="h-10 bg-blue-950 w-[2px]"></div>
      <h1 className="text-gray-900 font-semibold">{title}</h1>
    </a>
  );
}
