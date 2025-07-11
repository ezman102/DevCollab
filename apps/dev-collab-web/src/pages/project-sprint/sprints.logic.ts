import { useSprintApi } from '@/api/sprint.api'
import { startPipeline } from '@/utils/pipeline/pipeline'
import { usePrompt } from '@/utils/prompt/prompt'
import { useAxios } from '@/vendors/axios'
import { last } from 'lodash'
import moment from 'moment'
import type { SprintModel } from 'shared/models/sprint'
import { computed, reactive, ref } from 'vue'
import { useProjectMainStore } from '../project-main/project-main.store'
import { useProjectSprintStore } from './project-sprint.store'

export type SprintUpdateMode = 'create' | 'edit'

export const useSprints = () => {
  const axios = useAxios()
  const sprintApi = useSprintApi(axios)
  const prompt = usePrompt()
  const mainStore = useProjectMainStore()
  const store = useProjectSprintStore()

  const form = reactive({
    sprintId: null as number | null,
    duration: [] as string[]
  })
  const mode = ref(null as SprintUpdateMode | null)
  const project = mainStore.project

  if (!project) {
    throw new Error('project is missing')
  }

  const resetForm = () => {
    form.sprintId = null
    form.duration = []
    mode.value = null
  }

  const prepareInput = (modeUpdate: SprintUpdateMode | null, sprint: SprintModel | null) => {
    const endDate = last(store.sprints)?.endDate
    const newStartDate = endDate ? moment(endDate).add(1, 'day').toDate() : new Date()
    const newStartDateIso = newStartDate.toISOString()

    form.sprintId = sprint?.sprintId || null
    form.duration = [sprint?.startDate || newStartDateIso, sprint?.endDate || newStartDateIso]

    mode.value = modeUpdate
  }

  const refreshSprints = async () => {
    store.sprints = await sprintApi.getProjectSprints(project.projectId)
  }

  const addSprint = startPipeline(async () => {
    await sprintApi.createSprint(project.projectId, {
      startDate: moment(form.duration[0]).startOf('day').toISOString(),
      endDate: moment(form.duration[1]).endOf('day').toISOString()
    })

    await refreshSprints()

    prompt.alert('Sprint is created')
  })

  const removeSprint = startPipeline(async (sprint: SprintModel) => {
    const confirm = await prompt.confirm('Confirm?')

    if (!confirm) {
      return
    }

    await sprintApi.removeSprint(sprint.sprintId)

    await refreshSprints()

    if (sprint.sprintId === form.sprintId) {
      resetForm()
    }

    prompt.alert('Sprint is removed')
  })

  const updateSprint = startPipeline(async () => {
    if (!form.sprintId) {
      throw new Error('Sprint id is missing')
    }

    await sprintApi.updateSprint(form.sprintId, {
      startDate: moment(form.duration[0]).startOf('day').toISOString(),
      endDate: moment(form.duration[1]).endOf('day').toISOString()
    })

    await refreshSprints()

    prompt.alert('Sprint is updated')
  })

  return {
    form,
    mode: computed(() => mode.value),
    prepareInput,
    addSprint,
    updateSprint,
    removeSprint
  }
}
