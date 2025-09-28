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
    name: "Minimal API",
    description:
      "API minimalista desenvolvida com ASP.NET Core, focada em boas práticas, endpoints enxutos e integração fácil com frontends modernos.",
    technologies: ["C#", "ASP.NET Core", "REST"],
    image: "placeholder.jpg", // coloque a imagem em src/assets
    github: "https://github.com/Guitor-92/minimal-api",
    deploy: "", // Adicione o link do deploy se disponível
    type: "Backend",
  },
  {
    name: "ToDoApp",
    description:
      "Aplicação de lista de tarefas com CRUD, ideal para demonstrar integração full-stack e domínio de lógica de negócio.",
    technologies: ["C#", "ASP.NET Core", "React", "SQL"],
    image: "placeholder.jpg",
    github: "https://github.com/Guitor-92/ToDoApp",
    deploy: "",
    type: "Full-Stack",
  },
  {
    name: "Trilha .NET Banco de Dados",
    description:
      "Projeto focado em persistência de dados com .NET e SQL, mostrando domínio de banco de dados e arquitetura backend.",
    technologies: ["C#", ".NET", "SQL Server"],
    image: "placeholder.jpg",
    github: "https://github.com/Guitor-92/trilha-net-banco-de-dados-desafio",
    deploy: "",
    type: "Backend",
  },
  {
    name: "Beer API",
    description:
      "API RESTful para gerenciamento de cervejas, desenvolvida em C# e ASP.NET Core, com documentação e testes.",
    technologies: ["C#", "ASP.NET Core", "REST"],
    image: "placeholder.jpg",
    github: "https://github.com/Guitor-92/beer_api_digital_innovation_one",
    deploy: "",
    type: "Backend",
  },
  {
    name: "Estacionamento",
    description:
      "Sistema de controle de estacionamento, com regras de negócio, persistência e arquitetura limpa em C#.",
    technologies: ["C#", ".NET", "SQL"],
    image: "placeholder.jpg",
    github: "https://github.com/Guitor-92/estacionamento",
    deploy: "",
    type: "Backend",
  },
  {
    name: "DIO.Series",
    description:
      "Catálogo de séries com operações CRUD, ideal para mostrar arquitetura, boas práticas e domínio de C#.",
    technologies: ["C#", ".NET"],
    image: "placeholder.jpg",
    github: "https://github.com/Guitor-92/DIO.Series",
    deploy: "",
    type: "Backend",
  },
  {
    name: "Recriando Interface Netflix",
    description:
      "Clone da interface da Netflix, focado em frontend moderno, responsividade e animações.",
    technologies: ["React", "CSS", "JavaScript"],
    image: "placeholder.jpg",
    github: "https://github.com/Guitor-92/Recriando-Interface-Netflix",
    deploy: "",
    type: "Frontend",
  },
  {
    name: "Site Final",
    description:
      "Site completo com layout moderno, ideal para mostrar domínio em design, estrutura e responsividade.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "placeholder.jpg",
    github: "https://github.com/Guitor-92/Site_Final",
    deploy: "",
    type: "Frontend",
  },
];
