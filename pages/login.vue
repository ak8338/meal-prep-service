<template>
  <div>
    <Navbar />

    <div class="login-container">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="loginUser">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="text" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>

      <!-- Display error message if login fails -->
      <p v-if="loginError" class="error-message">{{ loginError }}</p>

      <!-- Link to register page -->
      <p class="register-link">
        Don't have an account? 
        <a href="/register">Register here</a>
      </p>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router'; // Import useRouter for redirection
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

definePageMeta({
  middleware: 'guest', // Apply guest middleware
});

const email = ref("");
const password = ref("");
const loginError = ref(""); // To store the error message
const router = useRouter(); // Use router for redirection

const loginUser = async () => {
  loginError.value = ""; // Clear any previous errors
  try {
    const response = await axios.post("/api/login", {
      email: email.value,
      password: password.value,
    });

    if (response.data.token) { // Only store the token if it's present
      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token); // Store the token in localStorage
      router.push("/"); // Redirect after successful login
    } else {
      loginError.value = "Login failed. Please try again.";
    }
  } catch (error) {
    // Handle error messages
    loginError.value = error.response?.data?.error || "Login failed. Please try again."; 
    console.error("Login failed:", error.response?.data || error.message);
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.login-container {
  animation: fadeIn 0.8s ease-out;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-title {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  text-align: left;
}

.form-group input {
  width: 100%;
  padding: 0;
  height: 40px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  transition: background-color 0.3s, transform 0.2s;
}
.login-button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.error-message {
  color: red;
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>