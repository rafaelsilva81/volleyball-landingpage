import React from "react";
import { FaVolleyballBall } from "react-icons/fa";

import DefaultAnimationContainer from "./common/DefaultAnimation";

const About = () => {
  return (
    <div id="sobre" className="mt-10 flex flex-col gap-4">
      <div className="flex items-center gap-2 text-3xl font-bold text-white lg:text-5xl">
        <FaVolleyballBall />
        <h1>Sobre o Evento</h1>
      </div>
      <p className="text-white lg:text-xl">
        A Copa Iguatuense de Voleibol é um evento que visa promover a prática de
        esportes dentro do município através da prática do vôlei. A competição
        ocorrerá nos dias 22 e 23 de Abril de 2023 na Av. Dário Rabêlo, 977 -
        Sete de Setembro, Iguatu (URCA). <br />
        <b>
          Apenas atletas do município de Iguatu poderão participar da
          competição.
        </b>
      </p>
    </div>
  );
};

export default About;
