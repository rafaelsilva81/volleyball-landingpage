import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "react-scroll";
import DefaultAnimationContainer from "./common/DefaultAnimation";

function Subscription() {
  return (
    <DefaultAnimationContainer>
      <div className="flex flex-col items-center gap-3">
        <button
          className="
          bg-primary
          w-fit rounded-lg
          p-5 transition-all  hover:scale-105 disabled:opacity-30"
          disabled
        >
          <div className="flex items-center gap-2 text-3xl font-semibold text-white">
            <h1>Inscrições finalizadas!</h1>
          </div>
        </button>
      </div>
    </DefaultAnimationContainer>
  );
}

export default Subscription;
