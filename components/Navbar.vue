<template>
  <header>
    <nav class="navbar">
      <div class="navbar-left">
        <!-- Wrap the logo in a NuxtLink to make it clickable -->
        <NuxtLink to="/" class="logo-link">
          <div class="logo">
            <h1>WholesomeEats</h1>
          </div>
        </NuxtLink>
        <ul :class="{ 'nav-links': true, active: menuActive }">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about">About Us</NuxtLink>
          </li>
          <template v-if="isLoggedIn">
            <li>
              <NuxtLink to="/customize">My Meal Plan</NuxtLink>
            </li>
          </template>
        </ul>
      </div>
      <div class="nav-buttons">
        <!-- Conditional rendering of Login/Logout button -->
        <template v-if="isLoggedIn">
          <button @click="logout">Logout</button>
        </template>
        <template v-else>
          <NuxtLink to="/login">
            <button>Login</button>
          </NuxtLink>
        </template>
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
import { ref, onMounted } from "vue";

const menuActive = ref(false);
const isLoggedIn = ref(false); // State to track whether the user is logged in

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

// Check if the user is logged in by checking for a token in localStorage
const checkLoginStatus = () => {
  const token = localStorage.getItem("token");
  isLoggedIn.value = !!token; // Set isLoggedIn to true if token exists
};

// Function to handle logout
const logout = () => {
  localStorage.removeItem("token"); // Remove the token
  isLoggedIn.value = false; // Set logged-in state to false
  window.location.href = "/"; // Redirect to home page
};

// Check login status when the component is mounted
onMounted(() => {
  checkLoginStatus();
});
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
  color: white;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-left {
  display: flex;
  align-items: center;
}

/* Remove default link styles from NuxtLink */
.logo-link {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the current text color */
}

/* Logo Styles */
.logo h1 {
  font-size: 26px;
  margin-right: 2rem;
  color: #4caf50; /* Logo color */
  font-weight: bold;
  transition: color 0.3s ease;
}

.logo h1:hover {
  color: #45a049;
}

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
  color: #4caf50;
}

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

.nav-buttons {
  display: flex;
  gap: 1.5rem;
}

.nav-buttons button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-buttons button:hover {
  background-color: #45a049;
}

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

.hamburger:hover .bar {
  background-color: #4caf50;
}

@media (max-width: 1024px) {
  .navbar {
    padding: 1rem;
  }
}
</style>
