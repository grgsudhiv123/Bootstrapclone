import React from 'react'
import { FaAngleLeft, FaAngleRight, FaArrowRightLong  } from "react-icons/fa6";



const CompOne = () => {
  return (
    <div className='w-[90%] md:w-3/5 mx-auto flex flex-col gap-5 md:items-center'>
         <div className='flex py-5 px-2 w-fit rounded-xl bg-purple-400/10'>
            <FaAngleLeft size={25} className='text-purple-500'/> 
            <FaAngleRight size={25} className='text-purple-500'/>
        </div>
        <h1 className='text-3xl md:text-5xl font-semibold'>Get started any way you want</h1>
        <p className='md:text-xl md:text-center tracking-wide'>Jump right into building with Bootstrap—use the CDN, install it via package manager, or download the source code.</p>
        <div className='flex items-center gap-2 text-blue-600 cursor-pointer'>
            <a href='#' className='text-lg font-bold underline'>
            Read installation docs
            </a>
            <FaArrowRightLong className='transform hover:translate-x-2 duration-200 ease-in-out'/>
        </div>
    </div>
  )
}

export default CompOne