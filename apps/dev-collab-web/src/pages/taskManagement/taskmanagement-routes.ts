import { defineRoutes } from '@/utils/route/route'

export const createTaskManagementRoutes = defineRoutes(() => [
  {
    path: 'taskmanagement',
    name: 'taskmanagement',
    component: () => import('./TaskManagementPage.vue'),
    beforeEnter: async (to, from, next) => {
      next()
    }
  }
])
