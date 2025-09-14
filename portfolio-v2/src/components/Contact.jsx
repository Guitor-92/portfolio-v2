import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-12">📬 Contato</h2>
        <p className="text-gray-600 mb-8">
          Você pode me encontrar nas redes sociais:
        </p>
        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/Guitor-92"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-vitor-guitor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:vitorguilh@hotmail.com"
            className="text-gray-800 hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
