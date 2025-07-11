import { defineRoutes } from '@/utils/route/route'

export const createReportRoutes = defineRoutes(() => [
  {
    path: '/report',
    name: 'report',
    component: () => import('./ReportPage.vue')
  }
])
