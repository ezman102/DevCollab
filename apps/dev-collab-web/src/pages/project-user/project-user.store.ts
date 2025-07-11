import { defineStore } from 'pinia'
import type { UserModel } from 'shared/models/user'
import { ref } from 'vue'

export const useProjectUserStore = defineStore('project-user', () => {
  const users = ref([] as UserModel[])
  const allUsers = ref([] as UserModel[])

  return { users, allUsers }
})
