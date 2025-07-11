import { defineRoutes } from '@/utils/route/route'

export const creategithubManageWebhookRoutes = defineRoutes(() => [
  {
    path: '/automation/github/manage-webhooks',
    name: 'github manage webhooks',
    component: () => import('./githubManageWebhook-routes.vue')
  }
])
