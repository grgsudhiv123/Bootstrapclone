import React from 'react'
import { FaBootstrap} from "react-icons/fa";



const Footer = () => {
  return (
    <div className='w-full py-10 md:py-28 bg-slate-100'>
      <div className='w-full lg:max-w-screen-xl mx-auto py-5'>
      <div className='flex flex-col lg:flex-row w-full justify-between gap-10 lg:gap-0'>
        <div className='px-5 lg:w-[26%] flex flex-col gap-3'>
          <div className='flex gap-2 items-center'>
            <FaBootstrap size={40}/>
            <p className='text-2xl'>Bootstrap</p>
          </div>
          <p className='text-sm text-slate-500'>
            Designed and built with all the love in the world by the <a className='text-slate-900 hover:text-blue-700 hover:underline cursor-pointer'>Bootstrap team</a> with the help of <a href='' className='text-slate-900 hover:text-blue-700 hover:underline cursor-pointer'>our contributors</a>.
          </p>
          <p className='text-sm text-slate-500'>Code licensed <a href="#" className='text-slate-900 hover:text-blue-700 hover:underline cursor-pointer'>MIT</a> ,docs <a href="" className='text-slate-900 hover:text-blue-700 hover:underline cursor-pointer'> CC BY 3.0.</a></p>
          <p className='text-sm text-slate-500'>Currently v5.3.3.</p>
        </div>
        <div className='w-full lg:w-[65%] grid grid-cols-2 lg:grid-cols-4 gap-5'>
          <div className='flex flex-col gap-2 px-5'>
            <p className='text-lg text-slate-500 font-semibold'>Links</p>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Home</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Docs</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Examples</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Icons</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Themes</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Blog</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Swag Store</a></div>
          </div>
          <div className='flex flex-col gap-2 px-5'>
            <p className='text-lg text-slate-500 font-semibold'>Guides</p>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Getting started</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Starter template</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Webpack</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Parcel</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Vite</a></div>
          </div>
          <div className='flex flex-col gap-2 px-5'>
            <p className='text-lg text-slate-500 font-semibold'>Projects</p>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Bootstrap 5</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Bootstrap 4</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Icons</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>RFS</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Examples repo</a></div>
          </div>
          <div className='flex flex-col gap-2 px-5'>
            <p className='text-lg text-slate-500 font-semibold'>Community</p>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Issues</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Discussions</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Corporate sponsors</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Open Collective</a></div>
            <div><a href="#" className='hover:text-blue-700 hover:underline text-md'>Stack Overflow</a></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer