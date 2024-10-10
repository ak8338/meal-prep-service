<template>
  <div class="customize-page">
    <Navbar />
    <div class="customize-container">
      <h1 class="customize-title">Customize Your Meal Plan</h1>

      <h2 class="section-title">Your Meal Plan</h2>

      <div v-if="mealPlan.length > 0" class="meals-container">
        <div class="meal-card" v-for="meal in mealPlan" :key="meal.id">
          <img :src="meal.imageUrl" :alt="meal.name" class="meal-image" />
          <h3 class="meal-card-title">{{ meal.name }}</h3>
          <p class="meal-card-description">{{ meal.description }}</p>

          <div class="meal-info">
            <div class="meal-pill">Calories: {{ meal.calories }}</div>
            <div class="meal-pill">Price: {{ meal.price | currency }}</div>
          </div>
        </div>
      </div>

      <div v-if="mealPlan.length === 0" class="no-meals-message">
        <p>Meal Plan is Empty</p>
      </div>

      <div class="total-section">
        <h2>Total: $<span>{{ total | currency }}</span></h2>
      </div>

      <nuxt-link to="/checkout" class="checkout-link">Go to Checkout</nuxt-link>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMealPlanStore } from '~/stores/mealPlan';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

definePageMeta({
  middleware: 'auth'
});

const store = useMealPlanStore(); // Access the Pinia store
const mealPlan = computed(() => store.mealPlan); // Access mealPlan from the store

const total = computed(() => store.totalPrice); // Use the totalPrice getter from the store
</script>


<style scoped>
/* Base Styles */
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
  display: flex;
  flex-direction: column;
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
  animation: fadeIn 0.7s ease-in-out;
}

/* Meal Card */
.meals-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
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

/* No Meals Message */
.no-meals-message {
  text-align: center;
  padding: 30px;
  font-size: 1.2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  color: #6b6b6b;
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

/* Checkbox */
.meal-checkbox {
  margin-top: 10px;
  cursor: pointer;
}

/* Total Section */
.total-section {
  margin-bottom: 30px;
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
  width: 100%;
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

/* Responsive Styles */
@media (max-width: 1024px) {
  .customize-container {
    padding: 20px;
  }

  .customize-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .total-section {
    font-size: 1.3rem;
  }

  .checkout-link {
    font-size: 1.1rem;
  }
}
</style>
