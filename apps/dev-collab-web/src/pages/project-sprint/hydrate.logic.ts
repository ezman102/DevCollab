import { useSprintApi } from '@/api/sprint.api'
import { useAxios } from '@/vendors/axios'
import { usePinia } from '@/vendors/pinia'
import { useProjectSprintStore } from './project-sprint.store'

export const hydrateProjectSprint = async (projectId: number) => {
  const store = useProjectSprintStore(usePinia())
  const axios = useAxios()
  const sprintApi = useSprintApi(axios)

  store.sprints = await sprintApi.getProjectSprints(projectId)
}
