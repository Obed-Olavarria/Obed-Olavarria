import { useState } from "react";
import PortfolioSection from "./components/PortfolioSectionElectronica";
import "./styles/Portafolio_Electronica.css"
import BuscadorFiltro from "../../ui/BuscadorFiltro"

const trabajosIniciales = [
    {
        title: "Reballing y Micro Soldadura",
        text: "Reparación avanzada de tarjetas electrónicas con micro soldadura y reballing de BGA para resolver fallas en equipos electrónicos.",
        images: ["/img/reballing1.jpg", "/img/microsoldadura2.jpg"],
        skills: ["Micro soldadura", "Reballing", "BGA", "Reparación electrónica"],
    },
    {
        title: "Reparación de Celulares",
        text: "Cambio de pantalla, reemplazo de baterías, reparación de cortos y componentes internos para restaurar el funcionamiento total del equipo.",
        images: ["/img/celular1.jpg", "/img/celular2.jpg"],
        reverse: true,
        skills: ["Reparación de pantallas", "Reemplazo de baterías", "Diagnóstico de hardware", "Reparación de cortos"],
    },
    {
        title: "Servicio Preventivo y Correctivo de Computadoras",
        text: "Limpieza interna, revisión de hardware, solución de problemas de arranque, actualización de componentes y optimización del rendimiento.",
        images: ["/img/pc1.jpg", "/img/pc2.jpg"],
        skills: ["Limpieza interna", "Revisión de hardware", "Solución de problemas", "Actualización de componentes"],
    },
    {
        title: "Reparación y Mantenimiento de Laptops",
        text: "Cambio de bisagras, pantallas, teclados y baterías. Diagnóstico y solución de fallas eléctricas internas.",
        images: ["/img/laptop1.jpg", "/img/laptop2.jpg"],
        reverse: true,
        skills: ["Reparación de bisagras", "Cambio de pantallas", "Mantenimiento de teclados", "Diagnóstico eléctrico"],
    },
    {
        title: "Recuperación de Archivos y Discos",
        text: "Recuperación de datos perdidos en discos duros, SSDs y memorias dañadas o formateadas, utilizando software especializado.",
        images: ["/img/recuperacion1.jpg", "/img/recuperacion2.jpg"],
        skills: ["Recuperación de datos", "Discos duros", "SSDs", "Software especializado"],
    },
    {
        title: "Instalación de Programas, Windows y Antivirus",
        text: "Instalación y configuración de sistemas operativos, programas especializados y antivirus para mantener equipos seguros y funcionales.",
        images: ["/img/windows1.jpg", "/img/antivirus2.jpg"],
        reverse: true,
        skills: ["Instalación de Windows", "Configuración de software", "Antivirus", "Seguridad informática"],
    },
    {
        title: "Proyectos en Arduino y Automatización",
        text: "Diseño e implementación de proyectos electrónicos con Arduino para automatización, control y prototipos funcionales.",
        images: ["/img/arduino1.jpg", "/img/arduino2.jpg"],
        skills: ["Arduino", "Automatización", "Diseño electrónico", "Prototipos"],
    },
    {
        title: "Reparación de Consolas y Puertos",
        text: "Diagnóstico y reparación de consolas de videojuegos, así como arreglo de puertos USB, HDMI y conectores en equipos electrónicos.",
        images: ["/img/consola1.jpg", "/img/puertos2.jpg"],
        reverse: true,
        skills: ["Reparación de consolas", "Puertos USB", "Puertos HDMI", "Diagnóstico de conectores"],
    },
];

const PortafolioElectronica = () => {
    const [trabajos, setTrabajos] = useState(trabajosIniciales);

    return (
        <main className="mx-auto px-4 py-8 bg-gray-50 min-h-screen max-w-7xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Portafolio - Ingeniería Electrónica</h1>
            <BuscadorFiltro trabajos={trabajosIniciales} onFilter={setTrabajos} />
            {trabajos.length > 0 ? (
                trabajos.map((trabajo, i) => (
                    <PortfolioSection
                        key={i}
                        title={trabajo.title}
                        text={trabajo.text}
                        images={trabajo.images}
                        reverse={trabajo.reverse}
                        skills={trabajo.skills}  // <--- PASAR skills aquí
                    />
                ))
            ) : (
                <p>No se encontraron proyectos.</p>
            )}
        </main>
    );
};

export default PortafolioElectronica;
