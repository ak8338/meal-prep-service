<template>
  <header>
    <nav class="navbar">
      <div class="navbar-left">
        <div class="logo">
          <h1>WholesomeEats</h1>
        </div>
        <ul :class="{ 'nav-links': true, 'active': menuActive }">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/customize">Meal Plans</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="nav-buttons">
        <button @click="login">Login</button>
        <NuxtLink to="/checkout">
          <button>My Cart</button>
        </NuxtLink>
      </div>
      <button class="hamburger" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuActive = ref(false)

const toggleMenu = () => {
  menuActive.value = !menuActive.value
}

const login = () => {
  // Handle login logic here
}
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem; /* Add padding for more space */
  color: white;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
  z-index: 1000;
}

/* Align the logo and menu items to the left */
.navbar-left {
  display: flex;
  align-items: center;
}

/* Logo Styles */
.logo h1 {
  font-size: 26px;
  margin-right: 2rem;
  color: #4CAF50; /* Match the button color for brand consistency */
  font-weight: bold;
  transition: color 0.3s ease;
}

.logo h1:hover {
  color: #45a049;
}

/* Align the nav links to the left within the navbar-left section */
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links li {
  font-size: 18px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #4CAF50;
}

/* Hamburger menu button (hidden by default, shown on small screens) */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: white;
  transition: transform 0.3s ease;
}

/* Buttons for Login and My Cart */
.nav-buttons {
  display: flex;
  gap: 1.5rem; /* Add more space between the buttons */
}

.nav-buttons button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1.25rem; /* Adjust padding for a balanced look */
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-buttons button:hover {
  background-color: #45a049;
  transform: scale(1.05); /* Slight scale effect on hover */
}

.nav-buttons button:focus {
  outline: none;
}

/* Responsive behavior: For screens smaller than 768px */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    display: none;
    gap: 1rem;
    padding: 1rem 0;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger {
    display: flex;
  }

  .nav-buttons {
    display: none;
  }
}

/* Additional styling for hover effect on hamburger */
.hamburger:hover .bar {
  background-color: #4CAF50;
}

@media (max-width: 1024px) {
  .navbar {
    padding: 1rem; /* Reduce padding on smaller screens */
  }
}
</style>
