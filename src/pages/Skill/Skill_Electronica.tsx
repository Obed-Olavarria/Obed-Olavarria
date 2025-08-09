import { useState } from "react";
import SkillTag from "../../ui/SkillTag";
import BuscadorFiltro from "../../ui/BuscadorFiltro";
import type { Trabajo } from "../../ui/BuscadorFiltro";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skillsElectronica: Skill[] = [
  // Electrónica digital
  { name: "Microcontroladores (Arduino, PIC)", level: 85, category: "Electrónica digital" },
  { name: "FPGA", level: 60, category: "Electrónica digital" },
  { name: "Circuitos Digitales", level: 80, category: "Electrónica digital" },
  { name: "Verilog / VHDL", level: 55, category: "Electrónica digital" },

  // Electrónica analógica
  { name: "Amplificadores operacionales", level: 80, category: "Electrónica analógica" },
  { name: "Filtros y Señales", level: 75, category: "Electrónica analógica" },
  { name: "Osciloscopio", level: 85, category: "Herramientas" },
  { name: "Multímetro", level: 90, category: "Herramientas" },

  // Software y diseño
  { name: "Proteus", level: 70, category: "Software y diseño" },
  { name: "Altium Designer", level: 65, category: "Software y diseño" },
  { name: "Eagle CAD", level: 60, category: "Software y diseño" },
  { name: "Simulación Circuital", level: 75, category: "Electrónica digital" },

  // Otros
  { name: "PCB Design", level: 70, category: "Otros" },
  { name: "Soldadura y Ensamblaje", level: 85, category: "Otros" },
  { name: "Instrumentación", level: 80, category: "Electrónica digital" },
  { name: "Osciladores", level: 70, category: "Electrónica digital" },
];

const SkillElectronica = () => {
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skillsElectronica);

  // Agrupa las skills filtradas por categoría
  const groupedSkills = filteredSkills.reduce<Record<string, Skill[]>>((groups, skill) => {
    if (!groups[skill.category]) groups[skill.category] = [];
    groups[skill.category].push(skill);
    return groups;
  }, {});

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Skills - Ingeniería Electrónica</h1>

      <BuscadorFiltro
        trabajos={skillsElectronica.map(skill => ({
          title: skill.name,
          text: "",
          skills: [],
          images: [],
          reverse: false,
        }))}
        onFilter={(filtrados: Trabajo[]) => {
          const newFilteredSkills = filtrados
            .map(f => skillsElectronica.find(s => s.name === f.title))
            .filter((s): s is Skill => Boolean(s));
          setFilteredSkills(newFilteredSkills);
        }}
      />

      {Object.entries(groupedSkills).map(([category, skills]) => (
        <section key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-1">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map(({ name, level }) => (
              <SkillTag key={name} name={name} level={level} colorScheme="purple" />
            ))}
          </div>
        </section>
      ))}

      {filteredSkills.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No se encontraron skills</p>
      )}
    </main>
  );
};

export default SkillElectronica;
