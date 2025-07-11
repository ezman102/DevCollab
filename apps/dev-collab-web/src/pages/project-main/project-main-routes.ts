import { defineRoutes } from '@/utils/route/route'
import { head } from 'lodash'
import { hydrateProjectMain } from './hydrate.logic'

export const createProjectMainRoutes = defineRoutes((children) => [
  {
    path: '/project/:projectId',
    name: 'project',
    component: () => import('./ProjectMainPage.vue'),
    children: children || [],
    redirect: {
      name: head(children)?.name ?? ''
    },
    beforeEnter: async (to, from, next) => {
      const projectId = Number(to.params.projectId)

      await hydrateProjectMain(projectId)

      next()
    }
  }
])
