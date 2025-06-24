import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import ModalEdit from "@/components/admin/ModalEdit";
import axios from "axios";
import { da } from "date-fns/locale";

type ContentType = {
  id: string;
  title: string;
  value: string;
};

export default function content() {
  const [isEdit, setisEdit] = useState(false);
  const [data, setData] = useState<ContentType[] | null>([]);
  const [detailData, setdetailData] = useState<ContentType | null>(null)

const handleEdit = async (id: string) =>{
  setisEdit(true);
  try {
    const result = await axios.get(`/api/contentDetails?id=${id}`);
    setdetailData(result.data);
    console.log("getbyid",result.data);
  } catch (error) {
    console.log(error);
  }
}




  const handleGetItem = async () => {
    try {
      const result = await axios.get("/api/content");
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetItem();
  }, []);



  return (
    <AdminLayout>
      <h1 className="text-4xl text-gray-600 ">Content</h1>
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
          {data?.map((item, index) => (
            <tr key={index} className="border-b border-x border-gray-300">
              <td className="py-2 text-center bg-blue-100">{index + 1}</td>
              <td className="py-2 px-2 border-x border-gray-300 bg-blue-100">
                {item?.title}
              </td>
              <td className="py-2 px-2 border-x border-gray-300 bg-blue-100">
                {item?.value}
              </td>
              <td className="py-2 text-center bg-blue-100">
                <ButtonPrimary
                  ClassName="bg-yellow-500 text-white"
                  onClick={() => handleEdit(item?.id)}
                >
                  Edit
                </ButtonPrimary>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="absolute top-0 left-64 right-0">
        {isEdit && (
          <ModalEdit
          id={detailData?.id || ""}
            onClose={() => setisEdit(!isEdit)}
            onSave={() => setisEdit(!isEdit)}
            title={detailData?.title || ""}  
            defaultValue={detailData?.value || ""}
          />
        )}
      </div>
    </AdminLayout>
  );
}
