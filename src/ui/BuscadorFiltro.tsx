import { useState } from "react";

export interface Trabajo {
  title: string;
  text: string;
  skills: string[];
  github?: string;
  website?: string;
  images: string[];
  reverse?: boolean;
}

interface BuscadorFiltroProps {
  trabajos: Trabajo[];
  onFilter: (filtrados: Trabajo[]) => void;
}

const BuscadorFiltro: React.FC<BuscadorFiltroProps> = ({ trabajos, onFilter }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtrados = trabajos.filter(
      (t) =>
        t.title.toLowerCase().includes(value) ||
        t.text.toLowerCase().includes(value) ||
        t.skills.some(skill => skill.toLowerCase().includes(value))
    );
    onFilter(filtrados);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar proyectos..."
        value={query}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default BuscadorFiltro;
