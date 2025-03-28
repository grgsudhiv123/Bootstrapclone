import { VscLibrary } from "react-icons/vsc";
import { FaArrowRightLong  } from "react-icons/fa6";

const CompFour = () => {
  return (
    <div className="w-full">
        <div className="w-full md:w-3/5 flex flex-col gap-5 p-10">
            <div className=" p-3 w-fit rounded-2xl bg-blue-800/16">
                <VscLibrary size={40} className="text-blue-500"/>
            </div>
                <h1 className="text-3xl md:text-5xl font-semibold">Customize everything with Sass</h1>
                <p className="md:text-lg  tracking-wide">Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.</p>
                <div className='flex items-center gap-2 text-blue-600 cursor-pointer'>
                    <a href='#' className='text-lg font-semibold underline'>
                        Learn more about customizing
                    </a>
                    <FaArrowRightLong className='transform hover:translate-x-2 duration-200 ease-in-out'/>
                </div>
        </div>
    </div>
  )
}

export default CompFour