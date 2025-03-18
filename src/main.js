import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // Importa Vue Router

// Crea una sola instancia de la app y usa Vue Router
createApp(App).use(router).mount('#app');