import { useProjectApi } from '@/api/project.api'
import { useAxios } from '@/vendors/axios'
import { usePinia } from '@/vendors/pinia'
import { useProjectMainStore } from './project-main.store'

export const hydrateProjectMain = async (projectId: number) => {
  const store = useProjectMainStore(usePinia())
  const axios = useAxios()
  const projectApi = useProjectApi(axios)

  store.project = await projectApi.getProject(projectId)
}
