import { useState } from "react";
import SkillTag from "../../ui/SkillTag";
import BuscadorFiltro from "../../ui/BuscadorFiltro";
import type { Trabajo } from "../../ui/BuscadorFiltro";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skillsData: Skill[] = [
  // (Tus skills aquí, igual que el código que enviaste)
  { name: "React", level: 90, category: "Frontend" },
  { name: "React Native", level: 80, category: "Frontend" },
  { name: "Vue", level: 75, category: "Frontend" },
  { name: "TailwindCSS", level: 85, category: "Frontend" },
  { name: "Bootstrap", level: 80, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Flutter", level: 60, category: "Frontend" },
  { name: "Dart", level: 55, category: "Frontend" },
  { name: "JQuery", level: 90, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 60, category: "Backend" },
  { name: "Nest.js", level: 80, category: "Backend" },
  { name: "Django", level: 65, category: "Backend" },
  { name: "Prisma", level: 80, category: "Backend" },
  { name: "PHP", level: 75, category: "Backend" },
  { name: "Laravel", level: 60, category: "Backend" },

  // Database
  { name: "PostgreSQL", level: 60, category: "Database" },
  { name: "MySQL", level: 65, category: "Database" },

  // DevOps / Version control
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "AWS", level: 60, category: "DevOps" },
  { name: "Git", level: 75, category: "DevOps" },

  // Tools and Environments
  { name: "pgAdmin", level: 75, category: "Herramientas" },
  { name: "MySQL Workbench", level: 70, category: "Herramientas" },
  { name: "Android Studio", level: 65, category: "Herramientas" },
];

const SkillSystemEngenier = () => {
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skillsData);

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Skills - System Engineer</h1>

      <BuscadorFiltro
        trabajos={skillsData.map(skill => ({
          title: skill.name,
          text: "",
          skills: [],
          images: [],
          reverse: false,
        }))}
        onFilter={(filtrados: Trabajo[]) => {
          const newFilteredSkills = filtrados
            .map(f => skillsData.find(s => s.name === f.title))
            .filter((s): s is Skill => Boolean(s));
          setFilteredSkills(newFilteredSkills);
        }}
      />

      {filteredSkills.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No se encontraron skills</p>
      )}

      {filteredSkills.length > 0 && (
        Object.entries(
          filteredSkills.reduce<Record<string, Skill[]>>((groups, skill) => {
            groups[skill.category] = groups[skill.category] || [];
            groups[skill.category].push(skill);
            return groups;
          }, {})
        ).map(([category, skills]) => (
          <section key={category} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-1">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map(({ name, level }) => (
                <SkillTag key={name} name={name} level={level} colorScheme="blue" />
              ))}
            </div>
          </section>
        ))
      )}

    </main>
  );
};

export default SkillSystemEngenier;
