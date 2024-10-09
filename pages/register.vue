<template>
    <div class="page-container" >

        <div class="register-container">
          <h1>Register</h1>
          <form @submit.prevent="register">
            <div class="input-field">
              <label for="username">Username</label>
              <input type="text" id="username" v-model="username" required />
            </div>
            <div class="input-field">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="email" required />
            </div>
            <div class="input-field">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
    </div>
</template>
<style scoped>
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
h1{
    margin-top: 0;
}
.page-container {
  position: relative;
  height: 100vh;
  background-image: url('/Users/annakozlova/Desktop/meal-prep-service/public/images/register-background1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.page-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3); /* Adjust the opacity as needed */
  pointer-events: none; /* This ensures that the overlay does not interfere with interactions */
}
.register-container {

  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  width: 100%; /* You can adjust this depending on your design */
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8); /* Optional: Adds a white semi-transparent overlay */
}

.input-field {
  margin-bottom: 20px;
}

input[type="text"], input[type="email"], input[type="password"] {
  width: 100%;
  height: 35px;
  display: block;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(
          "http://localhost:8000/users/registration/",
          {
            username: this.username,
            email: this.email,
            password: this.password,
          }
        );
        console.log("Registration successful:", response.data);
        // Redirect or update UI upon successful registration
        this.$router.push("/login");
      } catch (error) {
        console.error("An error occurred:", error.response.data);
      }
    },
  },
};
</script>
