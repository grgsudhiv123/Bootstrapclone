import Navbar from "../../components/headerfooter/navbar"
import Footer from "../../components/headerfooter/footer"
import HeroPage from "./Pagecomponent/heroPage"
import MiddlePage from "./Pagecomponent/middlePage"

const HomePage = () =>  {

  return (
    <>
    <section className="w-full h-auto overflow-x:hidden">
      <section>
        <Navbar/>
      </section>
      <section>
        <HeroPage/>
      </section>
      <section>
        <MiddlePage />
      </section>
      <section>
        <Footer />
      </section>
    </section>
    </>
  )
}

export default HomePage
