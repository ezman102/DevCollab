import { defineRoutes } from '@/utils/route/route'
import { hydrateProjectSprint } from './hydrate.logic'

export const createProjectSprintRoutes = defineRoutes(() => [
  {
    path: 'sprint',
    name: 'project-sprint',
    component: () => import('./ProjectSprintPage.vue'),
    beforeEnter: async (to, from, next) => {
      const projectId = Number(to.params.projectId)

      await hydrateProjectSprint(projectId)

      next()
    }
  }
])
