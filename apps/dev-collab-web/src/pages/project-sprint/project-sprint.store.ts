import { defineStore } from 'pinia'
import type { SprintModel } from 'shared/models/sprint'
import { ref } from 'vue'

export const useProjectSprintStore = defineStore('project-sprint', () => {
  const sprints = ref([] as SprintModel[])

  return { sprints }
})
