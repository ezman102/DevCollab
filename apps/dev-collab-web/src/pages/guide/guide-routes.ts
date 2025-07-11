import { defineRoutes } from '@/utils/route/route'

export const createGuideRoutes = defineRoutes(() => [
  {
    path: '/guide',
    name: 'guide',
    component: () => import('./GuidePage.vue')
  }
])
