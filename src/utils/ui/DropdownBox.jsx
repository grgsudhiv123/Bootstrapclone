import React, { useState, useEffect, useRef } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";



const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropboxRef = useRef()
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(()=>{
    const handleOutsideClick = (e) =>{
      if(!dropboxRef.current.contains(e.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return (()=> {
      document.removeEventListener('click', handleOutsideClick)
    })
  },[])

  return (
    <div className="relative dropdown p-3 md:p-5 border border-slate-300 rounded-md md:rounded-xl" >
      <div className='w-fit' ref = {dropboxRef}>
        <button
        className="btn flex items-center gap-3 btn-primary dropdown-toggle p-2 bg-blue-600 text-white rounded-lg"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        Dropdown <TiArrowSortedDown />
      </button>
      {isOpen && (
        <ul className="absolute dropdown-menu show bg-white py-2 border top-16 rounded-lg">
          <li>
            <button className="dropdown-item cursor-pointer hover:bg-slate-300 p-2 text-sm w-full" type="button">
              Dropdown item 1
            </button>
          </li>
          <li>
            <button className="dropdown-item cursor-pointer hover:bg-slate-300 p-2  my-2 text-sm w-full" type="button">
              Dropdown item 2
            </button>
          </li>
          <li>
            <button className="dropdown-item cursor-pointer hover:bg-slate-300 p-2 text-sm w-full" type="button">
              Dropdown item 3
            </button>
          </li>
        </ul>
      )}
      </div>
    </div>
  );
};

export default Dropdown;
