<template>
  <div class="mx-auto">
    <v-card title="Project Overview"></v-card>
    <div class="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div class="lg:col-span-7">
        <div class="lg:flex lg:justify-between lg:gap-4 overflow-auto">
          <div
            v-for="(card, index) in progressCards"
            :key="index"
            class="bg-white rounded-lg shadow-md min-h-[290px] min-w-[280px] mb-4 lg:mb-0"
          >
            <ProgressChart
              :barColor="barColorList[index]"
              :title="card.title"
              :progress="card.progress[selectedPeriodIndexes[index]]"
              :options="card.options"
              :selectedPeriodIndex="selectedPeriodIndexes[index]"
              @update:selectedPeriodIndex="(newIndex) => updateSelectedPeriodIndex(index, newIndex)"
            />
          </div>
        </div>
        <div
          class="bg-white rounded-lg shadow-md h-[400px] md:h-[480px] lg:h-[560px] overflow-auto"
        >
          <CumulativeFlowDiagram class="min-w-[600px]" :chartData="chartData" />
        </div>
      </div>
      <div class="lg:col-span-5">
        <div class="bg-white rounded-lg shadow-md">
          <TaskTable :tasks="tasks" />
        </div>
        <div class="mt-4 bg-white rounded-lg shadow-md">
          <NestedDataTable :stories="stories" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import TaskTable from '@/components/project-overview/TaskTable.vue'
import NestedDataTable from '@/components/project-overview/NestedDataTable.vue'
import CumulativeFlowDiagram from '@/components/project-overview/CumulativeFlowDiagram.vue'
import ProgressChart from '@/components/project-overview/ProgressChart.vue'
import { useProjectMainStore } from '../project-main/project-main.store'
import { TaskApi } from '@/api/task.api'

interface Task {
  name: string
  priority: string
  state: string
  dueDate: string
}

interface ProgressCard {
  title: string
  progress: number[]
  options: string[]
}

interface FlowDiagram {
  createdDate: string
  todo: number
  inProgress: number
  done: number
}

interface StoryTask {
  title: string
  priority: string
  dueDate: string
  upvoteCount: number
  downvoteCount: number
  expanded: Boolean
  asA: string
  iWantTo: string
  soThat: string
}

const mainStore = useProjectMainStore()
const project = mainStore.project
const taskApi = TaskApi()

if (!project) {
  throw new Error('project is missing')
}

const tasks = ref<Task[]>([])
const stories = ref<StoryTask[]>([])
const chartData = ref<FlowDiagram[]>([])

// Initialize with default structure
const progressCards = ref<ProgressCard[]>([
  { title: 'TODO', progress: [0, 0, 0], options: ['Daily', 'Weekly', 'Monthly'] },
  { title: 'IN PROGRESS', progress: [0, 0, 0], options: ['Daily', 'Weekly', 'Monthly'] },
  { title: 'DONE', progress: [0, 0, 0], options: ['Daily', 'Weekly', 'Monthly'] }
])

const selectedPeriodIndexes = ref([2, 2, 2])
const barColorList = ['red', 'yellow', 'teal'] as const

const updateSelectedPeriodIndex = (cardIndex: number, newIndex: number): void => {
  selectedPeriodIndexes.value[cardIndex] = newIndex
}

const fetchTasks = async () => {
  try {
    const data = await taskApi.getTaskbyProId(project.projectId)
    tasks.value = data.map((task: any) => ({
      name: task.name,
      priority: task.priority,
      state: task.status,
      dueDate: new Date(task.duedate).toLocaleDateString()
    }))
  } catch (err) {
    console.error('Error fetching tasks:', err)
  }
}

const getOverStateCount = async () => {
  try {
    const data = await taskApi.getOverStateCount(project.projectId)
    if (data && Array.isArray(data)) {
      progressCards.value = data.map((card) => ({
        title: card.title,
        progress: card.progress || [0, 0, 0],
        options: card.options || ['Daily', 'Weekly', 'Monthly']
      }))
    }
  } catch (err) {
    console.error('Error fetching state count:', err)
  }
}

const getCumulativeFlowDiagram = async () => {
  try {
    const data = await taskApi.getCumulativeFlowDiagram(project.projectId)
    chartData.value = data
  } catch (err) {
    console.error('Error fetching getCumulativeFlowDiagram:', err)
  }
}

const getOverviewUserStory = async () => {
  try {
    const data = await taskApi.getOverviewUserStory(project.projectId)
    stories.value = data
  } catch (err) {
    console.error('Error fetching getOverviewUserStory:', err)
  }
}

watch(progressCards, (newCards) => {
  selectedPeriodIndexes.value = new Array(newCards.length).fill(0)
})

// Update the watch to maintain index 2
watch(progressCards, (newCards) => {
  selectedPeriodIndexes.value = new Array(newCards.length).fill(2)
})

onMounted(async () => {
  await Promise.all([
    fetchTasks(),
    getOverStateCount(),
    getCumulativeFlowDiagram(),
    getOverviewUserStory()
  ])
})
</script>
