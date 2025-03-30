import React from 'react'


const VersionDropbox = () => {
  return (
    <>
        <div className=" md:absolute top-8 right-0 p-2 w-36 rounded-md shadow-2xl bg-white z-30">
            <div className="flex flex-col">
                <p className="py-1 px-5 text-slate-500 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md">v5 releases</p>
                <p className="py-1 px-5 text-slate-500">Latest</p>
                <div className="flex flex-col">
                    <a className="py-1 px-5 text-slate-900 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md" href="#">v5.3.2</a>
                    <a className="py-1 px-5 text-slate-900 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md" href="#">v5.3.1</a>
                    <a className="py-1 px-5 text-slate-900 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md" href="#">v5.2.2</a>
                </div>
            </div>
            <div className="w-full border-[1px] border-slate-300 my-2"></div>
                <div className="flex flex-col">
                    <p className="py-1 px-5 text-slate-500">Latest</p>
                    <div className="flex flex-col">
                        <a className="py-1 px-5 text-slate-900 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md" href="#">v5.3.2</a>
                        <a className="py-1 px-5 text-slate-900 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md" href="#">v5.3.1</a>
                        <a className="py-1 px-5 text-slate-900 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md" href="#">v5.2.2</a>
                    </div>
                </div>
            <div className="w-full border-[1px] border-slate-300 my-2"></div>
            <div className="py-1 px-5 text-slate-500 hover:bg-slate-200 active:bg-[rgb(120,52,252)] active:text-white rounded-md">
                All versions
            </div>
        </div>
    </>
  )
}

export default VersionDropbox