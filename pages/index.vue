<template>
    <div>
      <Navbar />
  
      <div class="featured-meals-container">
        <section class="featured-meals">
          <h2 class="page-title">Top Picks</h2>
          <div class="meal-list">
            <!-- MealCard Component - Display Meals Dynamically -->
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
  
      <!-- Reusable Notification Banner Component -->
      <NotificationBanner :show="showNotification" message="Meal added to your plan!" />
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useMealPlanStore } from "~/stores/mealPlan"; // Import Pinia store
  import MealCard from "~/components/MealCard.vue"; // Import MealCard
  import Navbar from "~/components/Navbar.vue"; // Import Navbar
  import Footer from "~/components/Footer.vue"; // Import Footer
  import NotificationBanner from "~/components/NotificationBanner.vue"; // Import NotificationBanner
  
  definePageMeta({
    middleware: "auth", // Ensure the user is authenticated
  });
  
  const store = useMealPlanStore(); // Use Pinia store
  const featuredMeals = ref([]); // Store fetched meals
  const showNotification = ref(false); // Track notification visibility
  
  // Function to add meal to the meal plan
  const addToPlan = (meal) => {
    store.addMealToPlan(meal); // Use Pinia store action to add meal to the plan
    showNotification.value = true; // Show the notification
  
    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      showNotification.value = false;
    }, 3000);
  };
  
  // Fetch meals from the backend when component mounts
  onMounted(async () => {
    try {
      const response = await $fetch("/api/meals"); // Fetch meals from API
      featuredMeals.value = response; // Set the featuredMeals with fetched data
    } catch (error) {
      console.error("Failed to load meals:", error);
    }
  });
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
    transition: background-color 0.3s ease;
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
    transition: transform 0.3s ease;
  }
  
  /* Page title */
  .page-title {
    text-align: center;
    font-size: 25pt;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s forwards ease-in-out;
  }
  
  /* Animation keyframes for title */
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
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
    transform: scale(1.05);
  }
  
  .meal-list .meal-card:hover {
    transform: translateY(-5px);
  }
  
  /* Footer styles */
  .footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
    transition: opacity 0.3s ease;
  }
  
  .footer:hover {
    opacity: 0.9;
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
  