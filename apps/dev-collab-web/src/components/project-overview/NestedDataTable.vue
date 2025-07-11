<template>
  <v-container class="pa-4" fluid>
    <v-card>
      <v-card-title><h6 class="text-gray-700">Latest User Stories</h6></v-card-title>
      <v-card-text>
        <v-table v-if="stories.length > 0" fixed-header height="270" class="text-xs">
          <thead>
            <tr>
              <th class="w-2"></th>
              <th class="text-left text-grey-500 w-2/5">USER STORIES</th>
              <th class="text-left text-grey-500 w-1/5">PRIORITY</th>
              <th class="text-left text-grey-500 w-1/5">DUE DATE</th>
              <th class="text-left text-grey-500 w-1/12">UPVOTE COUNT</th>
              <th class="text-left text-grey-500 w-1/12">DOWNVOTE COUNT</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(story, index) in storiesWithExpanded" :key="index">
              <tr :class="{ 'bg-grey-50': story.expanded }">
                <td>
                  <v-btn
                    icon="mdi-chevron-right"
                    size="x-small"
                    variant="plain"
                    :class="{ 'rotate-90': story.expanded }"
                    @click="toggleExpand(index)"
                  />
                </td>
                <td class="font-medium text-grey-900">{{ story.title }}</td>
                <td>
                  <v-chip
                    :color="getPriorityColor(story.priority)"
                    size="x-small"
                    class="text-xs"
                    :text="story.priority"
                  />
                </td>
                <td class="text-grey-500">{{ story.dueDate }}</td>
                <td class="text-grey-500">{{ story.upvoteCount }}</td>
                <td class="text-grey-500">{{ story.downvoteCount }}</td>
              </tr>
              <tr v-if="story.expanded">
                <td colspan="6">
                  <v-expand-transition>
                    <div class="pa-4 bg-grey-100">
                      <v-row>
                        <v-col cols="4">
                          <div class="text-xs font-medium text-grey-500 mb-1">As a</div>
                          <div class="text-sm text-grey-900">{{ story.asA }}</div>
                        </v-col>
                        <v-col cols="4">
                          <div class="text-xs font-medium text-grey-500 mb-1">I want to</div>
                          <div class="text-sm text-grey-900">{{ story.iWantTo }}</div>
                        </v-col>
                        <v-col cols="4">
                          <div class="text-xs font-medium text-grey-500 mb-1">So that</div>
                          <div class="text-sm text-grey-900">{{ story.soThat }}</div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-expand-transition>
                </td>
              </tr>
            </template>
          </tbody>
        </v-table>
        <div v-else class="d-flex justify-center empty-state">
          <span class="p-4 text-center text-gray-500">no user story available</span>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface StoryTask {
  title: string
  priority: string
  dueDate: string
  upvoteCount: number
  downvoteCount: number
  asA: string
  iWantTo: string
  soThat: string
}

const props = defineProps<{
  stories: StoryTask[]
}>()

const expandedStates = ref<boolean[]>([])

const storiesWithExpanded = computed(() => {
  return props.stories.map((story, index) => ({
    ...story,
    expanded: expandedStates.value[index] || false
  }))
})

const toggleExpand = (index: number) => {
  expandedStates.value[index] = !expandedStates.value[index]
}

const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'High':
      return 'error'
    case 'Medium':
      return 'warning'
    case 'Low':
      return 'success'
    default:
      return 'grey'
  }
}
</script>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
  transition: transform 0.2s ease;
}

.empty-state {
  height: 270px;
  @apply text-sm;
}

:deep(.v-table) {
  @apply text-xs;
}

:deep(.v-table .v-table__wrapper) {
  @apply overflow-y-auto;
}

:deep(.v-chip) {
  @apply text-xs font-semibold;
}
</style>
