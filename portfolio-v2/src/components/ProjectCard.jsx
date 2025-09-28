import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col group-hover:scale-105 transition-transform duration-300 h-full">
      <div className="w-full h-40 mb-4 flex items-center justify-center">
        <img
          src={require(`../assets/${project.image}`)}
          alt={project.name}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-sky-100 text-sky-700 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
        >
          GitHub
        </a>
        {project.deploy && (
          <a
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
