import { createPinia } from 'pinia'

export const _pinia = createPinia()

export const usePinia = () => _pinia
