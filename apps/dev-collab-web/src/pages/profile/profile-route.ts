import { defineRoutes } from '@/utils/route/route'

export const createProfileRoutes = defineRoutes(() => [
  {
    path: '/profile',
    name: 'profile',
    component: () => import('./ProfilePage.vue')
  }
])
