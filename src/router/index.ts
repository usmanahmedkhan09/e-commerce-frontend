import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/products',
      name: 'products',
      meta: { layout: 'private' },
      children: [
        {
          path: '/products/products-list',
          component: () => import('../views/products/products-list.vue'),
          meta: { layout: 'private' },
        },
        {
          path: '/products/add-products',
          component: () => import('../views/products/add-product.vue'),
          meta: { layout: 'private' },
        }
      ]
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
