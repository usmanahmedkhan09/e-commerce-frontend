import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import InlineSvg from 'vue-inline-svg';

import './assets/css/_index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('inline-svg', InlineSvg);

app.mount('#app')
