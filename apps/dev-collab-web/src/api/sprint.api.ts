import type { AxiosInstance } from 'axios'
import type { SprintCreateCommand, SprintModel, SprintUpdateCommand } from 'shared/models/sprint'

export const useSprintApi = (axios: AxiosInstance) => ({
  async getProjectSprints(projectId: number): Promise<SprintModel[]> {
    const { data } = await axios.get(`/projects/${projectId}/sprints`)

    return data
  },
  async createSprint(projectId: number, command: SprintCreateCommand): Promise<number> {
    const { data } = await axios.post(`/projects/${projectId}/sprints`, command)

    return data
  },
  async updateSprint(sprintId: number, command: SprintUpdateCommand): Promise<void> {
    const { data } = await axios.patch(`/sprints/${sprintId}`, command)

    return data
  },
  async removeSprint(sprintId: number): Promise<void> {
    const { data } = await axios.delete(`/sprints/${sprintId}`)

    return data
  }
})
