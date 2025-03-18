<template>
  <section class="hero-section">
    <div class="container">
      <!-- Columna Izquierda: Información Personal -->
      <div class="info">
        <h1 class="name">OBED ISAAC <br> OLAVARRÍA CHAGOLLA</h1>
        <p class="title">
          INGENIERO EN SISTEMAS COMPUTACIONALES ESPECIALIZADO EN DESARROLLO WEB Y MOVIL
        </p>
        <div class="education">
          <h3>🎓 Formación Académica</h3>
          <div class="cards-container">
            <Card
              title="Bachiller Técnico"
              description="Centro de Bachillerato Tecnológico Industrial y de Servicios No 120"
              :imageSrc="logoCBtis120"
            />
            <Card
              title="Universidad"
              description="Instituto Tecnológico de Mérida"
              :imageSrc="logoTecnm"
            />
          </div>
        </div>
      </div>

      <!-- Columna Derecha: Imagen -->
      <div class="image-container">
        <img src="../../assets/images/yo.jpg" alt="Profile Image" class="profile-img" />
        <Button label="Descargar CV" color="primary" size="medium" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../../UI/Button.vue';
import Card from '../../UI/Card.vue';
import logoCBtis120 from '../../assets/logos/CBtis120.png';  // Importa la imagen
import logoTecnm from '../../assets/logos/tecnm.svg';        // Importa la imagen

export default {
  name: 'HeroSection',
  components: {
    Button,
    Card,
  },
  data() {
    return {
      logoCBtis120,
      logoTecnm,
    };
  },
};
</script>

<style scoped>
.hero-section {
  width: 100%;
  padding: 4rem 2rem;
  background-color: var(--neutral-color_1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  align-items: center;
}

.info {
  text-align: left;
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.title {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-top: 10px;
}

.education {
  margin-top: 20px;
}

.education h3 {
  font-size: 1.2rem;
  color: var(--terciary-color);
}

.cards-container {
  display: flex;
  gap: 2rem; /* Espacio entre las tarjetas */
  flex-wrap: wrap; /* Permite que las tarjetas se ajusten en pantallas pequeñas */
  justify-content: space-between; /* Espacio entre las tarjetas */
}

.card {
  flex: 1 1 35%; /* Ajusta el tamaño para que ocupen hasta el 48% del ancho */
  max-width: 35%; /* Limita el tamaño máximo al 48% */
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-img {
  width: 300px;
  height: auto;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
</style>
