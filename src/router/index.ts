import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { layout: 'private' },
      component: () => import('../views/dashboard.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'public' },
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'resgister',
      meta: { layout: 'public' },
      component: () => import('../views/register.vue')
    },
  ]
})

export default router
