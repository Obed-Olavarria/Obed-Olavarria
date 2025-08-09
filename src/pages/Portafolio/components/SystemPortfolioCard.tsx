import PortfolioAccordion from "./PortfolioAccordion";
import PortfolioCarousel from "./PortfolioCarousel";
import SkillList from "../../../ui/SkillList";
import Button from "../../../ui/Button";

interface SystemPortfolioCardProps {
  project: {
    title: string;
    text: string;
    skills: string[];
    github?: string;
    website?: string;
    images: string[];
  };
  onSelect: () => void;
  isSelected: boolean;
}

const SystemPortfolioCard: React.FC<SystemPortfolioCardProps> = ({ project, onSelect, isSelected }) => {
  return (
    <div
      onClick={onSelect}
      className={`border rounded p-4 bg-white cursor-pointer shadow-md hover:shadow-xl transition ${isSelected ? "border-blue-500" : "border-gray-300"
        }`}
    >
      <h3 className="font-bold text-lg mb-2">{project.title}</h3>

      <PortfolioAccordion title="Descripción" content={project.text} />
      <div className="mt-4 mb-4">
        <strong>Habilidades:</strong>
        <SkillList skills={project.skills} />
      </div>

      <PortfolioCarousel images={project.images} />

      <div className="flex gap-4 mt-4">
        {project.github && (
          <Button
            label="GitHub"
            variant="primary"
            onClick={() => {
              window.open(project.github, "_blank", "noopener,noreferrer");
            }}
          />
        )}
        {project.website && (
          <Button
            label="Website"
            variant="secondary"
            onClick={() => {
              window.open(project.website, "_blank", "noopener,noreferrer");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SystemPortfolioCard;
