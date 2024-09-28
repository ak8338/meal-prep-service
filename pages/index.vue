<template>
    <div>
      <h1>Featured Meals</h1>
      <div class="meal-list">
        <MealCard v-for="meal in featuredMeals" :key="meal.id" :meal="meal" />
      </div>
    </div>
  </template>
  
  <script setup>
  import MealCard from '~/components/MealCard.vue'
  
  const featuredMeals = [
    { id: 1, name: 'Grilled Chicken', description: 'Served with vegetables and rice.', price: 12.99 },
    { id: 2, name: 'Beef Steak', description: 'With mashed potatoes and greens.', price: 15.99 },
    { id: 3, name: 'Vegan Bowl', description: 'Quinoa, avocado, and chickpeas.', price: 10.99 },
  ]
  </script>
  
  <style scoped>
  .meal-list {
    display: flex;
    justify-content: space-around;
  }
  </style>
  