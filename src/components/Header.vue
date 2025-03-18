<template>
    <header class="header">
      <div class="ancho">
        <nav>
          <ul class="nav-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about-me">About Me</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/Certificate">Certificate</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  // Lógica adicional si es necesario.
  </script>
  
  <style scoped>
  .header {
    width: 100%;
    background-color: #333; /* Fondo de ejemplo */
    padding: 1rem 0;
  }
  
  .nav-list {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }
  
  .nav-list li {
    display: inline;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  