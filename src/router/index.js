import App from '@/App.vue'
import search from '@/componets/search.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/",
    name: "home",
    component: App,
    },
    {
    path: "/Search",
    name: "Search",
    component: search,
    },
  ],
})

export default router
