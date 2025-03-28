import { PiBracketsCurlyLight } from "react-icons/pi";
import { FaArrowRightLong  } from "react-icons/fa6";

const CompSix = () => {
  return (
    <div className="w-full">
        <div className="w-full md:w-3/5 flex flex-col gap-5 p-10">
            <div className=" p-3 w-fit rounded-2xl bg-red-800/16">
                <PiBracketsCurlyLight   size={40} className="text-red-700"/>
            </div>
                <h1 className="text-3xl md:text-5xl font-semibold">Build and extend in real-time with CSS variables</h1>
                <p className="md:text-lg  tracking-wide">Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a <span className="text-red-700">:root</span> level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.</p>
                <div className='flex items-center gap-2 text-blue-600 cursor-pointer'>
                    <a href='#' className='text-lg font-semibold underline'>
                       Learn more about CSS variables
                    </a>
                    <FaArrowRightLong className='transform hover:translate-x-2 duration-200 ease-in-out'/>
                </div>
        </div>
    </div>
  )
}

export default CompSix