import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import InlineSvg from 'vue-inline-svg';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import './assets/css/_index.scss'
import './validations/validators'

const app = createApp(App)

// const options = {
//     position: 'top-right'
// };

app.use(createPinia())
app.use(router)
app.use(Toast)
app.component('inline-svg', InlineSvg);

app.mount('#app')
