import { useProjectApi } from '@/api/project.api'
import defaultProjectLogo from '@/assets/icons/project-logo.png'
import { usePrompt } from '@/utils/prompt/prompt'
import { useAxios } from '@/vendors/axios'
import { useBase64 } from '@vueuse/core'
import { AxiosError } from 'axios'
import type { ProjectCreateCommand } from 'shared/models/project'
import { computed, reactive, ref, type Ref } from 'vue'

export const useForm = () => {
  const axios = useAxios()
  const projectApi = useProjectApi(axios)
  const prompt = usePrompt()

  const form = reactive(<ProjectCreateCommand>{
    name: '',
    description: null,
    avatar: null
  })

  const avatarFile = ref<File>() as Ref<File>
  const avatarBase64 = useBase64(avatarFile)

  const submit = async () => {
    try {
      form.avatar = (await avatarBase64.promise.value) || defaultProjectLogo

      await projectApi.createProjects(form)

      prompt.alert('The project is created')
    } catch (err) {
      if (err instanceof AxiosError) {
        prompt.alert(err.response?.data)
      }

      throw err
    }
  }

  const avatarPreview = computed(() => avatarBase64.base64.value || defaultProjectLogo)

  return { form, submit, avatarFile, avatarPreview }
}
