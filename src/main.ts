import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import InlineSvg from 'vue-inline-svg';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import './assets/css/_index.scss'
import './validations/validators'

const app = createApp(App)


library.add(fas)

app.use(createPinia())
app.use(router)
app.use(Toast)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component('inline-svg', InlineSvg);

app.mount('#app')
