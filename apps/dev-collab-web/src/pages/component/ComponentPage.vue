<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-6">Component Demo</h1>
    <section class="w-full flex justify-start">
      <div v-if="loading" class="w-full flex justify-center">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
      <CommentSection v-else class="max-w-2xl" :comments="dummyCommentList" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CommentSection from '@/components/Comment/CommentSection.vue'
import { CommentApi } from '@/api/comment.api'
import { format } from 'date-fns'

interface Comment {
  comment_id: number
  project_id: number
  task_id: number
  comment: string
  author_user_id: number
  create_date: string
}

interface FormattedComment {
  id: number
  author: string
  role: string
  date: string
  content: string
}

const dummyCommentList = ref<FormattedComment[]>([])
const loading = ref(false)
const commentApi = CommentApi()

const fetchComments = async () => {
  try {
    loading.value = true
    const data = await commentApi.getCommentAll()

    if (Array.isArray(data)) {
      const formattedComments = data.map((item: Comment) => ({
        id: Number(item.comment_id),
        author: `${item.author_user_id}`,
        role: 'User',
        date: format(new Date(item.create_date), 'dd MMM HH:mm'),
        content: item.comment
      }))

      dummyCommentList.value = [...formattedComments]
    }
  } catch (err) {
    console.error('Error fetching comments:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchComments()
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';
</style>
