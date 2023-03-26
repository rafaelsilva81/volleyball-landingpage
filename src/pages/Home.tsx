import Hero from "../components/Hero";
import About from "../components/About";
import Rules from "../components/Rules";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";
import Prizes from "../components/Prizes";

import Sponsors from "../components/Sponsors";
import Teams from "../components/Teams";

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
        <Sponsors />
        {/* Teams */}
        <Teams />
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
