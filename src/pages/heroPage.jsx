import React from 'react'
import { FaBootstrap} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { IoClipboardOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

import CopyBoxComponent from "../utils/ui/CopyBoxComponent"


const HeroPage = () => {
  const code = `$ npm i bootstrap@5.3.3`;
  return (
  <div className="relative w-full h-[630px] md:h-[800px] pt-24">
      <div className="max-w-screen-xl mx-auto">
          <div className='w-[90%] md:w-2/3 mx-auto flex flex-col gap-7 md:gap-5'>
            <div className='w-full flex justify-center'>
              <div className='flex items-center gap-2 px-2 md:px-5 py-2 bg-yellow-200 rounded-full cursor-pointer'>
                <p className='text-xs md:text-[18px]'>Get Security Updates For Bootstrap 3 & 4</p>
                <FaArrowRight className='text-sm'/>
              </div>
            </div>
            <div className='w-full hidden md:flex items-center justify-center'>
              <FaBootstrap size={180} className='text-[rgb(120,52,252)]'/>
            </div>
            <div className='w-full text-center'>
              <h1 className='text-4xl md:text-6xl font-semibold'>Build fast, responsive sites with Bootstrap</h1>
            </div>
            <div className='w-full text-center'>
              <p className='text-md md:text-2xl font-normal text-slate-600'>Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>
            </div>
            <div className='w-full text-center flex flex-col md:flex-row justify-center gap-4 md:gap-10'>
                <CopyBoxComponent code={code} className="md:text-lg font-light tracking-wider" />
              <div className='p-3 md:p-5 bg-[rgb(120,52,252)] rounded-lg flex justify-center items-center gap-2 text-white cursor-pointer hover:bg-[rgb(106,73,172)] duration-200 ease-in-out'>
                <MdMenuBook size={25}/>
                <p className='md:text-xl font-semibold'>Read the docs</p>
              </div>
            </div>
              <div className='w-full flex justify-center'>
                <p className='text-slate-600 tracking-wide text-sm md:text-[16px]'>Currently <span className='font-bold text-slate-800'>v5.3.3</span> · <a href="#" className='underline'>Download</a> · <a href='#' className='underline'>All releases</a></p>
              </div>
          </div>
      </div>
  </div>
  )
}

export default HeroPage