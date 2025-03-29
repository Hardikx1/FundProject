import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify.js' // Import Vuetify from plugins
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // If using icons

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify) // Use Vuetify

app.mount('#app')
