import type { AxiosInstance } from 'axios'
import type {
  ProjectUserAssignCommand,
  ProjectUserWithdrawCommand
} from 'shared/models/project-user'
import type { UserModel } from 'shared/models/user'

export const useProjectUserApi = (axios: AxiosInstance) => ({
  async getProjectUsers(projectId: number): Promise<UserModel[]> {
    const { data } = await axios.get(`/project-users/${projectId}`)

    return data
  },
  async assignProjectUser(projectId: number, command: ProjectUserAssignCommand): Promise<void> {
    const { data } = await axios.post(`/project-users/${projectId}`, command)

    return data
  },
  async withdrawProjectUser(projectId: number, command: ProjectUserWithdrawCommand): Promise<void> {
    const { data } = await axios.delete(`/project-users/${projectId}`, {
      data: command
    })

    return data
  }
})
