import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const PortfolioAccordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded shadow p-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-bold text-lg focus:outline-none"
      >
        {title}
      </button>
      {/* Aplica las clases del CSS aquí */}
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <p className="mt-2 text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default PortfolioAccordion;
