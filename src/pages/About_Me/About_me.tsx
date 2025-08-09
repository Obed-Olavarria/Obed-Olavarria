import SkillList from "../../ui/SkillList";
import ExperienceList from "./components/ExperienceList";

const AboutMe = () => {
    // Datos simulados de experiencia laboral
    const experiencias = [
        {
            empresa: "Empresa A",
            puesto: "Desarrollador Fullstack",
            duracion: "Ene 2022 - Dic 2023",
            descripcion: "Desarrollo y mantenimiento de aplicaciones web con React y Node.js."
        },
        {
            empresa: "Empresa B",
            puesto: "Ingeniero de Soporte Técnico",
            duracion: "Mar 2020 - Dic 2021",
            descripcion: "Soporte a clientes y mantenimiento de infraestructura IT."
        },
        {
            empresa: "Freelance",
            puesto: "Desarrollador Web",
            duracion: "2018 - 2020",
            descripcion: "Proyectos variados de desarrollo web para clientes independientes."
        },
    ];

    // Habilidades separadas por área
    const habilidadesSistemas = [
        "UX/UI",
        "HTML5",
        "CSS3",
        "TypeScript",
        "React",
        "Python",
        "Docker",
        "AWS",
        "Linux Server",
    ];

    const habilidadesElectronica = [
        "Arduino",
        "Microcontroladores",
        "Microsoldadura",
        "Reparación de celulares",
        "Reparación de PC",
        "Electrónica avanzada",
    ];

    return (
        <main className="max-w-4xl mx-auto p-6 py-8 bg-white rounded shadow-md border border-purple-400">
            <h1 className="text-3xl font-bold mb-4">Conóceme</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Hola, soy Obed Olavarría</h2>
                <p className="text-gray-700 leading-relaxed">
                    Soy Ingeniero en Sistemas y Desarrollador Web apasionado por crear soluciones tecnológicas que faciliten procesos y mejoren experiencias digitales. Me encanta aprender nuevas tecnologías y aplicarlas en proyectos reales.
                </p>
            </section>

            <div>
                <h2 className="text-xl font-semibold mb-4">Experiencia Laboral</h2>
                <ExperienceList experiencias={experiencias} colorScheme="blue" />
                <ExperienceList experiencias={experiencias} colorScheme="purple" />
            </div>

            <section>
                <h2 className="text-xl font-semibold mb-4">Habilidades principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Sistemas */}
                    <div>
                        <h3 className="font-semibold mb-2 text-black-700">Ingeniero en Sistemas</h3>
                        <SkillList skills={habilidadesSistemas} colorScheme="blue" />
                    </div>

                    {/* Electrónica */}
                    <div>
                        <h3 className="font-semibold mb-2 text-black-700">Técnico en Electrónica</h3>
                        <SkillList skills={habilidadesElectronica} colorScheme="purple" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutMe;
