import { defineRoutes } from '@/utils/route/route'

export const createSignupRoutes = defineRoutes(() => [
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('./SignupPage.vue')
  }
])
