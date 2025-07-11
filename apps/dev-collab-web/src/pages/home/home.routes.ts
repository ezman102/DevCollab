import { defineRoutes } from '@/utils/route/route'
import { hydrateHome } from './hydrate.logic'

export const createHomeRoutes = defineRoutes(() => [
  {
    path: '/home',
    name: 'home',
    component: () => import('./HomePage.vue'),
    beforeEnter: async (to, from, next) => {
      await hydrateHome()

      next()
    }
  }
])
