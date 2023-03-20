import Hero from "../components/Hero";
import About from "../components/About";
import Rules from "../components/Rules";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

/* premiações */
import { FaMedal, FaTrophy, FaVolleyballBall } from "react-icons/fa";
import atacante from "../assets/premios/atacante.png";
import oposto from "../assets/premios/oposto.png";
import central from "../assets/premios/central.png";
import levantador from "../assets/premios/levantador.png";
import ponta from "../assets/premios/ponta.png";
import defesa from "../assets/premios/defesa.png";
import revelacao from "../assets/premios/revelacao.png";
import { GiPodium } from "react-icons/gi";

const premiacoes = [
  {
    title: "Melhor Atacante",
    icon: atacante,
  },
  {
    title: "Melhor Oposto",
    icon: oposto,
  },
  {
    title: "Melhor Central",
    icon: central,
  },
  {
    title: "Melhor Levantador",
    icon: levantador,
  },
  {
    title: "Melhor Ponta",
    icon: ponta,
  },
  {
    title: "Melhor Passe/Defesa",
    icon: defesa,
  },
  {
    title: "3 Jogadores Revelação",
    icon: revelacao,
  },
];

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
        <div className="flex items-center gap-2 text-2xl font-bold text-white lg:text-5xl">
          <GiPodium size={32} />
          <h1>Premiações</h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* 1° and 2° place */}
          <div className="bg-primary flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-lg p-8">
            <div className="bg-secondary flex h-24 w-24 items-center justify-center rounded-full">
              <FaTrophy size={42} />
            </div>
            <h2 className="text-3xl font-bold">1° e 2° Lugar</h2>
            <p className="text-lg font-semibold">Troféu e Medalhas</p>
          </div>

          {/* 3° place */}
          <div className="bg-primary flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-lg p-8">
            <div className="bg-secondary flex h-24 w-24 items-center justify-center rounded-full">
              <FaMedal size={42} />
            </div>
            <h2 className="text-3xl font-bold">3° Lugar</h2>
            <p className="text-lg font-semibold">Medalhas</p>
          </div>

          {/* MVP */}
          <div className="bg-primary flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-lg p-8">
            <div className="bg-secondary flex h-24 w-24 items-center justify-center rounded-full">
              <FaVolleyballBall size={42} />
            </div>
            <h2 className="text-3xl font-bold">MVP</h2>
            <p className="text-lg font-semibold">Melhor Jogador</p>
          </div>

          {premiacoes.map((premiacao, i) => (
            <div
              key={i}
              className="bg-primary flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-lg p-8"
            >
              <div className="bg-secondary flex h-24 w-24 items-center justify-center rounded-full">
                <img
                  src={premiacao.icon}
                  alt={premiacao.title}
                  className="object-contain"
                />
              </div>
              <h2 className="text-center text-3xl font-bold">
                {premiacao.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Subscription */}
        <Subscription />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
