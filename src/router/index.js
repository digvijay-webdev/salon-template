import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import ServicesView from "../views/ServicesView.vue"
import ContactView from "../views/ContactView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
