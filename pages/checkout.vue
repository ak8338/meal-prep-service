<template>
  <div class="checkout-page">
    <Navbar />

    <div class="checkout-container">
      <h1 class="checkout-title">Checkout</h1>

      <h2 class="section-title">Selected Meals</h2>

      <!-- Check if the cart is empty -->
      <div v-if="selectedMeals.length > 0" class="meals-container">
        <div class="meal-card" v-for="meal in selectedMeals" :key="meal.id">
          <img :src="meal.image" :alt="meal.name" class="meal-image"/>
          <h3 class="meal-card-title">{{ meal.name }}</h3>
          <p class="meal-card-description">{{ meal.description }}</p>
          
          <div class="meal-info">
            <div class="meal-pill">Calories: {{ meal.calories }}</div>
            <div class="meal-pill">Price: {{ meal.price | currency }}</div>
          </div>
        </div>
      </div>

      <!-- Show message if the cart is empty -->
      <div v-if="selectedMeals.length === 0" class="empty-cart-message">
        <p>Your cart is empty.</p>
      </div>

      <!-- Total section and Place Order button are always visible -->
      <div class="total-section">
        <h2>Total: <span>{{ total | currency }}</span></h2>
      </div>

      <button class="place-order-button" @click="placeOrder">Place Order</button>
    </div>

    <!-- Notification Banner at the bottom -->
    <div class="notification-banner" v-if="showNotification">
      <p>Order placed successfully!</p>
    </div>

    <!-- Footer -->
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
import { ref, computed } from 'vue'
import Navbar from '~/components/Navbar.vue'

const selectedMeals = ref([]) // Add selected meals data if available

const total = computed(() => selectedMeals.value.reduce((sum, meal) => sum + meal.price, 0))

const showNotification = ref(false)

const placeOrder = () => {
  showNotification.value = true;

  // Automatically hide the notification after 3 seconds
  setTimeout(() => {
    showNotification.value = false;
  }, 3000)
}
</script>

<style scoped>
/* Base Styles */
.checkout-page {
  font-family: 'Roboto', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  position: relative;
}

.checkout-container {
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

/* Notification Banner at the bottom of the page */
.notification-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 1.2rem;
  z-index: 999;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.5s forwards;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Empty Cart Message */
.empty-cart-message {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #555;
}

/* Footer Styles */
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
  padding-left: 0;
}

.footer a {
  color: white;
  text-decoration: none;
}

.footer p {
  margin-top: 1rem;
  font-size: 0.9rem;
}

/* Titles */
.checkout-title {
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
  animation: fadeIn 0.7s ease-in-out;
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

/* Total Section */
.total-section {
  margin-bottom: 30px;
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
}

/* Button */
.place-order-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.place-order-button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .checkout-container {
    padding: 20px;
  }

  .checkout-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .total-section {
    font-size: 1.3rem;
  }

  .place-order-button {
    font-size: 1.1rem;
  }
}
</style>
