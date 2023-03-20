import Hero from "../components/Hero";
import About from "../components/About";
import Rules from "../components/Rules";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";
import Prizes from "../components/Prizes";
import { FaThumbsUp } from "react-icons/fa";

/* sponsor images */
import g1 from "../assets/patrocinadores/g1.png";
import g2 from "../assets/patrocinadores/g2.png";

function Home() {
  return (
    <>
      {/* Fixed on top header */}
      {/*  <Header /> */}

      {/* Hero */}
      <Hero />

      <main className="border-b-secondary flex flex-col gap-14 border-b-4 p-4 lg:px-20 lg:py-5">
        {/* About */}
        <About />
        {/* Rules */}
        <Rules />
        {/* Trophies */}
        <Prizes />
        {/* Sponsors */}
        <div className="flex flex-col gap-2">
          <div className="mb-4 flex items-center gap-2 text-3xl font-bold text-white lg:text-5xl">
            <FaThumbsUp size={32} />
            <h1>Patrocinadores</h1>
          </div>

          {/* Gold sponsors (bigger image) */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-primary rounded-lg p-2">
              <img
                src={g1}
                alt="Patrocinador"
                className="h-48 w-48 object-scale-down"
              />
            </div>
            <div className="bg-primary rounded-lg p-2">
              <img
                src={g2}
                alt="Patrocinador"
                className="h-48 w-48 object-scale-down"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Subscription */}
      <div className="flex w-full flex-col items-center justify-center bg-gray-900 p-16 ">
        <Subscription />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
