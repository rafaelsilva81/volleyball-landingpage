import { GiWhistle } from "react-icons/gi";

import {
  FaMapMarkerAlt,
  FaIdBadge,
  FaUserEdit,
  FaUserAltSlash,
  FaMoneyBill,
  FaUndo,
  FaEquals,
  FaUsers,
  FaTrophy,
  FaTshirt,
} from "react-icons/fa";

const rules = [
  {
    icon: <FaMapMarkerAlt size={20} />,
    text: "Residir na cidade de Iguatu e ser ativo em algum racha ou time do município nos últimos 3 meses. Caso algum time seja pego com algum atleta irregular a equipe será desclassificada.",
  },
  {
    icon: <FaUsers size={20} />,
    text: "Cada time poderá inscrever no mínimo 6 atletas e no máximo 12.",
  },
  {
    icon: <FaUndo size={20} />,
    text: "Os tipos sistema e rotação que serão aceitos: 6x0 simples todos giram, 6x0 adaptado o levantador e libero poderão ficar fixo e só os atacantes giram, 5x1 e 4x2. Será marcado erro de rotação.",
  },
  {
    icon: <FaMoneyBill size={20} />,
    text: "Terá uma taxa simbólica de 60 reais por equipe na inscrição do campeonato para despesas com premiação e arbitragem",
  },
  {
    icon: <FaUserAltSlash size={20} />,
    text: "Caso o atleta falte algum jogo sem justificativa para organização o mesmo não poderá mais participar do evento.",
  },
  {
    icon: <FaTrophy size={20} />,
    text: "A disputa será feita por chaves, cada vitória de 2x0 o time acumulará 3 pontos, o perdedor 0. Caso o time vença 2x1 acumulará 2 ponto e o perdedor 1.",
  },
  {
    icon: <FaEquals size={20} />,
    text: "Caso haja empate de pontos nas chaves será usado critério de desempate a equipe de participar da abertura, caso continue será o usado o critério de confronto direto.",
  },
  {
    icon: <b> 25 </b>,
    text: "Sistema de pontuação funcionará nos seguintes moldes na fase de grupos serão de 21 pontos e na fase final serão 25 pontos.",
  },
  {
    icon: <FaTshirt size={20} />,
    text: "Não será obrigatório o uso do uniforme mas se o time não tiver será obrigatório usar um cor padrão para toda a equipe.",
  },
  {
    icon: <FaIdBadge size={20} />,
    text: "No primeiro jogo será obrigatório o uso da identificação com RG, caso não tenha será exigido o B.O ou outro documento que tenha a naturalidade do atleta.",
  },
  {
    icon: <FaUserEdit size={20} />,
    text: "No ato da inscrição o atleta terá que colocar seu nome, sua naturalidade, RG e racha ou time que se encontra ativo.",
  },
];

function Rules() {
  return (
    <div id="regulamento" className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-2xl font-bold text-white lg:text-5xl">
        <GiWhistle size={32} />
        <h1>Regulamento</h1>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-y-8 gap-x-10 lg:grid-cols-3">
        {rules.map((rule, index) => (
          <div key={index} className="flex items-start gap-3 text-xl">
            <div className="bg-primary rounded-full p-3 text-white">
              {rule.icon}
            </div>
            <p className="text-white">{rule.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rules;
