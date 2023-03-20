import React from "react";

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

import { motion } from "framer-motion";

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

const Prizes = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-2xl font-bold text-white lg:text-5xl">
        <GiPodium size={32} />
        <h1>Premiações</h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* 1° and 2° place */}
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0,
          }}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 20 },
          }}
          className="bg-primary flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-lg p-8"
        >
          <div className="text-secondary flex h-24 w-24 items-center justify-center rounded-full bg-white">
            <FaTrophy size={42} />
          </div>
          <h2 className="text-3xl font-bold">1° e 2° Lugar</h2>
          <p className="text-lg font-semibold">Troféu e Medalhas</p>
        </motion.div>

        {/* 3° place */}
        <motion.div
          transition={{
            duration: 0.5,
            delay: 0.05,
          }}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 20 },
          }}
          className="bg-primary flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-lg p-8"
        >
          <div className="text-secondary flex h-24 w-24 items-center justify-center rounded-full bg-white">
            <FaMedal size={42} />
          </div>
          <h2 className="text-3xl font-bold">3° Lugar</h2>
          <p className="text-lg font-semibold">Medalhas</p>
        </motion.div>

        {/* MVP */}
        <motion.div
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 20 },
          }}
          className="bg-primary flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-lg p-8"
        >
          <div className="text-secondary flex h-24 w-24 items-center justify-center rounded-full bg-white">
            <FaVolleyballBall size={42} />
          </div>
          <h2 className="text-3xl font-bold">MVP</h2>
          <p className="text-lg font-semibold">Melhor Jogador</p>
        </motion.div>

        {premiacoes.map((premiacao, i) => (
          <motion.div
            transition={{
              duration: 0.5,
              delay: i * 0.05,
            }}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 20 },
            }}
            key={i}
            className="bg-primary flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-lg p-8"
          >
            <div className="text-secondary flex h-24 w-24 items-center justify-center rounded-full bg-white">
              <img
                src={premiacao.icon}
                alt={premiacao.title}
                className="object-contain"
              />
            </div>
            <h2 className="text-center text-3xl font-bold">
              {premiacao.title}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Prizes;
