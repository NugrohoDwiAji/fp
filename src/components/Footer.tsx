import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { Facebook } from "lucide-react";

import { Instagram } from "lucide-react";

const menu = [
  {
    name: "Manajemen",
    url: "#",
    icon: <ChevronRight />,
  },
  { name: "Akuntansi", url: "#", icon: <ChevronRight /> },
  {
    name: "Bisnis Digital",
    url: "/informasipeserta/pendaftaran",
    icon: <ChevronRight />,
  },
];

const kontak = [
  {
    name: "+62 xxxx xxxx xxx",
    icon: <Phone size={17} />,
    url: "https://wa.me/+62xxxxxxx",
  },
  {
    name: "Fakultas Ekonomi Dan Bisnis",
    icon: <User size={17} />,
    url: "",
  },
  {
    name: "feb@universitasbumigora.ac.id",
    icon: <Mail size={17} />,
    url: "",
  },
];

const icon = [
  { icon: <Globe />, url: "https://universitasbumigora.ac.id/" },
  { icon: <Facebook />, url: "https://facebook.com/universitasbumigora/" },
  { icon: <Instagram />, url: "https://instagram.com/universitasbumigora/" },
];

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white flex flex-col items-center">
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
            {menu.map((item, index) => (
              <Link href={item.url} className="flex mb-2" key={index}>
                {item.icon}
                {item.name}
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
                className="border p-2 rounded-full hover:text-blue-950 hover:bg-white hover:cursor-pointer"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%]">
        <hr />
        <h1 className="text-center py-4">Designed suport By Nugroho Dwi Aji. Develop and Modify by PUSTIK UBG</h1>
      </div>
    </footer>
  );
};

export default Footer;
