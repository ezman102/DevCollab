import { useAxios } from '@/vendors/axios'

export const CommentApi = () => {
  const axios = useAxios()

  return {
    async createComment(comment: Object) {
      const { data } = await axios.post(`/comment/create`, comment)
      return data
    },

    async getCommentAll() {
      const { data } = await axios.get('/comment/get')
      return data
    },

    async getCommentByProjectId(projectId: number) {
      const { data } = await axios.get(`/comment/project/${projectId}`)
      return data
    },

    async getCommentByTaskId(taskId: number) {
      const { data } = await axios.get(`/comment/task/${taskId}`)
      return data
    },

    async getAllUsers() {
      const { data } = await axios.get(`/comment/get-users`)
      return data
    }
  }
}
