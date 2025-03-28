import React from 'react'
import webPack from "../../assets/webpack.svg"
import parcel from "../../assets/parcel.png"
import vite from "../../assets/vite.svg"


const Compthree = () => {
  return (
    <div className='w-full'>
        <div className='md:w-2/3 mx-auto flex flex-col gap-2 md:gap-5 px-5 md:px-10'>
            <h1 className='text-2xl font-semibold text-center'>Read our getting started guides</h1>
            <p className='text-center'>Get a jump on including Bootstrap's source files in a new project with our official guides.</p>
            <div className='w-full flex justify-center md:gap-10'>
                <div className='w-1/4 md:w-1/8 p-1 md:p-2 flex flex-col items-center gap-2'>
                    <a href="https://getbootstrap.com/docs/5.3/getting-started/webpack/"><img src={webPack} alt="webPack" className=' w-16 transition-transform duration-300 hover:scale-120'/></a>
                    <p className='text-slate-600'>Webpack</p>
                </div>
                <div className='w-1/4 md:w-1/8 p-2 flex flex-col items-center gap-2'>
                    <a href="https://getbootstrap.com/docs/5.3/getting-started/parcel/"><img src={parcel} alt="parcel" className='w-16 transition-transform duration-300 hover:scale-120'/></a>
                    <p className='text-slate-600'>Parcel</p>
                </div>
                <div className='w-1/4 md:w-1/8 p-2 flex flex-col items-center gap-2'>
                    <a href="https://getbootstrap.com/docs/5.3/getting-started/vite/"><img src={vite} alt="vite" className='w-16 transition-transform duration-300 hover:scale-120'/></a>
                    <p className='text-slate-600'>Vite</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Compthree