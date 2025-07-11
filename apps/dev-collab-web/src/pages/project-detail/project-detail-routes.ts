import { defineRoutes } from '@/utils/route/route'

export const createProjectDetailRoutes = defineRoutes(() => [
  {
    path: 'detail',
    name: 'project-detail',
    component: () => import('./ProjectDetailPage.vue'),
    beforeEnter: async (to, from, next) => {
      next()
    }
  }
])
