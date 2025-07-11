<template>
  <div class="bg-white rounded-lg shadow p-4 mb-4">
    <div class="flex items-center mb-2">
      <img :src="avatarUrl" :alt="comment.author" class="w-8 h-8 rounded-full mr-3" />
      <div class="w-full flex justify-between">
        <span class="font-bold text-gray-800">{{ comment.author }}</span>
        <span class="text-sm text-gray-500 ml-2">{{ comment.date }}</span>
      </div>
    </div>
    <p class="text-gray-700 comments" v-html="comment.content"></p>
  </div>
</template>

<style lang="scss" scoped>
.comments {
  :deep(span) {
    color: $primary-color;
  }
}
</style>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue'

interface Comment {
  author: string
  role: string
  date: string
  content: string
}

export default defineComponent({
  name: 'CommentItem',
  props: {
    comment: {
      type: Object as PropType<Comment>,
      required: true
    }
  },
  setup(props) {
    const avatarUrl = computed(() => {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(props.comment.author)}&background=random`
    })

    return {
      avatarUrl
    }
  }
})
</script>
