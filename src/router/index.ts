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
      path: '/categories',
      name: 'categories',
      meta: { layout: 'private' },
      children: [
        {
          path: '/categories/categories-list',
          component: () => import('../views/categories/category-list.vue'),
          meta: { layout: 'private' },
        },
        {
          path: '/categories/add-categories',
          component: () => import('../views/categories/add-category.vue'),
          meta: { layout: 'private' },
        }
      ]
    },
    {
      path: '/brands',
      name: 'brands',
      meta: { layout: 'private' },
      children: [
        {
          path: '/brands/brands-list',
          component: () => import('../views/brands/brand-list.vue'),
          meta: { layout: 'private' },
        },
        {
          path: '/brands/add-brands',
          component: () => import('../views/brands/add-brand.vue'),
          meta: { layout: 'private' },
        }
      ]
    },
    {
      path: '/series',
      name: 'series',
      meta: { layout: 'private' },
      children: [
        {
          path: '/series/series-list',
          component: () => import('../views/series/series-list.vue'),
          meta: { layout: 'private' },
        },
        {
          path: '/series/add-series',
          component: () => import('../views/series/add-series.vue'),
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
