import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import org1 from "../assets/org1.png";
import org2 from "../assets/org2.png";

import {
  FaChevronDown,
  FaExternalLinkAlt,
  FaCalendar,
  FaMapMarker,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="border-b-secondary flex h-screen w-full flex-col-reverse border-b-8 bg-gray-800 lg:flex-row lg:justify-between">
      {/* Information */}
      <div className="flex flex-col gap-5 p-8 px-12 lg:w-1/2 lg:justify-center">
        {/* Main Title */}
        <div className="flex flex-col flex-wrap">
          <h1 className="text-2xl font-bold drop-shadow-lg lg:text-5xl">
            Copa Iguatuense
          </h1>
          <div className="flex flex-col items-baseline gap-2 lg:flex-row">
            <h1 className="text-primary text-5xl font-bold drop-shadow-lg lg:text-8xl">
              De Voleibol
            </h1>
            <h6 className="text-xl font-bold drop-shadow-lg">2023</h6>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg drop-shadow-lg lg:text-lg">
          Venha participar do <b>primeiro campeonato municipal</b> de Voleibol
          em Iguatu. Com premiações para os 3 primeiros colocados e e para os
          melhores atletas da competição. Inscreva-se com a sua equipe e
          participe!
        </p>

        {/* Info badges */}
        <div className="flex flex-col gap-2">
          {/* Days */}
          <div className="flex w-fit items-center gap-2 text-sm font-semibold lg:text-lg">
            <FaCalendar className="text-primary" />
            <p className="">Dias 29 e 30 de Abril</p>
          </div>

          {/* Location */}
          <div className=" flex w-fit items-center gap-2 text-sm font-semibold lg:text-lg">
            <FaMapMarker className="text-primary" />
            <p className="">
              1075, Av. Dário Rabêlo, 977 - Sete de Setembro, Iguatu (URCA)
            </p>
          </div>
        </div>

        {/* Call to actions */}
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <Link
            to="sobre"
            spy={true}
            smooth={true}
            offset={-70}
            className="bg-primary flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-lg font-semibold text-white shadow-lg"
          >
            <FaChevronDown />
            Saiba mais
          </Link>

          <a
            href="https://forms.gle/8y2yAVo61fzWQHLt9"
            target="_blank"
            rel="noreferrer noopener"
            className="bg-primary flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-semibold text-white shadow-lg"
          >
            <FaExternalLinkAlt />
            Inscreva-se
          </a>
        </div>

        {/* Helpers */}
        <div className="mt-8 flex flex-col gap-4">
          <h1 className="text-xl font-semibold uppercase text-white">
            Organização:
          </h1>
          <div className="flex items-center gap-2">
            <img src={org1} alt="Logo" className="w-20 lg:w-28" />

            <img src={org2} alt="Logo" className="w-32 lg:w-40" />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center lg:w-1/2">
        <img src={logo} alt="Logo" className="w-1/2 lg:w-3/4" />
      </div>
    </div>
  );
};

export default Hero;
