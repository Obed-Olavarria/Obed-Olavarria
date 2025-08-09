// src/ui/ExperienceList.tsx
interface Experiencia {
  empresa: string;
  puesto: string;
  duracion: string;
  descripcion: string;
}

interface ExperienceListProps {
  experiencias: Experiencia[];
  colorScheme?: "purple" | "blue"; 
}

const ExperienceList: React.FC<ExperienceListProps> = ({
  experiencias,
  colorScheme = "purple",
}) => {
  // Define la clase de borde según esquema de color
  const borderColorClass =
    colorScheme === "blue" ? "border-blue-500" : "border-purple-500";

  return (
    <section className="mb-8">
      {/* <h2 className="text-xl font-semibold mb-4">Experiencia Laboral</h2> */}
      <ul className="space-y-4">
        {experiencias.map(({ empresa, puesto, duracion, descripcion }, i) => (
          <li
            key={i}
            className={`border-l-4 ${borderColorClass} pl-4`}
            title={`${puesto} en ${empresa}`}
          >
            <h3 className="font-semibold text-lg">
              {puesto} - {empresa}
            </h3>
            <p className="text-sm italic text-gray-600">{duracion}</p>
            <p className="text-gray-700">{descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceList;
