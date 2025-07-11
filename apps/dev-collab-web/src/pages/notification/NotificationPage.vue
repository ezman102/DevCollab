<template>
  <div>
    <div>
      <h1>Notification</h1>
    </div>
    <div class="mb-4 overflow-x-auto rounded-lg border">
      <table class="w-full divide-y divide-gray-200 min-w-[800px]">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-2 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th class="px-2 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">
              Project ID
            </th>
            <th class="px-2 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">
              Task ID
            </th>
            <th class="px-2 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th class="px-2 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">
              Comment
            </th>
            <th class="px-2 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">
              Mentioned User
            </th>
            <th class="px-2 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">
              Create Date
            </th>
            <th class="px-2 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <template v-if="notificationsList.length > 0">
            <tr
              v-for="(notification, index) in notificationsList"
              :key="notification.notification_id"
              :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'"
            >
              <td class="py-2 px-4 border-b text-center">{{ index + 1 }}</td>
              <td class="py-2 px-4 border-b text-center">{{ notification.project_id }}</td>
              <td class="py-2 px-4 border-b text-center">{{ notification.task_id }}</td>
              <td class="py-2 px-4 border-b text-center">{{ notification.author_name }}</td>
              <td
                class="py-2 px-4 border-b text-center"
                v-html="formatComment(notification.comment)"
              ></td>
              <td class="py-2 px-4 border-b text-center">{{ notification.mentioned_user_name }}</td>
              <td class="py-2 px-4 border-b text-center">
                {{ formatDate(notification.create_date) }}
              </td>
              <td class="py-2 px-4 border-b text-center">
                <v-btn
                  size="small"
                  color="primary"
                  :disabled="Boolean(notification.is_read)"
                  @click="markAsRead(notification.notification_id)"
                >
                  Read
                </v-btn>
              </td>
            </tr>
          </template>

          <template v-else>
            <td colspan="8" class="py-4 px-4 text-center text-gray-500">
              No unread notifications.
            </td>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { NotificationApi } from '@/api/notification.api'
import LoginApi from '@/api/login.api'

interface Notification {
  notification_id: number
  project_id: number
  task_id: number
  author_name: string
  author_user_id: number
  comment: string
  comment_id: number
  create_date: string
  is_read: boolean
  mentioned_user_id: number
  mentioned_user_name: string
}

export default defineComponent({
  setup() {
    const notificationApi = NotificationApi()
    const notificationsList = ref<Notification[]>([])

    const fetchUnReadNotification = async () => {
      try {
        const info = await LoginApi.checkToken(LoginApi.getLocalToken())
        const data = await notificationApi.getCurrentUserUnReadNotificationRecords(info.user.userId) // current user id
        if (data) {
          notificationsList.value = data
        }
      } catch (err) {
        console.error('Error fetching:', err)
      }
    }

    const formatDate = (date: string | undefined): string => {
      if (!date) return ''
      const d = new Date(date)

      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      const hours = String(d.getHours()).padStart(2, '0')
      const minutes = String(d.getMinutes()).padStart(2, '0')
      const seconds = String(d.getSeconds()).padStart(2, '0')

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }

    const markAsRead = async (notificationId: number) => {
      try {
        await notificationApi.getNotificationReadStatus(notificationId)
        await fetchUnReadNotification()
        await updateUnReadNotification()
      } catch (err) {
        console.error('Error marking as read:', err)
      }
    }

    const updateUnReadNotification = async () => {
      try {
        const info = await LoginApi.checkToken(LoginApi.getLocalToken())
        const data = await notificationApi.getCurrentUserUnReadNotificationCount(info.user.userId) // current user id
        const badge = document.querySelector('.v-badge__badge.v-theme--light') as HTMLElement
        if (badge) {
          badge.textContent = data
        }
      } catch (err) {
        console.error('Error fetching:', err)
      }
    }

    const formatComment = (comment: string): string => {
      // Create a temporary div to parse HTML
      const div = document.createElement('div')
      div.innerHTML = comment

      // Replace each span with its text content
      const spans = div.getElementsByTagName('span')
      for (let i = spans.length - 1; i >= 0; i--) {
        const span = spans[i]
        const textContent = span.textContent || ''
        span.replaceWith(textContent)
      }

      return div.innerHTML
    }

    onMounted(() => {
      fetchUnReadNotification()
    })

    return {
      notificationsList,
      formatDate,
      markAsRead,
      formatComment
    }
  }
})
</script>
