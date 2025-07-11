import { defineRoutes } from '@/utils/route/route'

export const createNotificationRoutes = defineRoutes(() => [
  {
    path: '/notification',
    name: 'notification',
    component: () => import('./NotificationPage.vue')
  }
])
