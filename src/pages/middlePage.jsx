import CompOne from "../components/middlepagecomponents/one"
import ComponentTwo from "../components/middlepagecomponents/two"
import Compthree from "../components/middlepagecomponents/three"
import CompFour from "../components/middlepagecomponents/four"
import ComponentFive from "../components/middlepagecomponents/five"
import CompSix from "../components/middlepagecomponents/six"
import ComponentSeven from "../components/middlepagecomponents/seven"
import CompEight from "../components/middlepagecomponents/eight"
import CompoNine from "../components/middlepagecomponents/nine"
import CompTen from "../components/middlepagecomponents/ten"
import CompoEleven from "../components/middlepagecomponents/eleven"




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
        </div>
    </div>
  )
}

export default MiddlePage