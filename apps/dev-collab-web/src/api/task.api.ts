import { useAxios } from '@/vendors/axios'

export const TaskApi = () => {
  const axios = useAxios()

  return {
    async getTaskbyProId(projectId: number) {
      const { data } = await axios.get(`/task/${projectId}`)
      return data
    },

    async getOverStateCount(projectId: number) {
      const { data } = await axios.get(`/task/overStateCount/${projectId}`)
      return data
    },

    async getCumulativeFlowDiagram(projectId: number) {
      const { data } = await axios.get(`/task/cumulativeFlowDiagram/${projectId}`)
      return data
    },

    async getOverviewUserStory(projectId: number) {
      const { data } = await axios.get(`/task/overviewUserStory/${projectId}`)
      return data
    }
  }
}
