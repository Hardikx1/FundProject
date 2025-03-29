<template>
  <div>
    <h2>Businesses</h2>
    <div v-if="businesses.length === 0">Loading businesses...</div>
    <div v-else>
      <div v-for="business in businesses" :key="business.id">
        <h3>{{ business.name }}</h3>
        <p>{{ business.description }}</p>
        <p>Target Investment: ${{ business.targetInvestment }}</p>
        <p>Current Investment: ${{ business.currentInvestment }}</p>
        <button v-if="isAuthenticated" @click="invest(business.id)">Invest</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['businesses', 'isAuthenticated']),
  },
  mounted() {
    this.fetchBusinesses();
  },
  methods: {
    ...mapActions(['fetchBusinesses', 'invest']),
  },
};
</script>
