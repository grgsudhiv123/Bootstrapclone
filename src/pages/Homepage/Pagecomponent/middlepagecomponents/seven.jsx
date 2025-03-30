
import { BsBoxSeam, BsGlobe } from "react-icons/bs";
import CopyBoxComponent from "../../../../utils/ui/CopyBoxComponent"


const ComponentSeven = () => {
    const code1 = `
.component {
  color: var(--bs-gray-800);
  background-color: var(--bs-gray-100);
  border: 1px solid var(--bs-gray-200);
  border-radius: .25rem;
}

.component-header {
  color: var(--bs-purple);
}
    `

    const code3 = `
body {
  --bs-body-font-family: var(--bs-font-monospace);
  --bs-body-line-height: 1.4;
  --bs-body-bg: var(--bs-gray-100);
}

.table {
  --bs-table-color: var(--bs-gray-600);
  --bs-table-bg: var(--bs-gray-100);
  --bs-table-border-color: transparent;
}
    `

  return (
    <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5">
            <h1 className="text-xl md:text-3xl font-semibold">Using CSS variables</h1>
            <p className="text-md ">Use any of our <a href="" className="text-blue-700 underline hover:text-blue-800">global :root variables</a> to write new styles. CSS variables use the <span className="text-red-700">var(--bs-variableName)</span> syntax and can be inherited by children elements.</p>
            <CopyBoxComponent code={code1} className="w-full"/>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5 ">
            <h1 className="text-xl md:text-3xl font-semibold">Customizing via CSS variables</h1>
            <p className="text-md">Override global, component, or utility class variables to customize Bootstrap just how you like. No need to redeclare each rule, just a new variable value.</p>
            <CopyBoxComponent code={code3} className='w-full'/>
        </div>
    </div>
  )
}

export default ComponentSeven