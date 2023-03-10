import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      meta: { layout: 'public' },
      component: () => import('../views/login.vue')
    },
  ]
})

export default router
