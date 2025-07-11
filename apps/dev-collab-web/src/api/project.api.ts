import type { AxiosInstance } from 'axios'
import type {
  ProjectCreateCommand,
  ProjectModel,
  ProjectUpdateCommand
} from 'shared/models/project'
import LoginApi from './login.api'

export const useProjectApi = (axios: AxiosInstance) => ({
  async getProject(projectId: number): Promise<ProjectModel> {
    const { data } = await axios.get(`/projects/${projectId}`)

    return data
  },
  async getProjects(): Promise<ProjectModel[]> {
    const token = LoginApi.getLocalToken()
    const { data } = await axios.get('/projects', {
      headers: {
        Authorization: token
      }
    })

    return data
  },
  async createProjects(command: ProjectCreateCommand): Promise<string> {
    const token = LoginApi.getLocalToken()
    const { data } = await axios.post(`/projects`, command, {
      headers: {
        Authorization: token
      }
    })

    return data
  },
  async updateProjects(projectId: number, command: ProjectUpdateCommand): Promise<void> {
    const { data } = await axios.patch(`/projects/${projectId}`, command)

    return data
  },
  async removeProjects(projectId: number): Promise<void> {
    const { data } = await axios.delete(`/projects/${projectId}`)

    return data
  }
})
