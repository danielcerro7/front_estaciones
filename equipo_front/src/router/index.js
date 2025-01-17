import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/vista1.vue'

const routes = [
  {
    path: '/',
    name: 'vista1',
    component: HomeView
  },
  {
    path: '/vista2',
    name: 'vista2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vista2.vue')
  },
  {
    path: '/vista3',
    name: 'vita3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vista3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
