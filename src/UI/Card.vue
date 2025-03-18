<!-- src/UI/Card.vue -->
<template>
    <div class="card">
      <div class="card-image">
        <img :src="imageSrc" alt="img" />
      </div>
      <div class="card-content">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
        <p>{{ date }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      title: String,
      description: String,
      imageSrc: String,
      date: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    width: 250px;
    margin: 10px;
    height: 100%;
  }
  
  .card-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .card-content h4 {
    font-size: 1.2rem;
    margin: 10px 0;
  }
  
  .card-content p {
    font-size: 1rem;
    color: #666;
  }
  </style>
  