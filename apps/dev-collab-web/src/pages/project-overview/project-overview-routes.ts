import { defineRoutes } from '@/utils/route/route'

export const createProjectOverviewRoutes = defineRoutes(() => [
  {
    path: 'project-overview',
    name: 'project-overview',
    component: () => import('./ProjectOverview.vue'),
    beforeEnter: async (to, from, next) => {
      next()
    }
  }
])
