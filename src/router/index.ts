import { createRouter, createWebHistory, } from 'vue-router'
import routerGuard from './router-guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      meta: { layout: 'public', requireAuth: false },
      component: () => import('../views/dashboard.vue')
    },
    {
      path: '/products',
      name: 'products',
      meta: { layout: 'private', requireAuth: true },
      children: [
        {
          path: '/products/products-list',
          component: () => import('../views/products/products-list.vue'),
          meta: { layout: 'private', requireAuth: true },
        },
        {
          path: '/products/add-products',
          component: () => import('../views/products/add-product.vue'),
          meta: { layout: 'private', requireAuth: true },
        },
        {
          path: '/products/edit-products/:id',
          component: () => import('../views/products/add-product.vue'),
          meta: { layout: 'private', requireAuth: true },
        }
      ]
    },
    {
      path: '/categories',
      name: 'categories',
      meta: { layout: 'private', requireAuth: true },
      children: [
        {
          path: '/categories/categories-list',
          component: () => import('../views/categories/category-list.vue'),
          meta: { layout: 'private', requireAuth: true },
        },
        {
          path: '/categories/add-categories',
          component: () => import('../views/categories/add-category.vue'),
          meta: { layout: 'private', requireAuth: true },
        }
      ]
    },
    {
      path: '/brands',
      name: 'brands',
      meta: { layout: 'private', requireAuth: true },
      children: [
        {
          path: '/brands/brands-list',
          component: () => import('../views/brands/brand-list.vue'),
          meta: { layout: 'private', requireAuth: true },
        },
        {
          path: '/brands/add-brands',
          component: () => import('../views/brands/add-brand.vue'),
          meta: { layout: 'private', requireAuth: true },
        }
      ]
    },
    {
      path: '/series',
      name: 'series',
      meta: { layout: 'private', requireAuth: true },
      children: [
        {
          path: '/series/series-list',
          component: () => import('../views/series/series-list.vue'),
          meta: { layout: 'private', requireAuth: true },
        },
        {
          path: '/series/add-series',
          component: () => import('../views/series/add-series.vue'),
          meta: { layout: 'private', requireAuth: true },
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
      meta: { layout: 'public', },
      component: () => import('../views/register.vue')
    },

  ]
})

routerGuard(router)

export default router
