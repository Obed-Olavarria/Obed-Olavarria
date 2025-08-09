import {useState } from "react";
import type { ReactNode } from "react";

interface AccordionProps {
  trigger: ReactNode; // Lo que se muestra siempre (ej. foto o logo)
  children: ReactNode; // Contenido desplegable
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ trigger, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer select-none"
      >
        {trigger}
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Accordion;
