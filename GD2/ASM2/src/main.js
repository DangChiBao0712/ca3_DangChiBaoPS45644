// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. IMPORT PINIA
import { createPinia } from 'pinia'

// 2. IMPORT BOOTSTRAP CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min' 

const app = createApp(App)

// 3. SỬ DỤNG PINIA TRƯỚC ROUTER
app.use(createPinia())

app.use(router)
// import './assets/main.css' // Giữ lại hoặc xóa tùy thuộc vào nhu cầu của bạn

app.mount('#app')