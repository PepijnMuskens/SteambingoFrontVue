import { createRouter, createWebHistory } from 'vue-router'
import Game from '../views/Game'
import Home from '../views/Home'
const routes = [
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
