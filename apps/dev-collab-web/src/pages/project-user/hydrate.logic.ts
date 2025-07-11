import { useProjectUserApi } from '@/api/project-user.api'
import { useUserApi } from '@/api/user.api'
import { useAxios } from '@/vendors/axios'
import { usePinia } from '@/vendors/pinia'
import { useProjectUserStore } from './project-user.store'

export const hydrateProjectUsers = async (projectId: number) => {
  const store = useProjectUserStore(usePinia())
  const axios = useAxios()
  const projectUserApi = useProjectUserApi(axios)
  const userApi = useUserApi(axios)

  store.users = await projectUserApi.getProjectUsers(projectId)
  store.allUsers = await userApi.getUsers()
}
