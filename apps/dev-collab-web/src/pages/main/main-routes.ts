import { defineRoutes } from '@/utils/route/route'

export const createMainRoutes = defineRoutes((children) => [
  {
    path: '/',
    name: 'main',
    component: () => import('./MainPage.vue'),
    children: children || [],
    redirect: { name: 'home' }
  }
])
