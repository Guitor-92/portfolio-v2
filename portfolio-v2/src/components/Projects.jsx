import React from "react";
import { projects } from "../data/projects";
import SectionWrapper from "./SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-white">
      <h2 className="text-3xl font-bold mb-12 text-center">
        🚀 Projetos em Destaque
      </h2>
      <div className="px-2 md:px-16">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          navigation={true}
          modules={[Navigation]}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} className="group flex justify-center">
              <div className="min-w-[260px] max-w-xs w-full bg-gray-50 rounded-xl shadow-lg p-4 flex flex-col group-hover:scale-105 transition-transform duration-300 h-full">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
