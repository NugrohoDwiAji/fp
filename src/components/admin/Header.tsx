import React,{useState, useEffect} from 'react'

export default function Header() {
 

  return (
   <div className="fixed right-0 top-0 left-0 flex justify-end items-center p-5 bg-white">
      <div className="flex items-center">
        <span className="mr-2">Admin</span>
        <button className="bg-blue-500 text-white p-2 rounded">Log Out</button>
      </div>
    </div>
  )
}
