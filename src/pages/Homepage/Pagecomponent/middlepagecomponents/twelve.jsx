import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaArrowRightLong  } from "react-icons/fa6";
import bootStrapImg from "../../../../assets/bootstrap-icons.png"


const CompTwelve = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5">
            <div className=" p-3 w-fit rounded-2xl bg-green-400/10">
                <MdOutlineDashboardCustomize size={40} className="text-green-500"/>
            </div>
                <h1 className="text-3xl md:text-5xl font-semibold">Personalize it with Bootstrap Icons</h1>
                <p className="md:text-lg  tracking-wide"><a href="" className="text-blue-700 underline hover:text-blue-800">Bootstrap Icons</a> is an open source SVG icon library featuring over 1,800 glyphs, with more added every release. They're designed to work in any project, whether you use Bootstrap itself or not. Use them as SVGs or icon fonts—both options give you vector scaling and easy customization via CSS.</p>
                <div className='flex items-center gap-2 text-blue-600 cursor-pointer'>
                    <a href='#' className='text-lg font-semibold underline'>
                        Get Bootstrap Icons
                    </a>
                    <FaArrowRightLong className='transform hover:translate-x-2 duration-200 ease-in-out'/>
                </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-10 gap-2 md:gap-5 ">
            <img src={bootStrapImg} alt="" className="object-contain"/>
        </div>
    </div>
  )
}

export default CompTwelve

