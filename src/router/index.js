import { createRouter, createWebHistory } from 'vue-router';

// Importar el layout y las páginas
import MainLayout from '../layouts/MainLayout.vue';
import Home from '../pages/Home.vue';
import AboutMe from '../pages/AboutMe.vue';
import Projects from '../pages/Projects.vue';
import Certificate from '../pages/Certificate.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  {
    path: '/', // Ruta principal
    component: MainLayout, // El layout principal
    children: [
      { path: '', name: 'Home', component: Home }, // Página de inicio
      { path: 'about-me', name: 'AboutMe', component: AboutMe }, // Sección sobre mí
      { path: 'projects', name: 'Projects', component: Projects }, // Proyectos
      { path: 'certificate', name: 'Certificate', component: Certificate }, // Certificados
      { path: 'contact', name: 'Contact', component: Contact }, // Contacto
    ],
  },
];

const router = createRouter({
  history: createWebHistory(), // Usamos el historial HTML5 (sin # en la URL)
  routes, // Las rutas definidas arriba
});

export default router;
