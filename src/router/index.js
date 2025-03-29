import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Home.vue';  // Updated to point to the new Home.vue
import Welcome from '../Welcome.vue';
import Businesses from '../Businesses.vue';
import Register from '../Register.vue';
import Login from '../Login.vue';
import Profile from '../Profile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/welcome', component: Welcome },
  { path: '/businesses', component: Businesses },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
