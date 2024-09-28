export default defineNuxtPlugin(() => {
    return {
      provide: {
        currency(value) {
          return `$${parseFloat(value).toFixed(2)}`
        }
      }
    }
  })
  