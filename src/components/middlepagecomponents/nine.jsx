
import CopyBoxComponent from "../../utils/ui/CopyBoxComponent"
import { FaArrowRightLong  } from "react-icons/fa6";
import BootstrapComponent from "../../utils/ui/ToggleComponent"

const CompoNine = () => {
    const code1 = `
<ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
  </li>
</ul>
    `
    const code3 = `
@import "bootstrap/scss/bootstrap";

$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    )
  )
);
    `

  return (
    <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5">
            <h1 className="text-xl md:text-3xl font-semibold">Quickly customize components</h1>
            <p className="text-md ">Apply any of our included utility classes to our components to customize their appearance, like the navigation example below. There are hundreds of classes available—from <a href="" className="text-blue-700 underline hover:text-blue-800">positioning</a> and <a href="" className="text-blue-700 underline hover:text-blue-800">sizing</a> to <a href="" className="text-blue-700 underline hover:text-blue-800">colors</a> and <a href="" className="text-blue-700 underline hover:text-blue-800">effects</a>. Mix them with CSS variable overrides for even more control.</p>
            <BootstrapComponent />
            <CopyBoxComponent code={code1} className="w-full"/>
            <div className='flex items-center gap-2 text-blue-600 cursor-pointer'>
                <a href='#' className='text-md font-semibold underline'>
                    Explore customized components
                </a>
                <FaArrowRightLong className='transform hover:translate-x-2 duration-200 ease-in-out'/>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-4 md:p-10 gap-2 md:gap-5 ">
            <h1 className="text-xl md:text-3xl font-semibold">Create and extend utilities</h1>
            <p className="text-md">Use Bootstrap's utility API to modify any of our included utilities or create your own custom utilities for any project. Import Bootstrap first, then use Sass map functions to modify, add, or remove utilities.</p>
            <CopyBoxComponent code={code3} className='w-full'/>
            <div className='flex items-center gap-2 text-blue-600 cursor-pointer'>
                <a href='#' className='text-md font-semibold underline'>
                    Explore the utility API
                </a>
                <FaArrowRightLong className='transform hover:translate-x-2 duration-200 ease-in-out'/>
            </div>
        </div>
    </div>
  )
}

export default CompoNine