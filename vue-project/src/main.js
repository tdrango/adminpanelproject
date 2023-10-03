import './assets/main.css';
import './assets/utility.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App)

app.use(
  createAuth0({
    domain: "dev-uu0nxz8l5y6d5hif.us.auth0.com",
    clientId: "ThlUYWXEexc1oFo7gXm5RIDIsvqimM2d",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.use(createPinia())
app.use(Toast)

app.mount('#app')