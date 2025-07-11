import type { RouteRecordRaw } from 'vue-router'

export const defineRoutes = (routes: (children?: RouteRecordRaw[]) => RouteRecordRaw[]) => routes
