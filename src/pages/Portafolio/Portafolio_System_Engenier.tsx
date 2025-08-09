import { useState } from "react";
import SystemPortfolioCard from "./components/SystemPortfolioCard";
import BuscadorFiltro from "../../ui/BuscadorFiltro";
import type { Trabajo } from "../../ui/BuscadorFiltro";

const proyectosSistema: Trabajo[] = [
  {
    title: "El Cevichazo",
    text: "Landing web para restaurante con menú dinámico y sistema pickup.",
    skills: ["Vue", "TailwindCSS", "TypeScript", "JavaScript"],
    github: "https://github.com/usuario/cevichazo",
    website: "https://cevichazo.com",
    images: ["/img/cevichazo1.jpg", "/img/cevichazo2.jpg"],
  },
  {
    title: "Sistema de Facturación",
    text: "App para emitir facturas CFDI con backend en Django y frontend React.",
    skills: ["React", "Django", "PostgreSQL", "TypeScript"],
    github: "https://github.com/usuario/facturacion",
    website: "https://facturacion.example.com",
    images: ["/img/facturacion1.jpg", "/img/facturacion2.jpg"],
  },
  {
    title: "Gestor de Inventarios",
    text: "Sistema para gestión y control de inventarios con alertas.",
    skills: ["Angular", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/usuario/inventarios",
    website: "https://inventarios.example.com",
    images: ["/img/inventarios1.jpg", "/img/inventarios2.jpg"],
  },
  {
    title: "Portal Educativo",
    text: "Plataforma de cursos online con seguimiento personalizado.",
    skills: ["React", "GraphQL", "Apollo", "TailwindCSS"],
    github: "https://github.com/usuario/educativo",
    website: "https://educativo.example.com",
    images: ["/img/educativo1.jpg", "/img/educativo2.jpg"],
  },
  {
    title: "App de Reservas",
    text: "Aplicación móvil para reservas en restaurantes y eventos.",
    skills: ["React Native", "Firebase", "Expo"],
    github: "https://github.com/usuario/reservas",
    website: "https://reservas.example.com",
    images: ["/img/reservas1.jpg", "/img/reservas2.jpg"],
  },
  {
    title: "Dashboard de Ventas",
    text: "Panel interactivo para monitoreo de ventas en tiempo real.",
    skills: ["Vue", "D3.js", "Node.js"],
    github: "https://github.com/usuario/dashboardventas",
    website: "https://dashboardventas.example.com",
    images: ["/img/dashboard1.jpg", "/img/dashboard2.jpg"],
  },
  {
    title: "Sistema de Tickets",
    text: "Software para soporte técnico con seguimiento de tickets.",
    skills: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/usuario/tickets",
    website: "https://tickets.example.com",
    images: ["/img/tickets1.jpg", "/img/tickets2.jpg"],
  },
  {
    title: "Web Corporativa",
    text: "Sitio web corporativo con diseño responsive y SEO optimizado.",
    skills: ["Next.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/usuario/webcorporativa",
    website: "https://webcorporativa.example.com",
    images: ["/img/corporativa1.jpg", "/img/corporativa2.jpg"],
  },
];

const PortafolioSystemEngenier = () => {
  const [trabajosFiltrados, setTrabajosFiltrados] = useState<Trabajo[]>(proyectosSistema);

  return (
    <main className="mx-auto px-4 py-8 bg-gray-50 min-h-screen max-w-7xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Portafolio - Ingeniería Sistemas Computacionales</h1>
      <BuscadorFiltro trabajos={proyectosSistema} onFilter={setTrabajosFiltrados} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {trabajosFiltrados.length > 0 ? (
          trabajosFiltrados.map((project, i) => (
            <SystemPortfolioCard
              key={i}
              project={project}
              onSelect={() => { }}
              isSelected={false}
            />
          ))
        ) : (
          <p>No se encontraron proyectos.</p>
        )}
      </div>
    </main>
  );
};

export default PortafolioSystemEngenier;
