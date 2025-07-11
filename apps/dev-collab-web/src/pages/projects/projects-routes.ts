import { defineRoutes } from '@/utils/route/route'
import { hydrateProjects } from './hydrate.logic'

export const createProjectsRoutes = defineRoutes(() => [
  {
    path: '/projects',
    name: 'projects',
    component: () => import('./ProjectsPage.vue'),
    beforeEnter: async (to, from, next) => {
      await hydrateProjects()

      next()
    }
  }
])
