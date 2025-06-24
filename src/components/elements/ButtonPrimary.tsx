import clsx from 'clsx'
import React from 'react'


type Props = {
    ClassName : string,
    onClick : () => void,
    children : React.ReactNode
}
export default function ButtonPrimary({ClassName, onClick, children}: Props) {
  return (
    <button onClick={onClick} type='button' className={clsx('px-4 py-2 md:px-6  rounded-lg hover:scale-105 hover:shadow-2xl shadow-lg ease-in-out duration-300 transition-all text-sm md:text-xl w-fit hover:cursor-pointer', ClassName)}>{children}</button>
  )
}
