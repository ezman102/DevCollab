import { defineStore } from 'pinia'
import type { ProjectModel } from 'shared/models/project'
import { ref } from 'vue'

export const useProjectsListStore = defineStore('projects', () => {
  const projects = ref([] as ProjectModel[])

  return { projects }
})
