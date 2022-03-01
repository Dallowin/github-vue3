import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

import Home from "./views/Home.vue"
import Repos from "./views/Repos.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/repos/:user',
        name: 'Repos',
        component: Repos,
        props: true
    }
  ],
})

export default router