import { defineRoutes } from '@/utils/route/route'
import { hydrateProjects } from './hydrate.logic'

export const createProjectsListRoutes = defineRoutes(() => [
  {
    path: '/projects-list',
    name: 'projects-list',
    component: () => import('./ProjectsListPage.vue'),
    beforeEnter: async (to, from, next) => {
      await hydrateProjects()

      next()
    }
  }
])
