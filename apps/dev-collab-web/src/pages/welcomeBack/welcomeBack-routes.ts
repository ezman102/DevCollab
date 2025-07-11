import { defineRoutes } from '@/utils/route/route'

export const createWelcomebackRoutes = defineRoutes(() => [
  {
    path: '/welcomeBack',
    name: 'welcomeBack',
    component: () => import('./WelcomeBack.vue')
  }
])
