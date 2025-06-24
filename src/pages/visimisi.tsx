import React from "react";

export default function Visimisi() {
  return (
    <div className="">
      {/* jumbotron */}
      <div className="relative h-80 md:h-96 lg:h-[28rem] ">
        <img src="/img/bg-kampus.jpg" alt="" className="w-full bg-cover h-full" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-950/50 flex flex-col justify-center p-10 ">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
            Visi Dan Misi
          </h1>
          <h2 className="text-white mt-3">
            Visi dan Misi Fakultas Ekonomi dan Bisnis Universitas Bumigora
          </h2>
        </div>
      </div>
      {/* main */}
      <main className="px-5 text-justify my-10 md:my-12 md:max-w-xl lg:max-w-4xl m-auto ">
        <div>
          <h1 className="font-bold text-xl md:text-2xl mb-2">Visi</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            distinctio, dolorum delectus ratione minus explicabo. Nesciunt eius
            deserunt fugit obcaecati adipisci labore, magni voluptate odio.
          </p>
        </div>
        <div>
          <h1 className="font-bold mt-10 text-xl md:text-2xl mb-2">Misi</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            non et dignissimos at, ipsa veritatis maxime reprehenderit, beatae
            consequuntur veniam numquam deleniti illo nulla earum vero eaque a
            autem! Exercitationem repellendus vitae sint beatae animi.
          </p>
        </div>
      </main>
    </div>
  );
}
