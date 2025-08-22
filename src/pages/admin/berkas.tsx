import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import FileDropzone from "@/components/admin/elements/FileDropZone";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import axios from "axios";

type data = {
  id: string;
  title: string;
};
export default function Berkas() {
  const [confirm, setconfirm] = useState(false);
  const [files, setFiles] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [data, setdata] = useState<data[]>([]);
  const [isInput, setIsInput] = useState(false);
  const [isUpdate, setIsUpdate] = useState({
    status: false,
    id: "",
  })

  const handleFileDrop = (files: File) => {
    setconfirm(true);
    setFiles(files);


    // Lanjutkan upload ke server atau simpan ke state
  };

  const handleSave = async () => {
    const data = {
      title: title,
      file: files,
    };
    try {
    await axios.post("/api/berkas", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      document.location.reload();
    } catch (error) {
      console.log("eror", error);
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await axios.delete(`/api/berkasDetails?id=${id}`);
      document.location.reload();
    } catch (error) {
      console.log("eror", error);
    }
  };

  const handleGetItem = async () => {
     
    try {
      const result = await axios.get("/api/berkas");
      setdata(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id: string) => {
    const data = {
      title: title,
      file: files,
    };
    try {
       await axios.put(`/api/berkasDetails?id=${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      document.location.reload();
    } catch (error) {
      console.log("eror", error);
    }
  };

  const handleGetElementById = async (id: string) => {
    try {
      const result = await axios.get(`/api/berkasDetails?id=${id}`);
        setIsUpdate((pref) => ({
        ...pref,
        status: true,
        id: result.data.id,
      }));
      setIsInput(true);
      setTitle(result.data.title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      handleGetItem();
    } catch (error) {
      console.log("pengambilan item gagal", error);
    }
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold text-cyan-400 text-shadow-lg/10">
        Penginputan Berkas
      </h1>
      <ButtonPrimary
        ClassName="hover:border-dashed hover:border-2 bg-cyan-400 hover:border-cyan-400 mt-5 hover:text-cyan-400 hover:bg-white  text-white font-semibold "
        onClick={() => setIsInput(!isInput)}
      >
        {isInput ? "Close" : "Input"}
      </ButtonPrimary>
      {isInput && (
        <div className="mt-16">
          <div className="flex gap-5">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              id="title"
              className="p-2 bg-white h-10  rounded-md border-2 border-blue-400  font-bold focus:outline-cyan-400"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <FileDropzone onDrop={handleFileDrop} />
        </div>
      )}
      {confirm && (
        <div className="flex gap-5 w-full justify-center mt-5">
          <ButtonPrimary
            onClick={()=>{isUpdate.status? handleUpdate(isUpdate.id) :handleSave() }}
            ClassName="bg-cyan-400 text-white"
          >
            Simpan
          </ButtonPrimary>
          <ButtonPrimary
            onClick={() => {
              document.location.reload();
            }}
            ClassName="bg-red-600 text-white"
          >
            Batal
          </ButtonPrimary>
        </div>
      )}

      <table className="table-fixed border-collapse mt-10 m-auto rounded-2xl">
        <thead className="text-white">
          <tr className="">
            <th className="lg:w-10 py-2 bg-cyan-400 rounded-tl-md border-r border-gray-300 ">
              No
            </th>
            <th className=" lg:w-4xl bg-cyan-400 border-x border-gray-300 ">
              Title
            </th>
            <th className=" lg:w-80 bg-cyan-400 rounded-tr-md border-gray-300 ">
              Action
            </th>
          </tr>
        </thead>
        {data.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td className="py-2 text-center bg-blue-100 border-b border-gray-300">
                {index + 1}
              </td>

              <td className="py-2 px-2 border-x  bg-blue-100 border-b border-gray-300">
                {item.title}
              </td>
              <td className="py-2 text-center bg-blue-100 border-b border-gray-300 flex gap-5 justify-center">
                <ButtonPrimary
                  ClassName="bg-yellow-500 text-white"
                  onClick={() => handleGetElementById(item.id)}
                >
                  Edit
                </ButtonPrimary>
                <ButtonPrimary
                  ClassName="bg-red-500 text-white"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete
                </ButtonPrimary>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </AdminLayout>
  );
}
