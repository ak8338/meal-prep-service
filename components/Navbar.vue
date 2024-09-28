<template>
    <header>
      <nav class="navbar">
        <div class="navbar-left">
          <div class="logo">
            <h1>Meal Prep Service</h1>
          </div>
          <ul :class="{ 'nav-links': true, 'active': menuActive }" style="padding-left: 0;">
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
    padding: 1rem;
    color: white;
    position: relative;
  }
  
  /* Align the logo and menu items to the left */
  .navbar-left {
    display: flex;
    align-items: center;
  }
  
  /* Logo Styles */
  .logo h1 {
    font-size: 24px;
    margin-right: 2rem; /* Add some space between the logo and the menu */
  }
  
  /* Align the nav links to the left within the navbar-left section */
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }
  
  /* Links styling */
  .nav-links li {
    font-size: 18px;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
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
  }
  
  /* Buttons for Login and My Cart */
  .nav-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .nav-buttons button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 16px;
  }
  
  .nav-buttons button:hover {
    background-color: #45a049;
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
  </style>

