<template>
    <div>
      <h1>Customize Your Meal Plan</h1>
      <div v-for="meal in meals" :key="meal.id">
        <label>
          <input type="checkbox" v-model="selectedMeals" :value="meal.id" />
          {{ meal.name }} - {{ meal.price | currency }}
        </label>
      </div>
      <h2>Total: {{ total | currency }}</h2>
      <nuxt-link to="/checkout">Go to Checkout</nuxt-link>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const meals = [
    { id: 1, name: 'Grilled Chicken', price: 12.99 },
    { id: 2, name: 'Beef Steak', price: 15.99 },
    { id: 3, name: 'Vegan Bowl', price: 10.99 },
  ]
  
  const selectedMeals = ref([])
  
  const total = computed(() =>
    selectedMeals.value.reduce((sum, mealId) => {
      const meal = meals.find((m) => m.id === mealId)
      return sum + (meal ? meal.price : 0)
    }, 0)
  )
  </script>
  
  <style scoped>
  /* Customize styling */
  </style>
  