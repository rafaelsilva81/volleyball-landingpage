import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const navLinks = [
  {
    name: "Sobre",
    href: "sobre",
  },
  {
    name: "Regulamento",
    href: "regulamento",
  },
  {
    name: "Apoiadores",
    href: "apoiadores",
  },
  {
    name: "Inscreva-se",
    href: "inscricoes",
  },
];

const Header = () => {
  return (
    <header className="hidden w-full justify-end gap-2 bg-zinc-900/90 px-10 py-2 lg:fixed lg:flex">
      <nav className="flex items-center gap-4 text-xl tracking-tighter">
        {navLinks.map((link, i) => (
          <Link
            to={link.href}
            spy={true}
            smooth={true}
            key={i}
            className="hover:text-primary cursor-pointer font-semibold uppercase text-white drop-shadow-sm transition ease-in-out"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
