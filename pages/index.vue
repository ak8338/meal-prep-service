<template>
    <div>
      <!-- Responsive Navbar -->
      <Navbar />
  
      <!-- Featured Meals Section -->
      <div class="featured-meals-container">
        <section class="featured-meals">
          <h2 class="page-title">Featured Meals</h2>
          <div class="meal-list">
            <MealCard v-for="meal in featuredMeals" :key="meal.id" :meal="meal" @addToPlan="addToPlan" />
          </div>
        </section>
      </div>
  
      <!-- Modern Footer -->
      <footer class="footer">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/customize">Meal Plans</NuxtLink>
          </li>
        </ul>
        <p>&copy; 2024 Meal Prep Service. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import MealCard from '~/components/MealCard.vue'
  import Navbar from '~/components/Navbar.vue'
  
  // Updated featured meal data with image URLs, calories, and other details
  const featuredMeals = [
    { id: 1, name: 'Bean Salad Bowl', description: 'Served with vegetables and rice.', calories: 450, price: 12.99, image: '/images/bean-salad-bowl.jpg' },
    { id: 2, name: 'Chickpea Bowl', description: 'With mashed potatoes and greens.', calories: 600, price: 15.99, image: '/images/chickpea-bowl.jpg' },
    { id: 3, name: 'Felafel Bowl', description: 'Quinoa, avocado, and chickpeas.', calories: 300, price: 10.99, image: '/images/felafel-bowl.jpg' },
    { id: 4, name: 'Lentil Bowl', description: 'Served with vegetables and rice.', calories: 450, price: 12.99, image: '/images/lentil-bowl.jpg' },
    { id: 5, name: 'Quinoa Bowl', description: 'With mashed potatoes and greens.', calories: 600, price: 15.99, image: '/images/quinoa-bowl.jpg' },
    { id: 6, name: 'Rice Bowl', description: 'Quinoa, avocado, and chickpeas.', calories: 300, price: 10.99, image: '/images/rice-bowl.jpg' },
  ]
  
  const addToPlan = (meal) => {
    // Use Vuex store to commit the mutation
    $nuxt.$store.commit('ADD_TO_PLAN', meal)
    alert(`${meal.name} has been added to your meal plan!`)
  }
  </script>
  
  

<style scoped>
/* Navbar styles */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem;
    color: white;
    position: relative;
}

.logo h1 {
    font-size: 24px;
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger .bar {
    width: 25px;
    height: 3px;
    background-color: white;
}

.page-title {
    text-align: left;
    font-size: 25pt;
    margin-left:130px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.nav-links li {
    font-size: 18px;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.nav-buttons {
    display: flex;
    gap: 1rem;
}

.nav-buttons button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 16px;
}

.nav-buttons button:hover {
    background-color: #45a049;
}

/* Featured Meals Section */
.featured-meals {
    text-align: center;
    padding: 2rem;
}

.meal-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 3 columns on desktop */
    gap: 15px;
    /* Reduce gap between columns to bring them closer together */
    justify-items: center;
}

.meal-list .meal-card {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
    /* Full width of the column */
    max-width: 400px;
    /* Increase max-width of the meal card */
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.meal-list img {
    width: 100%;
    /* Make sure the image takes up full width */
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}

/* Footer styles */
.footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
}

.footer ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.footer a {
    color: white;
    text-decoration: none;
}

.footer p {
    margin-top: 1rem;
}

/* Responsive Navbar */
@media (max-width: 768px) {
    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #333;
        flex-direction: column;
        align-items: center;
        display: none;
        gap: 1rem;
        padding: 1rem 0;
    }

    .nav-links.active {
        display: flex;
    }

    .hamburger {
        display: flex;
    }

    .nav-buttons {
        display: none;
    }
}

/* Responsive Meal Cards */
@media (max-width: 1024px) {
    .meal-list {
        grid-template-columns: repeat(2, 1fr);
        /* 2 columns on tablets */
    }

    .meal-list .meal-card {
        max-width: 450px;
        /* Slightly increase the max-width on tablets */
    }
}

@media (max-width: 768px) {
    .meal-list {
        grid-template-columns: 1fr;
        /* 1 column on mobile */
    }

    .meal-list .meal-card {
        max-width: 100%;
        /* Full width on mobile */
    }
}

.featured-meals-container {
    padding-left: 1rem;
    padding-right: 1rem;
}

.featured-meals-title {
    text-align: left;
    margin-bottom: 1rem;
    font-size: 2rem;
}

.meal-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 3 columns for larger screens */
    gap: 20px;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .meal-list {
        grid-template-columns: repeat(2, 1fr);
        /* 2 columns for tablet screens */
    }

    .featured-meals-container {
        padding-left: 0.5rem;
        /* Reduce padding for tablets */
        padding-right: 0.5rem;
    }
}

@media (max-width: 768px) {
    .meal-list {
        grid-template-columns: 1fr;
        /* 1 column for mobile screens */
    }

    .featured-meals-container {
        padding-left: 0.5rem;
        /* Further reduce padding for mobile */
        padding-right: 0.5rem;
    }

    .featured-meals-title {
        font-size: 1.5rem;
        /* Adjust title size on smaller screens */
        margin-bottom: 0.5rem;
    }
}
</style>