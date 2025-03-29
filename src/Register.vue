<template>
  <v-container fluid>
    <v-row justify="center" align="center" style="min-height: 100vh; background-color: #1e1e2f;">
      <v-col cols="12" md="6" lg="4">
        <v-card class="card">
          <v-card-title>
            <span class="title">Create an Account</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register">
              <div class="field">
                <v-text-field
                  label="Username"
                  v-model="user.username"
                  outlined
                  dense
                  color="primary"
                  required
                ></v-text-field>
              </div>
              <div class="field">
                <v-text-field
                  label="Email"
                  v-model="user.email"
                  type="email"
                  outlined
                  dense
                  color="primary"
                  required
                ></v-text-field>
              </div>
              <div class="field">
                <v-text-field
                  label="Password"
                  v-model="user.password"
                  type="password"
                  outlined
                  dense
                  color="primary"
                  required
                ></v-text-field>
              </div>
              <v-btn type="submit" class="btn" block color="primary" dark>Register</v-btn>
              <v-divider class="my-4"></v-divider>
              <v-row>
                <v-col class="text-center">
                  <v-btn text class="btn-link" @click="goToLogin">Already have an account? Log in</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['register']),
    goToLogin() {
      // Redirect to the login page
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Background for the entire page */
.v-row {
  background-color: #1e1e2f;
}

/* Card styling */
.card {
  max-width: 400px;
  padding: 2rem 1.5rem;
  text-align: center;
  background: #2a2b38;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Field spacing */
.field {
  margin-top: 1.5rem;
}

/* Title styling */
.title {
  margin-bottom: 1.5rem;
  font-size: 1.8em;
  font-weight: 600;
  color: #ffffff;
}

/* Button styling */
.btn {
  margin-top: 1.5rem;
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase;
  padding: 0.8em 1.5em;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

/* Link button styling */
.btn-link {
  color: #ffffff;
  font-size: 0.85em;
  transition: color 0.3s ease-out;
}

.btn-link:hover {
  color: #ffeba7;
}

/* Divider styling */
.v-divider {
  background-color: #444;
}
</style>
