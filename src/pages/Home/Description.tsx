import Accordion from "../../ui/Accordion"; // Ajusta la ruta según tu proyecto
import Button from "../../ui/Button";

const Description = () => {
  return (
    <main className="mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Columna 1 */}
        <div className="flex-1 flex flex-col gap-4 border border-blue-400 p-4 rounded-lg shadow-sm">
          {/* Div superior */}
          <div className="border border-green-400 p-4 rounded">
            <h1 className="text-2xl font-bold">Universidades</h1>
            <h2 className="text-lg font-semibold mt-2">Títulos Académicos</h2>
            <p className="mt-2 text-gray-600">
              Nombre de los titulos.
            </p>
          </div>

          {/* Div inferior con dos columnas */}
          <div className="border border-purple-400 p-4 rounded">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Universidad 1 */}
              <Accordion
                trigger={
                  <img
                    src="/ruta/logo-universidad1.png"
                    alt="Logo Universidad 1"
                    className="w-24 h-24 mx-auto"
                  />
                }
                className="flex-1 border border-pink-400 p-4 rounded"
              >
                <p className="mt-2 text-center font-medium">Nombre Universidad 1</p>
              </Accordion>

              {/* Universidad 2 */}
              <Accordion
                trigger={
                  <img
                    src="/ruta/logo-universidad2.png"
                    alt="Logo Universidad 2"
                    className="w-24 h-24 mx-auto"
                  />
                }
                className="flex-1 border border-yellow-400 p-4 rounded"
              >
                <p className="mt-2 text-center font-medium">Nombre Universidad 2</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="flex-1 border border-red-400 p-4 rounded-lg shadow-sm">
          <Accordion
            trigger={
              <img
                src="/ruta/tu-foto.jpg"
                alt="Foto personal"
                className="w-full h-auto rounded-lg object-cover"
              />
            }
          >
            <div className="flex justify-center">
              <a href="/ruta/tu-cv.pdf" download>
                <Button variant="tertiary" label="Descargar CV" />
              </a>
            </div>
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default Description;
