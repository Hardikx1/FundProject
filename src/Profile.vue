<template>
  <div>
    <h2>Profile</h2>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <h3>My Investments</h3>
    <div v-if="investments.length === 0">No investments yet.</div>
    <div v-else>
      <div v-for="investment in investments" :key="investment.id">
        <p>Business: {{ investment.businessName }}</p>
        <p>Amount: ${{ investment.amount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['user', 'investments']),
  },
  mounted() {
    this.fetchInvestments();
  },
  methods: {
    ...mapActions(['fetchInvestments']),
  },
};
</script>
