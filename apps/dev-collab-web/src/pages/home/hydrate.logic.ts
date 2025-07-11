import { useHomeApi } from '@/api/home.api'
import { usePinia } from '@/vendors/pinia'
import { useHomeStore } from './home.store'

export const hydrateHome = async () => {
  const store = useHomeStore(usePinia())
  const homeApi = useHomeApi()

  store.messages = await homeApi.getMessages()
}
