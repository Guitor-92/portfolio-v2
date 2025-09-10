import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-sky-600">Guitor.dev</div>

          {/* Links desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-sky-600">
              Sobre
            </a>
            <a href="#projects" className="text-gray-700 hover:text-sky-600">
              Projetos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-sky-600">
              Contato
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-sky-600 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:bg-sky-100"
          >
            Sobre
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-gray-700 hover:bg-sky-100"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-700 hover:bg-sky-100"
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
}
