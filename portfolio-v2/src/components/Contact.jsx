export default function Contact() {
  return (
    <section id="contato" class="py-12 bg-white">
      <div class="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            📬 Contato
        </h2>
        <p class="text-gray-600 mb-8">
          Você pode me encontrar nas redes sociais ou enviar um e-mail:
        </p>
        <div class="flex justify-center gap-6">
          <a
            href="https://github.com/Guitor-92"
            target="_blank"
            rel="noreferrer"
            class="text-gray-700 hover:text-blue-600 transition"
          >
            <i class="fab fa-github text-3xl">Github</i>
          </a>
          <a
            href="https://linkedin.com/in/guilherme-vitor-guitor/"
            target="_blank"
            rel="noreferrer"
            class="text-gray-700 hover:text-blue-600 transition"
          >
            <i class="fab fa-linkedin text-3xl">Linkedin</i>
          </a>
          <a
            href="mailto:vitorguilh@hotmail.com"
            class="text-gray-700 hover:text-blue-600 transition"
          >
            <i class="fas fa-envelope text-3xl">E-mail</i>
          </a>
        </div>
      </div>
    </section>
  );
}
