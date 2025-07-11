import { defineRoutes } from '@/utils/route/route'

export const createProjectsCreateRoutes = defineRoutes(() => [
  {
    path: '/projects-create',
    name: 'projects-create',
    component: () => import('./ProjectsCreatePage.vue')
  }
])
