import React from "react";



type Props = {
    nama: string,
    nik: string,
    foto: string
};    
export default function CardDosen({nama, nik, foto="/profil.png"}: Props) {
  return (
    <div className=" h-32 rounded-lg shadow-xl flex max-w-[22rem] lg:max-w-[25rem] text-wrap ">
      <div className="flex justify-center items-center h-32 w-32 bg-purple-800 rounded-full">
        <img
          src={foto}
          alt=""
          className=" w-[7rem] h-[7rem] bg-purple-400 rounded-full"
        />
      </div>
      <div className=" flex flex-col justify-evenly w-[14rem] lg:w-[17rem]">
        <h1 className="font-bold text-lg">{nama}</h1>
        <hr className='border-t-4 border-purple-800 w-full'/>
        <h2 className="font-semibold">NIK. {nik}</h2>
      </div>
    </div>
  );
}
