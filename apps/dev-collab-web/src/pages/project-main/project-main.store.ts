import { defineStore } from 'pinia'
import type { ProjectModel } from 'shared/models/project'
import { ref } from 'vue'

export const useProjectMainStore = defineStore('project-main', () => {
  const project = ref(null as ProjectModel | null)

  return {
    project
  }
})
