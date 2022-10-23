import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Loja',
    name: 'Loja',
   
    component: () => import( '../views/Loja.vue')
  }
  ,
  {
    path: '/login',
    name: 'login',
   
    component: () => import( '../views/login.vue')
  }
  ,
  {
    path: '/register',
    name: 'Register',
   
    component: () => import( '../views/Register.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
