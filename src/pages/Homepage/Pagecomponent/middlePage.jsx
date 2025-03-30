import CompOne from "./middlepagecomponents/one"
import ComponentTwo from "./middlepagecomponents/two"
import Compthree from "./middlepagecomponents/three"
import CompFour from "./middlepagecomponents/four"
import ComponentFive from "./middlepagecomponents/five"
import CompSix from "./middlepagecomponents/six"
import ComponentSeven from "./middlepagecomponents/seven"
import CompEight from "./middlepagecomponents/eight"
import CompoNine from "./middlepagecomponents/nine"
import CompTen from "./middlepagecomponents/ten"
import CompoEleven from "./middlepagecomponents/eleven"
import CompTwelve from "./middlepagecomponents/twelve"
import CompThirteen from "./middlepagecomponents/thirteen"




const MiddlePage = () => {
  return (
    <div className="w-full h-auto">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-5">
            <CompOne/>
            <ComponentTwo/>
            <Compthree />
            <CompFour />
            <ComponentFive />
            <CompSix />
            <ComponentSeven />
            <CompEight />
            <CompoNine />
            <CompTen />
            <CompoEleven />
            <CompTwelve />
            <CompThirteen />
        </div>
    </div>
  )
}

export default MiddlePage