import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FilmsPage from '../views/FilmsPage.vue'
import FilmDetailsPage from '../views/FilmDetailsPage.vue'
import AddFilmPage from '../views/AddFilmPage.vue'

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
    component: FilmsPage
    //() => import(/* webpackChunkName: "about" */ '../views/Film.vue')
  },
  {
    path: '/film/:title',
    name: 'film',
    component: FilmsPage
  },
    {
    path: '/film/categories/:category',
    name: 'film',
    component: FilmsPage
  },
  {
    path: '/filmDetails/:id',
    name: 'filmDetails',
    component: FilmDetailsPage
  },
  {
    path: '/addFilm',
    name: 'addFilm',
    component: AddFilmPage
  }

]

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes
})

export default router