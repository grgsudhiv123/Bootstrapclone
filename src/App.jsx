import Navbar from "../src/headerfooter/navbar"
import Footer from "./headerfooter/footer"
import HeroPage from "./pages/heroPage"
import MiddlePage from "./pages/middlePage"

function App() {

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

export default App
