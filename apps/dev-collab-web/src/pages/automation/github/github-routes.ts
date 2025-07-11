import { defineRoutes } from '@/utils/route/route'

export const creategithubRoutes = defineRoutes(() => [
  {
    path: '/automation/github',
    name: 'github',
    component: () => import('./githubPage.vue')
  }
])
