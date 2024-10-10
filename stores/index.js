export const state = () => ({
  mealPlan: []
})

export const mutations = {
  ADD_TO_PLAN(state, meal) {
    state.mealPlan.push(meal)
  }
}

export const getters = {
  getMealPlan: (state) => state.mealPlan,
  getTotalPrice: (state) => {
    return state.mealPlan.reduce((total, meal) => total + meal.price, 0)
  }
}
