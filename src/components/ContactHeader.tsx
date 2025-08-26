import React,{useEffect, useState} from "react";
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import axios from 'axios';

type IdentitasType = {
  id: string;
  name: string;
  value: string;
};
type Props = {
  isScroll: boolean;
};

export default function ContactHeader({ isScroll }: Props) {
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
    <div
      className={`h-10 w-full text-white flex justify-between px-6 md:px-8 lg:px-24 ${
        isScroll ? "hidden" : "bg-gradient-to-r from-yellow-400 to-yellow-400 shadow-2xl shadow-yellow-400 " 
      } ease-in-out duration-300 transition-all`}
    >
      <div className="flex items-center gap-5 text-xs md:text-base ">
        <a className="flex items-center gap-2" href="#">
          <Phone size={20} />
          <h1>   {
                identitas?.find((item) => item.name === "No Handphone")
                  ?.value
              }</h1>
        </a>
        <a className="flex items-center gap-2" href="#">
          <Mail size={20} />
          <h1>   {
                identitas?.find((item) => item.name === "Email")
                  ?.value
              }</h1>
        </a>
      </div>
      <div className="items-center gap-5 hidden md:flex">
        <a href={  
                identitas?.find((item) => item.name === "Facebook")
                  ?.value
              } className="flex items-center gap-2 hover:cursor-pointer">
          <Facebook size={20} />
          <h1>Facebook</h1>
        </a>
        <a href={
                identitas?.find((item) => item.name === "Instagram")
                  ?.value
              } className="flex items-center gap-2 hover:cursor-pointer" >
          <Instagram size={20} />
          <h1>Instagram</h1>
        </a>
        <a className="flex items-center gap-2 hover:cursor-pointer" href=   {
                identitas?.find((item) => item.name === "Youtube")
                  ?.value
              }>
          <Youtube size={20} />
          <h1>Youtube</h1>
        </a>
      </div>
    </div>
  );
}
