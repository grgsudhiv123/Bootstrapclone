
import { BsBoxSeam, BsGlobe } from "react-icons/bs";
import CopyBoxComponent from "../../../../utils/ui/CopyBoxComponent"


const ComponentFive = () => {
    const code1 = `
// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
    `

    const code3 = `
// Functions first
@import "../node_modules/bootstrap/scss/functions";

// Variable overrides second
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Required Bootstrap imports
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional components
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";
@import "../node_modules/bootstrap/scss/utilities/api";
    `

  return (
    <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5">
            <h1 className="text-xl md:text-3xl font-semibold">Include all of Bootstrap’s Sass</h1>
            <p className="text-md ">Import one stylesheet and you're off to the races with every feature of our CSS.</p>
            <CopyBoxComponent code={code1} className="w-full"/>
            <p><span>Learn more about our </span>
                <a href="" className="text-blue-700 underline hover:text-blue-800">global Sass options.</a>
            </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5 ">
            <h1 className="text-xl md:text-3xl font-semibold">Include what you need</h1>
            <p className="text-md">The easiest way to customize Bootstrap—include only the CSS you need.</p>
            <CopyBoxComponent code={code3} className='w-full'/>
            <p><span>Learn more about </span>
                <a href="" className="text-blue-700 underline hover:text-blue-800"> using Bootstrap with Sass.</a>
            </p>
        </div>
    </div>
  )
}

export default ComponentFive