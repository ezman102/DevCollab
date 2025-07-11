import { defineRoutes } from '@/utils/route/route'

export const createLogoutRoutes = defineRoutes(() => [
  {
    path: '/logout',
    name: 'logout',
    component: () => import('./LogoutPage.vue')
  }
])
