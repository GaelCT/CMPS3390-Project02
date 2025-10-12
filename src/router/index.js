import App from '@/App.vue'
import Search from '@/componets/Search.vue'
import search from '@/componets/Search.vue'
import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/home",
    name: "home",
    component: HomePage,
    },
      /*
    {
    path: "/search", //shopping cart
    name: "home2",
    component: App,
    },
      */
    {
    path: "/Search",
    name: "Search",
    component: () => import('@/componets/Search.vue'),
    },
  ],
})

export default router
