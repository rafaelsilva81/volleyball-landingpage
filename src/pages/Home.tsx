import Hero from "../components/Hero";
import About from "../components/About";
import Rules from "../components/Rules";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* Fixed on top header */}
      {/*  <Header /> */}

      {/* Hero */}
      <Hero />

      <main className="border-b-secondary flex flex-col gap-14 border-b-4 p-4  lg:px-20 lg:py-5">
        {/* About */}
        <About />

        {/* Rules */}
        <Rules />

        {/* Inscrição */}
        <Subscription />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
