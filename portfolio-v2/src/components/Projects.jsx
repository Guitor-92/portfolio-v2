export default function Projects() {
  // Renderiza a seção de projetos do portfólio
  return (
    <section id="projects" class="py-12 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            🚀 Projetos
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card Projeto 1 */}
          <div class="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <h3 class="text-xl font-semibold mb-2">Projeto 1</h3>
            <p class="text-gray-600 flex-grow">
              Descrição curta do projeto 1, explicando a ideia em poucas linhas.
            </p>
            <a
              href="https://github.com/Guitor-92"
              target="_blank"
              rel="noreferrer"
              class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Ver no GitHub
            </a>
          </div>

          {/* Card Projeto 2 */}
          <div class="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <h3 class="text-xl font-semibold mb-2">Projeto 2</h3>
            <p class="text-gray-600 flex-grow">
              Descrição curta do projeto 2, explicando a ideia em poucas linhas.
            </p>
            <a
              href="https://github.com/Guitor-92"
              target="_blank"
              rel="noreferrer"
              class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Ver no GitHub
            </a>
          </div>

          {/* Card Projeto 3 */}
          <div class="bg-white rounded-2xl shadow-md p-6 flex flex-col">
            <h3 class="text-xl font-semibold mb-2">Projeto 3</h3>
            <p class="text-gray-600 flex-grow">
              Descrição curta do projeto 3, explicando a ideia em poucas linhas.
            </p>
            <a
              href="https://github.com/Guitor-92"
              target="_blank"
              rel="noreferrer"
              class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Ver no GitHub
            </a>
          </div>

          {/* Repetir para outros projetos */}
        </div>
      </div>
    </section>
  );
}
