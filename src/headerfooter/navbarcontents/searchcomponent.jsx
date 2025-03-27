import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";

const Searchcomponent = () => {
    const [typing, setTyping] = useState()
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
    return (
        <>
        <div className="absolute left-0 top-0 w-full h-full bg-purple-400/50">
            <div className="w-full h-full flex items-center">
                <div className="w-md mx-auto flex flex-col gap-5 border-2 bg-slate-100 rounded-lg shadow-xl">
                    <div className=" p-3">
                        <div className="w-full flex border-2 border-[rgb(120,52,252)] items-center px-2 rounded-sm">
                            <IoIosSearch size={30} className="text-[rgb(120,52,252)]"/>
                            <input type="text" value={typing} onChange={(e)=>{setTyping(e.target.value)}} placeholder="search" className="outline-none p-3 w-full text-black text-md"/>
                            {toggleCross ? <RxCross1 onClick={handleClick} className="text-slate-800"/> : ""}
                        </div>
                        </div>
                        <div className="py-10">
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