import App from '@/App.vue'
import Search from '@/componets/Search.vue'
import search from '@/componets/Search.vue'
import Description from '@/componets/Description.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue' //main page
import CartPage from '@/views/CartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/",
    name: "/home",
    component: HomePage,
    },
      
    {
    path: "/CartPage", //shopping cart
    name: "Cart",
    component: CartPage,
    },
      
    {
    path: "/Search",
    name: "Search",
    component: search,
    },
    {
    path: "/desc/:workID",
    name: "desc",
    component: Description,
    },
  ],
})

export default router
