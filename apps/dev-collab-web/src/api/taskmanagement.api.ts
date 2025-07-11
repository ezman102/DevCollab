import { useAxios } from '@/vendors/axios'
import type { TaskCreateCommand, TaskModel, TaskUpdateCommand } from 'shared/models/task'

export const TaskManagementApi = () => {
  const axios = useAxios()

  return {
    async getTasks(projectId: string) {
      const { data } = await axios.get(`/task/${projectId}`)
      return data
    },

    async createTask(projectId: string, sprintId: string, taskData: TaskCreateCommand) {
      const { data } = await axios.post(`/task/${projectId}/${sprintId}`, taskData)
      return data
    },

    async updateTask(
      projectId: string,
      sprintId: string,
      taskId: string,
      taskData: TaskUpdateCommand
    ) {
      const { data } = await axios.patch(`/task/${projectId}/${sprintId}/${taskId}`, taskData)
      return data
    },

    async deleteTask(projectId: string, sprintId: string, taskId: string) {
      await axios.delete(`/task/${projectId}/${sprintId}/${taskId}`)
    }
  }
}
