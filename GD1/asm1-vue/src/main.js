import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from './router'   // <-- nạp router

const app = createApp(App)

app.use(router)   // <-- đăng ký router

app.mount('#app') // <-- mount 1 lần DUY NHẤT
