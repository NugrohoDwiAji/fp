import React from 'react'

export default function CardPrestasi() {
  return (
    <button className='flex max-w-[22rem] lg:max-w-[25rem] text-wrap shadow-xl rounded-xl bg-white'>
        <img src="/img/img1.jpg" alt="img" className='h-32 w-32 rounded-l-xl'/>
        <div className='w-full text-blue-950'>
            <h1 className='border-b-2 border-blue-950 h-1/2 font-bold flex items-center px-2'>Akreditasi Baik Sekali</h1>
            <hr className='border-t-[1px] border-blue-950 w-full'/>
            <p className='text-xs px-2 flex items-center h-1/2 text-start text-wrap'>Terakreditasi pada tahun 2023 oleh ban-pt dengan akreditasi baik sekali.</p>
        </div>

    </button>
  )
}
