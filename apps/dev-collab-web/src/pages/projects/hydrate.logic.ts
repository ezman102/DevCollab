import { useProjectApi } from '@/api/project.api'
import { useAxios } from '@/vendors/axios'
import { usePinia } from '@/vendors/pinia'
import { useProjectsStore } from './projects.store'

export const hydrateProjects = async () => {
  const store = useProjectsStore(usePinia())
  const axios = useAxios()
  const projectApi = useProjectApi(axios)

  store.projects = await projectApi.getProjects()
}
