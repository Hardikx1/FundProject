<template>
  <div class="home-container">
    <div class="hero">
      <h1>Ignite Local Dreams</h1>
      <p>Fuel community growth through impactful investments.</p>
      <button class="cta-button">Discover Ventures</button>
    </div>
    <div class="features">
      <div class="feature-item">
        <i class="fas fa-hand-holding-usd"></i>
        <h3>Empower Growth</h3>
        <p>Directly support local businesses and watch them flourish.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-chart-line"></i>
        <h3>Share Success</h3>
        <p>Earn rewards by investing in promising community projects.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-lightbulb"></i>
        <h3>Transparent Insights</h3>
        <p>Track your investments and see real-time progress of ventures.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
}

.hero {
  background: linear-gradient(to right, #ff9a9e, #fad0c4); /* Soft, vibrant hero */
  color: #333;
  padding: 4rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1.2rem;
  color: #2c3e50;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: #555;
}

.cta-button {
  background: linear-gradient(to right, #6a11cb, #2575fc); /* Dynamic button gradient */
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 3rem;
}

.feature-item {
  width: 320px;
  padding: 2.5rem;
  border-radius: 12px;
  margin: 1.5rem;
  background: white;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
}

.feature-item i {
  font-size: 2.5rem;
  color: #6a11cb;
  margin-bottom: 1.5rem;
}

.feature-item h3 {
  color: #333;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.feature-item p {
  line-height: 1.7;
  color: #555;
}
</style>
