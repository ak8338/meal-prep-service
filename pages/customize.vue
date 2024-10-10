<template>
  <div class="customize-page">
    <Navbar />
    <div class="customize-container">
      <h1 class="customize-title">Customize Your Meal Plan</h1>

      <h2 class="section-title">Your Meal Plan</h2>

      <!-- Display meals in the meal plan -->
      <div v-if="mealPlan.length > 0" class="meals-container">
        <div class="meal-card" v-for="meal in mealPlan" :key="meal.id">
          <img :src="meal.imageUrl" :alt="meal.name" class="meal-image"/>
          <h3 class="meal-card-title">{{ meal.name }}</h3>
          <p class="meal-card-description">{{ meal.description }}</p>

          <!-- Calories and Price Pills -->
          <div class="meal-info">
            <div class="meal-pill">Calories: {{ meal.calories }}</div>
            <div class="meal-pill">Price: {{ meal.price | currency }}</div>
          </div>

          <!-- Quantity controls -->
          <div class="quantity-controls">
            <button @click="decreaseQuantity(meal.id)">-</button>
            <span>{{ meal.quantity }}</span> <!-- Display the meal quantity -->
            <button @click="increaseQuantity(meal.id)">+</button>
          </div>

          <!-- Remove meal button -->
          <button @click="removeMealFromPlan(meal.id)" class="remove-button">Remove</button>
        </div>
      </div>

      <!-- Show message if the meal plan is empty -->
      <div v-if="mealPlan.length === 0" class="empty-plan-message">
        <p>Your meal plan is empty.</p>
      </div>

      <!-- Total section (Price and Calories) -->
      <div class="total-section">
        <h2>Total Price: $<span>{{ totalPrice.toFixed(2) }}</span></h2>
        <h2>Total Calories: <span>{{ totalCalories }}</span></h2>
      </div>

      <nuxt-link to="/checkout" class="checkout-link">Go to Checkout</nuxt-link>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMealPlanStore } from '~/stores/mealPlan'; // Pinia store for the meal plan
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

definePageMeta({
  middleware: 'auth'
});

const store = useMealPlanStore(); // Pinia store for managing meal plans

// Access meal plan from the store
const mealPlan = computed(() => store.mealPlan);

// Remove a meal from the meal plan
const removeMealFromPlan = (mealId) => {
  store.removeMealFromPlan(mealId);
};

// Increase meal quantity
const increaseQuantity = (mealId) => {
  store.increaseMealQuantity(mealId);
};

// Decrease meal quantity
const decreaseQuantity = (mealId) => {
  store.decreaseMealQuantity(mealId);
};

// Calculate total price
const totalPrice = computed(() => {
  return mealPlan.value.reduce((sum, meal) => sum + (meal.price * (meal.quantity || 1)), 0);
});

// Calculate total calories
const totalCalories = computed(() => {
  return mealPlan.value.reduce((sum, meal) => sum + (meal.calories * (meal.quantity || 1)), 0);
});
</script>


<style scoped>
.customize-page {
  font-family: 'Roboto', sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.customize-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Titles */
.customize-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #2d3748;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #4a5568;
}

/* Meal Card */
.meals-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.meal-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 1rem;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: scale(0.95);
  animation: fadeInScale 0.4s forwards ease-in-out;
}

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Image */
.meal-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

/* Info Pills */
.meal-info {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin: 10px 0;
}

.meal-pill {
  background-color: #e0e0e0;
  color: #333;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  display: inline-block;
  font-size: 14px;
}

/* Quantity Controls */
.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.quantity-controls button {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 35px;
  height: 35px;
  border-radius: 8px;
}

.quantity-controls button:hover {
  background-color: #45a049;
}

/* Remove Button */
.remove-button {
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-top: 10px;
}

.remove-button:hover {
  background-color: #d32f2f;
}

/* Total Section */
.total-section {
  margin-bottom: 30px;
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
}

/* Checkout Link */
.checkout-link {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 1.2rem;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.checkout-link:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

/* Empty Plan Message */
.empty-plan-message {
  text-align: center;
  padding: 30px;
  font-size: 1.2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  color: #6b6b6b;
}
</style>
