import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper id="home">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Olá, eu sou <span className="text-sky-600">Guilherme Vitor</span>
          </h1>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-700">
            Desenvolvedor Fullstack
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Apaixonado por tecnologia, programação e desenvolvimento de soluções
            criativas. Atualmente focado em C# e projetos end-to-end 🚀
          </p>

          {/* Botões */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/guilherme-vitor-guitor/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-600 text-white font-medium rounded-lg shadow hover:bg-sky-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Guitor-92"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Imagem futura */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-10 flex justify-center">
          <div className="w-64 h-64 bg-gray-200 rounded-full shadow-inner flex items-center justify-center">
            <span className="text-gray-500">[Imagem futura]</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
