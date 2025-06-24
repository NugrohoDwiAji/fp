import AdminLayout from "@/components/layouts/AdminLayout";
import React, { useState } from "react";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import FileDropzone from "@/components/admin/elements/FileDropZone";

export default function berita() {
  const [isInput, setIsInput] = useState(false);

  const handleFileDrop = (file: File) => {
    console.log(file);
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl text-gray-600 ">Berita</h1>
      <div className="flex gap-5">
      <ButtonPrimary
        ClassName="text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 ease-in-out duration-300 transition-all mt-5"
        onClick={() => setIsInput(!isInput)}
      >
        {isInput ? "Batal" : "Input Berita"}
      </ButtonPrimary>
      {isInput && <ButtonPrimary
        ClassName="text-white bg-green-600 hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 ease-in-out duration-300 transition-all mt-5"
        onClick={() => setIsInput(!isInput)}
      >
      Save
      </ButtonPrimary>
}
      
      </div>
      {isInput && (
        <div className="ease-in-out duration-300 transition-all">
          <FileDropzone onDrop={handleFileDrop} />
          <div className="flex items-center justify-center gap-20 w-full mt-5">
            <div className="flex items-center gap-5 ">
              <label htmlFor="">Judul Berita</label>
              <input
                type="text"
                name=""
                id=""
                className="bg-white p-2 focus:outline-blue-600 rounded-lg outline-blue-100 outline-2"
              />
            </div>
            <div className="flex items-center gap-5 ">
              <label htmlFor="">Deskripsi</label>
              <textarea
                name=""
                id=""
                className="bg-white h-40 p-2 focus:outline-blue-600 rounded-lg outline-blue-100 outline-2 w-96 "
              ></textarea>
            </div>
          </div>
        </div>
      )}

      <table className="table-fixed border-collapse mt-10  m-auto rounded-2xl">
        <thead className="text-white">
          <tr className="">
            <th className="lg:w-10 py-2 bg-blue-600 rounded-tl-md border-xl border-gray-300 ">
              No
            </th>
            <th className=" lg:w-60 bg-blue-600 border-x border-gray-300 ">
              Title
            </th>
            <th className=" lg:w-2xl bg-blue-600 border-x border-gray-300 ">
              Value
            </th>
            <th className=" lg:w-56 bg-blue-600 rounded-tr-md border-gray-300 ">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-x border-gray-300">
            <td className="py-2 text-center bg-blue-100">{1}</td>
            <td className="py-2 px-2 border-x border-gray-300 bg-blue-100">
              1
            </td>
            <td className="py-2 px-2 border-x border-gray-300 bg-blue-100">
              1
            </td>
            <td className="py-2 text-center bg-blue-100">
              <ButtonPrimary
                ClassName="bg-yellow-500 text-white"
                onClick={() => {}}
              >
                Edit
              </ButtonPrimary>
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
}
