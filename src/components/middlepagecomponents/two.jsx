
import { BsBoxSeam, BsGlobe } from "react-icons/bs";
import CopyBoxComponent from "../../utils/ui/CopyBoxComponent"


const ComponentTwo = () => {
    const code1 = `$ npm install bootstrap@5.3.3`
    const code2 = `$ gem install bootstrap -v 5.3.3`
    const code3 = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`
    const code4 = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`
  return (
    <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col p-5 md:p-10 gap-2 md:gap-5">
            <BsBoxSeam size={30} className="text-slate-500"/>
            <h1 className="text-xl md:text-3xl font-semibold">Install via package manager</h1>
            <p className="text-md ">Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don’t include documentation or our full build scripts. You can also <a href="" className="text-blue-700 underline hover:text-blue-800">use any demo from our Examples repo</a> to quickly jumpstart Bootstrap projects.</p>
            <CopyBoxComponent code={code1} className="w-full"/>
            <CopyBoxComponent code={code2} className="w-full"/>
            <p><a href="" className="text-blue-700 underline hover:text-blue-800">Read our installation docs</a> for more info and additional package managers.</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-5 md:p-10 gap-2 md:gap-5 border-l border-slate-900/10">
            <BsGlobe size={30} className="text-slate-500"/>
            <h1 className="text-xl md:text-3xl font-semibold">Include via CDN</h1>
            <p className="text-md">When you only need to include Bootstrap’s compiled CSS or JS, you can use <a href="" className="text-blue-700 underline hover:text-blue-800">jsDelivr</a>. See it in action with our simple <a href="" className="text-blue-700 underline hover:text-blue-800">quick start</a>, or <a href="" className="text-blue-700 underline hover:text-blue-800">browse the examples</a> to jumpstart your next project. You can also choose to include Popper and our JS <a href="" className="text-blue-700 underline hover:text-blue-800">separately</a>.</p>
            <CopyBoxComponent code={code3} className='w-full'/>
            <CopyBoxComponent code={code4} className='w-full'/>
        </div>
    </div>
  )
}

export default ComponentTwo