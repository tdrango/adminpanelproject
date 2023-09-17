import './assets/main.css';
import './assets/utility.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";

const app = createApp(App)

// const ToastOptions = {
//     message: 'Message',

// }

app.use(createPinia())
app.use(Toast)

app.mount('#app')
