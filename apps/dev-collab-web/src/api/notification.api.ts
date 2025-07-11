import { useAxios } from '@/vendors/axios'

export const NotificationApi = () => {
  const axios = useAxios()

  return {
    async getNotificationAll() {
      const { data } = await axios.get('/notification/get')
      return data
    },

    async getCurrentUserUnReadNotificationCount(userId: number) {
      const { data } = await axios.get(`/notification/getUnReadCount/${userId}`)
      return data
    },

    async getCurrentUserUnReadNotificationRecords(userId: number) {
      const { data } = await axios.get(`/notification/getUnReadRecords/${userId}`)
      return data
    },

    async getNotificationReadStatus(notificationId: number) {
      const { data } = await axios.get(`/notification/updateReadStatus/${notificationId}`)
      return data
    }
  }
}
