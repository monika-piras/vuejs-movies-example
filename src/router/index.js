import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Film from '../views/Film.vue'
import FilmDetails from '../views/FilmDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/film',
    name: 'Film',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Film
    //() => import(/* webpackChunkName: "about" */ '../views/Film.vue')
  },
  {
    path: '/filmDetails/:id',
    name: 'filmDetails',
    component: FilmDetails
  }
]

const router = new VueRouter({
  linkExactActiveClass: "active",
  
  routes
})

export default router