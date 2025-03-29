<template>
  <div id="app">
    <header>
      <div class="header-container">
        <h1 class="logo">CrowdFund</h1>
        <nav>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/businesses" class="nav-link">Businesses</router-link>
          <router-link v-if="!isAuthenticated" to="/register" class="nav-link">Register</router-link>
          <router-link v-if="!isAuthenticated" to="/login" class="nav-link">Login</router-link>
          <router-link v-if="isAuthenticated" to="/profile" class="nav-link">Profile</router-link>
          <button v-if="isAuthenticated" @click="logout" class="logout-button">Logout</button>
        </nav>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p class="footer-text">&copy; 2024 CrowdFund</p>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['isAuthenticated']),
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style scoped>
/* More Colorful and Attractive Styling */
#app {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0c2ff, #c2e0ff); /* Light, vibrant background */
}

header {
  background: linear-gradient(135deg, #ff6e7f, #bfe9ff); /* Warm, inviting header */
  color: white;
  padding: 1.5rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

nav {
  display: flex;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-weight: 600;
  transition: color 0.3s ease;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
}

.nav-link:hover, .nav-link.router-link-active {
  color: #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
}

.logout-button {
  background-color: #ff4d4d; /* Bright red button */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.logout-button:hover {
  background-color: #e60000;
}

main {
  flex: 1;
  padding: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
}

.footer-text {
  font-size: 1rem;
}
</style>
