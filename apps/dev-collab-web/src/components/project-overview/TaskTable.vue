<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h6 class="text-gray-700">Latest Task</h6>
      <div class="relative inline-block text-left">
        <button
          @click="toggleDropdown"
          type="button"
          class="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {{ sortByText }}
          <svg
            class="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          v-if="isDropdownOpen"
          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
        >
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              @click.prevent="setSortBy('priority')"
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              >By Priority</a
            >
            <a
              @click.prevent="setSortBy('dueDate')"
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              >By Due Date</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-auto max-h-[380px] min-h-[380px] rounded-lg border">
      <table v-if="sortedTasks.length > 0" class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50 sticky top-0">
          <tr>
            <th
              scope="col"
              class="w-[35%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Task
            </th>
            <th
              scope="col"
              class="w-[20%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Priority
            </th>
            <th
              scope="col"
              class="w-[20%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              State
            </th>
            <th
              scope="col"
              class="w-[25%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Due Date
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="task in sortedTasks" :key="task.name">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ task.name }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="priorityClass(task.priority)">
                {{ task.priority }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <span :class="stateClass(task.state)">
                {{ task.state }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ task.dueDate }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="p-4 text-center text-gray-500">No tasks available</div>
    </div>
  </div>
</template>

<script lang="ts">
import { type PropType, computed, ref } from 'vue'

type SortType = 'priority' | 'dueDate'

interface Task {
  name: string
  priority: string
  state: string
  dueDate: string
}

export default {
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      required: true,
      default: () => []
    }
  },
  setup(props) {
    const sortBy = ref<SortType>('dueDate') // Default sort by due date
    const isDropdownOpen = ref(false)

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value
    }

    const setSortBy = (value: SortType) => {
      sortBy.value = value
      isDropdownOpen.value = false
    }

    const sortByText = computed(() => {
      const texts: Record<SortType, string> = {
        priority: 'By Priority',
        dueDate: 'By Due Date'
      }
      return texts[sortBy.value]
    })

    const sortedTasks = computed(() => {
      if (!props.tasks?.length) return []

      return [...props.tasks].sort((a, b) => {
        if (sortBy.value === 'priority') {
          const priorityOrder: Record<string, number> = {
            High: 1,
            Medium: 2,
            Low: 3
          }
          return (priorityOrder[a.priority] || 999) - (priorityOrder[b.priority] || 999)
        } else if (sortBy.value === 'dueDate') {
          // Sort by descending order (newest first)
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
        }
        return 0
      })
    })

    const priorityClass = (priority: string) => {
      const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium'
      const priorityClasses: Record<string, string> = {
        High: `${baseClasses} bg-red-100 text-red-800`,
        Medium: `${baseClasses} bg-yellow-100 text-yellow-800`,
        Low: `${baseClasses} bg-green-100 text-green-800`
      }
      return priorityClasses[priority] || baseClasses
    }

    const stateClass = (state: string) => {
      const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium'
      const stateClasses: Record<string, string> = {
        'To Do': `${baseClasses} bg-red-100 text-red-800`,
        'In Progress': `${baseClasses} bg-yellow-100 text-yellow-800`,
        Done: `${baseClasses} bg-green-100 text-green-800`
      }
      return stateClasses[state] || baseClasses
    }

    return {
      sortBy,
      isDropdownOpen,
      sortByText,
      sortedTasks,
      priorityClass,
      stateClass,
      toggleDropdown,
      setSortBy
    }
  }
}
</script>
