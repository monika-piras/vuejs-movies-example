import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MoviesPage from '../views/MoviesPage.vue'
import MovieDetailsPage from '../views/MovieDetailsPage.vue'
import AddFilmPage from '../views/AddFilmPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie',
    name: 'Movie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MoviesPage
    //() => import(/* webpackChunkName: "about" */ '../views/Film.vue')
  },
  {
    path: '/movie/:title',
    name: 'Movie',
    component: MoviesPage
  },
    {
    path: '/movie/categories/:category',
    name: 'Movie',
    component: MoviesPage
  },
  {
    path: '/movieDetails/:id',
    name: 'MovieDetails',
    component: MovieDetailsPage
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