import { defineRoutes } from '@/utils/route/route'

export const creategithubNewWebhookRoutes = defineRoutes(() => [
  {
    path: '/automation/github/new-webhook',
    name: 'github new webhook',
    component: () => import('./githubNewWebhookPage.vue')
  }
])
