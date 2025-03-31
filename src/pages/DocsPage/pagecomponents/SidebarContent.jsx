import { IoBookSharp } from "react-icons/io5";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { LuLayoutGrid } from "react-icons/lu";
import { MdContentPasteSearch } from "react-icons/md";
import { SiFormspree } from "react-icons/si";
import { BsBorderStyle } from "react-icons/bs";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { PiBracketsCurly } from "react-icons/pi";

const sidebarData = [
  {
    title: "Getting Started",
    icon: <IoBookSharp size={20} className="text-[rgb(120,52,252)] "/>,
    items: [
      "Introduction", "Download", "Contents", "Browsers & devices", "JavaScript",
      "Webpack", "Parcel", "Vite", "Accessibility", "RFS", "RTL", "Contribute"
    ],
  },
  {
    title: "Customize",
    icon: <LiaSwatchbookSolid size={20} className="text-cyan-700 "/>,
    items: ["Overview", "Sass", "Options", "Color", "Color modes", "Components", "CSS variables", "Optimize"],
  },
  {
    title: "Layout",
    icon: <LuLayoutGrid size={20} className="text-blue-700  "/>,
    items: ["Breakpoints", "Containers", "Grid", "Columns", "Gutters", "Utilities", "Z-index", "CSS Grid"],
  },
  {
    title: "Content",
    icon: <MdContentPasteSearch size={20} className="text-red-500" />,
    items: ["Reboot", "Typography", "Images", "Tables", "Figures"],
  },
  {
    title: "Forms",
    icon: <SiFormspree size={16} className="text-green-500"/>,
    items: ["Overview", "Form control", "Select", "Checks & radios", "Range", "Input group", "Floating labels", "Layout", "Validation"],
  },
  {
    title: "Components",
    icon: <BsBorderStyle size={16} className="text-purple-500" />,
    items: [
      "Accordion", "Alerts", "Badge", "Breadcrumb", "Buttons", "Button group",
      "Card", "Carousel", "Close button", "Collapse", "Dropdowns", "List group",
      "Modal", "Navbar", "Navs & tabs", "Offcanvas", "Pagination", "Placeholders",
      "Popovers", "Progress", "Scrollspy", "Spinners", "Toasts", "Tooltips"
    ],
  },
  {
    title: "Helpers",
    icon: <TbHelpHexagonFilled size={16} className="text-slate-500" />,
    items: [
      "Clearfix", "Color & background", "Colored links", "Focus ring", "Icon link",
      "Position", "Ratio", "Stacks", "Stretched link", "Text truncation",
      "Vertical rule", "Visually hidden"
    ],
  },
  {
    title: "Utilities",
    icon: <PiBracketsCurly size={16} className="text-orange-500"/>,
    items: ["API", "Background", "Borders", "Colors", "Display", "Flex", "Float", "Interactions", "Link"],
  },
];

const CompSidebar = () => {
  return (
    <div className="w-[18%] h-[calc(100vh-4rem)] overflow-auto sticky top-16 hidden md:flex flex-col">
      {sidebarData.map((section, index) => (
        <div key={index} className="w-full p-2">
          <div className="flex flex-row gap-2 items-center">
            {section.icon}
            <p className="font-semibold text-md text-slate-900">{section.title}</p>
          </div>
          <ul className="pl-7">
            {section.items.map((item, i) => (
              <li key={i} className="text-sm p-[5px] rounded-sm hover:bg-slate-200 w-fit cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CompSidebar;
