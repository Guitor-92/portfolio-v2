import React from "react";

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição curta do projeto 1",
    github: "https://github.com/Guitor-92",
  },
  {
    title: "Projeto 2",
    description: "Descrição curta do projeto 2",
    github: "https://github.com/Guitor-92",
  },
  {
    title: "Projeto 3",
    description: "Descrição curta do projeto 3",
    github: "https://github.com/Guitor-92",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">🚀 Projetos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
