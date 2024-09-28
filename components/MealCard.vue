<template>
    <div class="meal-card">
      <h3>{{ meal.name }}</h3>
      <p>{{ meal.description }}</p>
      <p>Price: {{ meal.price | currency }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps(['meal'])
  </script>
  
  <style scoped>
  .meal-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    max-width: 300px;
  }
  </style>
  