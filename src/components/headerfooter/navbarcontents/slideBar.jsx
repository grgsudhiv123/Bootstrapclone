import { RxCross1 } from "react-icons/rx";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { CgOpenCollective } from "react-icons/cg";
import { useState, useEffect, useRef } from "react";
import Theme from "./theme";
import VersionDropbox from "./versionDropbox";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiMoonStarsFill } from "react-icons/pi";
import { useNavigate, Link } from "react-router-dom";


const Sidebar = ({isOpenSidebar, setIsOpenSidebar}) => {
    const toggleSidebar = () => setIsOpenSidebar(!isOpenSidebar);
    const [toggleVersion, setToggleVersion] = useState(false);
    const [toggleTheme, setToggleTheme] = useState(false);

    const versionRef = useRef()
    const themeRef = useRef()


    const handleVersion = () => {
        setToggleVersion(!toggleVersion);
        if (toggleTheme) setToggleTheme(false);
    };

    const handleTheme = () => {
        setToggleTheme(!toggleTheme);
        if (toggleVersion) setToggleVersion(false);
    };

    useEffect(()=>{
        const handleClickOutside = (e) => {
            if(!versionRef.current.contains(e.target)){
                setToggleVersion(false)  
            }
            if(!themeRef.current.contains(e.target)){
                setToggleTheme(false)  
            }
        }
        document.addEventListener('click', handleClickOutside)
        return (()=>{
            document.removeEventListener('click', handleClickOutside)
        })
    },[])
    const navigate = useNavigate()

    const handleNavigation = (data) => {
        console.log(data)
        switch (data) {
            case 'Docs':
                navigate('/docs-page');
                break;
            case 'Example':
                navigate('/docs-page');
                break;
            case 'Icons':
                navigate('/docs-page');
                break;
            case 'Themes':
                navigate('/docs-page');
                break;
            case 'Blog':
                navigate('/docs-page');
                break;
            default:
                break;
        }
    }
  return (
    <div >
      {isOpenSidebar && (
        <div
          className="fixed flex justify-end inset-0 bg-slate-950/50 bg-opacity-50 backdrop-blur-md transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] bg-[rgb(120,52,252)] shadow-xl transform ${
          isOpenSidebar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-400 ease-in-out z-80`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mt-4 px-4 ">
          <h2 className="text-lg font-semibold text-white"><Link to="/">Bootstrap</Link></h2>
          <button onClick={toggleSidebar} className="text-gray-600">
            <div className=" p-1 rounded-lg active:ring-2 ring-slate-300/30">
                <RxCross1 size={20} className="text-white"/>
            </div>
          </button>
        </div>
        <div className="mx-4 my-5 p-[1px] bg-slate-300/30"></div>
        {/* Sidebar Links */}
        <ul className="px-4 grid gap-5 grid-cols-2 text-slate-200 text-sm">
             {["Docs", "Example", "Icons", "Themes", "Blog"].map((item,index) => (
                <li key={index} onClick={()=>handleNavigation(item)}>
                    <a className="hover:text-blue-500 cursor-pointer ">
                        {item}
                    </a>
                </li>
            ))}
        </ul>

        <div className="mx-4 my-5 p-[1px] bg-slate-300/30"></div>
        {/* Sidebar Links */}
        <ul className="px-4 grid gap-5 grid-cols-2 text-slate-200 text-sm">
          <li className="hover:text-blue-500 cursor-pointer "><a href="https://github.com/twbs/bootstrap" target="_blank" className="h-full flex flex-row items-center gap-3"><FaGithub size={18}/> Github </a></li>
        <li className="hover:text-blue-500 cursor-pointer "><a href="https://x.com/getbootstrap" target="_blank" className="h-full flex flex-row items-center gap-3"><FaTwitter size={18}/> Twitter </a></li>
          <li className="hover:text-blue-500 cursor-pointer "><a href="https://opencollective.com/bootstrap" target="_blank" className="h-full flex flex-row items-center gap-3"><CgOpenCollective size={18}/> Open Collective </a></li>
        </ul>

        <div className="mx-4 my-5 p-[1px] bg-slate-300/30"></div>
        {/* Sidebar Links */}
        <ul className="w-full px-4 flex flex-col text-white">
          <li className="w-fit text-white hover:text-slate-300 duration-200 ease-in-out flex gap-1 items-center" onClick={handleVersion} ref={versionRef}>
            <p className="text-md">Bootstrap v5.3</p>
            <IoMdArrowDropdown size={18} className={`${toggleVersion ? "rotate-180 duration-200 ease-in-out" : "duration-200 ease-in-out"}`} />
          </li>
          {toggleVersion && <VersionDropbox />}
        </ul>

        <div className="mx-4 my-5 p-[1px] bg-slate-300/30"></div>
        {/* Sidebar Links */}
        <ul className="w-full px-4 flex flex-col gap-5  text-white"  >
          <li className="w-fit text-white hover:text-slate-300 duration-200 ease-in-out flex items-center gap-1" onClick={handleTheme} ref={themeRef}>
            <PiMoonStarsFill size={25} className="hover:text-slate-300 duration-300 ease-in-out text-white" /> 
            <p>Toggle Theme</p>
            <IoMdArrowDropdown size={15} className={`${toggleTheme ? "rotate-180 duration-200 ease-in-out" : "duration-300 ease-in-out"} text-white`} />
          </li>
          {toggleTheme && <Theme />}
        </ul>

        <div className="mx-4 my-5 p-[1px] bg-slate-300/30"></div>
      
      </div>
    </div>
  );
};

export default Sidebar;



