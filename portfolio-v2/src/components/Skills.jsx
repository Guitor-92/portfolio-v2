import SectionWrapper from "./SectionWrapper";
import {
  SiJavascript,
  SiDotnet,
  SiBlazor,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaDatabase,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa6";

const skillsData = [
  {
    title: "Linguagens",
    skills: [
      { name: "C#", icon: <FaCode /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Frameworks & Bibliotecas",
    skills: [
      { name: ".NET", icon: <SiDotnet /> },
      { name: "React", icon: <FaReact /> },
      { name: "Blazor", icon: <SiBlazor /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Azure", icon: <FaCloud /> },
      { name: "VS Code", icon: <FaLaptopCode /> },
    ],
  },
];

const SkillCategory = ({ title, skills }) => (
  <div>
    <h3 className="text-2xl font-semibold mb-8">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow w-28"
        >
          <span className="text-4xl text-sky-600">{skill.icon}</span>
          <span className="font-medium text-gray-800">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white">
      <h2 className="text-3xl font-bold text-center mb-16">🛠️ Habilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {skillsData.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
