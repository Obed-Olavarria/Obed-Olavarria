<template>
  <section class="career-section">
    <div class="career-container">
      <h2 class="career-title">My Career</h2>
      <div class="cards-container">
        <div class="career-item">
          <Card
            title="Web Developer"
            description="Developed modern web applications using Vue.js and Node.js."
            imageSrc="https://via.placeholder.com/250"
            date="2020 - Present"
          />
          <!--<span class="career-date">2020 - Present</span>-->
        </div>
        <div class="career-item">
          <Card
            title="Software Engineer"
            description="Worked on enterprise solutions for various industries."
            imageSrc="https://via.placeholder.com/250"
            date="2018 - 2020"
          />
          <!--<span class="career-date">2018 - 2020</span> -->
        </div>
        <div class="career-item">
          <Card
            title="IT Technician"
            description="Provided technical support for hardware and software issues."
            imageSrc="https://via.placeholder.com/250"
            date="2015 - 2018"
          />
          <!--<span class="career-date">2015 - 2018</span>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '../../UI/Card.vue';

export default {
  name: "CareerSection",
  components: {
    Card,
  },
};
</script>

<style scoped>
.career-section {
  padding: 2rem 1rem;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
}

.career-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.career-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.cards-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: nowrap; /* En pantallas grandes, las cards se mantendrán en una fila */
  overflow-x: auto;  /* Si hay muchas cards, se podrá hacer scroll horizontal */
}

.career-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.career-date {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--neutral2, #999);
}

/* Responsive: para tablet y móvil se apilan en columna */
@media (max-width: 1024px) {
  .cards-container {
    flex-wrap: wrap;
  }
  .career-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
  .career-title {
    font-size: 1.8rem;
  }
}
</style>
