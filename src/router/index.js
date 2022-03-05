import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Shop from "../views/Shop";
import Contact from "../views/Contact";
import Checkout from "../views/Checkout";
import Compra from "../views/Compra";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/compra',
    name: 'Compra',
    component: Compra
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
