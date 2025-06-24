import React from "react";
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
type Props = {
  isScroll: boolean;
};

export default function ContactHeader({ isScroll }: Props) {
  return (
    <div
      className={`h-14 w-full text-white flex justify-between px-6 md:px-8 lg:px-24 ${
        isScroll ? "hidden" : "bg-blue-950"
      } ease-in-out duration-300 transition-all`}
    >
      <div className="flex items-center gap-5 text-xs md:text-base ">
        <a className="flex items-center gap-2" href="#">
          <Phone size={20} />
          <h1>+62 123 456 789</h1>
        </a>
        <a className="flex items-center gap-2" href="#">
          <Mail size={20} />
          <h1>feb@universitasbumigora.ac.id</h1>
        </a>
      </div>
      <div className="items-center gap-5 hidden md:flex">
        <a className="flex items-center gap-2 hover:cursor-pointer"href="#">
          <Facebook size={20} />
          <h1>Facebook</h1>
        </a>
        <a className="flex items-center gap-2 hover:cursor-pointer" href="#">
          <Instagram size={20} />
          <h1>Instagram</h1>
        </a>
        <a className="flex items-center gap-2 hover:cursor-pointer" href="#">
          <Youtube size={20} />
          <h1>Youtube</h1>
        </a>
      </div>
    </div>
  );
}
