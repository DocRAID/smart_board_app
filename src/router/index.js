import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import('../views/About.vue')
  },
  {
    path: '/meal',
    name: 'Meal',
    
    component: () => import('../views/Meal.vue')
  },
  {
    path: '/teach',
    name: 'Teach',
    
    component: () => import('../views/Teach.vue')
  },
  {
    path: '/team-work',
    name: 'Team-work',
    
    component: () => import('../views/Team.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
