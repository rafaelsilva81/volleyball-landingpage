import devLogo from "../assets/devLogo.png";

function Footer() {
  return (
    <footer className="flex w-full items-center justify-between bg-gray-800 px-10 py-1 text-sm">
      <h5>Copa Iguatuense de Vôleibol 2023</h5>

      <h5 className="flex items-center gap-2">
        Desenvolvido por{" "}
        <a
          href="https://rafaeldev.me"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-1 font-bold transition ease-in-out hover:text-red-500"
        >
          Rafael Galdino da Silva{" "}
          <img src={devLogo} alt="Rafael Galdino" className="h-8 w-8" />
        </a>
      </h5>
    </footer>
  );
}

export default Footer;
