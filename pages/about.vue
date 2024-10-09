<template>
    <div class="about-page">
      <!-- Include Navbar -->
      <Navbar />
  
      <!-- Hero Section -->
      <section class="hero-section">
        <img src="/images/hero-image.jpg" alt="Healthy Meals Delivered" class="hero-image" />
        <div class="hero-text">
          <h1>Welcome to WholesomeEats</h1>
          <p>Bringing fresh, healthy meals to your doorstep.</p>
        </div>
      </section>
  
      <!-- About Section -->
      <section class="about-section fade-in">
        <h2>Our Story</h2>
        <div class="about-content">
          <div class="text">
            <p>
              At <span class="brand-name">WholesomeEats</span>, we're passionate about making healthy eating simple, convenient, and enjoyable for everyone. 
              Our journey began in 2024 with a mission to bring nutritious, flavorful meals to busy people who care about their health. 
              Today, we’re proud to deliver fresh, wholesome meals to homes across the country.
            </p>
          </div>
          <img src="/images/our-story.jpg" alt="Our Story" class="about-image image-fade-in" />
        </div>
      </section>
  
      <!-- Mission Section -->
      <section class="mission-section fade-in">
        <div class="mission-content">
          <img src="/images/mission.jpg" alt="Our Mission" class="mission-image image-fade-in" />
          <div class="text">
            <h2>Our Mission</h2>
            <p>
              We believe that great nutrition should be accessible to all. Our meal service is designed to bring fresh, wholesome meals straight to your door, 
              helping you live a healthier and happier life.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '~/components/Navbar.vue' // Point to the correct Navbar component
  </script>
  
  <style scoped>
  /* About Page Styles */
  .about-page {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    padding: 0;
  }
  
  /* Hero Section */
  .hero-section {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
  
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
  }
  
  .hero-text h1 {
    font-size: 3rem;
    font-weight: bold;
    animation: fadeIn 2s ease-in-out;
  }
  
  .hero-text p {
    font-size: 1.5rem;
    margin-top: 10px;
    animation: fadeIn 2.5s ease-in-out;
  }
  
  /* About Section */
  .about-section {
    padding: 50px 20px;
    text-align: center;
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .about-content .text {
    max-width: 600px;
    text-align: left;
  }
  
  .about-content h2 {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 20px;
  }
  
  .about-content p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #555;
  }
  
  .about-image {
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .about-image:hover {
    transform: scale(1.05); /* Hover animation for images */
  }
  
  /* Mission Section */
  .mission-section {
    padding: 50px 20px;
    background-color: #f0f4f8;
    text-align: center;
  }
  
  .mission-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .mission-content h2 {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 20px;
  }
  
  .mission-content .text {
    max-width: 600px;
    text-align: left;
  }
  
  .mission-content p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
  }
  
  .mission-image {
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .mission-image:hover {
    transform: scale(1.05); /* Hover animation for images */
  }
  
  /* Footer */
  .footer {
    text-align: center;
    margin-top: 50px;
    padding: 1rem;
    background-color: #333;
    color: white;
  }
  
  /* Animations */
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
  
  /* Fade-in effect for sections */
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInSection 1s forwards;
    animation-delay: 0.5s;
  }
  
  @keyframes fadeInSection {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .image-fade-in {
    opacity: 0;
    animation: fadeInSection 1.2s forwards;
    animation-delay: 0.6s;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .about-section,
    .mission-section {
      padding: 20px;
    }
  
    .hero-text h1 {
      font-size: 2.5rem;
    }
  
    .hero-text p {
      font-size: 1.2rem;
    }
  
    .about-content .text,
    .mission-content .text {
      text-align: center;
    }
  }
  </style>
  