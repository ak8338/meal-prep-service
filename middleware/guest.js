export default defineNuxtRouteMiddleware((to, from) => {
    // Ensure the middleware only runs on the client-side
    if (process.client) {
      const token = localStorage.getItem('token'); // Check if the user is logged in
  
      if (token) {
        // Redirect to the home page if the user is logged in
        return navigateTo('/');
      }
    }
  });
  