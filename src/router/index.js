import App from '@/App.vue'
import Search from '@/componets/Search.vue'
import search from '@/componets/Search.vue'
import Description from '@/componets/Description.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue' //main page
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/",
    name: "/home",
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
    component: search,
    },
    {
    path: "/desc/:workID",
    name: "desc",
    component: Description,
    props: true,
    },
  ],
})

export default router
