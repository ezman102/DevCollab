<template>
  <div class="mt-8">
    <h5 class="text-gray-800">Comments</h5>
    <div class="flex justify-end">
      <div class="w-fit rounded-lg bg-gray-200 p-1">
        <button
          @click="sortOrder = 'oldest'"
          :class="[
            'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
            sortOrder === 'oldest'
              ? 'bg-white text-gray-800 shadow'
              : 'text-gray-500 hover:text-gray-700'
          ]"
        >
          Oldest
        </button>
        <button
          @click="sortOrder = 'latest'"
          :class="[
            'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
            sortOrder === 'latest'
              ? 'bg-white text-gray-800 shadow'
              : 'text-gray-500 hover:text-gray-700'
          ]"
        >
          Latest
        </button>
      </div>
    </div>
    <CommentInput
      class="mt-6"
      :projectId="projectId"
      :taskId="taskId"
      :userList="userList"
      @comment-added="onCommentAdded"
    />
    <div v-if="sortedComments.length > 0">
      <CommentItem
        class="mt-6"
        v-for="(comment, index) in sortedComments"
        :key="`${comment}-${index}`"
        :comment="comment"
      />
    </div>
    <div v-else class="mt-6 text-gray-500 text-center py-4">No comments yet</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType, watch, onMounted, onUnmounted } from 'vue'
import CommentItem from './CommentItem.vue'
import CommentInput from './CommentInput.vue'
import { CommentApi } from '@/api/comment.api'

interface CommentType {
  author: string
  role: string
  date: string
  content: string
  created_date: string
}

interface UserName {
  user_id: number
  name: string
}

const props = defineProps({
  comments: {
    type: Array as PropType<CommentType[]>,
    required: true
  },
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
})

const commentApi = CommentApi()
const sortOrder = ref('latest')
const localComments = ref<CommentType[]>([])
let refreshInterval: NodeJS.Timer | null = null

watch(
  () => props.comments,
  (newComments) => {
    localComments.value = [...newComments]
  },
  { immediate: true, deep: true }
)

const sortedComments = computed(() => {
  return [...localComments.value].sort((a, b) => {
    const dateA = new Date(a.create_date)
    const dateB = new Date(b.create_date)

    if (sortOrder.value === 'latest') {
      return dateB.getTime() - dateA.getTime()
    } else {
      return dateA.getTime() - dateB.getTime()
    }
  })
})

// Update the fetchComments function to store original data
const originalData = ref<any[]>([])

const fetchComments = async () => {
  try {
    const data = await commentApi.getCommentByTaskId(props.taskId)
    if (Array.isArray(data)) {
      originalData.value = data // Store original data
      localComments.value = data.map((item) => ({
        author: item.author_name,
        role: '',
        date: item.create_date,
        content: item.comment,
        create_date: item.create_date // Keep original date for sorting
      }))
    }
  } catch (error) {
    console.error('Error fetching comments:', error)
  }
}

const onCommentAdded = () => {
  fetchComments()
}

// Setup interval when component mounts
onMounted(() => {
  fetchComments() // Initial fetch
  refreshInterval = setInterval(fetchComments, 15000) // Fetch every 15 seconds
})

// Clean up interval when component unmounts
onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})
</script>
