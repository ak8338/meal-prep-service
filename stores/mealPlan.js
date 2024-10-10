// stores/mealPlan.js
import { defineStore } from 'pinia';

export const useMealPlanStore = defineStore('mealPlan', {
  state: () => ({
    mealPlan: [],
  }),
  actions: {
    addMealToPlan(meal) {
      this.mealPlan.push(meal);
    },
    removeMealFromPlan(mealId) {
      this.mealPlan = this.mealPlan.filter((meal) => meal.id !== mealId);
    },
  },
  getters: {
    totalPrice: (state) => {
      return state.mealPlan.reduce((sum, meal) => sum + meal.price, 0);
    },
  },
});
