// src/pages/userstory/userstory-routes.ts

export const createUserStoryRoutes = () => [
  {
    path: 'userstory',
    name: 'userstory',
    component: () => import('./UserStory.vue')
  }
]