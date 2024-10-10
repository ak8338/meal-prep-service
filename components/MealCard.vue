<template>
  <div class="meal-card">
    <img :src="meal.imageUrl" :alt="meal.name" />
    <h3 class="meal-card-title">{{ meal.name }}</h3>
    <p class="meal-card-description">{{ meal.description }}</p>

    <!-- Calories and Price Pills -->
    <div class="meal-info">
      <div class="meal-pill">Calories: {{ meal.calories }}</div>
      <div class="meal-pill">Price: {{ meal.price | currency }}</div>
    </div>

    <!-- Add to Plan button -->
    <button @click="addMealToPlan">Add to your meal plan</button>
  </div>
</template>

<script setup>
// Define the props
const props = defineProps({
  meal: {
    type: Object,
    required: true, // Ensure the meal object is passed and is required
  },
});

const emit = defineEmits(['addToPlan']); // Define the event to emit

// Function to emit the meal object to the parent
const addMealToPlan = () => {
  emit('addToPlan', props.meal); // Use props.meal to emit the meal object
};
</script>

<style scoped>
/* Your existing styles */
.meal-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 100%;
  max-width: 450px; /* Max width for desktop screens */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.meal-card-title,
.meal-card-description {
  text-align: left;
}

.meal-card-title {
  margin-bottom: 0px;
  font-size: 20pt;
}

.meal-card-description {
  margin-top: 0px;
  font-size: 14pt;
}

.meal-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

/* Pills for calories and price */
.meal-info {
  display: flex;
  justify-content: flex-start; /* Align items to the left */
  gap: 10px; /* Add space between pills */
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

.meal-card button {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
}

.meal-card button:hover {
  background-color: #45a049;
}

/* For screens smaller than desktop (tablets and mobile) */
@media (max-width: 1024px) {
  .meal-card {
    max-width: 300px; /* Smaller max width for tablet and mobile screens */
  }
}
</style>
