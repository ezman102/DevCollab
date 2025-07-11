import { useProjectApi } from '@/api/project.api'
import { useAxios } from '@/vendors/axios'
import { usePinia } from '@/vendors/pinia'
import { useProjectsListStore } from './projects-list.store'

export const hydrateProjects = async () => {
  const store = useProjectsListStore(usePinia())
  const axios = useAxios()
  const projectApi = useProjectApi(axios)

  store.projects = await projectApi.getProjects()
}
