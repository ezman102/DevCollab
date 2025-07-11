import { defineRoutes } from '@/utils/route/route'
import { hydrateProjectUsers } from './hydrate.logic'

export const createProjectUserRoutes = defineRoutes(() => [
  {
    path: 'user',
    name: 'project-user',
    component: () => import('./ProjectUserPage.vue'),
    beforeEnter: async (to, from, next) => {
      const projectId = Number(to.params.projectId)

      await hydrateProjectUsers(projectId)

      next()
    }
  }
])
