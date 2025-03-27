// import bootstrapLogo from "../assets/Bootstrap_logo.svg"
import { FaBootstrap,FaGithub,FaTwitter } from "react-icons/fa";
import { CgOpenCollective } from "react-icons/cg";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import { PiMoonStarsFill } from "react-icons/pi";
import VersionDropbox from "../headerfooter/navbarcontents/versionDropbox"
import Theme from "../headerfooter/navbarcontents/theme"
import Searchcomponent from "../headerfooter/navbarcontents/searchcomponent"
import { useState, useEffect } from "react";


const Navbar = () => {
    const [toggleVersion, setToggleVersion] = useState(false)
    const [toggleTheme, setToggleTheme] = useState(false)
    const [toggleSearch, setToggleSearch] = useState(false)

    useEffect(() => {
        // Function to prevent wheel events
        const preventScroll = (e) => {
            e.preventDefault();
        };

        if (toggleSearch) {
            // Keep scrollbar visible with overflow: scroll
            document.body.style.overflow = "scroll";
            
            // Add event listener to prevent wheel scrolling
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, { passive: false });
        } else {
            // Return to normal scrolling
            document.body.style.overflow = "auto";
            
            // Remove event listeners
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        }
        
        // Clean up event listeners when component unmounts
        return () => {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        };
    }, [toggleSearch])

  return (
    <div className="w-full bg-[rgb(120,52,252)]">
        <div className="max-w-screen-xl flex mx-auto justify-between py-3 px-5">
            <div className="flex-1 flex gap-5 items-center">
                <FaBootstrap size={40} className=" text-white"/>
                <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium">Docs</p>
                <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium">Example</p>
                <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium">Icons</p>
                <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium">Themes</p>
                <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium">Blog</p>
            </div>
            <div className="flex-1 flex items-center">
                <div onClick={()=>setToggleSearch(!toggleSearch)} className="flex items-center flex-row justify-between bg-transparent border border-gray-400 rounded-lg py-1 w-2/3 mx-auto text-slate-300 cursor-pointer px-2 hover:border-blue-500 hover:ring-4 ring-blue-500">
                    <div className="flex gap-2">    
                    <IoMdSearch size={25} />
                    <p>Search</p>
                    </div> 
                    <div>ctrl k</div>
                    {toggleSearch ? <Searchcomponent setToggleSearch={setToggleSearch}/> : ""}
                {/* {toggleSearch ?<Searchcomponent /> :""} */}
                </div>
            </div>
            <div className="flex-1 flex items-center justify-end">
                <div className="flex gap-5 items-center justify-end w-2/3">
                        <div className="flex gap-3">
                            <a href="#"><FaGithub size={18} className=" text-white hover:text-slate-300 duration-200 ease-in-out"/></a>
                            <a href=""><FaTwitter size={18} className=" text-white hover:text-slate-300 duration-200 ease-in-out"/></a>
                            <a href=""><CgOpenCollective size={18} className=" text-white hover:text-slate-300 duration-200 ease-in-out"/></a>
                        </div>
                        <div onClick={()=>setToggleVersion(!toggleVersion)} className="border-l border-r border-slate-300 px-5 flex flex-row justify-center cursor-pointer">
                            <p className="text-white hover:text-slate-300 duration-200 ease-in-out flex items-center">
                                <span className="text-md">v5.3</span><IoMdArrowDropdown size={18} className={`${toggleVersion ? "rotate-180 duration-200 ease-in-out" : "duration-200 ease-in-out"}`}/>
                            </p>
                            {toggleVersion ?<VersionDropbox /> :""}
                        </div>
                        <div onClick={()=>setToggleTheme(!toggleTheme)} className=" flex justify-center items-center text-white hover:text-slate-300 duration-200 ease-in-out cursor-pointer">
                            <PiMoonStarsFill size={25}/>
                            <IoMdArrowDropdown size={15} className={`${toggleTheme ? "rotate-180 duration-200 ease-in-out" : "duration-200 ease-in-out"}`}/>
                        </div>
                        {toggleTheme ?<Theme /> :""}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar