import { createRouter, createWebHistory } from 'vue-router'
import Game from '../views/Game'
import Home from '../views/Home'
import ChallengeList from '../views/ChallengeList'

const routes = [
  {
    path: '/game/:id',
    name: 'Game',
    component: Game
  },
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/challengelist/:id',
    name: 'ChallengeList',
    component: ChallengeList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
