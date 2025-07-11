<template>
  <div class="mt-4">
    <div
      v-if="!isExpanded"
      @click="isExpanded = true"
      class="border rounded-full px-4 py-2 text-gray-500 cursor-pointer hover:bg-gray-100"
    >
      Add a comment...
    </div>
    <div v-else class="border border-primary rounded-lg p-2">
      <div class="relative">
        <textarea
          ref="commentTextarea"
          v-model="commentText"
          @input="handleInput"
          @keydown="handleKeydown"
          rows="3"
          class="w-full p-2 rounded"
          placeholder="Use @ to mention"
        ></textarea>
        <div
          v-if="showMentionDropdown"
          class="absolute left-0 mt-1 w-64 bg-white border border-primary rounded-lg shadow-lg z-10"
        >
          <div
            v-for="user in filteredUsers"
            :key="user.user_id"
            @click="selectMention(user)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {{ user.name }}
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-2">
        <button @click="cancelComment" class="px-4 py-2 text-gray-600 hover:text-gray-800">
          Cancel
        </button>
        <button
          @click="submitComment"
          :disabled="!commentText.trim()"
          :class="[
            'px-4 py-2 rounded-md ml-2',
            commentText.trim()
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          ]"
        >
          Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, type PropType } from 'vue'
import { CommentApi } from '@/api/comment.api'
import { NotificationApi } from '@/api/notification.api'
import { dateFormatter } from './dateFormatter'
import LoginApi from '@/api/login.api'

interface Mention {
  name: string
  userId: number
  startIndex: number
  endIndex: number
}

interface UserName {
  user_id: number
  name: string
}

export default defineComponent({
  name: 'CommentInput',
  props: {
    projectId: {
      type: Number,
      required: false
    },
    taskId: {
      type: Number,
      required: true
    },
    userList: {
      type: Array as PropType<UserName[]>,
      required: false
    }
  },
  emits: ['add-comment', 'comment-added'],
  setup(props, { emit }) {
    const commentApi = CommentApi()
    const notificationApi = NotificationApi()
    const isExpanded = ref(false)
    const commentText = ref('')
    const commentTextarea = ref<HTMLTextAreaElement | null>(null)
    const showMentionDropdown = ref(false)
    const mentionSearch = ref('')
    const mentions = ref<Mention[]>([])
    const filteredUsers = ref<UserName[]>([])

    const submitComment = async () => {
      if (commentText.value.trim()) {
        const info = await LoginApi.checkToken(LoginApi.getLocalToken())
        const htmlContent = convertToHtml(commentText.value, mentions.value)
        emit('add-comment', htmlContent)
        commentText.value = ''
        mentions.value = []

        try {
          const newComment = {
            project_id: props.projectId,
            task_id: props.taskId,
            comment: htmlContent,
            author_user_id: info.user.userId,
            create_date: dateFormatter.formatDateForAPI(new Date())
          }

          await commentApi.createComment(newComment)
          updateUnReadNotification()
          emit('comment-added') // Emit after successful comment creation
        } catch (err) {
          console.error('Error creating comment:', err)
        } finally {
          isExpanded.value = false
        }
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

    const cancelComment = () => {
      commentText.value = ''
      mentions.value = []
      isExpanded.value = false
    }

    const handleInput = () => {
      const textarea = commentTextarea.value
      if (!textarea) return

      const cursorPosition = textarea.selectionStart
      const textBeforeCursor = commentText.value.slice(0, cursorPosition)
      const lastAtSymbol = textBeforeCursor.lastIndexOf('@')

      if (lastAtSymbol !== -1 && cursorPosition - lastAtSymbol <= 15) {
        mentionSearch.value = textBeforeCursor.slice(lastAtSymbol + 1)
        filteredUsers.value = (props.userList || []).filter((user) =>
          user.name.toLowerCase().startsWith(mentionSearch.value.toLowerCase())
        )
        showMentionDropdown.value = filteredUsers.value.length > 0
      } else {
        showMentionDropdown.value = false
      }
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        showMentionDropdown.value = false
      }
    }

    const selectMention = (user: UserName) => {
      const textarea = commentTextarea.value
      if (!textarea) return

      const cursorPosition = textarea.selectionStart
      const textBeforeMention = commentText.value.slice(0, cursorPosition)
      const lastAtSymbol = textBeforeMention.lastIndexOf('@')
      const textAfterMention = commentText.value.slice(cursorPosition)

      const mentionText = `@${user.name}`
      commentText.value =
        textBeforeMention.slice(0, lastAtSymbol) + mentionText + ' ' + textAfterMention

      mentions.value.push({
        name: user.name,
        userId: user.user_id,
        startIndex: lastAtSymbol,
        endIndex: lastAtSymbol + mentionText.length
      })

      showMentionDropdown.value = false

      setTimeout(() => {
        const newCursorPosition = lastAtSymbol + mentionText.length + 1
        textarea.setSelectionRange(newCursorPosition, newCursorPosition)
        textarea.focus()
      }, 0)
    }

    const convertToHtml = (text: string, mentions: Mention[]): string => {
      let html = text
      mentions
        .sort((a, b) => b.startIndex - a.startIndex)
        .forEach((mention) => {
          html =
            html.slice(0, mention.startIndex) +
            `<span data-user-id="${mention.userId}">@${mention.name}</span>` +
            html.slice(mention.endIndex)
        })
      return html
    }

    onMounted(() => {
      document.addEventListener('click', (e) => {
        if (commentTextarea.value && !commentTextarea.value.contains(e.target as Node)) {
          showMentionDropdown.value = false
        }
      })
    })

    return {
      isExpanded,
      commentText,
      commentTextarea,
      showMentionDropdown,
      filteredUsers,
      submitComment,
      cancelComment,
      handleInput,
      handleKeydown,
      selectMention,
      updateUnReadNotification
    }
  }
})
</script>
