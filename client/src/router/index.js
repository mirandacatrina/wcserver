import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import News from '../views/News.vue'
import Members from '../views/Members.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/news',
    name: 'News',
    component: News
  },
  
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/signup',
    name: 'Signup',
    component:Signup
  },

  

  {
    path: '/members',
    name: 'Members',
    component:Members
  },

  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
