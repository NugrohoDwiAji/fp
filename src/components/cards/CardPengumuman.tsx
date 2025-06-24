import React from "react";
import ButtonPrimary from "../elements/ButtonPrimary";
import { format, set } from "date-fns";


type Props = {
  title:string;
  file_path: string;
  uploadat: string;
}
export default function CardPengumuman({ title, file_path, uploadat}: Props) {
    const handleDownload = ({fileUrl, fileName}: {fileUrl: string, fileName: string}) => {

    const link = document.createElement('a');
    link.href =  fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white text-gray-800 h-fit fit md:w-80 shadow-2xl rounded-lg ">
      <h1 className="p-3 text-lg text-center font-bold">{title}</h1>
      <hr className="border-t-2 border-gray-800 w-full" />
      <div className="flex gap-2 justify-center items-center h-1/2 px-4 py-2">
        <h2 className="font-semibold ">{uploadat=format(new Date(uploadat), "yyyy-MM-dd")}</h2>
        <div className="h-9 w-[2px] bg-blue-950"></div>
        <ButtonPrimary onClick={() => handleDownload({fileUrl: file_path, fileName: title})} ClassName="bg-blue-950 hover:bg-white hover:text-blue-950 hover:border-2 hover:border-blue-950 text-white">Unduh</ButtonPrimary>
      </div>
    </div>
  );
}
