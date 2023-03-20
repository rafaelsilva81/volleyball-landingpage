import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

function Subscription() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-4xl font-bold text-white">
        <FaCalendarAlt size={32} />
        Inscrições abertas até o dia 10/04/2023
      </div>
      <a
        className="bg-primary w-fit rounded-lg p-5"
        href="https://forms.gle/8y2yAVo61fzWQHLt9"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="flex items-center gap-2 text-3xl font-semibold text-white">
          <h1>Quero me inscrever!</h1>
          <FaExternalLinkAlt size={32} />
        </div>
      </a>
    </div>
  );
}

export default Subscription;
