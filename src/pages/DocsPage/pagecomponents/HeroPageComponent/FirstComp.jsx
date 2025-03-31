import React from 'react'

const FirstComp = () => {
  return (
        <div className="w-full mt-3">
            <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 justify-between md:items-center">
                <h1 className="text-4xl md:text-[40px] font-semibold py-2">Get started with Bootstrap</h1>
                <a href="https://github.com/twbs/bootstrap/blob/v5.3.3/site/content/docs/5.3/getting-started/introduction.md" target="_blank" className="h-fit w-fit text-sm  p-1 border border-slate-600 rounded-md hover:border-[rgb(120,52,252)] hover:text-[rgb(120,52,252)] duration-200 ease-in-out">View on Github</a>
            </div>
            <p className="text-xl md:text-2xl font-light ">Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.</p>
        </div>
  )
}

export default FirstComp