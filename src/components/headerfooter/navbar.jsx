import { FaBootstrap, FaGithub, FaTwitter } from "react-icons/fa";
import { CgOpenCollective } from "react-icons/cg";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import { PiMoonStarsFill } from "react-icons/pi";
import VersionDropbox from "../headerfooter/navbarcontents/versionDropbox";
import Theme from "../headerfooter/navbarcontents/theme";
import Searchcomponent from "../headerfooter/navbarcontents/searchcomponent";
import { useState, useEffect, useRef} from "react";
import { BsThreeDots } from "react-icons/bs";
import Sidebar from "../headerfooter/navbarcontents/slideBar"
import { useNavigate,Link } from "react-router-dom";

const Navbar = () => {
    const [toggleVersion, setToggleVersion] = useState(false);
    const [toggleTheme, setToggleTheme] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    const versionRef = useRef()
    const themeRef = useRef()

    const navigate = useNavigate()

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
        <nav className="fixed w-full bg-[rgb(120,52,252,0.97)] top-0 z-20 ">
            {toggleSearch && <Searchcomponent setToggleSearch={setToggleSearch} toggleSearch={toggleSearch}/>}
            <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
            <div className="max-w-screen-xl flex mx-auto justify-between px-2 py-2 md:px-5">
                <div className="flex-1 flex gap-5 justify-center lg:justify-start items-center">
                    <FaBootstrap size={45}  onClick={()=>navigate('/')} className="text-white transition-transform hover:scale-110 hover:-rotate-20 duration-300 ease-in-out cursor-pointer " />
                    <div className="hidden lg:flex w-full gap-5 flex-row items-center">
                        {["Docs", "Example", "Icons", "Themes", "Blog"].map((item,index) => (
                            <p key={index} onClick={()=>handleNavigation(item)} className="text-slate-300 hover:text-white duration-200 ease-in-out font-medium cursor-pointer">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="relative flex-1 hidden lg:flex items-center">
                    <div onClick={() => setToggleSearch(!toggleSearch)} className="flex items-center justify-between bg-transparent border border-gray-400 rounded-lg py-1 w-2/3 mx-auto text-slate-400 hover:text-slate-100 cursor-pointer px-2 hover:border-blue-500 hover:ring-4 ring-blue-500">
                        <div className="flex gap-2">
                            <IoMdSearch size={25} />
                            <p>Search</p>
                        </div>
                        <div>ctrl k</div>
                    </div>
                </div>
                <div className="flex-1 hidden lg:flex items-center justify-end">
                    <div className="flex gap-5 items-center justify-end w-2/3">
                        <div className="flex gap-3">
                            <a href="https://github.com/twbs/bootstrap" target="_blank"><FaGithub size={18} className="text-white hover:text-slate-300 duration-200 ease-in-out" /></a>
                            <a href="https://x.com/getbootstrap" target="_blank"><FaTwitter size={18} className="text-white hover:text-slate-300 duration-200 ease-in-out" /></a>
                            <a href="https://opencollective.com/bootstrap" target="_blank"><CgOpenCollective size={18} className="text-white hover:text-slate-300 duration-200 ease-in-out" /></a>
                        </div>
                        <div onClick={handleVersion} ref={versionRef} className="relative border-l border-r border-slate-300 px-5 flex flex-row justify-center cursor-pointer">
                            <p className="text-white hover:text-slate-300 duration-200 ease-in-out flex items-center">
                                <span className="text-md">v5.3</span>
                                <IoMdArrowDropdown size={18} className={`${toggleVersion ? "rotate-180 duration-200 ease-in-out" : "duration-200 ease-in-out"}`} />
                            </p>
                            {toggleVersion && <VersionDropbox />}
                        </div>
                        <div onClick={handleTheme} ref={themeRef} className="relative flex justify-center items-center cursor-pointer">
                            <PiMoonStarsFill size={25} className="hover:text-slate-300 duration-300 ease-in-out text-white" />
                            <IoMdArrowDropdown size={15} className={`${toggleTheme ? "rotate-180 duration-200 ease-in-out" : "duration-300 ease-in-out"} text-white`} />
                            {toggleTheme && <Theme />}
                        </div>
                    </div>
                </div>
                <div className="absolute flex lg:hidden items-center gap-3 right-0 w-fit py-2 px-5 justify-end text-white">
                    <IoMdSearch size={25} onClick={() => setToggleSearch(!toggleSearch)} />
                    <BsThreeDots size={25} onClick={() => setIsOpenSidebar(!isOpenSidebar)}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
