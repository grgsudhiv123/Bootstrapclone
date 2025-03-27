import Navbar from "../src/headerfooter/navbar"
import Footer from "./headerfooter/footer"
import HeroPage from "./pages/heroPage"

function App() {

  return (
    <>
    <section className="w-full h-auto overflow-x:hidden bg-slate-200">
      <section>
        <Navbar/>
      </section>
      <section>
        <HeroPage/>
      </section>
      <section>
        <Footer />
      </section>
    </section>
    </>
  )
}

export default App
