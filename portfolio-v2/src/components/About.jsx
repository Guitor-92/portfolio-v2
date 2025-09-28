import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center">
        👨‍💻 Sobre mim
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Foto / avatar */}
        <div className="flex-shrink-0">
  <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
    <img
      src={require('../assets/about.jpg')}
      alt="Foto de Guilherme Vitor"
      className="rounded-full w-36 h-36 object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>

        {/* Texto */}
        <div className="flex-1">
          <p className="text-lg text-gray-700 leading-relaxed">
            Sou <span className="font-semibold">Guilherme Vitor</span>, 
            apaixonado por <span className="text-sky-600">programação</span>, tecnologia 
            e pelo processo de transformar ideias em projetos reais. 
            No meu tempo livre gosto de cuidar das minhas plantas 🌱 e explorar o estilo 
            <span className="italic"> faça você mesmo</span>.  
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Atualmente estou envolvido em projetos <strong>end-to-end</strong>, 
            participando de todas as etapas — levantamento de requisitos, desenvolvimento, 
            testes e qualidade. Minha linguagem favorita é <span className="font-semibold">C#</span>, 
            mas adoro aprender e aplicar novas tecnologias que ajudem a criar soluções criativas 🚀.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}