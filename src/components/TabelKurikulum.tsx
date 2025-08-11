import React from "react";
interface Props {
  no: number;
 nama_matakuliah: string;
  sks: number;
  id_matkul: number;
  kode_matakuliah: string;
}
export default function TabelKurikulum({ no, nama_matakuliah, sks,id_matkul, kode_matakuliah }: Props) {
  return (

      <tr
        key={id_matkul}
        className={`${
         no % 2 === 0 ? "bg-purple-80" : "bg-white"
        } hover:bg-purple-50 transition-colors duration-200`}
      >
        <td className=" px-2 md:px-6 py-4 text-purple-800 font-semibold">{no}</td>
        <td className="px-6 py-4">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            {kode_matakuliah}
          </span>
        </td>
        <td className="px-2 md:px-6 py-4 text-gray-700 max-w-xs">
          <div className="truncate" title={nama_matakuliah}>
            {nama_matakuliah}
          </div>
        </td>
        <td className="px-2 md:px-6 py-4 text-gray-700">
          {sks}
        </td>
      </tr>

  );
}
