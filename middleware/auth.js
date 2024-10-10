// middleware/auth.js

export default defineNuxtRouteMiddleware((to, from) => {
    // Check if the code is running in the client/browser environment
    if (process.client) {
      const token = localStorage.getItem('token');
  
      // If no token is found, redirect to the login page
      if (!token) {
        return navigateTo('/login');
      }
    }
  });