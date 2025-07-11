import { defineRoutes } from '@/utils/route/route'

export const creategithubShowWebhookRoutes = defineRoutes(() => [
  {
    path: '/automation/github/view-webhooks',
    name: 'github show webhook',
    component: () => import('./githubShowWebhook.vue')
  }
])
