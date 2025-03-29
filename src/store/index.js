import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    isAuthenticated: !!localStorage.getItem('token'),
    user: null,
    businesses: [],
    investments: [],
    loading: false,
    errorMessage: null,
  },
  mutations: {
    SET_AUTH(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_BUSINESSES(state, businesses) {
      state.businesses = businesses;
    },
    SET_INVESTMENTS(state, investments) {
      state.investments = investments;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, errorMessage) {
      state.errorMessage = errorMessage;
    },
  },
  actions: {
    async register({ commit }, user) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null); // Reset error message
      try {
        const response = await axios.post('/api/register', user);
        // Handle response
      } catch (error) {
        commit('SET_ERROR', 'Registration failed. Please try again.');
        console.error('Registration failed', error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async login({ commit }, credentials) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null); // Reset error message
      try {
        const response = await axios.post('/api/login', credentials);
        const token = response.data.token;
        localStorage.setItem('token', token);
        commit('SET_AUTH', true);
        commit('SET_USER', response.data.user);
        // Handle response
      } catch (error) {
        commit('SET_ERROR', 'Login failed. Please check your credentials.');
        console.error('Login failed', error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('SET_AUTH', false);
      commit('SET_USER', null);
    },
    async fetchBusinesses({ commit }) {
      try {
        const response = await axios.get('/api/businesses');
        commit('SET_BUSINESSES', response.data);
      } catch (error) {
        console.error('Failed to fetch businesses', error);
      }
    },
    async invest({ commit }, businessId) {
      try {
        const response = await axios.post(`/api/invest/${businessId}`);
        // Handle response
      } catch (error) {
        console.error('Investment failed', error);
      }
    },
    async fetchInvestments({ commit }) {
      try {
        const response = await axios.get('/api/investments');
        commit('SET_INVESTMENTS', response.data);
      } catch (error) {
        console.error('Failed to fetch investments', error);
      }
    },
  },
});

export default store;