import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game'
import ChallengeList from '../views/ChallengeList'
import Lobby from '../views/Lobby'
import AddGame from '../views/AddGame'

const routes = [
  {
    path: '/game/:id',
    name: 'Game',
    component: Game
  },  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/challengelist/:id',
    name: 'ChallengeList',
    component: ChallengeList
  },
  {
    path: '/lobby/:id',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/addgame',
    name: 'AddGame',
    component: AddGame
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
