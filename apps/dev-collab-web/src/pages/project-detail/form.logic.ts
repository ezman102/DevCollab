import { useProjectApi } from '@/api/project.api'
import { startPipeline } from '@/utils/pipeline/pipeline'
import { usePrompt } from '@/utils/prompt/prompt'
import { useAxios } from '@/vendors/axios'
import { useBase64 } from '@vueuse/core'
import type { ProjectUpdateCommand } from 'shared/models/project'
import { computed, reactive, ref, type Ref } from 'vue'
import { useProjectMainStore } from '../project-main/project-main.store'

export const useForm = () => {
  const axios = useAxios()
  const projectApi = useProjectApi(axios)
  const prompt = usePrompt()
  const mainStore = useProjectMainStore()
  const project = mainStore.project

  if (!project) {
    throw new Error('missing project')
  }

  const form = reactive(<ProjectUpdateCommand>{
    name: project.name,
    description: project.description,
    avatar: project.avatar
  })

  const avatarFile = ref<File>() as Ref<File>
  const avatarBase64 = useBase64(avatarFile)

  const submit = startPipeline(async () => {
    form.avatar = (await avatarBase64.promise.value) || project.avatar

    await projectApi.updateProjects(project.projectId, form)

    prompt.alert('The project is updated')
  })

  const avatarPreview = computed(() => avatarBase64.base64.value || project.avatar)

  return { form, submit, avatarFile, avatarPreview }
}
