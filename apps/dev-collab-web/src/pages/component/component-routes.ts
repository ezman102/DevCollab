import { defineRoutes } from '@/utils/route/route'

export const createComponentRoutes = defineRoutes(() => [
  {
    path: '/component',
    name: 'component',
    component: () => import('./ComponentPage.vue')
  }
])
