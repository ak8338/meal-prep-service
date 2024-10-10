<template>
    <div class="notification-banner" v-if="show">
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    show: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      default: "Notification"
    },
    type: {
      type: String,
      default: "success" // Can be used for different types of notifications (e.g., 'error', 'info')
    }
  });
  </script>
  
  <style scoped>
  .notification-banner {
    position: fixed;
    top: 120px; /* Adjust this value if your Navbar height changes */
    left: 0;
    width: 100%;
    background-color: #4caf50; /* Default success color */
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 1.2rem;
    z-index: 999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: slideDown 0.5s forwards;
  }
  
  /* Error type */
  .notification-banner[data-type="error"] {
    background-color: #f44336; /* Red for error notifications */
  }
  
  /* Info type */
  .notification-banner[data-type="info"] {
    background-color: #2196f3; /* Blue for informational notifications */
  }
  
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  </style>
  