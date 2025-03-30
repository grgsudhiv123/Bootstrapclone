import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";

const Searchcomponent = ({setToggleSearch,toggleSearch}) => {
    const [typing, setTyping] = useState("")
    const [toggleCross, setToggleCross] = useState(false)
    useEffect(()=>{
        if(typing){
            setToggleCross(true)
        } else{
            setToggleCross(false)
        }
    },[typing])
    const handleClick = () => {
        setTyping("")
        setToggleCross(false)
    }

    const handleOuterClick = () => {
        setToggleSearch(!toggleSearch)
    }
  
    const handleInnerClick = (e) => {
        e.stopPropagation(); // Prevents event from reaching the outer div
        setToggleSearch(toggleSearch)
    }




    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };

        if (toggleSearch) {
            window.addEventListener("wheel", preventScroll, { passive: false });
            window.addEventListener("touchmove", preventScroll, { passive: false });
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
        };
    }, [toggleSearch]);
    
    return (
        <>
        <div className="absolute top-0 left-0 w-screen h-screen bg-slate-900/50 z-50 " onClick={handleOuterClick}>
            <div className="relative w-full h-full flex">
                <div className="w-full md:w-xl mx-auto h-full md:h-fit md:mt-36 flex flex-col justify-between gap-5 border-2 border-slate-100 bg-slate-100 md:rounded-lg shadow-xl " onClick={handleInnerClick}>
                    <div className=" p-3 flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <div className="w-full flex  border-2 border-[rgb(120,52,252)] items-center px-2 rounded-sm">
                                    <IoIosSearch size={30} className="text-[rgb(120,52,252)]"/>
                                    <input type="text" value={typing} onChange={(e)=>{setTyping(e.target.value)}} placeholder="search" className="outline-none p-3 w-full text-black text-md"/>
                                    {toggleCross ? <RxCross1 onClick={handleClick} className="text-slate-800 cursor-pointer "/> : ""}
                                </div>
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    setToggleSearch(false)
                                    }}  className="text-[rgb(120,52,252)] text-lg font-medium md:hidden">Cancel
                                </button>
                            </div>
                            <div className="w-4/5 mx-auto">
                                <p className="text-slate-600 text-center text-md">No current searches</p>
                            </div>
                    </div>
                    <div className="p-2">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Searchcomponent