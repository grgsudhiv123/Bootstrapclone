// import bootstrapLogo from "../assets/Bootstrap_logo.svg"
import { FaBootstrap,FaGithub,FaTwitter } from "react-icons/fa";
import { CgOpenCollective } from "react-icons/cg";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import { PiMoonStarsFill } from "react-icons/pi";
import VersionDropbox from "../headerfooter/navbarcontents/versionDropbox"
import Theme from "../headerfooter/navbarcontents/theme"
import Searchcomponent from "../headerfooter/navbarcontents/searchcomponent"
import { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";



const Navbar = () => {
    const [toggleVersion, setToggleVersion] = useState(false)
    const [toggleTheme, setToggleTheme] = useState(false)
    const [toggleSearch, setToggleSearch] = useState(false)

    const handleVersion = ()=>{
        setToggleVersion(!toggleVersion)
        if(toggleTheme){
            setToggleTheme(false)
        }
    }
    const handleTheme = ()=>{
        setToggleTheme(!toggleTheme)
        if(toggleVersion){
            setToggleVersion(false)
        }
    }
    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };

        if (toggleSearch) {
            document.body.style.overflow = "scroll";
            
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, { passive: false });
        } else {
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
      <div className="absolute w-full bg-[rgb(120,52,252)] top-0 z-20" style={{opacity : 20}}>
        <div className="max-w-screen-xl flex mx-auto justify-between px-2 py-3 md:px-5">
            <div className="flex-1 flex gap-5 justify-center lg:justify-start items-center">
                <FaBootstrap size={45} className=" text-white transition-transform hover:scale-120 hover:-rotate-20 duration-300 ease-in-out cursor-pointer"/>
                <div className="hidden lg:flex w-full gap-5">
                    <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium cursor-pointer">Docs</p>
                    <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium cursor-pointer">Example</p>
                    <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium cursor-pointer">Icons</p>
                    <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium cursor-pointer">Themes</p>
                    <p className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium cursor-pointer">Blog</p>
                </div>
            </div>
            <div className="relative flex-1 hidden lg:flex items-center">
                <div onClick={()=>setToggleSearch(!toggleSearch)} className="flex items-center flex-row justify-between bg-transparent border border-gray-400 rounded-lg py-1 w-2/3 mx-auto text-slate-400 hover:text-slate-100 cursor-pointer px-2 hover:border-blue-500 hover:ring-4 ring-blue-500">
                    <div className="flex gap-2">    
                    <IoMdSearch size={25} />
                    <p>Search</p>
                    </div> 
                    <div>ctrl k</div>
                </div>
                {toggleSearch ? <Searchcomponent setToggleSearch={setToggleSearch}/> : ""}
            </div>
            <div className="flex-1 hidden lg:flex items-center justify-end">
                <div className="flex gap-5 items-center justify-end w-2/3">
                        <div className="flex gap-3">
                            <a href="https://github.com/twbs/bootstrap"><FaGithub size={18} className=" text-white hover:text-slate-300 duration-200 ease-in-out"/></a>
                            <a href="https://x.com/getbootstrap"><FaTwitter size={18} className=" text-white hover:text-slate-300 duration-200 ease-in-out"/></a>
                            <a href="https://opencollective.com/bootstrap"><CgOpenCollective size={18} className=" text-white hover:text-slate-300 duration-200 ease-in-out"/></a>
                        </div>
                        <div onClick={handleVersion} className=" relative border-l border-r border-slate-300 px-5 flex flex-row justify-center cursor-pointer">
                            <p className="text-white hover:text-slate-300 duration-200 ease-in-out flex items-center">
                                <span className="text-md">v5.3</span><IoMdArrowDropdown size={18} className={`${toggleVersion ? "rotate-180 duration-200 ease-in-out" : "duration-200 ease-in-out"}`}/>
                            </p>
                            {toggleVersion ?<VersionDropbox /> :""}
                        </div>
                        <div onClick={handleTheme} className="relative flex justify-center items-center cursor-pointer">
                            <PiMoonStarsFill size={25} className="hover:text-slate-300 duration-300 ease-in-out text-white"/>
                            <IoMdArrowDropdown size={15} className={`${toggleTheme ? "rotate-180 duration-200 ease-in-out" : "duration-300 ease-in-out"} text-white`}/>
                            {toggleTheme ?<Theme /> :""}
                        </div>
                    </div>
                </div>
                <div className="absolute flex lg:hidden items-center gap-3 left-0 w-full py-2 px-5 justify-end text-white">
                    <IoMdSearch size={25} onClick={()=>setToggleSearch(!toggleSearch)}/>
                    <BsThreeDots size={25} />
                </div>
            </div>
    </div>
  )
}

export default Navbar