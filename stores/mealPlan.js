import { defineStore } from 'pinia';

export const useMealPlanStore = defineStore('mealPlan', {
  state: () => ({
    mealPlan: [],
  }),

  getters: {
    totalPrice(state) {
      // Calculate the total price of all meals in the meal plan
      return state.mealPlan.reduce((sum, meal) => sum + (meal.price * (meal.quantity || 1)), 0);
    },
    totalCalories(state) {
      // Calculate the total calories of all meals in the meal plan
      return state.mealPlan.reduce((sum, meal) => sum + (meal.calories * (meal.quantity || 1)), 0);
    },
  },

  
  actions: {
    addMealToPlan(meal) {
      const existingMeal = this.mealPlan.find((m) => m.id === meal.id);
      if (existingMeal) {
        existingMeal.quantity++;
      } else {
        this.mealPlan.push({ ...meal, quantity: 1 });
      }
    },

    removeMealFromPlan(mealId) {
      this.mealPlan = this.mealPlan.filter((meal) => meal.id !== mealId);
    },

    increaseMealQuantity(mealId) {
      const meal = this.mealPlan.find((m) => m.id === mealId);
      if (meal) {
        meal.quantity++;
      }
    },

    decreaseMealQuantity(mealId) {
      const meal = this.mealPlan.find((m) => m.id === mealId);
      if (meal && meal.quantity > 1) {
        meal.quantity--;
      } else if (meal && meal.quantity === 1) {
        this.removeMealFromPlan(mealId);
      }
    },
    clearMealPlan() {
        this.mealPlan = []; // Clear all meals from the plan
      },
    
  }
});
