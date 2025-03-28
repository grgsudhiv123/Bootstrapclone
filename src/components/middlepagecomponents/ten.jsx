import { FaArrowRightLong  } from "react-icons/fa6";
import { LuHousePlug } from "react-icons/lu";

const CompTen = () => {
  return (
    <div className="w-full">
        <div className="w-full md:w-3/5 flex flex-col gap-5 p-10">
            <div className=" p-3 w-fit rounded-2xl bg-yellow-400/16">
                <LuHousePlug size={40} className="text-yellow-500"/>
            </div>
                <h1 className="text-3xl md:text-5xl font-semibold">Powerful JavaScript plugins without jQuery</h1>
                <p className="md:text-lg  tracking-wide">Add toggleable hidden elements, modals and offcanvas menus, popovers and tooltips, and so much more—all without jQuery. Bootstrap's JavaScript is HTML-first, meaning most plugins are added with data attributes in your HTML. Need more control? Include individual plugins programmatically.</p>
                <div className='flex items-center gap-2 text-blue-600 cursor-pointer'>
                    <a href='#' className='text-lg font-semibold underline'>
                        Learn more about Bootstrap JavaScript
                    </a>
                    <FaArrowRightLong className='transform hover:translate-x-2 duration-200 ease-in-out'/>
                </div>
        </div>
    </div>
  )
}

export default CompTen