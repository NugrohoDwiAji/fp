import React,{useEffect, useState} from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import axios from 'axios';

type IdentitasType = {
  id: string;
  name: string;
  value: string;
};

type ProdiType = {
  id: string;
  nama: string;
  link: string;
};





const Footer = () => {
   const [identitas, setIdentitas] = useState<IdentitasType[] | null>([])
   const [prodi, setProdi] = useState<ProdiType[] | null>([])

  const handleGetIdentitas = async () => {
    try {
      const result = await axios.get("/api/identitas");
      setIdentitas(result.data);
    } catch (error) {
      console.log(error)
    }
  };
const handleGetProdi = async () => {
    try {
      const result = await axios.get("/api/prodi");
      setProdi(result.data);
    } catch (error) {
      console.log(error)
    }
  };

  const icon = [
  { icon: <Globe />, url: `#` },
  { icon: <Facebook />, url: `https://${identitas?.find((item) => item.name === "Facebook")?.value}` },
  { icon: <Instagram />, url: `https://${identitas?.find((item) => item.name === "Instagram")?.value}` },
];
  
  


  const kontak = [
    {
      name: identitas?.find((item) => item.name === "No Handphone")?.value,
      icon: <Phone size={17} />,
      url: `https://wa.me/+62xxxxxxx${identitas?.find((item) => item.name === "No Handphone")?.value}`,
    },
    {
      name: identitas?.find((item) => item.name === "Nama Fakultas")?.value,
      icon: <User size={17} />,
      url: "",
    },
    {
      name: identitas?.find((item) => item.name === "Email")?.value,
      icon: <Mail size={17} />,
      url: `mailto:${identitas?.find((item) => item.name === "Email")?.value}`,
    },
  ];

    useEffect(() => {
    handleGetIdentitas();
    handleGetProdi();
  }, [])
  return (
    <footer className="bg-purple-900 text-white flex flex-col items-center">
      <div className="md:flex justify-between md:gap-16 px-7 pt-5 md:pt-14 md:px-10 pb-10 lg:flex gap-28 lg:text-xl lg:gap-0 lg:w-7xl">
        {/* alamat dan logo */}
        <div>
          <img src="/img/ubg-2.png" alt="" className="text-white h-32" />
          <h1 className="text-xl mb-2 lg:mt-0 font-bold">Alamat</h1>
          <p className="lg:w-96">
            Jl. Ismail Marzuki No.22, Cilinaya, Kec. Cakranegara, Kota Mataram,
            Nusa Tenggara Barat 83127
          </p>
        </div>

        {/* Quick Link */}
        <div className="mt-7 md:mt-0">
          <h1 className="font-bold text-xl mb-2">Departemen</h1>
          <div>
            {prodi?.map((item, index) => (
              <Link href={item.id} className="flex mb-2" key={index}>
                 <ChevronRight/>
                {item.nama}
              </Link>
            ))}
          </div>
        </div>

        {/* kontak */}
        <div>
          <h1 className="mt-10 md:mt-0 mb-2 text-xl font-bold">Kontak</h1>
          <div className="flex flex-col gap-2">
            {kontak.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="flex gap-1 items-center"
              >
                {item.icon}
                <h1>{item.name}</h1>
              </Link>
            ))}
          </div>
          <div className="flex gap-2 lg:gap-4 mt-2">
            {icon.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="border p-2 rounded-full hover:text-purple-900 hover:bg-white hover:cursor-pointer"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%]">
        <hr />
        <h1 className="text-center py-4">© 2025 PUSTIK | Developed & Deployed by Nugroho Dwi Aji | Built with Next.js</h1>
      </div>
    </footer>
  );
};

export default Footer;
