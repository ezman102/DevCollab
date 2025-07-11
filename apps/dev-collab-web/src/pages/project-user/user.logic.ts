import { useProjectUserApi } from '@/api/project-user.api'
import { startPipeline } from '@/utils/pipeline/pipeline'
import { usePrompt } from '@/utils/prompt/prompt'
import { useAxios } from '@/vendors/axios'
import { some } from 'lodash'
import type { UserModel } from 'shared/models/user'
import { ref } from 'vue'
import { useProjectMainStore } from '../project-main/project-main.store'
import { useProjectUserStore } from './project-user.store'

export type UserState = 'INIT' | 'ADD_USER'

export const useUsers = () => {
  const axios = useAxios()
  const projectUserApi = useProjectUserApi(axios)
  const prompt = usePrompt()
  const mainStore = useProjectMainStore()
  const store = useProjectUserStore()

  const state = ref('INIT' as UserState)
  const project = mainStore.project

  if (!project) {
    throw new Error('project is missing')
  }

  const refreshUsers = async () => {
    store.users = await projectUserApi.getProjectUsers(project.projectId)
  }

  const addUser = async (userId: number) => {
    await projectUserApi.assignProjectUser(project.projectId, {
      userId
    })

    await refreshUsers()

    prompt.alert('User is added')
  }

  const removeUser = startPipeline(async (userId: number) => {
    const confirm = await prompt.confirm('Confirm?')

    if (!confirm) {
      return
    }

    await projectUserApi.withdrawProjectUser(project.projectId, {
      userId
    })

    await refreshUsers()

    prompt.alert('User is removed')
  })

  const prepareAddUser = async () => {
    state.value = 'ADD_USER'
  }

  const existUser = (user: UserModel) => {
    return some(store.users, (u) => u.userId === user.userId)
  }

  return {
    state,
    addUser,
    removeUser,
    prepareAddUser,
    existUser
  }
}
