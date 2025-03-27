import React from 'react'

const Theme = () => {
  return (
    <>
        <div className="absolute top-14 right-32 p-2 w-36 rounded-md shadow-2xl bg-white">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <p className="py-1 px-5 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md cursor-pointer">Light</p>
                        <p className="py-1 px-5 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md cursor-pointer">Dark</p>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Theme