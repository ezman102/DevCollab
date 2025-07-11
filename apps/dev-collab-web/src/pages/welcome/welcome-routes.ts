import { defineRoutes } from '@/utils/route/route'

export const createWelcomeRoutes = defineRoutes(() => [
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('./WelcomePage.vue')
  }
])
