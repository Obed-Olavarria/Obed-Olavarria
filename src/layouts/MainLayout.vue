<template>
    <div class="main-layout">
      <Header /> <!-- Encabezado global que se muestra en todas las páginas -->
      <main>
        <router-view /> <!-- Aquí se cargarán las páginas específicas dependiendo de la ruta -->
      </main>
      <Footer /> <!-- Pie de página global que también se muestra en todas las páginas -->
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'; // Importación del componente Header
  import Footer from '../components/Footer.vue'; // Importación del componente Footer
  
  export default {
    components: {
      Header, // Registro del componente Header
      Footer, // Registro del componente Footer
    },
  };
  </script>
  
  <style scoped>
  /* Estilos generales para el layout principal */
  .main-layout {
    display: flex;
    flex-direction: column; /* Coloca los elementos en columna: Header, Main y Footer */
    min-height: 100vh; /* Asegura que el layout ocupe al menos toda la altura de la ventana */
  }
  
  main {
    flex: 1; /* Hace que el contenido principal ocupe todo el espacio disponible entre Header y Footer */
  }
  </style>
  