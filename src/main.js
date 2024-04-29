import './assets/main.css'

import App from './App.vue'
import {createApp} from "vue";
import {createPinia} from "pinia"
import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from "@/components/HomePage.vue";

const routes = [
    { path: '/', component: HomePage }
]
const router = createRouter({
    history: createMemoryHistory(),
    routes
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
