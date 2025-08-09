// ui/SkillTag.tsx
interface SkillTagProps {
  name: string;
  level: number;
  colorScheme?: "blue" | "purple"; // colorScheme opcional, por defecto morado
}

const SkillTag: React.FC<SkillTagProps> = ({ name, level, colorScheme = "purple" }) => {
  // Define clases de colores segun esquema
  const systemSkillTag = colorScheme === "blue" ? "bg-blue-200" : "bg-purple-200";
  const electricanSkillTag = colorScheme === "blue" ? "bg-blue-600" : "bg-purple-600";

  return (
    <div
      className="p-4 border rounded shadow hover:shadow-lg transition cursor-default"
      title={`${name} - Nivel: ${level}%`}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-600">{level}%</span>
      </div>
      <div className={`w-full h-3 ${systemSkillTag} rounded`}>
        <div
          className={`h-3 ${electricanSkillTag} rounded transition-all`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillTag;
