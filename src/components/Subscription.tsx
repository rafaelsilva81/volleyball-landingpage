import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import DefaultAnimationContainer from "./common/DefaultAnimation";

function Subscription() {
  return (
    <DefaultAnimationContainer>
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-2 text-center text-2xl font-bold text-white md:flex-row lg:text-6xl">
          <FaCalendarAlt size={32} />
          Inscrições abertas até o dia 10/04/2023
        </div>
        <a
          className="bg-primary w-fit rounded-lg p-5 transition-all hover:scale-105"
          href="https://forms.gle/8y2yAVo61fzWQHLt9"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex items-center gap-2 text-3xl font-semibold text-white">
            <h1>Quero me inscrever!</h1>
            <FaExternalLinkAlt size={24} />
          </div>
        </a>
      </div>
    </DefaultAnimationContainer>
  );
}

export default Subscription;
