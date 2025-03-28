
import CopyBoxComponent from "../../utils/ui/CopyBoxComponent"
import Dropdown from "../../utils/ui/DropdownBox"
const CompoEleven = () => {
    const code1 = `
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
    <li><button class="dropdown-item" type="button">Dropdown item</button></li>
  </ul>
</div>
    `
    const features = [
    { name: "Alert", description: "Show and hide alert messages to your users." },
    { name: "Button", description: "Programmatically control the active state for buttons." },
    { name: "Carousel", description: "Add slideshows to any page, including support for crossfade." },
    { name: "Collapse", description: "Expand and collapse areas of content, or create accordions." },
    { name: "Dropdown", description: "Create menus of links, actions, forms, and more." },
    { name: "Modal", description: "Add flexible and responsive dialogs to your project." },
    { name: "Offcanvas", description: "Build and toggle hidden sidebars into any page." },
    { name: "Popover", description: "Create custom overlays. Built on Popper." },
    { name: "Scrollspy", description: "Automatically update active nav links based on page scroll." },
    { name: "Tab", description: "Allow Bootstrap nav components to toggle contents." },
    { name: "Toast", description: "Show and hide notifications to your visitors." },
    { name: "Tooltip", description: "Replace browser tooltips with custom ones. Built on Popper." }
    ];

  return (
    <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5">
            <h1 className="text-xl md:text-3xl font-semibold">Data attribute API</h1>
            <p className="text-md ">Why write more JavaScript when you can write HTML? Nearly all of Bootstrap's JavaScript plugins feature a first-class data API, allowing you to use JavaScript just by adding data attributes.</p>
            <Dropdown />
            <CopyBoxComponent code={code1} className="w-full"/>
            <div className='text-sm'>
                <span>Learn more about </span>
                <a href='#' className="text-blue-700 underline hover:text-blue-800">our JavaScript as modules</a>
                <span> and </span>
                <a href='#' className="text-blue-700 underline hover:text-blue-800">using the programmatic API.</a> 
            </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5 ">
            <h1 className="text-xl md:text-3xl font-semibold">Comprehensive set of plugins</h1>
            <p className="text-md">Bootstrap features a dozen plugins that you can drop into any project. Drop them in all at once, or choose just the ones you need.</p>
            <div className="w-full bg-slate-200 p-[1px]"></div>
            <div className="grid sm:grid-cols-2 w-full gap-5">
                {features.map((feature,index)=>{
                    return(
                        <a href="" key={index}>
                            <h2 className="text-lg font-medium">{feature.name}</h2>
                            <p className="text-gray-700 text-sm">{feature.description}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default CompoEleven