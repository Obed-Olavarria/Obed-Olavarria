// src/ui/SkillList.tsx
interface SkillListProps {
  skills: string[];
  colorScheme?: "blue" | "purple"; // opcional, default: purple
}

const SkillList: React.FC<SkillListProps> = ({ skills, colorScheme = "purple" }) => {
  // Define clases para cada esquema de color
  const systemSkillList = colorScheme === "blue" ? "bg-blue-200" : "bg-purple-200";
  const electricanSkillList = colorScheme === "blue" ? "text-blue-800" : "text-purple-800";

  return (
    <div className="mt-4">
      {/* <strong>Habilidades:</strong> */}
      <ul className="flex flex-wrap gap-2 mt-1">
        {skills.map((skill, i) => (
          <li
            key={i}
            className={`${systemSkillList} ${electricanSkillList} rounded px-2 py-1 text-sm font-medium`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
