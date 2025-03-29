<template>
  <v-container fluid>
    <v-row justify="center" align="center" style="min-height: 100vh; background: linear-gradient(to right, #ff9a9e, #fad0c4);">
      <v-col cols="12" md="6" lg="4">
        <v-card class="card">
          <v-card-title>
            <span class="title">Log into your account</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                required
                v-model="email"
                type="email"
                outlined
                dense
                color="primary"
                class="field"
              ></v-text-field>
              <v-text-field
                label="Password"
                required
                v-model="password"
                type="password"
                outlined
                dense
                color="primary"
                class="field"
              ></v-text-field>
              <v-checkbox
                v-model="rememberMe"
                label="Remember me"
                class="field"
                color="primary"
              ></v-checkbox>
              <v-btn @click="login" class="btn" block color="primary" dark>Log In</v-btn>
              <v-divider class="my-4"></v-divider>
              <v-row>
                <v-col>
                  <v-btn text class="btn-link">Forgot password?</v-btn>
                </v-col>
                <v-col class="text-right">
                  <v-btn text class="btn-link">Don't have an account? Sign up</v-btn>
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
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        alert('Please fill in both email and password.');
        return;
      }
      try {
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });
        if (response.data.success) {
          this.$router.push('/home');
        } else {
          alert(response.data.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred while logging in. Please try again later.');
      }
    },
  },
};
</script>

<style scoped>
/* Background for the entire page */
.v-row {
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
}

/* Card styling */
.card {
  max-width: 600px; /* Increased width for desktop */
  padding: 2rem;
  text-align: center;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Field spacing */
.field {
  margin-top: 1.2rem;
}

/* Title styling */
.title {
  margin-bottom: 1.5rem;
  font-size: 1.5em;
  font-weight: 600;
  color: #2c3e50;
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
  color: #6a11cb;
  font-size: 0.85em;
  transition: color 0.3s ease-out;
}

.btn-link:hover {
  color: #2575fc;
}

/* Divider styling */
.v-divider {
  background-color: #ddd;
}

/* Media Queries for Desktop */
@media (min-width: 1024px) {
  .card {
    padding: 3rem; /* More padding for larger screens */
  }
  .title {
    font-size: 2em; /* Larger title font size */
  }
}
</style>