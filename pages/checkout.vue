<template>
    <div>
      <h1>Checkout</h1>
      <h2>Selected Meals</h2>
      <div v-for="meal in selectedMeals" :key="meal.id">
        {{ meal.name }} - {{ meal.price | currency }}
      </div>
      <h2>Total: {{ total | currency }}</h2>
      <button @click="placeOrder">Place Order</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedMeals = ref([
    { id: 1, name: 'Grilled Chicken', price: 12.99 },
    { id: 2, name: 'Beef Steak', price: 15.99 },
  ])
  
  const total = computed(() => selectedMeals.value.reduce((sum, meal) => sum + meal.price, 0))
  
  const placeOrder = () => {
    alert('Order placed successfully!')
  }
  </script>
  
  <style scoped>
  /* Customize styling */
  </style>
  