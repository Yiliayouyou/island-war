import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import LevelMap from '@/components/LevelMap'
import Settings from '@/components/Settings'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/levelmap',
      name: 'LevelMap',
      component: LevelMap
    },
    {
      path: 'settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: 'game',
      name: 'Game',
      component: Game
    }
  ]
})
