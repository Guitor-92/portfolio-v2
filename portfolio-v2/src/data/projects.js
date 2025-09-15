/* 
  Para usar imagens locais, primeiro importe-as aqui e depois use a variável no campo 'image'.
  Exemplo:
  import meuProjetoImg from '../assets/images/meu-projeto.png';

  ...
  image: meuProjetoImg,
  ...
*/

export const projects = [
  {
    title: "Meu Sistema de Gestão",
    description:
      "Uma aplicação web completa para gerenciamento de tarefas, construída com uma API em .NET e um frontend dinâmico em React.",
    image: "https://via.placeholder.com/400x250/67e8f9/0f172a?text=Meu+Projeto", // Substitua pela sua imagem
    tags: ["React", ".NET", "SQL Server"],
    github: "https://github.com/Guitor-92",
    liveUrl: "https://meuprojeto.online", // Link para o projeto no ar
  },
  {
    title: "API de E-commerce",
    description:
      "API RESTful para um sistema de e-commerce, utilizando ASP.NET Core e arquitetura limpa.",
    image:
      "https://via.placeholder.com/400x250/f87171/18181b?text=API+E-commerce", // Substitua pela sua imagem
    tags: ["C#", "ASP.NET Core", "Docker"],
    github: "https://github.com/Guitor-92",
    liveUrl: null, // Deixe como null se não houver link de deploy
  },
  {
    title: "Clone do Netflix com Blazor",
    description:
      "Um clone da interface do Netflix desenvolvido com Blazor WebAssembly para praticar C# no frontend.",
    image:
      "https://via.placeholder.com/400x250/d8b4fe/1e1b4b?text=Clone+Netflix", // Substitua pela sua imagem
    tags: ["Blazor", "C#", "TailwindCSS"],
    github: "https://github.com/Guitor-92",
    liveUrl: "https://meuclone.netlify.app",
  },
];
