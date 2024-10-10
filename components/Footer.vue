<template>
  <footer class="footer">
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About Us</NuxtLink></li>
      <li><NuxtLink to="/customize">Meal Plans</NuxtLink></li>
      <li><NuxtLink to="/register">Register</NuxtLink></li>
    </ul>
    <p>&copy; 2024 WholesomeEats. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

.footer ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer a {
  color: white;
  text-decoration: none;
}

.footer p {
  margin-top: 1rem;
}
</style>
