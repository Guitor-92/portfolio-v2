import React, { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaGraduationCap,
} from "react-icons/fa6";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const sendContact = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      message: form.current.message.value,
    };

    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await fetch(`${apiUrl}/contato`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        form.current.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">📬 Contato</h2>
        <p className="text-gray-600 mb-12">
          Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade
          para entrar em contato!
        </p>

        {/* Formulário */}
        <form ref={form} onSubmit={sendContact} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full md:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-sky-400 disabled:cursor-not-allowed transition"
            >
              {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </div>
          {status === "success" && (
            <p className="text-center text-green-600 mt-4">
              Mensagem enviada com sucesso! Obrigado.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-600 mt-4">
              Ocorreu um erro. Tente novamente mais tarde.
            </p>
          )}
        </form>

        {/* Links Rápidos */}
        <div className="mt-16">
          <p className="text-gray-600 mb-8">
            Ou me encontre nestas plataformas:
          </p>
          <div className="flex justify-center items-center gap-8 text-3xl">
            <a
              href="https://github.com/Guitor-92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-sky-600 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-vitor-guitor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-sky-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:vitorguilh@hotmail.com"
              className="text-gray-800 hover:text-sky-600 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.dio.me/users/vitorguilh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-sky-600 transition"
              aria-label="DIO"
            >
              <FaGraduationCap />
            </a>
            <a
              href="https://wa.me/+5531986644976"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-sky-600 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
