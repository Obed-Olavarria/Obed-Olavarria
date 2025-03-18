<template>
  <section class="home">
    <div class="ancho">
      <div class="home-container">

        <div class="home-presentation">

          <div class="developer">
            <div class="container-developer">
              <div class="title_developer">
                <img src="../assets/images/lap.svg" alt="Laptop Icon" class="svg-adjust" />
                <h1>Developer web and mobile <br /> & <br /> Systems engineer</h1>
              </div>

              <div class="list_developer">
                <dl>
                  <dt>HTML, CSS &amp; JavaScript</dt>
                  <dd>
                    Uso integral de HTML para estructurar el contenido, CSS para el diseño visual y JavaScript para la
                    lógica, interactividad y manipulación del DOM.
                  </dd>
                  <dt>Frameworks y librerías</dt>
                  <dd>Uso de Vue.js, React o Angular para crear aplicaciones interactivas.</dd>
                  <dt>Responsive Design</dt>
                  <dd>Crear interfaces que se adapten a dispositivos móviles, tabletas y escritorio.</dd>
                  <dt>APIs y Backend</dt>
                  <dd>Desarrollar e integrar APIs RESTful o GraphQL para la comunicación entre el cliente y el
                    servidor.
                  </dd>
                  <dt>Bases de datos</dt>
                  <dd>Diseñar, implementar y administrar bases de datos relacionales (MySQL, PostgreSQL) o NoSQL
                    (MongoDB).</dd>
                  <dt>Control de versiones</dt>
                  <dd>Gestionar el código fuente utilizando Git y colaborar en entornos de trabajo en equipo.</dd>
                  <dt>Arquitectura de sistemas</dt>
                  <dd>Diseñar arquitecturas escalables y seguras, integrando múltiples tecnologías y servicios.
                  </dd>
                  <dt>Testing y optimización</dt>
                  <dd>Realizar pruebas unitarias, de integración y optimizar el rendimiento de aplicaciones web y
                    móviles.</dd>
                </dl>
              </div>
            </div>
          </div>

          <div class="technician">
            <div class="container-technician">
              <div class="title_technician">
                <img src="../assets/images/llave_inglesa2.svg" alt="1" class="svg-adjust1" />
                <img src="../assets/images/tuerca.svg" alt="2" class="svg-adjust2" />
                <img src="../assets/images/cautin.svg" alt="2" class="svg-adjust3" />
                <h1>Electronic technician <br /> & <br /> Computer support</h1>
              </div>

              <div class="list_technician">
                <dl>
                  <dt>Diagnóstico de hardware</dt>
                  <dd>Evaluar y detectar fallas en componentes electrónicos y equipos informáticos.</dd>

                  <dt>Mantenimiento preventivo y correctivo</dt>
                  <dd>Realizar mantenimiento regular y reparaciones en sistemas y dispositivos electrónicos.</dd>

                  <dt>Instalación y configuración</dt>
                  <dd>Instalar y configurar hardware, sistemas operativos y software para equipos de cómputo.</dd>

                  <dt>Soporte técnico</dt>
                  <dd>Atender solicitudes de soporte, resolver problemas de conectividad, software y hardware, y brindar
                    asistencia a los usuarios.</dd>

                  <dt>Optimización del rendimiento</dt>
                  <dd>Mejorar la eficiencia de sistemas y equipos mediante ajustes y actualizaciones.</dd>

                  <dt>Seguridad informática</dt>
                  <dd>Implementar medidas de seguridad y protección en redes y dispositivos electrónicos.</dd>
                </dl>
              </div>
            </div>
          </div>

        </div>

        <HeroSection />
        <CareerSection />
        
      </div>

    </div>
  </section>
</template>

<script>
// Importando el componente CareerSection desde la ruta relativa
import CareerSection from '../sections/Home/CareerSection.vue';
import HeroSection from '../sections/Home/HeroSection.vue';

export default {
  name: 'Home',
  components: {
    CareerSection,
    HeroSection// Asegurándose de registrar el componente
  }
};
</script>

<style scoped>

 /*.home {
  No es necesario cambiar nada aquí 
}*/

 /* .home-container {
 No es necesario cambiar nada aquí 
}*/


.home-presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;
  transition: all 0.5s ease;
  width: 100%;
  background: linear-gradient(to bottom right, #5ab34b, #90a33c, #b7d143, #d3f249, #00d6dd, #00adb3, #00a0a6, #005b5e);
}

/* Contenedores para Developer y Technician */
.container-developer,
.container-technician {
  display: relative;
  width: 100%;
  /* Si necesitas una altura fija, puedes usar: */
  /* height: 100%; */
  /* O quitar la altura para que se ajuste al contenido */

}

/* Título: se posiciona en el centro del contenedor por defecto */
.title_developer,
.title_technician {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
  z-index: 3;

}

/* Al hacer hover sobre el contenedor de Developer */
.developer:hover .title_developer,
.technician:hover .title_technician {
  /* Mueve el título a la parte superior (por ejemplo, top: 0 o un valor específico) */
  position: relative;
  top: 0;
  transform: translateX(-50%);
}

/* La lista (lista de tecnologías) estará oculta por defecto */
.list_developer,
.list_technician {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

/* Cuando se haga hover sobre el contenedor principal, la lista se mostrará */
.developer:hover .list_developer,
.technician:hover .list_technician {
  opacity: 1;
  visibility: visible;
  z-index: 1;
}

/* Estilos para embellecer el contenido de la lista (dl, dt y dd) */
.list_developer dl,
.list_technician dl {
  background: rgba(54, 54, 54, 0.6);
  /* Fondo blanco semi-transparente */
  border-radius: 8px;
  /* Bordes redondeados */
  padding: 0.8rem;
  /* Espaciado interno */
  display: inline-block;
  /* Para que se ajuste al contenido */
  text-align: left;
  /* Alineación a la izquierda */
  max-width: 100%;
  /* Limita el ancho */
  min-width: 300px;
  /* Ajusta según sea necesario */
  margin: 1rem auto;
  /* Centrado con margen vertical */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  /* Sombra suave */
}

.list_developer dt,
.list_technician dt {
  font-weight: bold;
  color: #ffffff;
  margin-top: 1rem;
  /* Espacio superior para separar los ítems */
  padding-bottom: 0.25rem;
  /*border-bottom: 1px solid #ccc;   Línea divisoria debajo del título */
}

.list_developer dd,
.list_technician dd {
  margin-left: 1rem;
  /* Indentado para diferenciar del dt */
  margin-top: 0.5rem;
  color: #ffffff;
  line-height: 1;
}


.svg-adjust {
  position: absolute;
  top: -4rem;
  left: 2rem;
  width: 35rem;
  /* Ajusta el ancho del SVG */
  height: auto;
  /* Mantén la proporción del SVG */
  transition: transform 0.3s ease;
  object-fit: cover;
  z-index: 0;

}

/*.svg-adjust:hover {
  transform: scale(1.1);  Efecto de zoom al hacer hover 
}*/

.developer:hover .svg-adjust,
.technician:hover .svg-adjust1 {
  display: none;
  /* La imagen desaparece por completo */
}

.technician:hover .svg-adjust2 {
  display: none;
  /* La imagen desaparece por completo */
}

.technician:hover .svg-adjust3 {
  display: none;
  /* La imagen desaparece por completo */
}

.svg-adjust1 {
  position: absolute;
  top: -6rem;
  right: 20rem;
  width: 25rem;
  /* Ajusta el ancho del SVG */
  height: auto;
  /*Mantén la proporción del SVG */
  transform: rotate(20deg);
  /**/
  transition: transform 0.3s ease;
  object-fit: cover;
  z-index: 0;

}

.svg-adjust2 {
  position: absolute;
  top: -4rem;
  left: 24rem;
  width: 15rem;
  /* Ajusta el ancho del SVG */
  height: auto;
  /*Mantén la proporción del SVG */
  transform: rotate(315deg);
  /**/
  transition: transform 0.3s ease;
  object-fit: cover;
  z-index: 0;

}

.svg-adjust3 {
  position: absolute;
  top: -11rem;
  right: 2rem;
  width: 39rem;
  /* Ajusta el ancho del SVG */
  height: auto;
  /*Mantén la proporción del SVG */
  transform: rotate(159deg);
  /**/
  transition: transform 0.3s ease;
  object-fit: cover;
  z-index: 0;

}


.developer {
  display: flex;
  justify-content: center;
  height: 53rem;
  padding: 20px;
  /*border: 2px solid #ff5733;*/
  align-items: center;

  overflow: hidden;
  transition: transform 0.5s ease, z-index 0.5s ease;
  background-size: cover;
  /* Asegura que la imagen ocupe todo el espacio */
  background-position: center;
  /* Centra la imagen */
  position: relative;
  z-index: 1;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}


.technician {
  display: flex;
  justify-content: center;
  height: 53rem;
  padding: 20px;
  /*border: 2px solid #ff5733;*/
  align-items: center;

  overflow: hidden;
  transition: transform 0.5s ease, z-index 0.5s ease;
  background-size: cover;
  /* Asegura que la imagen ocupe todo el espacio */
  background-position: center;
  /* Centra la imagen */
  background-image: none;
  /* No hay imagen de fondo por defecto */
  position: relative;
  z-index: 1;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}


/* Al hacer hover en los divs, mostramos la imagen */
.developer:hover {
  background-image: url('../assets/images/pru.jpg');
  /* Imagen de Developer */
  background-size: cover;
  background-position: center;
}

.technician:hover {
  background-image: url('../assets/images/p1.jpg');
  /* Imagen de Technician */
  background-size: cover;
  background-position: center;
}

.developer h1,
.technician h1 {
  font-size: 1.5rem;
  color: #000000;
  /* Cambié el color del texto a blanco para que contraste con el fondo */
  line-height: 1.5;
  transition: transform 0.5s ease;


}

.developer:hover h1,
.technician:hover h1 {
  transform: translateY(-15%);
  color: #ffffff
}

.developer:hover,
.technician:hover {
  align-items: flex-start;

}

/* Cambio de z-index al hacer hover */
.developer:hover {
  z-index: 1;
  /* Eleva el div de Developer */
}

.technician:hover {
  z-index: 1;
  /* Eleva el div de Technician */
}

.developer::before,
.technician::before {
  content: '';
  /* Pseudoelemento vacío */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.5s ease;
  /* Transición suave */
  z-index: 0;
  /* Asegura que el pseudoelemento esté detrás del contenido */
}

/* Al hacer hover, oscurece el contenedor */
.developer:hover::before,
.technician:hover::before {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  /* Oscurece con una capa negra semitransparente */
}



/* Media Queries */
/* Para dispositivos móviles (max-width: 768px) */
@media (max-width: 768px) {
  .home-presentation {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .developer h1,
  .technician h1 {
    font-size: 1.2rem;
  }

  .title_developer,
  .title_technician {
    position: relative;
    top: 0;
    transform: translateX(-50%);
    margin-bottom: 0.5rem;
  }

  .list_developer,
  .list_technician {
    position: relative;
    opacity: 1;
    /* Para móviles, también puedes optar por que se muestren siempre o mediante toggle */
    visibility: visible;
    margin-top: 0.5rem;
  }
}
</style>