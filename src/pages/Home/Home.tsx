import { useState } from "react";
import './styles/Home.css';

const Home = () => {
  const [expanded, setExpanded] = useState<null | "systems" | "electronics">(null);

  const handleToggle = (section: "systems" | "electronics") => {
    setExpanded(prev => (prev === section ? null : section));
  };

  return (
    <main className="mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-1 transition-all duration-500 ease-in-out min-h-[300px]">
        {/* Columna izquierda */}
        <div
          className={`
            home-section system-engineer cursor-pointer
            transition-all duration-500 ease-in-out
            ${expanded === "systems" ? "flex-[2] expanded" : expanded ? "flex-[0]" : "flex-1"}
            ${expanded && expanded !== "systems" ? "opacity-0 scale-95" : ""}
          `}
          onClick={() => handleToggle("systems")}
        >
          <div className="overlay-dark">
            {expanded === "systems" ? (
              <>
                <h2 className="text-3xl font-bold mb-4 text-white">System Engineer</h2>
                <p className="text-white">
                  Contenido expandido relacionado con System Engineering...
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4 text-white">System Engineer</h2>
                <p className="text-white">Haz clic para ver más sobre System Engineering.</p>
              </>
            )}
          </div>
        </div>

        {/* Columna derecha */}
        <div
          className={`
            home-section technical-electronican cursor-pointer
            transition-all duration-500 ease-in-out
            ${expanded === "electronics" ? "flex-[2] expanded" : expanded ? "flex-[0]" : "flex-1"}
            ${expanded && expanded !== "electronics" ? "opacity-0 scale-95" : ""}
          `}
          onClick={() => handleToggle("electronics")}
        >
          <div className="overlay-dark">
            {expanded === "electronics" ? (
              <>
                <h2 className="text-3xl font-bold mb-4 text-white">Technical Electronican</h2>
                <p className="text-white">
                  Contenido expandido relacionado con Technical Electronics...
                </p>

              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4 text-white">Technical Electronican</h2>
                <p className="text-white">Haz clic para ver más sobre Technical Electronics.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

