import './assets/main.css'

import App from './App.vue'
import {createApp} from "vue";
import {createPinia} from "pinia"
import { createRouter, createWebHashHistory   } from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import Link2 from "@/components/Link2.vue";
import About from "@/components/About.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/about", component: About},
    { path: "/link2", component: Link2 },
    { path: "/link3", component: {}},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
