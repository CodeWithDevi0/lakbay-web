import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/' // <-- 1. You were missing this import!

const app = createApp(App)

app.use(router) // <-- 2. You were missing this command!
app.mount('#app')