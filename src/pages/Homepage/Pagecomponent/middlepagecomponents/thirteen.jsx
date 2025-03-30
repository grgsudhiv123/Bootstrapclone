import { FaArrowRightLong  } from "react-icons/fa6";
import bootStrapTheme from "../../../../assets/bootstrap-themes.png"
import { MdWaterDrop } from "react-icons/md";


const CompThirteen = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5">
            <div className=" p-3 w-fit rounded-2xl bg-purple-400/10">
                <MdWaterDrop size={40} className="text-purple-500"/>
            </div>
                <h1 className="text-3xl md:text-5xl font-semibold">Make it yours with official Bootstrap Themes</h1>
                <p className="md:text-lg  tracking-wide">Take Bootstrap to the next level with premium themes from the <a href="" className="text-blue-700 underline hover:text-blue-800"> official Bootstrap Themes marketplace</a> . Themes are built on Bootstrap as their own extended frameworks, rich with new components and plugins, documentation, and powerful build tools.</p>
                <div className='flex items-center gap-2 text-blue-600 cursor-pointer'>
                    <a href='#' className='text-lg font-semibold underline'>
                        Browse Bootstrap Themes
                    </a>
                    <FaArrowRightLong className='transform hover:translate-x-2 duration-200 ease-in-out'/>
                </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-10 gap-2 md:gap-5 ">
            <img src={bootStrapTheme} alt="" className="object-contain"/>
        </div>
    </div>
  )
}

export default CompThirteen

