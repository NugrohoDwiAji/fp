import React from "react";



type Props = {
    nama: string,
    nik: string,
    foto: string
};    
export default function CardDosen({nama, nik, foto="/profil.png"}: Props) {
  return (
    <div className="flex h-32 w-md rounded-lg shadow-xl">
      <div className="flex justify-center items-center h-32 w-32 bg-purple-800 rounded-full">
        <img
          src={foto}
          alt=""
          width={100}
          height={100}
          className=" w-[6.5rem] h-[6.5rem] bg-purple-400 rounded-full"
        />
      </div>
      <div className=" flex flex-col justify-evenly">
        <h1 className="font-bold text-lg">{nama}</h1>
        <hr className="h-1 bg-purple-800 border-none outline-none w-80" />
        <h2 className="font-semibold">NIK. {nik}</h2>
      </div>
    </div>
  );
}
