<template>
    <button
      :class="['ui-button', sizeClass, colorClass, { 'btn-icon': icon }]"
      @click="$emit('click')"
    >
      <i v-if="icon && iconPosition === 'left'" :class="icon" class="icon-left"></i>
      <span>{{ label }}</span>
      <i v-if="icon && iconPosition === 'right'" :class="icon" class="icon-right"></i>
    </button>
  </template>
  
  <script>
  export default {
    name: "UiButton",
    props: {
      label: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        default: "medium", // Valores: small, medium, large
      },
      color: {
        type: String,
        default: "primary", // Valores: primary, secondary, tertiary
      },
      icon: {
        type: String,
        default: "", // Clases de Font Awesome u otro sistema de iconos
      },
      iconPosition: {
        type: String,
        default: "left", // Opciones: left o right
      },
    },
    computed: {
      sizeClass() {
        return {
          small: "btn-small",
          medium: "btn-medium",
          large: "btn-large",
        }[this.size];
      },
      colorClass() {
        return {
          primary: "btn-primary",
          secondary: "btn-secondary",
          tertiary: "btn-tertiary",
        }[this.color];
      },
    },
  };
  </script>
  
  <style scoped>
  .ui-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .btn-icon {
    gap: 8px;
  }
  
  .icon-left,
  .icon-right {
    font-size: 18px;
  }
  
  /* Tamaños */
  .btn-small {
    font-size: 14px;
    padding: 8px 16px;
  }
  
  .btn-medium {
    font-size: 16px;
    padding: 10px 20px;
  }
  
  .btn-large {
    font-size: 18px;
    padding: 12px 24px;
  }
  
  /* Colores */
  .btn-primary {
    background-color: #007bff;
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }
  
  .btn-secondary:hover {
    background-color: #545b62;
  }
  
  .btn-tertiary {
    background-color: #28a745;
    color: white;
  }
  
  .btn-tertiary:hover {
    background-color: #1e7e34;
  }
  </style>
  