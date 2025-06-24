import React from "react";
import ButtonPrimary from "../elements/ButtonPrimary";
import Image from "next/image";

export default function CardBerita() {
  return (
    <div className="h-[28rem] w-72 md:w-80 shadow-xl rounded-xl p-3 flex flex-col justify-between gap-4 bg-white">
      <Image
        src="/img/image_notfound.jpg"
        alt="notfound"
        className="h-52 w-full rounded-xl "
      />
      <div>
        <h1 className="font-bold text-lg">Masukkan Title</h1>
        <p className="text-wrap overflow-hidden max-h-28">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          explicabo quas enim, sit repudiandae maxime. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cupiditate natus, nobis mollitia cum quo vel, tenetur, impedit eaque molestias qui animi nesciunt dolorem ad beatae neque quod asperiores voluptate!
        </p>
      </div>
      <div className="flex justify-between items-center">

      <ButtonPrimary ClassName="w-fit py-2 bg-blue-950 text-white rounded-md hover:border-2 hover:border-blue-950 hover:bg-white hover:font-semibold hover:text-blue-950" onClick={() => {}}>
        Selengkapnya
      </ButtonPrimary>
      <h6 className="text-sm text-gray-600">6 Desember 2022</h6>
      </div>
    </div>
  );
}
