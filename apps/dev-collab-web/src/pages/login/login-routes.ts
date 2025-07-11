import { defineRoutes } from '@/utils/route/route'

export const createLoginRoutes = defineRoutes(() => [
  {
    path: '/login',
    name: 'login',
    component: () => import('./LoginPage.vue')
  }
])
