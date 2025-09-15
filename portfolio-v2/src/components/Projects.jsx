import React from "react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Projeto 1",
    description:
      "Uma aplicação web completa para gerenciamento de tarefas, construída com React e .NET.",
    image: "https://via.placeholder.com/400x250/94a3b8/ffffff?text=Projeto+1",
    tags: ["React", ".NET", "SQL Server"],
    github: "https://github.com/Guitor-92",
    liveUrl: "#", // Link para o projeto no ar
  },
  {
    title: "Projeto 2",
    description:
      "API RESTful para um sistema de e-commerce, utilizando ASP.NET Core e arquitetura limpa.",
    image: "https://via.placeholder.com/400x250/94a3b8/ffffff?text=Projeto+2",
    tags: ["C#", "ASP.NET Core", "Docker"],
    github: "https://github.com/Guitor-92",
    liveUrl: null, // Sem link de deploy
  },
  {
    title: "Projeto 3",
    description:
      "Um clone da interface do Netflix desenvolvido com Blazor WebAssembly para praticar C# no frontend.",
    image: "https://via.placeholder.com/400x250/94a3b8/ffffff?text=Projeto+3",
    tags: ["Blazor", "C#", "TailwindCSS"],
    github: "https://github.com/Guitor-92",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-16">🚀 Projetos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={`Screenshot do ${project.title}`}
                className="rounded-t-xl object-cover h-48 w-full"
              />
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
                    >
                      Ver Online
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
