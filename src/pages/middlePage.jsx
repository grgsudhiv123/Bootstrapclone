import CompOne from "../components/middlepagecomponents/one"
import ComponentTwo from "../components/middlepagecomponents/two"
import Compthree from "../components/middlepagecomponents/three"
import CompFour from "../components/middlepagecomponents/four"
import ComponentFive from "../components/middlepagecomponents/five"
import CompSix from "../components/middlepagecomponents/six"
import ComponentSeven from "../components/middlepagecomponents/seven"
import CompEight from "../components/middlepagecomponents/eight"




const MiddlePage = () => {
  return (
    <div className="w-full h-auto">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10 md:gap-14">
            <CompOne/>
            <ComponentTwo/>
            <Compthree />
            <CompFour />
            <ComponentFive />
            <CompSix />
            <ComponentSeven />
            <CompEight />
        </div>
    </div>
  )
}

export default MiddlePage