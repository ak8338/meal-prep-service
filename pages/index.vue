<template>
    <div>
      <!-- Responsive Navbar -->
      <Navbar />
  
      <!-- Featured Meals Section -->
      <div class="featured-meals-container">
        <section class="featured-meals">
          <h2 class="page-title">Featured Meals</h2>
          <div class="meal-list">
            <MealCard 
              v-for="meal in featuredMeals" 
              :key="meal.id" 
              :meal="meal" 
              @addToPlan="addToPlan"
              class="meal-card-animated"
            />
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
        <p>&copy; 2024 WholesomeEats. All rights reserved.</p>
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
      transition: background-color 0.3s ease; /* Add smooth transition for background change */
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
      transition: transform 0.3s ease; /* Add animation to hamburger bars */
  }
  
  .page-title {
      text-align: left;
      font-size: 25pt;
      margin-left:130px;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.5s forwards ease-in-out; /* Title animation */
  }
  
  /* Animation keyframes for title */
  @keyframes fadeInUp {
      to {
          opacity: 1;
          transform: translateY(0);
      }
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
      transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition for hover effects */
  }
  
  .nav-buttons button:hover {
      background-color: #45a049;
      transform: scale(1.05); /* Slight zoom on hover */
  }
  
  /* Featured Meals Section */
  .featured-meals {
      text-align: center;
      padding: 2rem;
  }
  
  .meal-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0px;
      justify-items: center;
      margin: 0px;
  }
  
  /* Add animation for meal cards */
  .meal-card-animated {
      opacity: 0;
      transform: scale(0.9);
      animation: fadeInScale 0.4s forwards ease-in-out;
      animation-delay: calc(var(--animation-order) * 0.1s);
  }
  
  @keyframes fadeInScale {
      to {
          opacity: 1;
          transform: scale(1);
      }
  }
  
  .meal-list .meal-card {
      background-color: #f8f9fa;
      border-radius: 10px;
      padding: 1rem;
      width: 100%;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
  }
  
  .meal-list img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
      transition: transform 0.3s ease;
  }
  
  .meal-list .meal-card:hover img {
      transform: scale(1.05); /* Slight zoom on hover */
  }
  
  .meal-list .meal-card:hover {
      transform: translateY(-5px); /* Slight lift on hover */
  }
  
  /* Footer styles */
  .footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
      transition: opacity 0.3s ease; /* Smooth transition for footer opacity */
  }
  
  .footer:hover {
      opacity: 0.9; /* Slight fade effect on hover */
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
      }
  
      .meal-list .meal-card {
          max-width: 450px;
      }
  }
  
  @media (max-width: 768px) {
      .meal-list {
          grid-template-columns: 1fr;
      }
  
      .meal-list .meal-card {
          max-width: 100%;
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
      gap: 20px;
  }
  
  /* Responsive adjustments */
  @media (max-width: 1024px) {
      .meal-list {
          grid-template-columns: repeat(2, 1fr);
      }
  
      .featured-meals-container {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
      }
  }
  
  @media (max-width: 768px) {
      .meal-list {
          grid-template-columns: 1fr;
      }
  
      .featured-meals-container {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
      }
  
      .featured-meals-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
      }

  }
  </style>
  