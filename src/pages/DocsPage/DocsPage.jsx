import Navbar from "../../components/headerfooter/navbar";
import Footer from "../../components/headerfooter/footer";

import CompSidebar from "../DocsPage/pagecomponents/SidebarContent";
import PageProgress from "../DocsPage/pagecomponents/PageProgress";
import HeroComponent from "../DocsPage/pagecomponents/HeroComponent";

const DocsPage = () => {
  return (
    <section className="w-full h-auto">
      <Navbar />
      <section className="relative max-w-screen-xl mx-auto flex flex-row mt-18 mb-5">
        <CompSidebar />
        <HeroComponent />
        <PageProgress />
      </section>
      <Footer />
    </section>
  );
};

export default DocsPage;
