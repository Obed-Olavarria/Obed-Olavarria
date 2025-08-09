import PortfolioAccordion from "./PortfolioAccordion";
import PortfolioCarousel from "./PortfolioCarousel";
import SkillList from "../../../ui/SkillList";

interface PortfolioSectionProps {
  title: string;
  text: string;
  images: string[];
  skills: string[];          // Agregamos skills aquí
  reverse?: boolean;         // si true → imagen a la derecha
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ title, text, images, skills, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center my-8`}>
      <div className="w-full md:w-1/2 p-4">
        <PortfolioAccordion title={title} content={text} />
        {/* Mostrar skills */}
        <div className="mt-4 mb-4">
          <strong>Habilidades:</strong>
          <SkillList skills={skills} />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <PortfolioCarousel images={images} />
      </div>
    </div>
  );
};

export default PortfolioSection;
